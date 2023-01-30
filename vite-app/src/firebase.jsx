/*
    Set up the firebase app and auth
*/

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebase_config = {
    apiKey: "AIzaSyB7KcGLNztLk0KmjJ7CCyIQmwvchLaRbCw",
    authDomain: "rpg-gen.firebaseapp.com",
    projectId: "rpg-gen",
    storageBucket: "rpg-gen.appspot.com",
    messagingSenderId: "167071727845",
    appId: "1:167071727845:web:59a5ff82df16db1c0b940c"
};

const firebase_app = initializeApp(firebase_config);
const firebase_auth = getAuth(firebase_app);
const firebase_db = getFirestore(firebase_app);


function create_new_firebase_user() {
        
    createUserWithEmailAndPassword(firebase_auth, 'tarronlane@gmail.com', 'cannonballs2')
    .then((user_credential) => {
        const user = user_credential.user;
        console.log("user created successfully")
    })
    .catch((error) => {
        const error_code = error.code;
        const error_message = error.message;
        console.log(error_code);
        console.log(error_message)
    })
}

function delete_firebase_user(set_action_message) {
    const action_message = "No code written yet to delete a user";
    set_action_message(action_message);
    console.log(action_message);
}

// function sign_in_user() {
//     sign
// }

export { 
    firebase_app, 
    firebase_auth, 
    firebase_db, 
    create_new_firebase_user, 
    delete_firebase_user,
};