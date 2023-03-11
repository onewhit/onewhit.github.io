import GlobalContext from "../contexts/global_context.jsx";
import { useContext, useState } from "react";
import configs from "../utility/configs.jsx";

export default function useGlobalContext() {
    const [global_context, set_global_context] = useState(useContext(GlobalContext));

    function update_global_context(merge_dict) {
        return set_global_context((old_context) => ({
            ...old_context,
            ...merge_dict
        }))
    }

    function update_window_dimensions() {
        const new_is_mobile_view = (window.innerWidth < configs.mobile_collapse_point ? true : false)
        set_window_width(window.innerWidth);
        set_window_height(window.innerHeight);
        set_is_mobile_view(new_is_mobile_view)
        update_global_context({
            window_width: window.innerWidth,
            window_height: window.innerHeight,
            is_mobile_view: new_is_mobile_view,
        })
    }
}