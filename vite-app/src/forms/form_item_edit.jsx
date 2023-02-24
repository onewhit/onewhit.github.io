import { useState, useContext, useEffect } from "react";
import DataContext from "../contexts/data_context.jsx";
import useControlledField from "../hooks/use_controlled_field.jsx"
import TextInput from "../components/text_input.jsx";
import TextAreaInput from "../components/text_area_input.jsx";

export default function FormItemEdit({item_id_to_edit, set_item_id_to_edit, set_flash_message}) {

    const data_context = useContext(DataContext);

    let default_display_name = "";
    let default_description = "";
    let default_form_title = "Create New Item";
    let default_submit_text = "Create";

    const [display_name, set_display_name] = useState(default_display_name);
    const [description, set_description] = useState(default_description);
    const [form_title, set_form_title] = useState(default_form_title);
    const [submit_text, set_submit_text] = useState(default_submit_text);

    useEffect(() => {
        const item_to_edit = data_context.items[item_id_to_edit]

        if (item_to_edit != undefined){
            set_display_name(item_to_edit.display_name);
            set_description(item_to_edit.description);
            set_form_title("Edit Existing Item");
            set_submit_text("Save");
        }
        else {
            set_display_name(default_display_name);
            set_description(default_description);
            set_form_title(default_form_title);
            set_submit_text(default_submit_text);
        }

    },[item_id_to_edit])

    function handle_submit (event) {
        event.preventDefault();

        const submitted_item_id = item_id_to_edit || display_name.toLowerCase().replaceAll(" ", "_");
        const existing_item = (data_context.items[submitted_item_id]);

        if (item_id_to_edit == undefined && existing_item != undefined) {
            set_flash_message("Item already exists, under the name \"" + existing_item.display_name + "\" with key \"" + submitted_item_id + "\". Delete that one in order to free up the display name (which is used to generate the database key");
            return;
        }

        data_context.create_or_edit_item({
            [submitted_item_id] : {
                "display_name": display_name,
                "description": description
            }
        });

        if (item_id_to_edit != undefined) {
            set_flash_message("Item Edited!");
        }
        else {
            set_flash_message("Item Created!");
            set_item_id_to_edit(submitted_item_id);
        }
    }

    function clear_form (event) {
        event.preventDefault();
        set_flash_message(undefined);
        set_item_id_to_edit(undefined);
    }

    function delete_item (event) {
        event.preventDefault();
        data_context.delete_item(event.target.value);
        set_flash_message("Item Deleted");
        set_item_id_to_edit(undefined);
    }

    return (
        <form onSubmit={handle_submit}>
            <h3>{form_title}</h3>
            <TextInput id="item_display_name" label="Display Name" value={display_name} on_change={set_display_name} />
            <TextAreaInput id="item_display_name" label="Description" value={description} on_change={set_description} />
            <button type='submit'>{submit_text}</button>
            {item_id_to_edit != undefined && <>{" "}<button value={item_id_to_edit} onClick={delete_item}>Delete</button></>}
            {item_id_to_edit != undefined && <>{" "}<button onClick={clear_form}>Back to Create New</button></>}
        </form>
    );
}