import { useState, useContext, useEffect } from "react";
import DataContext from "../contexts/data_context.jsx";
import useControlledField from "../hooks/use_controlled_field.jsx"
import TextInput from "../components/text_input.jsx";
import TextAreaInput from "../components/text_area_input.jsx";
import deep_object_copy from "../utility/deep_object_copy.jsx";
import Colors from "../utility/colors.jsx";
import GlobalContext from "../contexts/global_context.jsx";

export default function FormCharacterEdit({character_id}) {

    const data_context = useContext(DataContext);
    const global_context = useContext(GlobalContext);

    const empty_character_data = {
        full_name: "",
        short_name: "",
        story_role: "",
        current_hp: 10,
        current_ap: 10,
        max_hp: 10,
        items: [],
        abilities: [],
    };

    const [form_data, set_form_data] = useState(character_id != undefined ? data_context.characters[character_id] : empty_character_data);
    const [form_mode, set_form_mode] = useState(character_id == undefined ? "new" : "view"); // "edit" or "view" or "new"
    const [flash_message, set_flash_message] = useState("");
    const [tab, set_tab] = useState(form_mode != "new" ? "items" : "description"); // "description" or "items" or "abilities" or "notes"
    
    const calculated_character_id = character_id || form_data.full_name.toLowerCase().replaceAll(" ", "_");
    
    function change_simple_field(field_name, field_value) {
        set_form_data((old_data) => {
            const data_copy = {...deep_object_copy(old_data), [field_name]: field_value};
            return data_copy;
        });
    };

    function change_short_name(new_short_name) {change_simple_field("short_name", new_short_name);};
    function change_full_name(new_full_name) {change_simple_field("full_name", new_full_name);};
    function change_story_role(new_story_role) {change_simple_field("story_role", new_story_role);};

    function handle_submit (event) {
        event.preventDefault();

        if (form_mode == "new") {
            // Make sure there isn't already a character with this full_name id
            const existing_character = data_context.characters[calculated_character_id];
            if (existing_character != undefined) {
                set_flash_message("character full name or inferred id \"" + calculated_character_id + "\" already exists");
                return;
            }
        }

        data_context.create_or_edit_character({
            ...form_data,
            id: calculated_character_id
        });

        if (form_mode == "new") {
            global_context.toggle_is_show_rightbar();
        }
        else {
            set_form_mode("view");
        };
    };

    function handle_delete_character (event) {
        event.preventDefault();
        const calculated_character_id = event.target.value;
        const character_data = data_context.characters[calculated_character_id];
        const character_name = character_data.full_name;
        const is_confirmed = confirm("Are you sure you want to delete the character named \"" + character_name + "\"?");
        if (is_confirmed) {
            data_context.delete_character(calculated_character_id);
        };
    };

    function enter_edit (event) {
        event.preventDefault();
        set_form_mode("edit");
    };

    const label_style = {
        textAlign: "right"
    };

    const tab_style = {
        paddingLeft: ".25em",
        paddingRight: ".25em",
    }

    const active_tab_style = {
        ...tab_style,
        color: Colors.black

    }

    const inactive_tab_style = {
        ...tab_style,
        color: Colors.tab_inactive_grey
    }

    function set_description_tab() {set_tab("description");}
    function set_items_tab() {set_tab("items");}
    function set_abilities_tab() {set_tab("abilities");}

    return (
        <div style={{display: "inline-block"}}>
            <form onSubmit={handle_submit}>
                <div style={{display: "flex"}}>
                    {
                        form_mode != "new" 
                        && <>
                            <div style={tab == "items" ? active_tab_style : inactive_tab_style} className="hover-element" onClick={set_items_tab}>Items</div>
                            <div>|</div>
                            <div style={tab == "abilities" ? active_tab_style : inactive_tab_style} className="hover-element" onClick={set_abilities_tab}>Abilities</div>
                            <div>|</div>
                            <div style={tab == "description" ? active_tab_style : inactive_tab_style} className="hover-element" onClick={set_description_tab}>Description</div>
                        </>
                    }
                </div>
                <hr />
                <table>
                    {
                        tab == "description"
                        ?
                            <tbody>
                                <tr>
                                    <td style={label_style}>Short Name:</td>
                                    <td><TextInput id={calculated_character_id + "_short_name"} value={form_data.short_name} on_change={change_short_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                                </tr>
                                <tr>
                                    <td style={label_style}>Full Name:</td>
                                    <td><TextInput id={calculated_character_id + "_full_name"} value={form_data.full_name} on_change={change_full_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                                </tr>
                                <tr>
                                    <td style={label_style}>Story Role:</td>
                                    <td><TextInput id={calculated_character_id + "_story_role"} value={form_data.story_role} on_change={change_story_role} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                                </tr>
                            </tbody>
                        : ""
                    }
                    {
                        tab == "items"
                        ?
                            <tbody>
                                {/* <tr>
                                    <td style={label_style}>Short Name:</td>
                                    <td><TextInput id={calculated_character_id + "_short_name"} value={form_data.short_name} on_change={change_short_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                                </tr>
                                <tr>
                                    <td style={label_style}>Full Name:</td>
                                    <td><TextInput id={calculated_character_id + "_full_name"} value={form_data.full_name} on_change={change_full_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                                </tr>
                                <tr>
                                    <td style={label_style}>Story Role:</td>
                                    <td><TextInput id={calculated_character_id + "_story_role"} value={form_data.story_role} on_change={change_story_role} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                                </tr> */}
                            </tbody>
                        : ""
                    }
                    {
                        tab == "abilities"
                        ?
                            <tbody>
                                {/* <tr>
                                    <td style={label_style}>Short Name:</td>
                                    <td><TextInput id={calculated_character_id + "_short_name"} value={form_data.short_name} on_change={change_short_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                                </tr>
                                <tr>
                                    <td style={label_style}>Full Name:</td>
                                    <td><TextInput id={calculated_character_id + "_full_name"} value={form_data.full_name} on_change={change_full_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                                </tr>
                                <tr>
                                    <td style={label_style}>Story Role:</td>
                                    <td><TextInput id={calculated_character_id + "_story_role"} value={form_data.story_role} on_change={change_story_role} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                                </tr> */}
                            </tbody>
                        : ""
                    }
                </table>
                {
                    ["edit","new"].includes(form_mode)
                    ? <>
                        <button type='submit'>{("Save")}</button>
                        {
                            ["edit"].includes(form_mode)
                            && <>{" "}<button onClick={handle_delete_character} value={calculated_character_id}>delete</button></>
                        }
                    </>
                    : <button value={calculated_character_id} onClick={enter_edit}>Edit</button>
                }
            </form>
            {
                flash_message != "" && <div style={{maxWidth: "fit-content"}}>{flash_message}</div>
            }
        </div>
    );
}