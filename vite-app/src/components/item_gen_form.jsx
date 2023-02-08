import { useState, useContext } from "react";
import GlobalContext from "../global_context.jsx";
import ajax_loader from "../../assets/ajax_loader.gif";
import { get_random_int, get_random_array_element } from "../routes/generator.jsx";
import item_file_string from "../official_data/item.csv?raw";
import attribute_file_string from "../official_data/attribute.csv?raw";
import capitalize_each_word from "../utility/capitalize_each_word.js";

const item_output_style = {
    width: "20em"
}

export default function ItemGenForm () {
    const global_context = useContext(GlobalContext);
    const [item_output, set_item_output] = useState("");
    const [is_loading_item, set_is_loading_item] = useState(false);

    async function handle_gen_item_click(event) {
        event.preventDefault();
        set_is_loading_item(true);

        const items_array = create_array_from_file(item_file_string);
        const attributes_array = create_array_from_file(attribute_file_string);

        const name_obj = {
            item: get_random_array_element(items_array)[1],
            prefix: null,
            suffix: null,
        };

        const [picked_attribute_row_index, picked_attribute_row] = get_random_array_element(attributes_array);
        const picked_attribute_array = clean_and_split_attribute_row(picked_attribute_row);
        const attribute_obj = get_random_attribute_form(picked_attribute_array);

        if (attribute_obj.type == "prefix") {
            name_obj.prefix = attribute_obj.value;
        }
        else if (attribute_obj.type == "suffix") {
            name_obj.suffix = attribute_obj.value;
        }

        // One in 20 chance to add an extra attribute to the item name
        const is_extra = get_weighted_is_true(20);
        // const is_extra = true;
        if (is_extra) {
            const is_exclude_prefix = (name_obj.prefix != null);
            const is_exclude_suffix = (name_obj.suffix != null);

            // Ignore attribute rows that are missing the desired fragment (prefix vs suffix)
            const filtered_attributes_array = attributes_array.filter((row) => {
                const attribute_obj = get_attribute_obj_from_line(row);
                let is_valid_row = true;

                if (is_exclude_prefix) {
                    is_valid_row = attribute_obj.suffix_1 != "" || attribute_obj.suffix_2 != null
                }
                if (is_exclude_suffix) {
                    is_valid_row = attribute_obj.prefix_1 != "" || attribute_obj.prefix_2 != null
                }

                return is_valid_row;
            });

            // Get any of the remaining attributes that aren't the previously picked one
            const [extra_picked_attribute_index, extra_picked_attribute_row] = get_random_array_element(filtered_attributes_array, [picked_attribute_row_index]);
            const extra_picked_attribute_array = clean_and_split_attribute_row(extra_picked_attribute_row);

            // pick the opposite of whatever the previous attribute was, suffix vs prefix

            const extra_attribute_obj = get_random_attribute_form(extra_picked_attribute_array, is_exclude_prefix, is_exclude_suffix);

            if (extra_attribute_obj.type == "prefix") {
                name_obj.prefix = extra_attribute_obj.value;
            }
            else if (extra_attribute_obj.type == "suffix") {
                name_obj.suffix = extra_attribute_obj.value;
            }
        }

        const prefix_string = capitalize_each_word(name_obj.prefix != null ? name_obj.prefix + " ": "");
        const suffix_string = capitalize_each_word(name_obj.suffix != null ? " of " + name_obj.suffix: "");

        set_item_output("The " + prefix_string + name_obj.item + suffix_string);

        set_is_loading_item(false);
    }

    return (
        <form>
            <div className="gapdiv"><button type="submit" onClick={handle_gen_item_click}>Generate an item</button></div>
            {
                is_loading_item
                ? <img height="25rem" width="25rem" src={ajax_loader} />
                : <div className="gapdiv"><input style={item_output_style} type="text" value={item_output} readOnly></input></div>
            }
        </form>
    );
}

function clean_and_split_attribute_row(attribute_row) {
    return attribute_row.split(",").map((element) => {
        return element.replace("\r","");
    });
}

function get_attribute_obj_from_line(line) {
    const attribute_row = line.split(",").map((element) => element.replace("\r", ""));
    return {
        rarity: attribute_row[0],
        prefix_1: attribute_row[1],
        prefix_2: attribute_row[2],
        suffix_1: attribute_row[3],
        suffix_2: attribute_row[4],
    };
}

function get_column_of_array_list(the_array_list, column_index) {
    const single_column_array = the_array_list.map((row) => {
        return (row.split(",")[column_index] || "").replace("\r", "");
    });
    return single_column_array.filter((value) => ![null, undefined, "", "\r"].includes(value));
}

function create_array_from_file (raw_string_import) {
    // const file_request = await fetch(path);
    // const file_string = await file_request.text();
    const line_array = raw_string_import.split("\n");
    line_array.shift();
    return line_array;
}

function get_weighted_is_true(n_to_1_false) {
    const weighted_binary_array = [
        ...Array(9).fill(false),
        true
    ];

    return weighted_binary_array[get_random_int(0,weighted_binary_array.length-1)]
}

function get_random_attribute_form(attribute_row, is_exclude_prefix=false, is_exclude_suffix=false) {

    // =====================================================================
    // Pick a random form of the picked attribute
    // =====================================================================

    const attribute = {
        rarity: attribute_row[0].replace("\r", ""),
        prefix_1: attribute_row[1].replace("\r", ""),
        prefix_2: attribute_row[2].replace("\r", ""),
        suffix_1: attribute_row[3].replace("\r", ""),
        suffix_2: attribute_row[4].replace("\r", ""),
    };

    const attribute_forms = []

    if (!is_exclude_prefix) {
        if (attribute.prefix_1 != "") {
            attribute_forms.push({type: "prefix", value: attribute.prefix_1});
        }

        if (attribute.prefix_2 != "") {
            attribute_forms.push({type: "prefix", value: attribute.prefix_2});
        }
    }

    if (!is_exclude_suffix) {
        if (attribute.suffix_1 != "") {
            attribute_forms.push({type: "suffix", value: attribute.suffix_1});
        }

        if (attribute.suffix_2 != "") {
            attribute_forms.push({type: "suffix", value: attribute.suffix_2});
        }
    }

    return get_random_array_element(attribute_forms)[1];
}