/*
    Call this at the top-level of the app to load the items and create a context for them that can be passed down to lower items
*/

import DataContext from "../contexts/data_context.jsx";
import { useContext, useEffect, useState, useRef } from "react";
import items from "../spoof_data/items.jsx";
import characters from "../spoof_data/characters.jsx";
import colors from "../utility/colors.jsx";
import useTimers from "../hooks/use_timers.jsx";
import deep_object_copy from "../utility/deep_object_copy.jsx";
import useFirebaseProject from "../hooks/use_firebase_project.jsx";
import default_character_data from "../official_data/default_character_data.jsx";
import configs from "../utility/configs.jsx";

import { getFirestore, doc, getDoc, collection, query, where, getDocs, setDoc, deleteDoc, onSnapshot } from "firebase/firestore";

export default function useFirestoreData(is_spoof = true) {

    let firestore_db = undefined;

    if (!is_spoof) {
        firestore_db = getFirestore(useFirebaseProject());
    }

    const [data_context, set_data_context] = useState(useContext(DataContext));

    const timers = useTimers();

    function set_is_loading(is_loading) {
        set_data_context((old_context) => ({
            ...old_context,
            is_loading: is_loading
        }));
    }

    function set_local_collection(collection_name, collection_dict, override = false) {
        set_data_context((old_context) => {
            const new_context = {
                ...old_context,
                [collection_name]: override ? collection_dict : {...old_context[collection_name], ...collection_dict}
            };

            return new_context;
        });
    }

    async function save_document_data(collection_name, document_key, document_data) {

        let is_doc_already_exists = false;

        if (data_context[collection_name][document_key] != undefined) {
            is_doc_already_exists = true;
        }

        if (is_spoof) {
            update_local_document_data(collection_name, document_key, document_data);
        }
        else {
            if (!is_doc_already_exists) {
                flash_loading();
            }

            const doc_ref = doc(firestore_db, collection_name, document_key);
            await setDoc(doc_ref, document_data, {merge: true});
            
            if (!is_doc_already_exists) {
                setup_listener(collection_name, document_key);
            }
        }


        // Handle the flash resetting if applicable
        if (collection_name == configs.character_collection_name && ![undefined, "none"].includes(document_data.flash_color)) {
            timers.start_new_timer(document_key, 1, () => save_document_data(collection_name, document_key, {flash_color: "none"}));
        }
    }

    function update_local_document_data(collection_name, document_key, document_data) {
        set_data_context((old_context) => {
            const old_document = old_context[collection_name][document_key];
            return {...old_context, [collection_name]: {...old_context[collection_name], [document_key]: {...old_document, ...document_data}}};
        })

        // if (document_data.unsubscribe_function != undefined) {
        //     console.log(document_data);
        // }

        // set_local_collection(collection_name, {
        //     [document_key]: {...data_context[collection_name][document_key], ...document_data}
        // });
    }

    function delete_document(collection_name, document_key) {
        if (is_spoof) {
            delete_local_document(collection_name, document_key);
        }
        else {
            // If this is a deletion
            deleteDoc(doc(firestore_db, collection_name, document_key)).then(() => {
                // Handle local changes to account for character deletion
                data_context[collection_name][document_key].unsubscribe_function();
                delete_local_document(collection_name, document_key);
            });
        }
    }

    function delete_local_document(collection_name, document_key) {
        flash_loading();
        
        set_data_context((old_context) => {
            const copy_local_collection = {...old_context[collection_name]};
            delete copy_local_collection[document_key];

            const new_context = {
                ...old_context,
                [collection_name]: {...copy_local_collection}
            }

            return new_context;
        });
    }

    function increase_character_hp(character_id) {
        const new_hp = data_context.characters[character_id].current_hp + 1;
        const new_data = {
            current_hp: new_hp,
            flash_color: colors.banner_green,
        }
        save_document_data(configs.character_collection_name, character_id, new_data);
    }

    function decrease_character_hp(character_id) {
        const new_hp = data_context.characters[character_id].current_hp - 1;
        const new_data = {
            current_hp: new_hp,
            flash_color: colors.banner_red,
        }
        save_document_data(configs.character_collection_name, character_id, new_data);
    }

    function increase_character_ap(character_id) {
        const new_ap = data_context.characters[character_id].current_ap + 1;
        const new_data = {
            current_ap: new_ap,
            flash_color: colors.banner_dark_purple,
        }
        save_document_data(configs.character_collection_name, character_id, new_data);
    }

    function decrease_character_ap(character_id) {
        const new_ap = data_context.characters[character_id].current_ap - 1;
        const new_data = {
            current_ap: new_ap,
            flash_color: colors.banner_light_purple,
        }
        save_document_data(configs.character_collection_name, character_id, new_data);
    }

    function get_sorted_item_list() {
        const sorted_items = Object.entries(data_context.items).map((entry) => ({"id": entry[0], ...entry[1]}));
        sorted_items.sort((a,b) => {
            return (a.display_name > b.display_name ? 1 : -1)
        })
        return sorted_items;
    }

    // =========================================================================
    // Make data actions available as attributes on the data context, so elements can alter the data
    // =========================================================================

    data_context.get_sorted_item_list = get_sorted_item_list;
    data_context.delete_document = delete_document;
    data_context.save_document_data = save_document_data;

    data_context.increase_character_hp = increase_character_hp;
    data_context.decrease_character_hp = decrease_character_hp;
    data_context.increase_character_ap = increase_character_ap;
    data_context.decrease_character_ap = decrease_character_ap;

    // =========================================================================
    // Load the data on the initial load
    // =========================================================================

    function flash_loading() {
        set_is_loading(true);
        timers.start_new_timer("data_context_loading", .5, () => set_is_loading(false));
    }

    async function setup_listener(collection_name, document_key) {

        const unsubscribe_function = onSnapshot(doc(firestore_db, collection_name, document_key), (doc) => {
            // If "undefined" is returned from listener, it means the document was deleted
            let new_doc_data = undefined;
            
            if (doc.data() != undefined) {
                new_doc_data = JSON.parse(JSON.stringify(doc.data()));
            }
            
            // If this is NOT a deletion, just update the local data to match incoming from the listener
            if (new_doc_data != undefined) {
                update_local_document_data(collection_name, doc.id, new_doc_data);
            }
        });

        update_local_document_data(collection_name, document_key, {"unsubscribe_function": unsubscribe_function});
    }

    async function load_all_rpg_data () {
        flash_loading();

        if (is_spoof) {
            const is_override = true;
            set_local_collection(configs.item_collection_name, items, is_override);
            set_local_collection(configs.character_collection_name, characters, is_override);
        }
        else {
            // Setup listeners for each character that exists in the firestore database
            [configs.character_collection_name, configs.item_collection_name].forEach(async (collection_name) => {
                const query_snapshot = await getDocs(collection(firestore_db, collection_name));
                query_snapshot.forEach((doc) => {
                    const unsubscribe_function = setup_listener(collection_name, doc.id);
                });
            })
        }
    }

    useEffect(() => {
        load_all_rpg_data();
    },[])

    return (data_context);
}