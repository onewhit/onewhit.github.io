import React, { useState, useContext } from 'react';
import { clear_collection, create_document, get_is_collection_exists } from "../firebase.jsx";
import { GlobalContext } from "../global_context";
import capitalize_each_word from "./capitalize_each_word.js";

const FileReaderForm = () => {
    const [file, set_file] = useState(null);
    const [collection_name, set_collection_name] = useState(null);
    const global_context = useContext(GlobalContext);

    const handle_file_change = (event) => {set_file(event.target.files[0]);};
    const handle_collection_change = (event) => {set_collection_name(event.target.value);};

    const handle_submit = async (event) => {
        event.preventDefault();

        // Check to make sure the collection exists
        const is_collection_exists = await get_is_collection_exists(collection_name);

        let confirm_message = "This will remove all documents from the " + collection_name + " collection, and replace them with the lines in the specified file. Do you want to proceed?";

        if (!is_collection_exists) {
            confirm_message = "Collection does not exist. Are you sure you want to create a collection called \"" + collection_name + "\"?";
        }

        const is_proceed = confirm(confirm_message);

        if (!is_proceed) {
            global_context.replace_banner("Cancelled collection overwrite.");
            return;
        }

        global_context.replace_banner("Starting collection overwrite...");

        await clear_collection(collection_name, global_context.append_indent_banner);

        global_context.append_indent_banner("Done deleting existing documents.");
        global_context.append_banner("Adding documents from specified file");

        const fileReader = new FileReader();

        fileReader.onload = (event) => {
            const fileContent = event.target.result;
            const lines = fileContent.split('\n');

            create_documents_from_lines(lines, collection_name);

            global_context.append_banner("Done adding documents from specified file.");
        };
        fileReader.readAsText(file);
    };

    function create_documents_from_lines(lines, collection_name) {
        // De-duplicate the lines and make them all lowercase, and trim leading and trailing whitespace and newlines
        const deduped_lines = [...new Set(lines.map((string) => string.toLowerCase().replace(/^\s+|\s+$/g, '')))]

        deduped_lines.forEach((line) => {
            const document_key = line.replaceAll(" ", "_");
            const document_display_name = capitalize_each_word(line);
            global_context.append_indent_banner("Creating document \"" + document_display_name + "\"");
            create_document(collection_name, document_key, {
                display_name: document_display_name
            });
        });
    }

    const form_label_style = {
        fontWeight: "bold"
    }

    return (
        <form onSubmit={handle_submit}>
            <h3>File Upload to Overwrite Firebase Collection</h3>
            <br />
            <p style={form_label_style}><label htmlFor="id_file_upload">Text File (each line = one document display name):</label></p>
            <p><input id="id_file_upload" type="file" onChange={handle_file_change} required /></p>
            <br />
            <p style={form_label_style}><label htmlFor="id_collection_name">Firestore Collection Name to Overwrite:</label></p>
            <p><input id="id_collection_name" type="text" onChange={handle_collection_change} required /></p>
            <br />
            <p><button type="submit">Upload</button></p>
        </form>
    );
};

export default FileReaderForm;