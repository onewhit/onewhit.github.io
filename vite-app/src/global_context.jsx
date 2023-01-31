import { createContext } from 'react';

const context_obj = {
    user: null,
    is_auth_checked: false,
}

export const GlobalContext = createContext(context_obj);