import { useState } from "react";
import Colors from "../utility/colors.jsx";

function noop() {}

export default function TextInput({id,label,value="", on_change={noop}, required=true, read_only=false}) {

    // const [input_value,set_input_value] = useState(value);

    // console.log(input_value);

    function handle_change(event) {
        event.preventDefault();
        // set_input_value(event.target.value);

        if (on_change != null) {
            on_change(event.target.value)
        }
    };

    const input_style = {
        backgroundColor: read_only ? Colors.disabled_grey : Colors.white,
        borderWidth: read_only ? "1px" : "2px",
    }

    return (
        <>
            <div>
                <label htmlFor={id}>{label}:</label>{" "}
                <input style={input_style} type="text" id={id} onChange={handle_change} value={value} required={required} readOnly={read_only ? "readOnly" : ""}></input>
            </div>
        </>
    );
};