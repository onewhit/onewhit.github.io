import DataContext from "../contexts/data_context.jsx";
import { useContext, useState, createContext } from "react";
import ButtonLink from "../components/button_link.jsx";
import Colors from "../utility/colors.jsx";
import FormItemEdit from "../forms/form_item_edit.jsx";

export default function Items() {

    const [item_id_to_edit, set_item_id_to_edit] = useState(undefined);
    const [flash_message, set_flash_message] = useState(undefined);

    const data_context = useContext(DataContext);

    const sorted_items = data_context.get_sorted_item_list();

    const max_table_width = get_sufficient_table_width(sorted_items);

    function create_new_item(event) {
        event.preventDefault();
        const new_item_data = {
            "test_item_1": {
                "display_name":"Test Item",
                "description":"Just some filler description text"
            }
        }
        data_context.create_or_edit_item(new_item_data);
    }

    return (
        <>
            {/* <div><button onClick={create_new_item}>Create New Item</button></div> */}
            <FormItemEdit item_id_to_edit={item_id_to_edit} set_item_id_to_edit={set_item_id_to_edit} set_flash_message={set_flash_message}/>
            {flash_message != undefined && <div>{" "}{flash_message}</div>}
            <h3>Items</h3>
            {
                sorted_items.map((item, index) => <ItemRow key={item.id} item_data={item} row_num={index + 1} set_item_id_to_edit={set_item_id_to_edit} set_flash_message={set_flash_message} />)
            }
        </>
    );
}

function ItemRow ({item_data, row_num, set_item_id_to_edit, set_flash_message}) {

    const row_style = {
        display: "flex",
        backgroundColor: (row_num % 2 == 1 ? Colors.disabled_grey : Colors.white),
        justifyContent: "space-between",
        maxWidth: "20rem"
    }

    function setup_edit(event) {
        event.preventDefault();
        set_item_id_to_edit(event.target.value);
        set_flash_message(undefined);
    }

    return (<>
        <div style={row_style} key={item_data.id}>
            <div>{item_data.display_name}</div>
            <div><button value={item_data.id} onClick={setup_edit}>edit</button></div>
        </div>
    </>);
}

function get_sufficient_table_width(items) {
    let max_width = 0;
    // items.forEach((item) => {
    //     console.log(item.display_name)
    // });
    return "50em";
}