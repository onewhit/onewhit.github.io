import { useContext } from "react";
import GlobalContext from "../global_context.jsx";
import { NavLink } from "react-router-dom";

export default function MainNavigation () {

    const global_context = useContext(GlobalContext);

    const link_style = {
        textDecoration: "none",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        display: "block",
        textAlign: "center",
        borderTop: "solid 1px #e3e3e3",
        padding: "1rem",
    }

    const list_items = [];

    function handle_main_nav_click(event) {
        global_context.clear_banner();
        global_context.toggle_is_show_sidebar();
    }


    if (global_context.user != null && global_context.user.uid != null) {
        list_items.push(<NavLink key="menu_item_1" className="main_nav_link" style={link_style} onClick={handle_main_nav_click} to={'item_generator'}>Item Generator</NavLink>);
        list_items.push(<NavLink key="menu_item_2" className="main_nav_link" style={link_style} onClick={handle_main_nav_click} to={'npc_generator'}>NPC Generator</NavLink>);
        list_items.push(<NavLink key="menu_item_3" className="main_nav_link" style={link_style} onClick={handle_main_nav_click} to={'character_tracker'}>Character Tracker</NavLink>);
    }

    list_items.push(<NavLink key="menu_item_4" className="main_nav_link" style={link_style} onClick={handle_main_nav_click} to={'account_info'}>Account Info</NavLink>);

    return (
        <>{list_items}</>
    );
}