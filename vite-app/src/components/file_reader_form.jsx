import React, { useState, useContext } from 'react';
import { clear_collection, create_document, get_is_collection_exists } from "../firebase.jsx";
import GlobalContext from "../global_context";
import capitalize_each_word from "../utility/capitalize_each_word.js";

const FileReaderForm = ({ collection_name }) => {
    const [file, set_file] = useState(null);
    const global_context = useContext(GlobalContext);
    
    const file_format_options = [...(new Set([
        "Text File",
        "JSON Collection Download"
    ]))];

    const [file_format, set_file_format] = useState(file_format_options[0]);

    const handle_file_change = (event) => {set_file(event.target.files[0]);};

    const handle_submit = async (event) => {
        event.preventDefault();

        // Check to make sure the collection exists
        // const is_collection_exists = await get_is_collection_exists(collection_name);

        // let confirm_message = "This will remove all documents from the " + collection_name + " collection, and replace them with the lines in the specified file. Do you want to proceed?";

        // if (!is_collection_exists) {
        //     confirm_message = "Collection does not exist. Are you sure you want to create a collection called \"" + collection_name + "\"?";
        // }

        // const is_proceed = confirm(confirm_message);

        // if (!is_proceed) {
        //     global_context.replace_banner("Cancelled collection overwrite.");
        //     return;
        // }

        global_context.replace_banner("Starting collection merge...");

        // await clear_collection(collection_name, global_context.append_indent_banner);

        // global_context.append_indent_banner("Done deleting existing documents.");
        // global_context.append_banner("Adding documents from specified file");

        const fileReader = new FileReader();

        fileReader.onload = (event) => {
            const file_content = event.target.result;
            
            if (file_format == "Text File") {
                create_documents_from_lines(file_content);
            }
            else if (file_format == "JSON Collection Download") {
               create_documents_from_json(file_content)
            }
            global_context.append_inline_banner("Success.");
        }
        
        fileReader.readAsText(file);
    };

    function create_documents_from_lines(file_content) {
        
        const lines = file_content.split('\n');

        // De-duplicate the lines and make them all lowercase, and trim leading and trailing whitespace and newlines
        const deduped_lines = [...new Set(lines.map((string) => string.toLowerCase().replace(/^\s+|\s+$/g, '')))]

        deduped_lines.forEach((line) => {
            const document_key = line.replaceAll(" ", "_");
            const document_display_name = capitalize_each_word(line);
            // global_context.append_indent_banner("Creating document \"" + document_display_name + "\"");
            create_document(collection_name, document_key, {
                display_name: document_display_name
            });
        });
    }

    function create_documents_from_json(file_json) {
        const doc_objs = JSON.parse(file_json);
        Object.entries(doc_objs).forEach((entry) => {
            // global_context.append_indent_banner("Creating document \"" + entry[1].display_name + "\"");
            return create_document(collection_name, entry[0], entry[1])
        });
    }

    const form_style = {
        paddingBottom: "1em"
    }

    return (<>
        <form style={form_style} onSubmit={handle_submit}>
            <label htmlFor="id_file_upload">{capitalize_each_word(collection_name)}</label><br />
            <label>File: </label>
            <input id="id_file_upload" type="file" onChange={handle_file_change} required /><br />
            <label>Format: </label>
            <select value={file_format} onChange={(event) => set_file_format(event.target.value)}>
                {file_format_options.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <br />
            <button type="submit">Upload</button>
        </form>
    </>);
};

export default FileReaderForm;