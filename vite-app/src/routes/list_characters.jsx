import ButtonLink from "../components/button_link.jsx";
import {Link } from "react-router-dom";
import HelperFirebase from "../firebase.jsx";
import { useEffect, useState } from "react";
import LoadingProtected from "../components/loading_protected.jsx";

export default function ListCharacters () {

    const [characters, set_characters] = useState([]);
    const [is_loading, set_is_loading] = useState(true);

    useEffect(() => {

        async function load_users() {
            const all_characters = await HelperFirebase.get_all_documents("character");
            set_characters(all_characters.docs);
            set_is_loading(false);
        }

        load_users();

    }, []);

    return (
        <>
            <LoadingProtected is_loading={is_loading}>
                <div>
                    {/* <ButtonLink text="Create New Character" /> */}
                    <Link to="create">Create a New Character</Link>
                </div>
                <br />
                <div>
                    {
                        characters.map((character) => (
                            <CharacterRow key={character.data().full_name} character_data={character.data()} />
                        ))
                    }
                </div>
            </LoadingProtected>
        </>
    )
}

function CharacterRow({character_data}) {
    return (
        <div key={character_data.full_name}>{character_data.full_name}, {character_data.story_role}</div>
    )
}