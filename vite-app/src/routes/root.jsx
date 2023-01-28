import { Outlet, Link} from "react-router-dom";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <h2>RPG Generator</h2>
                    {/* <form id="search-form" role="search">
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
                    </form> */}
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
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}