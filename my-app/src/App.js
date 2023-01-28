// import logo from './logo.svg';
// import './App.css';
import Layout from './layout/Layout';
import ErrorPage from './error-page';
import NpcGenerator from './routes/npc_generator';

import {
    // BrowserRouter as Router,
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "npcgenerator",
                element: <NpcGenerator />,
            },
        ],
    },
])

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
