import GlobalContext from "../global_context.jsx"
import { useContext, useState } from "react";

export default function Generator() {
    // const global_context = useContext(GlobalContext);
    return (<>
        <DieRollerForm />
        <br />
        <CardPickerForm />
    </>);
}

function DieRollerForm () {
    const [roll_result, set_roll_result] = useState("");

    function handle_roll (event) {
        event.preventDefault();
        const roll_result = get_random_int(1,20);
        set_roll_result(roll_result);
    }
    
    const output_style = {
        width: "2em",
        textAlign: "center",
        marginLeft: "1em",
    }

    return (
        <form>
            <button type="submit" onClick={handle_roll}>Roll the Die</button>
            <input type="text" style={output_style} value={roll_result} readOnly></input>
        </form>
    );
}

function CardPickerForm () {

    const [card_result, set_card_result] = useState("");

    function handle_submit (event) {
        event.preventDefault();
        set_card_result(pick_random_card());
    }
    
    const output_style = {
        // width: "2em",
        textAlign: "center",
        marginLeft: "1em",
    }

    return (
        <form>
            <button type="submit" onClick={handle_submit}>Pick a Card</button>
            <input type="text" style={output_style} value={card_result} readOnly></input>
        </form>
    );
}

function pick_random_card () {
    const suit_options = [
        "Spades",
        "Hearts",
        "Clubs",
        "Diamonds"
    ];

    const card_options = [
        "Ace",
        ...[...Array(10).keys()].map((key) => key + 1),
        "Jack",
        "Queen",
        "King",
    ];

    // const picked_suite = suit_options[get_random_int(0,suit_options.length)];
    const card_index = get_random_int(0,card_options.length-1);
    const suit_index = get_random_int(0,suit_options.length-1);

    console.log(card_index);

    return card_options[card_index] + " of " + suit_options[suit_index];
}

function get_random_int (min_value, max_value) {
    return Math.floor(Math.random() * Math.floor(max_value)) + min_value;
}