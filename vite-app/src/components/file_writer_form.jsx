import capitalize_each_word from "../utility/capitalize_each_word";
import { get_all_documents } from "../firebase.jsx";

export default function FileWriterForm ({ collection_name }) {

    async function handle_download(event) {
        event.preventDefault();
        const all_docs = await get_all_documents(collection_name);

        let all_data_objs = {};

        all_docs.forEach((doc) => {
            all_data_objs[doc.id] = doc.data();
        });

        const data_json = JSON.stringify(all_data_objs);

        const the_blob = new Blob([data_json], {type: "text/plain" });
        const the_url = URL.createObjectURL(the_blob);
        const link = document.createElement("a");
        link.download = "rpg_assistant_" + collection_name + ".json";
        link.href = the_url;
        link.click();
    }

    return (
        <button type="submit" onClick={handle_download}>Download {capitalize_each_word(collection_name)}</button>
    );
}