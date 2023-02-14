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
import Characters from "./routes/characters";
import AccountInfo from "./routes/account_info";
import Generator from "./routes/generator.jsx";
import CreateCharacter from "./routes/create_character.jsx";
import ListCharacters from "./routes/list_characters.jsx";

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
                path: "characters",
                element: <DetailsLayout page_title="Characters" children={<Characters />} />,
                children: [
                    {
                        path: "",
                        element: <ListCharacters />,
                    },
                    {
                        path: "create",
                        element: <CreateCharacter />,
                    }
                ]
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