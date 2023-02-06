import React from "react";
import { useState, useContext, useEffect, useCallback } from "react";
import { Outlet, Link, useLocation, Form, NavLink, useNavigate } from "react-router-dom";
import GlobalContext from "../global_context";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import ajax_loader from "../../assets/ajax_loader.gif";
import DetailsLayout from "../components/details_layout.jsx";
import colors from "../utility/colors.jsx";
import configs from "../utility/configs.jsx";
import ham_menu_black from "../../assets/ham_menu_black.svg";
import back_arrow from "../../assets/back_arrow.svg";
import MainNavigation from "../components/main_navigation.jsx";
import AccountInfo from "./account_info";

export default function Root() {

    // Top Level State Values
    const [global_context, set_global_context] = useState(useContext(GlobalContext));

    // const [modified_global_context, set_modified_global_context] = useState(global_context);
    const [user, set_user] = useState(null);
    const [window_width, set_window_width] = useState(window.innerWidth);
    const [window_height, set_window_height] = useState(window.innerHeight);
    const [is_mobile_view, set_is_mobile_view] = useState(window.innerWidth < configs.mobile_collapse_point ? true : false);
    // const [is_show_sidebar, toggle_is_show_sidebar] = useState(global_context.is_show_sidebar);

    function toggle_is_show_sidebar() {
        return set_global_context((old_context) => ({
            ...old_context,
            is_show_sidebar: !old_context.is_show_sidebar
        }));
    }

    function update_window_dimensions() {
        const new_is_mobile_view = (window.innerWidth < configs.mobile_collapse_point ? true : false)
        set_window_width(window.innerWidth);
        set_window_height(window.innerHeight);
        set_is_mobile_view(new_is_mobile_view)
        set_global_context((old_context) => ({
            ...old_context,
            window_width: window.innerWidth,
            window_height: window.innerHeight,
            is_mobile_view: new_is_mobile_view,
        }));
    }

    // Allow anything with access to the context to also edit the context
    useEffect(() => {
        // // Add the banner state and function
        set_global_context((old_context) => ({
            ...old_context,
            set_global_context: set_global_context,
            toggle_is_show_sidebar: toggle_is_show_sidebar,
        }));
    },[]);

    // Set up window sizing listeners
    useEffect(() => {
        update_window_dimensions();
        window.addEventListener("resize", update_window_dimensions);
        // The returned value executes on unmount
        return (() => window.removeEventListener("resize", update_window_dimensions))
    }, []);

    useEffect(() => {
        // Queue up the auth state changes
        onAuthStateChanged(getAuth(), (user) => {
            set_global_context((old_context) => ({
                ...old_context,
                user: user,
                is_auth_checked: true
            }));
        });
    },[]);

    const root_style = {
        display: "flex",
        flexGrow: "1",
        fontFamily: "sans-serif",
    }

    if (global_context.is_mobile_view) {
        // root_style.flexDirection = "column"
    }

    return (
        <GlobalContext.Provider value={global_context}>
            <div style={root_style}>
                {(global_context.is_show_sidebar || !global_context.is_mobile_view) && <Sidebar />}
                { global_context.is_auth_checked ? <Details /> : <LoadingScreen />}
            </div>
        </GlobalContext.Provider>
    );
}

// =============================================================================
// Title Bar
// =============================================================================

function TitleBar () {

    const global_context = useContext(GlobalContext);

    function handle_title_icon_click(event) {
        event.preventDefault();
        global_context.toggle_is_show_sidebar();
    }

    const title_bar_style = {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        marginBottom: "1em"
    }

    const title_link_style = {
        textDecoration: 'none',
        color: '#121212',
        display: "inline",
        paddingLeft: "1.5em",
        paddingRight: "1.5em",
        fontSize: "1.5em",
        fontWeight: "bold",
        // flexGrow: "1",
    }

    const title_icon_style = {
        height: "1em",
        width: "auto",
        marginRight: "1em",
        position: "absolute",
        left: "0"
    }

    const title_icon = (global_context.is_show_sidebar ? back_arrow : ham_menu_black)

    return (
        <div style={title_bar_style}>
            {global_context.is_mobile_view && <img className="hover-element" src={title_icon} style={title_icon_style} onClick={handle_title_icon_click}/>}
            <Link style={title_link_style} to={"/"}>{global_context.site_title}</Link>
        </div>
    );
}

// =============================================================================
// Sidebar
// =============================================================================

function Sidebar () {
    const global_context = useContext(GlobalContext);

    let sidebar_style = {
        backgroundColor: colors.sidebar_grey,
        // padding: "1rem",
        borderRight: "solid 1px #e3e3e3",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "stretch",
        textAlign: "center",
        paddingTop: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
    }

    if (global_context.is_mobile_view) {
        sidebar_style = {
            ...sidebar_style,
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            right: "15%",
            zIndex: "10",
        }
    }

    return (
        <div style={sidebar_style}>
            <TitleBar />
            { global_context.is_auth_checked ? <MainNavigation /> : <LoadingScreen />}
        </div>
    );
}

function LoadingScreen() {
    return (
        <img height="25rem" width="25rem" src={ajax_loader} />
    );
}

function Details() {
    const global_context = useContext(GlobalContext);

    const detail_style = {
        padding: "1rem",
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    }

    return (
        <div id="detail" style={detail_style}>
            {global_context.is_mobile_view && <TitleBar /> }
            {/* {global_context.user == null ? <DetailsLayout page_title="Log in to Access Tool" children={<AccountInfo />} /> : <Outlet />} */}
            <Outlet />
        </div>
    );
}