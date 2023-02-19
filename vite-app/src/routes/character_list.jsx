import ButtonLink from "../components/button_link.jsx";
import { Link, Outlet } from "react-router-dom";
import HelperFirebase from "../firebase.jsx";
import { useEffect, useState, useContext } from "react";
import LoadingProtected from "../components/loading_protected.jsx";
import Colors from "../utility/colors.jsx";
import GlobalContext from "../global_context.jsx";

export default function CharacterList ({ is_show=true, children }) {





    const character_list_style = {
        // visibility: is_show ? "visible" : "hidden"
        // display: is_show ? "block" : "none"
    }

    return (
        <>
            <div style={character_list_style}>
                <div>
                    {/* <ButtonLink text="Create New Character" /> */}
                    <ButtonLink to="create">Create a New Character</ButtonLink>{" "}<button onClick={load_characters}>Refresh</button>
                </div>
                <LoadingProtected is_loading={is_loading}>
                    <br />
                    <div>
                        {
                            characters.map((character, index) => (
                                <CharacterRow key={character.full_name} character_data={character} row_num={index+1}/>
                            ))
                        }
                    </div>
                </LoadingProtected>
            </div>
            {children}
        </>
    )
}

function CharacterRow({character_data, row_num}) {

    const global_context = useContext(GlobalContext);

    const character_row_style = {
        paddingTop: ".5em",
        paddingBottom: ".5em",
        backgroundColor: row_num % 2 == 1 ? Colors.sidebar_grey : Colors.white,
        display: "flex",
        flexDirection: global_context.is_mobile_view ? "column" : "row",
        justifyContent: "space-between"
    }

    // const row_left_style = {

    // }

    return (
        <div style={character_row_style} key={character_data.full_name}>
            <div>{row_num}. {character_data.full_name} ({character_data.story_role})</div>
            <div>HP: </div>
            <div>AP: </div>
            {/* <div><ButtonLink to={"edit/" + character_data.id}>Edit</ButtonLink></div> */}
        </div>
    )
}