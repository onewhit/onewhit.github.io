import React from "react";
import { useState, useContext, useEffect } from "react";
import { Outlet, Link, useLocation, Form, NavLink } from "react-router-dom";
import { GlobalContext } from "../global_context";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import ajax_loader from "../public/ajax_loader.gif";
import DetailsLayout from "../utility/details_layout.jsx";
import colors from "../utility/colors.jsx";
import configs from "../utility/configs.jsx";

export default function Root() {
    let title_style = {
    }

    // const global_context = useContext(GlobalContext);

    // Top Level State Values
    const [global_context, set_global_context] = useState(useContext(GlobalContext));
    // const [modified_global_context, set_modified_global_context] = useState(global_context);
    const [user, set_user] = useState(null);
    const [banner, set_banner] = useState(null);
    const [window_width, set_window_width] = useState(window.innerWidth);
    const [window_height, set_window_height] = useState(window.innerHeight);
    const [is_mobile_view, set_is_mobile_view] = useState(window.innerWidth < configs.mobile_collapse_point ? true : false);

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

    // Set up window sizing listeners
    useEffect(() => {
        update_window_dimensions();
        window.addEventListener("resize", update_window_dimensions);
        // The returned value executes on unmount
        return (() => window.removeEventListener("resize", update_window_dimensions))
    }, []);

    useEffect(() => {
        // Add the banner state and function
        set_global_context((old_context) => ({
            ...old_context,
            banner: banner,
            set_banner: set_banner,
        }));
    },[]);

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
    }

    if (global_context.is_mobile_view) {
        root_style.flexDirection = "column"
    }

    return (
        <GlobalContext.Provider value={global_context}>
            <React.Fragment>
                <div style={root_style}>
                    <div style={{
                        backgroundColor: colors.sidebar_grey,
                        // padding: "1rem",
                        borderRight: "solid 1px #e3e3e3",
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent: "center",
                        alignItems: "stretch",
                        textAlign: "center",
                    }}>
                        <Link style={{
                            textDecoration: 'none',
                            color: '#121212',
                            padding: "1rem",
                        }} to={"/"}>
                            <h1>RPG Generator</h1>
                        </Link>
                        <div style={{textAlign: "center", padding: "1rem"}}>(Work in Progress)</div>
                        <div style={{paddingTop: "1rem"}}></div>
                        { global_context.is_auth_checked ? <MainNavigation /> : <LoadingScreen />}
                        {/* <LoadingScreen /> */}
                    </div>
                    <div style={{
                        // backgroundColor: colors.sidebar_grey,
                        padding: "1rem",
                    }}>
                        { global_context.is_auth_checked ? <Details /> : <LoadingScreen />}
                        {/* <LoadingScreen /> */}
                    </div>
                </div>
            </React.Fragment>
        </GlobalContext.Provider>
    );
}

function LoadingScreen() {
    return (
        <img height="25rem" width="25rem" src={ajax_loader} />
    );
}

function Details() {
    const global_context = useContext(GlobalContext);
    return (
        <div id="detail">
            {useLocation().pathname == "/" ? <LandingContent /> : <Outlet />}
        </div>
    );
}

function MainNavigation() {

    const link_style = {
        textDecoration: "none",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        display: "block",
        textAlign: "center",
        // justifyContent: "center"
        borderTop: "solid 1px #e3e3e3",
        padding: "1rem",
    }

    return (
        <>
            {/* <Link style={link_style} to={'item_generator'}><div>Item Generator</div></Link>
            <Link style={link_style} to={'npc_generator'}><div>NPC Generator</div></Link>
            <Link style={link_style} to={'character_tracker'}><div>Character Tracker</div></Link>
            <Link style={link_style} to={'account_info'}><div>Account Info</div></Link> */}
            <NavLink className="main_nav_link" style={link_style} to={'item_generator'}>Item Generator</NavLink>
            <NavLink className="main_nav_link" style={link_style} to={'npc_generator'}>NPC Generator</NavLink>
            <NavLink className="main_nav_link" style={link_style} to={'character_tracker'}>Character Tracker</NavLink>
            <NavLink className="main_nav_link" style={link_style} to={'account_info'}>Account Info</NavLink>
        </>
    );
}

function LandingContent() {
    return (
        // <React.Fragment>
        //     <div>Landing page</div>
        // </React.Fragment>
        <DetailsLayout page_title="Landing Screen" children={<p>Click on a menu item to see actual content</p>}/>
    )
}