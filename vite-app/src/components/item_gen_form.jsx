import { useState, useContext } from "react";
import GlobalContext from "../global_context.jsx";
import ajax_loader from "../../assets/ajax_loader.gif";
import { get_random_int, get_random_array_element, get_array_between } from "../routes/generator.jsx";
import item_file_string from "../official_data/item.csv?raw";
import attribute_file_string from "../official_data/attribute.csv?raw";
import capitalize_each_word from "../utility/capitalize_each_word.js";
import download_object_to_json_file from "../utility/download_object_to_json_file.jsx";
import item_file from "../official_data/items.json";
import attribute_file from "../official_data/attributes.json";
import build_array_repeat from "../utility/build_array_repeat.jsx";

const item_output_style = {
    width: "20em"
}

export default function ItemGenForm () {
    const global_context = useContext(GlobalContext);
    const [item_output, set_item_output] = useState("");
    const [is_loading_item, set_is_loading_item] = useState(false);
    
    const generate_modes = [
        {key: "weighted", value: "Weighted Random"},
        {key: "full_random", value: "Full Random"},
        {key: "specific", value: "Specific Structure"},
    ];

    const weight_options = get_array_between(0,100).map((num) => ({key: num, value: num}));

    const [no_attribute_weight, set_no_attribute_weight] = useState(1);
    const [one_attribute_weight, set_one_attribute_weight] = useState(10);
    const [two_attribute_weight, set_two_attribute_weight] = useState(2);
    const [three_attribute_weight, set_three_attribute_weight] = useState(1);
    
    const [power_chance, set_power_chance] = useState(10);

    const [generate_mode, set_generate_mode] = useState(generate_modes[0].key);
    const [is_generate_suffix, set_is_generate_suffix] = useState(true);

    const [is_prefix, set_is_prefix] = useState(false);
    const [is_suffix, set_is_suffix] = useState(false);
    const [is_suffix_prefix, set_is_suffix_prefix] = useState(false);

    async function handle_gen_item_click(event) {
        event.preventDefault();
        set_is_loading_item(true);

        const item_obj = item_file;
        const picked_item = {
            ...get_random_array_element(item_obj)[1],
            prefix: "",
            suffix_prefix: "",
            suffix: "",
            power: "",
        };

        // =====================================================================
        // Generate the item based on weighted values
        // =====================================================================
        if (generate_mode == "weighted" ) {
            const num_attributes_weighted_array = [
                ...build_array_repeat(no_attribute_weight, 0),
                ...build_array_repeat(one_attribute_weight, 1),
                ...build_array_repeat(two_attribute_weight, 2),
                ...build_array_repeat(three_attribute_weight, 3),
            ]

            const num_attributes = get_random_array_element(num_attributes_weighted_array)[1];

            // console.log(num_attributes_weighted_array)
            
            const is_power = get_random_array_element([
                ...Array(power_chance).fill(true),
                ...Array(100-power_chance).fill(false)
            ])[1];

            const picked_attributes = [];

            for (let i = 0; i < num_attributes; i++) {
                // Filter to just the attribute groups that have values the item doesn't have yet
                const filtered_attribute_file = attribute_file.filter((row) => {
                    let is_valid_row = false;

                    row.forEach((attribute_form) => {
                        if (picked_item.prefix == "" && attribute_form.type == "prefix") {
                            is_valid_row = true;
                        }
                        if (picked_item.suffix == "" && attribute_form.type == "suffix") {
                            is_valid_row = true;
                        }
                        if (picked_item.suffix_prefix == "" && num_attributes > 2 && attribute_form.type == "prefix") {
                            is_valid_row = true;
                        }
                    });

                    return is_valid_row;
                });
                const [picked_attribute_index, picked_attribute_group] = get_random_array_element(filtered_attribute_file, picked_attributes.map((item) => item[0]));
                
                // Keep track of picked attributes so we don't repick them again
                picked_attributes.push([picked_attribute_index, picked_attribute_group]);

                // Randomly pick one of the attribute forms that's compatible with the remaining emtpy item slots
                const filtered_attribute_group = picked_attribute_group.filter((attribute_form) => {
                    let is_valid_attribute = false;

                    if (attribute_form.type == "prefix") {
                        if (picked_item.prefix == "") {
                            is_valid_attribute = true;
                        }
                        else if (picked_item.suffix_prefix == "" && num_attributes == 3) {
                            is_valid_attribute = true;
                        }
                    }
                    else if (attribute_form.type == "suffix" && picked_item.suffix == "") {
                        is_valid_attribute = true;
                    }

                    return is_valid_attribute;
                });

                const picked_attribute_form = get_random_array_element(filtered_attribute_group)[1];
                
                if (picked_attribute_form.type == "prefix") {
                    if (picked_item.prefix == "") {
                        picked_item.prefix = picked_attribute_form.value;
                    }
                    else {
                        picked_item.suffix_prefix = picked_attribute_form.value;
                    }
                }
                else if (picked_attribute_form.type == "suffix") {
                    picked_item.suffix = picked_attribute_form.value;
                }
            }

            // console.log(num_attributes);

            set_item_output(build_name_string_from_obj(picked_item));

            // picked_attributes.forEach((item) => {
            //     console.log("One of the attributes");
            //     console.log(item);
            //     console.log(item[1]);
            // });
        }

        // const [picked_attribute_index, picked_attribute] = get_random_array_element(attribute_file);
        // const [picked_attribute_form_index, picked_attribute_form] = get_random_array_element(picked_attribute);

        // if (picked_attribute_form.type == "prefix") {
        //     picked_item.prefix = picked_attribute_form.value;
        // }
        // else if (picked_attribute_form.type == "suffix") {
        //     picked_item.suffix = picked_attribute_form.value;
        // }

        // // // One in 20 chance to add an extra attribute to the item name
        // // const is_extra = get_weighted_is_true(20);
        // const is_extra = true;
        // if (is_extra) {

        //     const is_exclude_prefix = (picked_item.prefix != "");
        //     const is_exclude_suffix = (picked_item.suffix != "");


        //     const [second_attribute_index, second_attribute] = get_random_array_element(filtered_attribute_file, [picked_attribute_index]);

        //     const filtered_attribute_forms = second_attribute.filter((attribute) => attribute.type == (is_exclude_prefix ? "suffix" : "prefix"))

        //     const [second_attribute_form_index, second_attribute_form] = get_random_array_element(second_attribute.filter((attribute) => attribute.type == (is_exclude_prefix ? "suffix" : "prefix")));

        //     if (second_attribute_form.type == "prefix") {
        //         picked_item.prefix = second_attribute_form.value;
        //     }
        //     else if (second_attribute_form.type == "suffix") {
        //         picked_item.suffix = second_attribute_form.value;
        //     }

        // }

        // const prefix_string = picked_item.prefix != null ? capitalize_each_word(picked_item.prefix) + " ": "";
        // const suffix_string = picked_item.suffix != null ? " of " + capitalize_each_word(picked_item.suffix): "";

        // set_item_output("The " + prefix_string + picked_item.item_name + suffix_string);

        set_is_loading_item(false);
    }

    const form_title_style = {
        fontWeight: "bold",
        fontSize: "1.25em"
    }

    let percent_input_style = {
        width: "3em"
    }

    let item_output_style = {
        padding: ".5em",
        backgroundColor: "lightgreen"
    }

    return (
        <form>
            <div className="gapdiv" style={form_title_style}>Generate an Item</div>
            <div className="gapdiv">
                <label htmlFor="generation_mode">Generation Method:</label>{" "}
                <select value={generate_mode} onChange={(event) => set_generate_mode(event.target.value)} id="generation_mode">
                    {generate_modes.map((mode) => <option key={mode.key} value={mode.key}>{mode.value}</option>)}
                </select>
            </div>
            {
                generate_mode == "weighted" && <>
                    <div className="gapdiv">Attribute Count Weights</div>
                    <GenSelect label="---- No Attributes" id_name="no_attribute_weight" start_val={no_attribute_weight} set_val={set_no_attribute_weight} option_array={weight_options} />
                    <GenSelect label="---- One Attribute" id_name="one_attribute_weight" start_val={one_attribute_weight} set_val={set_one_attribute_weight} option_array={weight_options} />
                    <GenSelect label="---- Two Attributes" id_name="two_attribute_weight" start_val={two_attribute_weight} set_val={set_two_attribute_weight} option_array={weight_options} />
                    <GenSelect label="---- Three Attributes" id_name="three_attribute_weight" start_val={three_attribute_weight} set_val={set_three_attribute_weight} option_array={weight_options} />
                    <div className="gapdiv">Percent Chances</div>
                    <GenSelect label="---- Power/Limitation" id_name="power_chance" start_val={power_chance} set_val={set_power_chance} option_array={weight_options} note="%"/>
                </>
            }
            <div className="gapdiv"><button type="submit" onClick={handle_gen_item_click}>Generate</button></div>
            {
                is_loading_item
                ? <img height="25rem" width="25rem" src={ajax_loader} />
                : item_output != "" && <>
                    {/* <div className="gapdiv">Generated Item:{" "}<input style={item_output_style} type="text" value={item_output} readOnly></input></div> */}
                    <div className="gapdiv">Generated Item: <span style={item_output_style}>{item_output}</span></div>
                </>
            }
        </form>
    );
}

function build_name_string_from_obj(picked_name_obj) {
    const prefix_string = picked_name_obj.prefix != "" ? capitalize_each_word(picked_name_obj.prefix) + " ": "";
    const suffix_prefix_string = picked_name_obj.suffix_prefix != "" ? capitalize_each_word(picked_name_obj.suffix_prefix) + " ": "";
    const suffix_string = picked_name_obj.suffix != "" ? " of " + suffix_prefix_string + capitalize_each_word(picked_name_obj.suffix): "";
    const introduction = (picked_name_obj.prefix == "" && picked_name_obj.suffix == "" ? "" : "The ");
    return introduction + prefix_string + picked_name_obj.item_name + suffix_string;
}

function GenSelect ({ label, id_name, start_val, set_val, option_array, note="" }) {
    return (
        <div className="gapdiv">
            <label htmlFor={id_name}>{label}:{" "}</label>
            <select value={start_val} onChange={(event) => set_val(event.target.value)} id={id_name}>
                {option_array.map((option) => <option key={option.key} value={option.key}>{option.value}</option>)}
            </select>{" "}{note}
        </div>
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