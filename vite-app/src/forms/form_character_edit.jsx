import { useState, useContext, useEffect } from "react";
import DataContext from "../contexts/data_context.jsx";
import useControlledField from "../hooks/use_controlled_field.jsx"
import TextInput from "../components/text_input.jsx";
import TextAreaInput from "../components/text_area_input.jsx";
import deep_object_copy from "../utility/deep_object_copy.jsx";
import Colors from "../utility/colors.jsx";

export default function FormCharacterEdit({character_id}) {

    const data_context = useContext(DataContext);

    const empty_character_data = {
        full_name: "",
        short_name: "",
        story_role: "",
    }

    const [form_data, set_form_data] = useState(character_id != undefined ? data_context.characters[character_id] : empty_character_data);
    const [form_mode, set_form_mode] = useState(character_id == undefined ? "new" : "view"); // "edit" or "view" or "new"
    const [tab, set_tab] = useState("items"); // "description" or "items" or "abilities" or "notes"

    function change_simple_field(field_name, field_value) {
        set_form_data((old_data) => {
            const data_copy = {...deep_object_copy(old_data), [field_name]: field_value};
            return data_copy;
        });
    }

    function change_short_name(new_short_name) {change_simple_field("short_name", new_short_name);}
    function change_full_name(new_full_name) {change_simple_field("full_name", new_full_name);}
    function change_story_role(new_story_role) {change_simple_field("story_role", new_story_role);}

    function handle_submit (event) {
        event.preventDefault();
        set_form_mode("view");
    }

    function handle_delete_character (event) {
        event.preventDefault();
        const character_id = event.target.value;
        console.log(character_id)
        const character_data = data_context.characters[character_id];
        const character_name = character_data.full_name;
        const is_confirmed = confirm("Are you sure you want to delete the character named \"" + character_name + "\"?")
        if (is_confirmed) {
            data_context.delete_character(character_id);
        }
    }

    function enter_edit (event) {
        event.preventDefault();
        set_form_mode("edit");
    }

    const label_style = {
        textAlign: "right"
    }

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
        <form onSubmit={handle_submit}>
            <div style={{display: "flex"}}>
                <div style={tab == "description" ? active_tab_style : inactive_tab_style} className="hover-element" onClick={set_description_tab}>Description</div>
                <div>|</div>
                <div style={tab == "items" ? active_tab_style : inactive_tab_style} className="hover-element" onClick={set_items_tab}>Items</div>
                <div>|</div>
                <div style={tab == "abilities" ? active_tab_style : inactive_tab_style} className="hover-element" onClick={set_abilities_tab}>Abilities</div>
            </div>
            <hr />
            <table>
                {
                    tab == "description"
                    ?
                        <tbody>
                            <tr>
                                <td style={label_style}>Short Name:</td>
                                <td><TextInput id={character_id + "_short_name"} value={form_data.short_name} on_change={change_short_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                            </tr>
                            <tr>
                                <td style={label_style}>Full Name:</td>
                                <td><TextInput id={character_id + "_full_name"} value={form_data.full_name} on_change={change_full_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                            </tr>
                            <tr>
                                <td style={label_style}>Story Role:</td>
                                <td><TextInput id={character_id + "_story_role"} value={form_data.story_role} on_change={change_story_role} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                            </tr>
                        </tbody>
                    : ""
                }
                {
                    tab == "items"
                    ?
                        <tbody>
                            <tr>
                                <td style={label_style}>Short Name:</td>
                                <td><TextInput id={character_id + "_short_name"} value={form_data.short_name} on_change={change_short_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                            </tr>
                            <tr>
                                <td style={label_style}>Full Name:</td>
                                <td><TextInput id={character_id + "_full_name"} value={form_data.full_name} on_change={change_full_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                            </tr>
                            <tr>
                                <td style={label_style}>Story Role:</td>
                                <td><TextInput id={character_id + "_story_role"} value={form_data.story_role} on_change={change_story_role} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                            </tr>
                        </tbody>
                    : ""
                }
                {
                    tab == "abilities"
                    ?
                        <tbody>
                            <tr>
                                <td style={label_style}>Short Name:</td>
                                <td><TextInput id={character_id + "_short_name"} value={form_data.short_name} on_change={change_short_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                            </tr>
                            <tr>
                                <td style={label_style}>Full Name:</td>
                                <td><TextInput id={character_id + "_full_name"} value={form_data.full_name} on_change={change_full_name} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                            </tr>
                            <tr>
                                <td style={label_style}>Story Role:</td>
                                <td><TextInput id={character_id + "_story_role"} value={form_data.story_role} on_change={change_story_role} read_only={form_mode == "view" ? "readonly" : ""} /></td>
                            </tr>
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
                        && <>{" "}<button onClick={handle_delete_character} value={character_id}>delete</button></>
                    }
                </>
                : <button value={character_id} onClick={enter_edit}>Edit</button>
            }


            {/* {form_mode == "edit" && <>{" "}<button value={character_id_to_edit} onClick={delete_character}>Delete</button></>} */}
            {/* <h3>{form_mode == "create" ? "Create character" : (form_mode == "edit" ? "Edit character" : "character Details")}</h3> */}
            {/* <TextInput id="character_display_name" label="Short Name" value={form_data.short_name} on_change={change_short_name} read_only={form_mode == "view" ? "readonly" : ""} /> */}
            {/* <TextAreaInput id="character_display_name" label="Description" value={description} on_change={set_description} read_only={form_mode == "view" ? "readonly" : ""} /> */}
            {/* {(form_mode == "edit" || form_mode == "view") && <>{" "}<button onClick={back_to_create}>Back to Create New</button></>} */}
        </form>
    );
}