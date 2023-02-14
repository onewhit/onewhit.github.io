
import { Outlet } from "react-router-dom";
import LoginProtected from "../components/login_protected.jsx";

export default function Characters() {
    return (
        <LoginProtected><Outlet /></LoginProtected>
    )
}