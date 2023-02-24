/*
    Call this at the top-level of the app to load the items and create a context for them that can be passed down to lower items
*/

import DataContext from "../contexts/data_context.jsx";
import { useContext, useEffect, useState } from "react";
// import HelperFirebase from "../utility/firebase.jsx";
import items from "../spoof_data/items.jsx";

const ITEM_COLLECTION_NAME = "item";

export default function useFirestoreData() {

    const [data_context, set_data_context] = useState(useContext(DataContext))

    function set_items (new_items_dict) {
        set_data_context((old_context) => {
            const new_context = {
                ...old_context,
                items: new_items_dict
            }

            return new_context;
        })
    }

    function create_or_edit_item(item_data) {
       set_data_context((old_context) => {
            // const new_items = {...old_context.items}
            const new_context = {
                ...old_context,
                items: {...old_context.items, ...item_data}
            }

            return new_context;
        });
    };

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

    data_context.create_or_edit_item = create_or_edit_item;
    data_context.get_sorted_item_list = get_sorted_item_list;
    data_context.delete_item = delete_item;

    async function load_all_rpg_items () {
        // const items = await HelperFirebase.get_all_documents(ITEM_COLLECTION_NAME);
        // const items = [{"test": "item"}]
        set_items(items);
    }

    useEffect(() => {
        load_all_rpg_items();
    },[])

    return (data_context);
}
