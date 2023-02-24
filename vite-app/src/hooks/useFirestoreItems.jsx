/*
    Call this at the top-level of the app to load the items and create a context for them that can be passed down to lower items
*/

import DataContext from "../contexts/data_context.jsx";
import { useContext, useEffect } from "react";
import HelperFirebase from "../utility/firebase.jsx";

const ITEM_COLLECTION_NAME = "item";

export default function useFirestoreItems() {

    console.log("hook")

    const [data_context, set_data_context] = useContext(DataContext)

    function set_items (new_items_dict) {
        set_data_context((old_context) => {
            const new_context = {
                ...old_context,
                items: new_items_dict
            }

            return new_context;
        })
    }

    async function load_all_rpg_items () {
        const items = await HelperFirebase.get_all_documents(ITEM_COLLECTION_NAME);
        console.log("setting");
        console.log(items);
        set_items(items);
    }

    useEffect(() => {
        console.log("effect called");
        load_all_rpg_items();
    })

    return (data_context);
}
