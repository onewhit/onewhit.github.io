import React from 'react';

const GlobalContext = React.createContext({
    is_mobile: false,
    width: '0'
});

export default GlobalContext;