/*
    Set up the firebase app and auth
*/

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, query, where, getDocs, setDoc, deleteDoc } from "firebase/firestore";

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

function delete_firebase_user(append_banner) {
    return append_banner("No code written yet to delete a user");
}

function login_firebase_user(username, password, set_action_message) {
    return (
        signInWithEmailAndPassword(firebase_auth, username, password)
            .then(
                (value) => {
                    return set_action_message(" Login Successful!")

                }
            )
            .catch(
                (error) => {
                    return set_action_message(" Failed. Error Code [" + error.code + "]. Error Message [" + error.message + "]")
                }
            )
    );
}

async function logout_firebase_user(append_banner) {
    return signOut(firebase_auth).then(
        (value) => append_banner("Success!")
    );
}

async function get_attribute(attribute_key) {
    console.log("fetching attribute");
    const doc_ref = doc(firebase_db, "attribute", attribute_key);
    const doc_snap = await getDoc(doc_ref);
    if (doc_snap.exists()) {
        console.log("Document data", doc_snap.data());
        const data = doc_snap.data();
        console.log(data.tags);

    }
    else {
        console.log("Document data undefined");
    }
}

async function get_attributes_by_tag(tag_name) {
    console.log("fetching attributes");
    // const the_query = query(collection(firebase_db, "attribute"), where("name", "==", "greed"));
    const the_query = query(collection(firebase_db, "attribute"), where("tags", "array-contains-any", [tag_name]));
    const query_snapshot = await getDocs(the_query);
    // console.log(query_snapshot);
    query_snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}


async function clear_collection (collection_name, append_indent_banner) {
    const query_snapshot = await getDocs(collection(firebase_db, collection_name));

    if (query_snapshot.docs.length == 0) {
        append_indent_banner("No existing items to delete.");
        return;
    }

    query_snapshot.forEach((doc_snapshot) => {
        // console.log(doc_snapshot.id);
        append_indent_banner("Deleting item with key\"" + doc_snapshot.id + "\"...");
        deleteDoc(doc(firebase_db, collection_name, doc_snapshot.id));
    });
}

async function get_is_collection_exists(collection_name) {
    const the_collection = collection(firebase_db, collection_name);
    const query_snapshot = await getDocs(the_collection);
    return query_snapshot.docs.length > 0 ? true : false;

}

const HelperFirebase = {
    get_all_documents: async (collection_name) => {
        const the_query = query(collection(firebase_db, collection_name));
        const query_snapshot = await getDocs(the_query);
        return query_snapshot;
    },
    create_document: async (collection_name, document_name, new_document_data, is_merge=true) => {
        const doc_ref = doc(firebase_db, collection_name, document_name);
        await setDoc(doc_ref, new_document_data, {merge: is_merge});
        return true;
    },
    do_docs_exist: async (collection_name,attribute_name,attribute_value) => {
        const the_query = query(collection(firebase_db, collection_name), where(attribute_name, "==", attribute_value));
        const query_snapshot = await getDocs(the_query);

        if (query_snapshot.docs.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

export default HelperFirebase;

export {
    firebase_app,
    firebase_auth,
    firebase_db,
    create_new_firebase_user,
    delete_firebase_user,
    login_firebase_user,
    logout_firebase_user,
    get_attribute,
    get_attributes_by_tag,
    clear_collection,
    get_is_collection_exists,
};