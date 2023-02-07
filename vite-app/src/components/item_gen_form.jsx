import { useState, useContext } from "react";
import GlobalContext from "../global_context.jsx";
import ajax_loader from "../../assets/ajax_loader.gif";
import { get_all_documents } from "../firebase.jsx"
import { get_random_int } from "../routes/generator.jsx";

const item_output_style = {
    width: "20em"
}

export default function ItemGenForm () {
    const global_context = useContext(GlobalContext);
    const [item_output, set_item_output] = useState("");
    const [is_loading_item, set_is_loading_item] = useState(false);

    async function handle_gen_item_click(event) {
        event.preventDefault();
        set_is_loading_item(true);
        set_item_output("test item name");
        const all_items = await get_all_documents("item");
        const all_attributes = await get_all_documents("attribute");

        const random_item_index = get_random_int(0, all_items.docs.length-1);
        const random_attribute_index = get_random_int(0, all_attributes.docs.length-1);

        const picked_item = all_items.docs[random_item_index].data().display_name;
        const picked_attribute = all_attributes.docs[random_attribute_index].data().display_name;

        set_item_output(picked_item + " of " + picked_attribute);

        set_is_loading_item(false);
    }

    return (
        <form>
            <div className="gapdiv"><button type="submit" onClick={handle_gen_item_click}>Generate an item</button></div>
            {
                is_loading_item
                ? <img height="25rem" width="25rem" src={ajax_loader} />
                : <div className="gapdiv"><input style={item_output_style} type="text" value={item_output} readOnly></input></div>
            }
        </form>
    );
}