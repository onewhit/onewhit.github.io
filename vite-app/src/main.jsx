import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import DetailsLayout from "./components/details_layout.jsx";

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
import Generator from "./routes/generator.jsx";
import GlobalContext from "./global_context.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <DetailsLayout page_title="Generator" children={<Generator />} />
            },
            {
                path: "item_generator",
                element: <DetailsLayout page_title="Item Generator" children={<ItemGenerator />} />
            },
            {
                path: "npc_generator",
                element: <DetailsLayout page_title="NPC Generator" children={<NpcGenerator />} />
            },
            {
                path: "character_tracker",
                element: <DetailsLayout page_title="Character Tracker" children={<CharacterTracker />} />
            },
            {
                path: "account_info",
                element: <DetailsLayout page_title="Account Info" children={<AccountInfo />} />
            },
        ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);