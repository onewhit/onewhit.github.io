const default_character_data = {
    full_name: "",
    short_name: "",
    story_role: "",
    current_hp: 10,
    current_ap: 10,
    max_hp: 10,
    notes: "",
    items: [],
    abilities: [],
    unsubscribe_function: default_unsubscribe_function,
};

function default_unsubscribe_function() {};

export default default_character_data;