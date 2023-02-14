import { useState } from "react";

export default function TextInput({id,label,value="",onChange, required=true}) {

    const [input_value,set_input_value] = useState(value);

    // console.log(input_value);

    function handle_change(event) {
        event.preventDefault();
        set_input_value(event.target.value);

        if (onChange != null) {
            onChange(event.target.value)
        }
    };

    return (
        <>
            <div>
                <label htmlFor={id}>{label}:</label>{" "}
                <input type="text" id={id} onChange={handle_change} value={input_value} required={required}></input>
            </div>
        </>
    );
};