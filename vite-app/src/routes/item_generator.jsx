import { get_attribute, get_attributes_by_tag } from "../firebase.jsx";
import { useState } from "react";
import FileReaderForm from "../utility/file_reader_form.jsx";
// import FileReaderFormMultiple from "../utility/file_reader_form_multiple.jsx";

export default function ItemGenerator() {

    return (
        <>
        {/* <div>Here is the item generator content</div> */}
        {/* <button onClick={(event) => get_attribute("greed")}>Get Attribute</button> */}
        {/* <button onClick={(event) => get_attributes_by_tag("item")}>Get Attributes by tag</button> */}
        {/* <FormUploadItemList /> */}
        <FileReaderForm />
        {/* <FileReaderFormMultiple /> */}
        </>
    )
}

// function FormUploadItemList () {

//     const [item_file_path, set_item_file_path] = useState("");

//     console.log(item_file_path);

//     return (<>
//         <form>
//             <label htmlFor="id_item_file_upload">File Path</label>
//             <input type="file" id="id_item_file_upload" name="item_file_upload" value={item_file_path} onChange={(event) => set_item_file_path(event.target.value)}></input>
//         </form>
//     </>);
// }