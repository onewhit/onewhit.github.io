import { get_attribute, get_attributes_by_tag } from "../firebase.jsx";
import { useState, useContext } from "react";
import FileReaderForm from "../components/file_reader_form.jsx";
import GlobalContext from "../global_context.jsx";
import { LoginForm } from "./account_info.jsx";
import FileWriterForm from "../components/file_writer_form.jsx";

export default function DataManager() {

    const global_context = useContext(GlobalContext);

    return (
        <>
            {global_context.user == null
                ? <><p>Log in to view this content</p><LoginForm /></>
                : <>
                    <p>File Uploads to Merge to Lists</p>
                    <FileReaderForm collection_name="item" />
                    <FileReaderForm collection_name="attribute" />

                    <p><span style={{fontWeight: "bold"}}>NOTE: </span>Single value text file uploads will treat each line of a file as a document. The document key will be the line cast to lowercase and with spaces replaced with underscores. The document will get one attribute called "display_name" which will be each word of the line capitalized.</p>

                    <p>Download collection as file</p>
                    <div>
                        <FileWriterForm collection_name="item" />{" "}
                        <FileWriterForm collection_name="attribute" />
                    </div>
                </>
            }
            
        </>
    )
}