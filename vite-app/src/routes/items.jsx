import DataContext from "../contexts/data_context.jsx";
import { useContext } from "react";

export default function useFirestoreItems() {

    const data_context = useContext(DataContext);

    console.log(data_context.items);

    return (
        <div>items page</div>
    );
}