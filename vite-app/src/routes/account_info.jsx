import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../global_context";
import { create_new_firebase_user, login_firebase_user, logout_firebase_user } from "../firebase";
import { Form } from "react-router-dom";

export default function AccountInfo() {

    const [action_message, set_action_message] = useState(null);

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
                <Form method="post">
                    <input label="Username" type="text" name="username" defaultValue="tarronlane@gmail.com" />
                    <input label="Password" type="password" name="password" defaultValue="cannonballs" />
                    <button type="submit" name="intent" value="login">Log in</button>
                    <button type="submit" name="intent" value="logout">Log out</button>
                </Form>
                <form onSubmit={doAction}>
                    <button type="submit">Create New User</button>
                </form>
                {/* <form onSubmit={doAnotherAction}>
                    <button type="submit">Delete User</button>
                </form> */}
                <div>Action Message Below:</div>
                <div>{action_message}</div>
            </div>
        </React.Fragment>
    )
}

async function handle_login_form({request}) {
    let form_data = await request.formData();
    let username = form_data.get("username");
    let password = form_data.get("password");
    let intent = form_data.get("intent");

    if (intent == "login") {
        await login_firebase_user(username, password);
    }

    if (intent == "logout") {
        await logout_firebase_user();
    }

    return true;
}

export { handle_login_form };