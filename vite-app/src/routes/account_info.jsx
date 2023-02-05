import React from "react";
import { useState, useContext } from "react";
import GlobalContext from "../global_context";
import { create_new_firebase_user, login_firebase_user, logout_firebase_user } from "../firebase";
// import { Form } from "react-router-dom";

export default function AccountInfo() {

    function doAction(e) {
        e.preventDefault();
        create_new_firebase_user();
    }

    const global_context = useContext(GlobalContext);

    return (
        <React.Fragment>
            {/* {global_context.user == null ? <p>Log in to see the full menu and options</p> : <p>Here is the account info</p>} */}
            <p>Current User: {global_context.user != null ? global_context.user.email : "Not logged in"}</p>
            <div>
                <LoginForm />
            </div>
        </React.Fragment>
    )
}

// Form to handle logging in and logging out
function LoginForm() {
    const global_context = useContext(GlobalContext);
    const user = global_context.user;
    const is_auth_checked = global_context.is_auth_checked;
    const is_logged_in = (user != null && user.email != null) ? true : false;

    const [field_username, set_field_username] = useState("tarronlane@gmail.com");
    const [field_password, set_field_password] = useState("cannonballs");

    function handle_login(event) {
        event.preventDefault();
        global_context.replace_banner("Logging in...");
        login_firebase_user(field_username, field_password, global_context.append_banner);
    }

    function handle_logout(e) {
        e.preventDefault();
        global_context.replace_banner("Logging out...");
        logout_firebase_user(global_context.append_banner);
    }

    return (
        // Show the login fields if not logged in, otherwise just who the logout button
        is_logged_in
        ? <button onClick={handle_logout}>Log out</button>
        : <form onSubmit={handle_login}>
            <label htmlFor="username_field">Username: </label>
            <input label="Username" type="text" id="username_field" name="username" defaultValue={field_username} onChange={(event) => set_field_username(event.target.value)} />
            <br />
            <label htmlFor="password_field">Password: </label>
            <input label="Password" type="password" id="password_field" name="password" defaultValue={field_password} onChange={(event) => set_field_password(event.target.value)} />
            <br />
            <button type="submit">Log in</button>
        </form>
    );
}

// async function handle_login_form({request}) {
//     let form_data = await request.formData();
//     let username = form_data.get("username");
//     let password = form_data.get("password");
//     let intent = form_data.get("intent");

//     if (intent == "login") {
//         await login_firebase_user(username, password);
//     }

//     if (intent == "logout") {
//         await logout_firebase_user();
//     }

//     return true;
// }

// export { handle_login_form };