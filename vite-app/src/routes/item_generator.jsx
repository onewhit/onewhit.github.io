import {get_attribute, get_attributes_by_tag} from "../firebase.jsx";

export default function ItemGenerator() {



    return (
        <>
        <div>Here is the item generator content</div>
        <button onClick={(event) => get_attribute("greed")}>Get Attribute</button>
        <button onClick={(event) => get_attributes_by_tag("item")}>Get Attributes by tag</button>
        </>
    )
}