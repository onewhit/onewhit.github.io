import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import DetailsLayout from "./components/details_layout.jsx";
import Characters from "./routes/characters";
import AccountInfo from "./routes/account_info";
import Generator from "./routes/generator.jsx";
import CharacterCreate from "./routes/character_create.jsx";
import CharacterList from "./routes/character_list.jsx";
import CharacterEdit from "./routes/character_edit.jsx";
import LoginProtected from "./components/login_protected.jsx";
import Items from "./routes/items.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Root is_error={true} />,
        children: [
            {
                path: "/",
                element: <DetailsLayout page_title="Generator" children={<Generator />} />
            },
            {
                path: "characters",
                element: <DetailsLayout page_title="Characters" children={<LoginProtected><Characters /></LoginProtected>} />,
                children: [
                    {
                        path: "",
                        element: <CharacterList is_show={true} />
                    },
                    {
                        path: "create",
                        // element: <CharacterList is_show={false}><CharacterCreate /></CharacterList>,
                        element: <CharacterCreate />,
                    },
                    {
                        path: "edit/:id",
                        // element: <CharacterList is_show={false}><CharacterEdit /></CharacterList>,
                        element: <CharacterEdit />,
                    }
                ]
            },
            {
                path: "items",
                element: <DetailsLayout page_title="Items"><LoginProtected><Items /></LoginProtected></DetailsLayout>
            },
            {
                path: "account_info",
                element: <DetailsLayout page_title="Account Info" children={<AccountInfo />} />
            },
        ],
    },

]);

export default function Routes () {
    return <RouterProvider router={router} />
}