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

    const table_style = {
        width: "100%",
        maxWidth: "40em",
        borderCollapse: "collapse",
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

                        return (<CharacterRow key={character_id} row_num={index + 1} character_data={character_data} />);
                    })
                }
            </tbody>
        </table>
    );
}

function CharacterRow({character_data, row_num}) {

    const character_context = useContext(CharacterContext);

    // function increase_hp(character_id) {
        // const new_hp = character_context.characters[character_id].current_hp;
        // character_context.adjust_character_hp(character_id, new_hp + 1);
    // }

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

    const character_id = character_data.id;

    const row_color = character_data.flash_color != undefined && character_data.flash_color != "none"
        ? character_data.flash_color
        : ((row_num) % 2 == 1
            ? Colors.disabled_grey
            : Colors.white);

    const cell_style = {
        textAlign: "center"
    }

    const row_style = {
        borderStyle: "solid",
        borderWidth: "10px 0",
        borderColor: "white",
        backgroundColor: row_color,
        transition: "background-color 0.5s ease"
    }

    return (
        <tr style={row_style} key={character_id}>
            <td>{character_data.full_name}</td>
            <td>
                <div style={cell_style}><button onClick={(event) => character_context.increase_character_hp(character_id)}>+</button></div>
                <div style={cell_style}>{character_data.current_hp}</div>
                <div style={cell_style}><button onClick={(event) => character_context.decrease_character_hp(character_id)}>-</button></div>
            </td>
            <td>
                <div style={cell_style}><button onClick={(event) => character_context.increase_character_ap(character_id)}>+</button></div>
                <div style={cell_style}>{character_data.current_ap}</div>
                <div style={cell_style}><button onClick={(event) => character_context.decrease_character_ap(character_id)}>-</button></div>
            </td>
        </tr>
    );
}