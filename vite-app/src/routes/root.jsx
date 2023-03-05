import React from "react";
import { useState, useContext, useEffect, useCallback } from "react";
import { Outlet, Link, useLocation, Form, NavLink, useNavigate } from "react-router-dom";
import GlobalContext from "../contexts/global_context.jsx";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import ajax_loader from "../../assets/ajax_loader.gif";
import DetailsLayout from "../components/details_layout.jsx";
import Colors from "../utility/colors.jsx";
import configs from "../utility/configs.jsx";
import ham_menu_black from "../../assets/ham_menu_black.svg";
import back_arrow from "../../assets/back_arrow.svg";
import MainNavigation from "../components/main_navigation.jsx";
import AccountInfo from "./account_info";
import ErrorPage from "./error_page";
import useFirestoreData from "../hooks/useFirestoreData.jsx";
import useSpoofData from "../hooks/useSpoofData.jsx";
import DataContext from "../contexts/data_context.jsx";
import Rightbar from "../components/rightbar.jsx";

export default function Root({ is_error=false }) {

    // const data_context = useFirestoreData();
    const data_context = useSpoofData();

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

    function toggle_is_show_rightbar() {
        return set_global_context((old_context) => ({
            ...old_context,
            is_show_rightbar: !old_context.is_show_rightbar
        }));
    }

    function set_rightbar_content (new_content) {
        return set_global_context((old_context) => ({
            ...old_context,
            rightbar_content: new_content
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
            toggle_is_show_rightbar: toggle_is_show_rightbar,
            set_rightbar_content: set_rightbar_content,
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
        position: "relative",
    }

    if (global_context.is_mobile_view) {
        // root_style.flexDirection = "column"
    }

    return (
        <GlobalContext.Provider value={global_context}>
            <DataContext.Provider value={data_context}>
                <div style={root_style}>
                    {(global_context.is_show_sidebar || !global_context.is_mobile_view) && <Sidebar />}
                    {global_context.is_auth_checked ? <Details is_error={is_error} /> : <LoadingScreen />}
                    {global_context.is_show_rightbar ? <Rightbar /> : ""}
                </div>
            </DataContext.Provider>
        </GlobalContext.Provider>
    );
}

// =============================================================================
// Title Bar
// =============================================================================

function TitleBar () {

    const global_context = useContext(GlobalContext);

    const navigate = useNavigate();

    function handle_title_icon_click(event) {
        event.preventDefault();
        global_context.toggle_is_show_sidebar();
    }

    const title_bar_style = {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        marginBottom: "1em",
    }

    const title_link_style = {
        textDecoration: 'none',
        color: '#121212',
        display: "inline",
        paddingLeft: "2em",
        paddingRight: "2em",
        fontSize: "1.5em",
        fontWeight: "bold",
        // flexGrow: "1",
    }

    const title_icon_style = {
        height: "1em",
        width: "auto",
        marginRight: "1em",
        marginLeft: "1em",
        position: "absolute",
        left: "0"
    }

    const title_icon = (global_context.is_show_sidebar ? back_arrow : ham_menu_black)

    function handle_title_click() {
        navigate("/");
        global_context.toggle_is_show_sidebar();
    }

    return (
        <div style={title_bar_style}>
            {global_context.is_mobile_view && <img className="hover-element" src={title_icon} style={title_icon_style} onClick={handle_title_icon_click}/>}
            <div className="hover-element" style={title_link_style} onClick={handle_title_click}>{global_context.site_title}</div>
        </div>
    );
}

// =============================================================================
// Sidebar
// =============================================================================

function Sidebar () {
    const global_context = useContext(GlobalContext);

    function handle_off_click(event) {
        event.preventDefault();
        global_context.toggle_is_show_sidebar();
    }

    let sidebar_style = {
        backgroundColor: Colors.sidebar_grey,
        // padding: "1rem",
        borderRight: "solid 1px #e3e3e3",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "stretch",
        textAlign: "center",
        paddingTop: "1rem",
        // paddingLeft: "1rem",
        // paddingRight: "1rem",
        // width: "15em",
        flexShrink: "0",
    }

    if (global_context.is_mobile_view) {
        sidebar_style = {
            ...sidebar_style,
            flexShrink: "1",
        }
    }

    const overlay_style = {
        position: "fixed",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        zIndex: "10",
        display: "flex",
        alignItems: "stretch",
    }

    const off_click_area_style = {
        flexShrink: 0,
        flexGrow: 1,
        backgroundColor: Colors.sidebar_grey,
        opacity: ".75",
    }

    return (
        global_context.is_mobile_view
        ?
            <div style={overlay_style}>
                <div style={sidebar_style}>
                    <TitleBar />
                    { global_context.is_auth_checked ? <MainNavigation /> : <LoadingScreen />}
                </div>
                <div style={off_click_area_style} onClick={handle_off_click} className="hover-element"></div>
            </div>

        :
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

function Details({ is_error = false }) {
    const global_context = useContext(GlobalContext);

    const detail_style = {
        padding: "1rem",
        flexGrow: "1",
        flexShrink: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    }

    return (
        <div id="detail" style={detail_style}>
            {
                is_error
                ? <ErrorPage />
                : <>
                    {global_context.is_mobile_view && <TitleBar /> }
                    {/* {global_context.user == null ? <DetailsLayout page_title="Log in to Access Tool" children={<AccountInfo />} /> : <Outlet />} */}
                    <Outlet />
                </>
            }
        </div>

    );
}