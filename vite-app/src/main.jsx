import React from "react";
import ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error_page";
import ItemGenerator from "./routes/item_generator";
import NpcGenerator from "./routes/npc_generator";
import CharacterTracker from "./routes/character_tracker";
import AccountInfo from "./routes/account_info";
// import { handle_login_form } from "./routes/account_info";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <div>Hello world!</div>,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "item_generator",
                element: <ItemGenerator />,
            },
            {
                path: "npc_generator",
                element: <NpcGenerator />,
            },
            {
                path: "character_tracker",
                element: <CharacterTracker />,
            },
            {
                path: "account_info",
                element: <AccountInfo />,
            },
        ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);