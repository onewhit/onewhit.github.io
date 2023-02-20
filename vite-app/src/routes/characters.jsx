
import { Outlet } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import CharacterContext from "../utility/character_context.jsx";
import HelperFirebase from "../firebase.jsx";

export default function Characters() {

    // const [characters, set_characters] = useState({});
    // const [is_loading, set_is_loading] = useState(false);
    const [character_context, set_character_context] = useState(useContext(CharacterContext));
    // const [is_loading_characters, set_is_loading_characters] = useState(true);

    function update_character_context(new_context_obj) {
        set_character_context((previous_context) => {
            const new_context = {
                ...previous_context,
                characters: {...previous_context.characters},
                ...new_context_obj
            }
            return new_context
        });
    }

    function set_is_loading (new_bool_value) {
        update_character_context({is_loading: new_bool_value})
    }

    function update_character (character_key, new_data) {
        set_character_context((previous_context) => {
            const new_context = {
                ...previous_context,
                characters: {...previous_context.characters},
            }

            new_context.characters[character_key] = new_data

            return new_context
        });
    }

    function adjust_character_hp(character_id, new_amount) {
        HelperFirebase.create_document("character", character_id, {current_hp: new_amount})
    }

    function adjust_character_ap(character_id, new_amount) {
        HelperFirebase.create_document("character", character_id, {current_ap: new_amount})
    }

    async function load_characters() {
        set_is_loading(true);

        // set_character_context((previous_context) => {
        //     const new_context = JSON.parse(JSON.stringify(previous_context));
        //     new_context.adjust_character_hp = adjust_character_hp;
        //     return new_context;
        // });

        update_character_context({adjust_character_hp: adjust_character_hp, adjust_character_ap: adjust_character_ap})

        const all_characters = await HelperFirebase.get_all_documents("character");
        // set_characters(all_characters);

        all_characters.forEach((character) => {
            let is_requires_update = false;

            if (character.hp != undefined) {
                delete character.hp;
                is_requires_update = true;
            }

            if (character.max_hp == undefined) {
                character.max_hp = 10;
                is_requires_update = true;
            }

            if (character.current_hp == undefined) {
                character.current_hp = 10;
                is_requires_update = true;
            }

            if (character.current_ap == undefined) {
                character.current_ap = 10;
                is_requires_update = true;
            }

            if (is_requires_update) {
                HelperFirebase.create_document("character", character.id, character, false)
            }

            const unsubscribe = HelperFirebase.setup_listener_and_get_unsubscribe_function("character", character.id, update_character);
            // update_character(character.id, character);
        })

        set_is_loading(false);
    }

    useEffect(() => {load_characters()}, []);

    return (
        <CharacterContext.Provider value={character_context}>
            <Outlet />
        </CharacterContext.Provider>
    )
}