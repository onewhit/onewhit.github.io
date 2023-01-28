import React from 'react';
import {
    colors as config_colors,
    mobile as mobile
} from './config';

import {Outlet} from "react-router-dom";

class MainCol extends React.Component {
    /**
     * props
     *  width int
     *  collapse_point int
     */
    render() {
        let col_style = {
            backgroundColor: config_colors.black,
            flexGrow: '1',
            padding: '20px',
            margin: '10px 10px 10px 10px'
        }
        return (
            <div style={col_style}>
                <div style={{backgroundColor: config_colors.grey0, padding: '10px', borderRadius: '3px'}}>
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default MainCol;