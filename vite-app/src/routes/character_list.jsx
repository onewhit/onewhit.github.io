import ButtonLink from "../components/button_link.jsx";
import { Link, Outlet } from "react-router-dom";
import HelperFirebase from "../firebase.jsx";
import { useEffect, useState, useContext } from "react";
import LoadingProtected from "../components/loading_protected.jsx";
import Colors from "../utility/colors.jsx";
import GlobalContext from "../global_context.jsx";
import CharacterContext from "../utility/character_context.jsx";

export default function CharacterList () {

    const character_list_style = {
        // visibility: is_show ? "visible" : "hidden"
        // display: is_show ? "block" : "none"
    }

    const character_context = useContext(CharacterContext);

    // console.log(characters.tarron_lane);
    // console.log(character_context.is_loading);

    // console.log(Object.entries(character_context.characters))

    const character_iterable = Object.entries(character_context.characters);

    // console.log(character_iterable);

    return (
        <>
            <div style={character_list_style}>
                <div>
                    {/* <ButtonLink text="Create New Character" /> */}
                    <ButtonLink to="create">Create New Character</ButtonLink>
                    {/* <ButtonLink to="create">Create a New Character</ButtonLink>{" "} */}
                    {/* <button onClick={load_characters}>Refresh</button> */}
                </div>
                <LoadingProtected is_loading={character_context.is_loading}>
                    <br />
                    <div>
                        {/* {
                            character_iterable.map((character_row, index) => {
                                const character_data = character_row[1];
                                return <CharacterRow key={character_data.full_name} character_data={character_data} row_num={index+1}/>
                            })
                        } */}
                        <CharacterTable character_iterable={character_iterable} />
                    </div>
                </LoadingProtected>
            </div>
            {/* {children} */}
        </>
    )
}

function CharacterTable({character_iterable}) {

    const character_context = useContext(CharacterContext);

    const table_style = {
        width: "100%",
        borderCollapse: "collapse"
    }

    const header_style = {
        textAlign: "left"
    }

    const headers = [
        {column_name: "Name", column_width: "100%"},
        {column_name: "HP", column_width: "0%"},
        {column_name: "AP", column_width: "0%"},
    ]

    const row_style = {
        borderStyle: "solid",
        borderWidth: "10px 0",
        borderColor: "white"
    }

    function increase_hp(character_id) {
        const new_hp = character_context.characters[character_id].current_hp;
        character_context.adjust_character_hp(character_id, new_hp + 1);
    }

    function decrease_hp(character_id) {
        const new_hp = character_context.characters[character_id].current_hp;
        character_context.adjust_character_hp(character_id, new_hp - 1);
    }

    function increase_ap(character_id) {
        const new_ap = character_context.characters[character_id].current_ap;
        character_context.adjust_character_ap(character_id, new_ap + 1);
    }

    function decrease_ap(character_id) {
        const new_ap = character_context.characters[character_id].current_ap;
        character_context.adjust_character_ap(character_id, new_ap - 1);
    }

    return (
        <table style={table_style}>
            <thead>
                <tr>
                    {headers.map((header) => (<th key={header.column_name} style={{...header_style, width: header.column_width}}>{header.column_name}</th>))}
                </tr>
            </thead>
            <tbody>
                {
                    character_iterable.map((character_row, index) => {
                        const character_id = character_row[0];
                        const character_data = character_row[1];

                        const cell_style = {
                            textAlign: "center"
                        }
                        const this_row_style = {...row_style}

                        if ((index + 1) % 2 == 1) {
                            this_row_style.backgroundColor = Colors.disabled_grey
                        }

                        return (
                            <tr style={this_row_style} key={character_id}>
                                <td>{character_data.full_name}</td>
                                <td>
                                    <div style={cell_style}><button onClick={(event) => increase_hp(character_id)}>+</button></div>
                                    <div style={cell_style}>{character_data.current_hp}</div>
                                    <div style={cell_style}><button onClick={(event) => decrease_hp(character_id)}>-</button></div>
                                </td>
                                <td>
                                    <div style={cell_style}><button onClick={(event) => increase_ap(character_id)}>+</button></div>
                                    <div style={cell_style}>{character_data.current_ap}</div>
                                    <div style={cell_style}><button onClick={(event) => decrease_ap(character_id)}>-</button></div>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
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

    const character_name_style = {
        flexShrink: 1,
        flexGrow: 1
    }

    const character_actions_style = {
        flexShrink: 0,
        flexGrow: 0
    }

    const input_style = {
        width: "1.2em",
        textAlign: "center",
        padding: "1px",
        borderWidth: "1px",
        backgroundColor: Colors.disabled_grey,
        borderRadius: "4px",
        marginLeft: ".5em",
        marginRight: ".5em",
    }

    return (
        <div style={character_row_style} key={character_data.full_name}>
            <div style={character_name_style}>{character_data.full_name}</div>
            <div style={character_actions_style}>
                HP<input style={input_style} value={character_data.current_hp} readOnly />
                AP<input style={input_style} value={character_data.current_ap} readOnly />
            </div>
            {/* <div><ButtonLink to={"edit/" + character_data.id}>Edit</ButtonLink></div> */}
        </div>
    )
}