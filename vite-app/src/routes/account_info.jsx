// import { React, useState } from "react";
import React from "react";
import { useState } from "react";
import { create_new_firebase_user, delete_firebase_user } from "../firebase";

export default function AccountInfo() {

    const [current_user, set_current_user] = useState(null);
    const [action_message, set_action_message] = useState(null);

    function doAction(e) {
        e.preventDefault();
        create_new_firebase_user();
    }

    function doAnotherAction(e) {
        e.preventDefault();
        delete_firebase_user(set_action_message);
    }

    return (
        <React.Fragment>
            <div>Here is the account info</div>
            <div>
                {/* <button onClick={doAction}>Do Action</button> */}
                <form onSubmit={doAction}>
                    <button type="submit">Create New User</button>
                </form>
                <form onSubmit={doAnotherAction}>
                    <button type="submit">Delete User</button>
                </form>
                <div>Action Message Below:</div>
                <div>{action_message}</div>
            </div>
        </React.Fragment>
    )
}