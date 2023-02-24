import { createContext } from 'react';

const context_obj = {
    is_loading: false,
    items: {},
    characters: {},
}

const DataContext = createContext(context_obj);

export default DataContext;