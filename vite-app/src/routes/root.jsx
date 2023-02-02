import React from "react";
import { useState, useContext, useEffect } from "react";
import { Outlet, Link, useLocation, Form } from "react-router-dom";
import { GlobalContext } from "../global_context";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import ajax_loader from "../public/ajax_loader.gif";
import DetailsLayout from "../utility/details_layout.jsx";
import colors from "../utility/colors.jsx";

export default function Root() {
    let title_style = {
        textDecoration: 'none',
        color: '#121212',
    }

    // const global_context = useContext(GlobalContext);

    // Top Level State Values
    const [global_context, set_global_context] = useState(useContext(GlobalContext));
    // const [modified_global_context, set_modified_global_context] = useState(global_context);
    const [user, set_user] = useState(null);
    const [banner, set_banner] = useState(null);

    useEffect(() => {
        set_global_context((old_context) => ({
            ...old_context,
            banner: banner,
            set_banner: set_banner,
        }));
        return onAuthStateChanged(getAuth(), (user) => {
            set_global_context((old_context) => ({
                ...old_context,
                user: user,
                is_auth_checked: true
            }));
        });
    },[]);

    return (
        <GlobalContext.Provider value={global_context}>
            <React.Fragment>
                <div style={{display: "flex", flexGrow: "1"}}>
                    <div style={{
                        backgroundColor: colors.sidebar_grey,
                        padding: "1rem",
                        borderRight: "solid 1px #e3e3e3",
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent: "center",
                        alignItems: "stretch",
                    }}>
                        <Link style={title_style} to={"/"}>
                            <h1>RPG Generator</h1>
                        </Link>
                        <div>(Work in Progress)</div>
                        <div style={{paddingTop: "1rem"}}></div>
                        { global_context.is_auth_checked ? <MainNavigation /> : <LoadingScreen />}
                    </div>
                    <div style={{
                        // backgroundColor: colors.sidebar_grey,
                        padding: "1rem",
                    }}>
                        { global_context.is_auth_checked ? <Details /> : <LoadingScreen />}
                    </div>
                </div>
            </React.Fragment>
        </GlobalContext.Provider>
    );
}

function LoadingScreen() {
    return (
        <img src={ajax_loader} />
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
        // justifyContent: "center"
    }

    return (
        <>
            {/* <Link style={link_style} to={'item_generator'}><div>Item Generator</div></Link>
            <Link style={link_style} to={'npc_generator'}><div>NPC Generator</div></Link>
            <Link style={link_style} to={'character_tracker'}><div>Character Tracker</div></Link>
            <Link style={link_style} to={'account_info'}><div>Account Info</div></Link> */}
            <Link style={link_style} to={'item_generator'}>Item Generator</Link>
            <Link style={link_style} to={'npc_generator'}>NPC Generator</Link>
            <Link style={link_style} to={'character_tracker'}>Character Tracker</Link>
            <Link style={link_style} to={'account_info'}>Account Info</Link>
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