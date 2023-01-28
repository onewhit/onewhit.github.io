import { Outlet, Link, useLocation } from "react-router-dom";

export default function Root() {
    let title_style = {
        textDecoration: 'none',
        color: '#121212',
    }

    return (
        <>
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
        </>
    );
}

function LandingContent() {
    return (
        <div>Landing page</div>
    )
}