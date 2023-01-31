import React from "react";
import { useState, useContext, useEffect } from "react";
import { Outlet, Link, useLocation, Form } from "react-router-dom";
import { GlobalContext } from "../global_context";
import { onAuthStateChanged, getAuth } from "firebase/auth";

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
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            console.log(user?.email)
            set_global_context({
                ...global_context,
                user: user
            });
        });

        return unsubscribe;
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
                </div>
                <div id="detail">
                    {useLocation().pathname == "/" ? <LandingContent /> : <Outlet />}
                </div>
            </React.Fragment>
        </GlobalContext.Provider>
    );
}

function LandingContent() {
    return (
        <React.Fragment>
            <div>Landing page</div>
        </React.Fragment>
    )
}