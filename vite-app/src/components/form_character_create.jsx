import TextInput from "./text_input.jsx";
import SubmitButton from "./submit_button.jsx";
import HelperBanner from "./helper_banner.jsx";
import Loading from "./loading.jsx";
import FormTitle from "./form_title.jsx"
import { useState } from "react";
import HelperFirebase from "../firebase.jsx";
import capitalize_each_word from "../utility/capitalize_each_word.js";

export default function FormCharacterCreate () {

    // =========================================================================
    // Fields
    // =========================================================================
    const [short_name,set_short_name] = useState("");
    const [full_name,set_full_name] = useState("");
    const [story_role,set_story_role] = useState("");

    // =========================================================================
    // Outputs
    // =========================================================================
    const [is_loading,set_is_loading] = useState(false);
    const [banner_state, set_banner_state] = useState(HelperBanner().banner_state);
    const banner = HelperBanner(banner_state, set_banner_state);

    // =========================================================================
    // Processing
    // =========================================================================
    async function handle_submit(event) {
        event.preventDefault();
        set_is_loading(true);
        banner.clear();

        const document_key = full_name.toLowerCase().replace(" ", "_");
        const document_data = {
            short_name: capitalize_each_word(short_name),
            full_name: capitalize_each_word(full_name),
            story_role: capitalize_each_word(story_role),
            health_points: 10,
            action_points: 10,
            items: [],
            abilities: []
        }

        const is_valid_form = await check_is_valid_form();

        if (!is_valid_form) {return;}

        const is_created = await HelperFirebase.create_document("character", document_key, document_data, false);

        banner.set_style("success");
        banner.append_message("Successfully Created Character");
    }

    async function check_is_valid_form() {
        banner.append_message("Checking if a character with the full name \"" + capitalize_each_word(full_name) + "\" already exists...");
        set_is_loading(false)
        const already_exists = await HelperFirebase.do_docs_exist("character", "full_name", capitalize_each_word(full_name));

        if (already_exists) {
            banner.set_style("failure");
            banner.append_message("Character already exists.");
            return false;
        }
        else {
            banner.set_style("success");
            banner.append_message("Character doesn't already exist. Creating...");
            return true;
        }
    }

    // =========================================================================
    // Rendering
    // =========================================================================
    return (
        <>
            <form onSubmit={handle_submit}>
                <FormTitle text="Create New Character" />
                <TextInput id="short_name" label="Short Name" value={short_name} on_change={set_short_name}/>
                <TextInput id="full_name" label="Full Name" value={full_name} on_change={set_full_name}/>
                <TextInput id="story_role" label="Story Role" value={story_role} on_change={set_story_role}/>
                <SubmitButton>Create</SubmitButton>
            </form>
            {is_loading ? <Loading /> : banner.get_html()}
        </>
    );
};