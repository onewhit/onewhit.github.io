import { Link } from "react-router-dom";

export default function ButtonLink ({text, to}) {

    const button_style = {
        // display: "inline-block",
    }

    return (
        <Link to="/characters/create">
            <button style={button_style}>{text}</button>
        </Link>
    )
}