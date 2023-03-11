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

    if (!is_spoof) {
        const firestore_db = getFirestore(useFirebaseProject());
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

    function create_or_edit_character(new_character_data) {
        set_data_context((old_context) => {
            const copy_old_character_data = deep_object_copy(old_context.characters[new_character_data.id])
            const copy_new_character_data = deep_object_copy(new_character_data);

            const merged_character_data = {...copy_old_character_data, ...copy_new_character_data}

            const new_context = {
                ...old_context,
                characters: {...old_context.characters, [new_character_data.id]: merged_character_data}
            }

            return new_context;
        });

        if (![undefined,"none"].includes(new_character_data.flash_color)) {
            timers.start_new_timer(new_character_data.id, 1, () => create_or_edit_character({id: new_character_data.id, flash_color: "none"}));
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
        create_or_edit_character({
            id: character_id,
            current_hp: new_hp,
            flash_color: Colors.banner_green,
        });
    }

    function decrease_character_hp(character_id) {
        const new_hp = data_context.characters[character_id].current_hp - 1;
        create_or_edit_character({
            id: character_id,
            current_hp: new_hp,
            flash_color: Colors.banner_red,
        });
    }

    function increase_character_ap(character_id) {
        const new_ap = data_context.characters[character_id].current_ap + 1;
        create_or_edit_character({
            id: character_id,
            current_ap: new_ap,
            flash_color: Colors.banner_dark_purple,
        });
    }

    function decrease_character_ap(character_id) {
        const new_ap = data_context.characters[character_id].current_ap - 1;
        create_or_edit_character({
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

    // =========================================================================
    // Make data actions available as attributes on the data context, so elements can alter the data
    // =========================================================================

    data_context.create_or_edit_item = create_or_edit_item;
    data_context.get_sorted_item_list = get_sorted_item_list;
    data_context.delete_item = delete_item;

    data_context.create_or_edit_character = create_or_edit_character;
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

        }
    }

    useEffect(() => {
        load_all_rpg_data();
    },[])

    return (data_context);
}

// Return the three client objects used to interact with firebase
function get_firebase_clients() {
    const firebase_config = {
        apiKey: "AIzaSyB7KcGLNztLk0KmjJ7CCyIQmwvchLaRbCw",
        authDomain: "rpg-gen.firebaseapp.com",
        projectId: "rpg-gen",
        storageBucket: "rpg-gen.appspot.com",
        messagingSenderId: "167071727845",
        appId: "1:167071727845:web:59a5ff82df16db1c0b940c"
    };
    
    const firebase_app = initializeApp(firebase_config);
    const firebase_auth = getAuth(firebase_app);
    const firebase_db = getFirestore(firebase_app);

    return {firebase_app, firebase_auth, firebase_db}
}