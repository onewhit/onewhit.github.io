import FormCreateCharacter from "../components/form_create_character.jsx";
import { Link } from "react-router-dom"


export default function CreateCharacter() {
    return (
        <>
            <div><Link to="/characters">Back</Link></div>
            <FormCreateCharacter />
        </>
    )
}