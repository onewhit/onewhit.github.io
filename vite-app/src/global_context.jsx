import { createContext } from 'react';

const context_obj = {
    user: null,
    is_auth_checked: false,
    window_width: null,
    window_height: null,
    is_mobile_view: null,
    banner: [],
    set_global_context: null,
}

export const GlobalContext = createContext(context_obj);