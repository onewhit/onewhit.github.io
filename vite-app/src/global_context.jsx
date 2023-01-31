import { createContext } from 'react';

const context_obj = {
    user: null,
}

export const GlobalContext = createContext(context_obj);