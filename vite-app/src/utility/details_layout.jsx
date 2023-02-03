
import { GlobalContext } from "../global_context";
import { useContext, useState, useEffect } from "react";

export default function DetailsLayout({page_title, children}) {
    
    const global_context = useContext(GlobalContext);

    const [banner, set_banner] = useState(global_context.banner);

    useEffect(() => {
        // console.log("setting global context banner functions");
        // // Add the banner state and function
        global_context.set_global_context((old_context) => ({
            ...old_context,
            // banner: banner_message,
            // set_banner: set_banner_message,
            set_banner: set_banner,
        }));
    },[]);
    
    return (<>
        <h2>{page_title}</h2>
        {children}
        <p>{banner}</p>
    </>)
}