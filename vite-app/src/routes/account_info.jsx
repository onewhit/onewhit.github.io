import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../global_context";
import { create_new_firebase_user, login_firebase_user, logout_firebase_user } from "../firebase";
// import { Form } from "react-router-dom";

export default function AccountInfo() {

    const [action_message, set_action_message] = useState(null);

    // function append_action_message(next_message) {
    //     set_action_message((current_message) => current_message + " " + next_message);
    // }

    function doAction(e) {
        e.preventDefault();
        create_new_firebase_user();
    }

    // function handle_delete_user_form(e) {
    //     e.preventDefault();
    //     delete_firebase_user(set_action_message);
    // }

    // function handle_login_button(e) {
    //     e.preventDefault();
    //     console.log("Login button clicked")
    //     // delete_firebase_user(set_action_message);
    // }

    // async function login_firebase_user({request, params}) {

    //     // console.log("Login?");
    //     // console.log(request);

    //     let formData = await request.formData();
    //     console.log(formData.get("username"));
    //     return true;
    // }

    const global_context = useContext(GlobalContext);

    // console.log(global_context);

    return (
        <React.Fragment>
            <div>Here is the account info</div>
            <div>Current User: {global_context.user != null ? global_context.user.email : "Not logged in"}</div>
            <div>
                {/* <button onClick={doAction}>Do Action</button> */}
                {/* <Form method="post">
                    <input label="Username" type="text" name="username" defaultValue="tarronlane@gmail.com" />
                    <input label="Password" type="password" name="password" defaultValue="cannonballs" />
                    <button type="submit" name="intent" value="login">Log in</button>
                    <button type="submit" name="intent" value="logout">Log out</button>
                </Form> */}
                <LoginForm set_action_message={set_action_message}/>
                {/* <form onSubmit={doAction}>
                    <button type="submit">Create New User</button>
                </form> */}
                {/* <form onSubmit={doAnotherAction}>
                    <button type="submit">Delete User</button>
                </form> */}
                <div>Action Message Below:</div>
                <div>{action_message}</div>
            </div>
        </React.Fragment>
    )
}

// Form to handle logging in and logging out
function LoginForm({set_action_message}) {
    const global_context = useContext(GlobalContext);
    const user = global_context.user;
    const is_auth_checked = global_context.is_auth_checked;
    const is_logged_in = (user != null && user.email != null) ? true : false;

    const [field_username, set_field_username] = useState("");
    const [field_password, set_field_password] = useState("");

    function handle_login(e) {
        e.preventDefault();
        set_action_message("Logging in...");
        login_firebase_user(field_username, field_password, set_action_message);
    }

    function handle_logout(e) {
        e.preventDefault();
        set_action_message("Logging out...");
        logout_firebase_user(set_action_message);
    }

    return (
        // Show the login fields if not logged in, otherwise just who the logout button
        is_logged_in
        ? <button onClick={handle_logout}>Log out</button>
        : <form onSubmit={handle_login}>
            <input label="Username" type="text" name="username" onChange={(event) => set_field_username(event.target.value)} />
            <input label="Password" type="password" name="password" onChange={(event) => set_field_password(event.target.value)} />
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