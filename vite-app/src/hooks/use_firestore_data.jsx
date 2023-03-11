/*
    Call this at the top-level of the app to load the items and create a context for them that can be passed down to lower items
*/

import DataContext from "../contexts/data_context.jsx";
import { useContext, useEffect, useState, useRef } from "react";
import items from "../spoof_data/items.jsx";
import characters from "../spoof_data/characters.jsx";
import Colors from "../utility/colors.jsx";
import useTimers from "../hooks/use_timers.jsx";
import deep_object_copy from "../utility/deep_object_copy.jsx";
import useFirebaseProject from "../hooks/use_firebase_project.jsx";

import { getFirestore, doc, getDoc, collection, query, where, getDocs, setDoc, deleteDoc, onSnapshot } from "firebase/firestore";

export default function useFirestoreData(is_spoof = true) {

    let firestore_db = undefined;

    if (!is_spoof) {
        firestore_db = getFirestore(useFirebaseProject());
    }

    const [data_context, set_data_context] = useState(useContext(DataContext));

    const timers = useTimers();
    function set_items (new_items_dict) {
        set_data_context((old_context) => {
            const new_context = {
                ...old_context,
                items: new_items_dict
            };

            return new_context;
        });
    };

    function set_characters (new_characters_dict) {
        set_data_context((old_context) => {
            const new_context = {
                ...old_context,
                characters: new_characters_dict
            };

            return new_context;
        });
    };

    function create_or_edit_item(item_data) {
       set_data_context((old_context) => {
            const new_context = {
                ...old_context,
                items: {...old_context.items, ...item_data}
            }

            return new_context;
        });
    };

    function save_character_data(data_dict) {
        // First make sure the local character data is fully updated
        update_local_character(data_dict);

        // Then save to remote (this only happens if we are using firestore instead of spoofing)

    }

    // Handles interacting with the local character5 list state values to merge / update new data and reflect locally
    // Also ensures all local version of the data have expected fields
    function update_local_character(new_character_data) {
        set_data_context((old_context) => {
            const copy_old_character_data = deep_object_copy(old_context.characters[new_character_data.id])
            const copy_new_character_data = deep_object_copy(new_character_data);

            // Default values for any incoming character data
            const empty_character_data = {
                full_name: "",
                short_name: "",
                story_role: "",
                current_hp: 10,
                current_ap: 10,
                max_hp: 10,
                notes: "",
                items: [],
                abilities: [],
            };

            const merged_character_data = {...empty_character_data, ...copy_old_character_data, ...copy_new_character_data}

            const new_context = {
                ...old_context,
                characters: {...old_context.characters, [new_character_data.id]: merged_character_data}
            }

            return new_context;
        });

        // This is here instead of in the "save_data" function so that incoming listener changes will also cause flashes
        if (![undefined,"none"].includes(new_character_data.flash_color)) {
            timers.start_new_timer(new_character_data.id, 1, () => update_local_character({id: new_character_data.id, flash_color: "none"}));
        }
    }

    function delete_character(character_id) {
        set_data_context((old_context) => {
            const copy_character_list = deep_object_copy(old_context.characters);
            delete copy_character_list[character_id];

            const new_context = {
                ...old_context,
                characters: {...copy_character_list}
            }

            return new_context;
        });
    }

    function increase_character_hp(character_id) {
        const new_hp = data_context.characters[character_id].current_hp + 1;
        update_local_character({
            id: character_id,
            current_hp: new_hp,
            flash_color: Colors.banner_green,
        });
    }

    function decrease_character_hp(character_id) {
        const new_hp = data_context.characters[character_id].current_hp - 1;
        update_local_character({
            id: character_id,
            current_hp: new_hp,
            flash_color: Colors.banner_red,
        });
    }

    function increase_character_ap(character_id) {
        const new_ap = data_context.characters[character_id].current_ap + 1;
        update_local_character({
            id: character_id,
            current_ap: new_ap,
            flash_color: Colors.banner_dark_purple,
        });
    }

    function decrease_character_ap(character_id) {
        const new_ap = data_context.characters[character_id].current_ap - 1;
        update_local_character({
            id: character_id,
            current_ap: new_ap,
            flash_color: Colors.banner_light_purple,
        });
    }

    function delete_item(item_id) {
       set_data_context((old_context) => {
            // const new_items = {...old_context.items}
            const new_context = {
                ...old_context,
                items: {...old_context.items}
            }
            delete new_context.items[item_id]

            return new_context;
        });
    }

    function get_sorted_item_list() {
        const sorted_items = Object.entries(data_context.items).map((entry) => ({"id": entry[0], ...entry[1]}));
        sorted_items.sort((a,b) => {
            return (a.display_name > b.display_name ? 1 : -1)
        })
        return sorted_items;
    }

    async function setup_listener (collection_name, document_key, callback) {
        const unsubscribe = onSnapshot(doc(firestore_db, collection_name, document_key), (doc) => {
            const new_doc_data = JSON.parse(JSON.stringify(doc.data()));
            new_doc_data.id = doc.id;

            if (callback != undefined) {
                callback(doc.id, new_doc_data);
            }
        });
    }

    // =========================================================================
    // Make data actions available as attributes on the data context, so elements can alter the data
    // =========================================================================

    data_context.create_or_edit_item = create_or_edit_item;
    data_context.get_sorted_item_list = get_sorted_item_list;
    data_context.delete_item = delete_item;

    data_context.update_local_character = update_local_character;
    data_context.delete_character = delete_character;
    data_context.increase_character_hp = increase_character_hp;
    data_context.decrease_character_hp = decrease_character_hp;
    data_context.increase_character_ap = increase_character_ap;
    data_context.decrease_character_ap = decrease_character_ap;

    // =========================================================================
    // Load the data on the initial load
    // =========================================================================

    async function load_all_rpg_data () {
        if (is_spoof) {
            set_items(items);
            set_characters(characters);
        }
        else {
            // Setup listeners for each character that exists in the firestore database
            const character_query_snapshot = await getDocs(collection(firestore_db, "character"));
            character_query_snapshot.forEach((doc) => {
                setup_listener("character", doc.id, (id, data) => {
                    update_local_character(data);
                });
            });

            const item_query_snapshot = await getDocs(collection(firestore_db, "item"));
            item_query_snapshot.forEach((doc) => {
                setup_listener("item", doc.id, (id, data) => {
                    create_or_edit_item(data);
                });
            });
        }
    }

    useEffect(() => {
        load_all_rpg_data();
    },[])

    return (data_context);
}