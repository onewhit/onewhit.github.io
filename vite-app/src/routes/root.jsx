import React from "react";
import { Outlet, Link, useLocation, Form } from "react-router-dom";

export default function Root() {
    let title_style = {
        textDecoration: 'none',
        color: '#121212',
    }

    return (
        <React.Fragment>
            <div id="sidebar">
                <div>
                    <Link style={title_style} to={"/"}>
                        <h1>RPG Generator</h1>
                    </Link>
                </div>
                <div>(Work in Progress)</div>
                {/* <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div> */}
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
    );
}

function LandingContent() {
    return (
        <React.Fragment>
            <div>Landing page</div>
        </React.Fragment>
    )
}