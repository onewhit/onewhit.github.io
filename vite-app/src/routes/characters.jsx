
import { Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import LoginProtected from "../components/login_protected.jsx";
import CharacterContext from "../utility/character_context.jsx";
import HelperFirebase from "../firebase.jsx";

export default function Characters() {

    const [characters, set_characters] = useState([]);
    // const [is_loading_characters, set_is_loading_characters] = useState(true);

    function update_characters (character_key, new_data) {
        new_character_list = JSON.parse(JSON.stringify(characters));
        
    }

    const character_context = useContext(CharacterContext);
    
    async function load_characters() {
        // set_is_loading(true);
        const all_characters = await HelperFirebase.get_all_documents("character");
        // set_characters(all_characters);

        all_characters.forEach((character) => {
            // const unsubscribe = HelperFirebase.setup_listener_and_get_unsubscribe_function("character", character.id);
            // character_context.push(character);
            set_characters((previous_character_list) => {

            });
        })

        // set_is_loading(false);
    }

    useEffect(() => {load_characters()}, []);

    return (
        <LoginProtected>
            <CharacterContext.Provider value={character_context}>
                <Outlet />
            </CharacterContext.Provider>
        </LoginProtected>
    )
}