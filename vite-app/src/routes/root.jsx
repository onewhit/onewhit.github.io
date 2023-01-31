import React from "react";
import { useState, useContext, useEffect } from "react";
import { Outlet, Link, useLocation, Form } from "react-router-dom";
import { GlobalContext } from "../global_context";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import ajax_loader from "../public/ajax_loader.gif";

export default function Root() {
    let title_style = {
        textDecoration: 'none',
        color: '#121212',
    }

    // const global_context = useContext(GlobalContext);

    // Top Level State Values
    const [global_context, set_global_context] = useState(useContext(GlobalContext));
    // const [modified_global_context, set_modified_global_context] = useState(global_context);
    const [user, set_user] = useState(null)

    useEffect(() => {
        return onAuthStateChanged(getAuth(), (user) => {
            set_global_context({
                ...global_context,
                user: user,
                is_auth_checked: true
            });
        });
    },[]);

    return (
        <GlobalContext.Provider value={global_context}>
            <React.Fragment>
                <div id="sidebar">
                    <div>
                        <Link style={title_style} to={"/"}>
                            <h1>RPG Generator</h1>
                        </Link>
                    </div>
                    <div>(Work in Progress)</div>

                    { global_context.is_auth_checked ? <><MainNavigation /><Details /></> : <LoadingScreen />}
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
    return (
        <div id="detail">
            {useLocation().pathname == "/" ? <LandingContent /> : <Outlet />}
        </div>
    );
}

function MainNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'item_generator'}>Item Generator</Link>
                </li>
                <li>
                    <Link to={'npc_generator'}>NPC Generator</Link>
                </li>
                <li>
                    <Link to={'character_tracker'}>Character Tracker</Link>
                </li>
                <li>
                    <Link to={'account_info'}>Account Info</Link>
                </li>
            </ul>
        </nav>
    );
}

function LandingContent() {
    return (
        <React.Fragment>
            <div>Landing page</div>
        </React.Fragment>
    )
}