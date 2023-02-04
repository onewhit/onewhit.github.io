
import { GlobalContext } from "../global_context";
import { useContext, useState, useEffect } from "react";

export default function DetailsLayout({page_title, children}) {

    const global_context = useContext(GlobalContext);

    // Make the banner part of the state so it will trigger re-render of the layout banner elements
    const [banner, set_banner] = useState(global_context.banner);

    // Clear out the banner array and start it over with a new message
    function replace_banner(message) {
        return set_banner([message]);
    }

    // Add a new message to show up below other current banner messages
    function append_banner(message) {
        return set_banner((old_banner) => ([...old_banner, message]))
    }

    // Append to the banner array, but indent it X number of times
    function append_indent_banner(message, indent_level = 1) {
        const indent_string = "----";
        return append_banner(indent_string.repeat(indent_level) + "> " + message);
    }

    // Empty out the banner array
    function clear_banner() {
        return set_banner([]);
    }

    // Add the banner functions to the global context so that all the elements can change the banner
    useEffect(() => {
        global_context.set_global_context((old_context) => ({
            ...old_context,
            replace_banner: replace_banner,
            append_banner: append_banner,
            clear_banner: clear_banner,
            append_indent_banner: append_indent_banner,
        }));
    },[]);

    return (<>
        <h2>{page_title}</h2>
        <hr />
        {children}
        {banner.map((message) => <p key={message}>{message}</p>)}
    </>)
}