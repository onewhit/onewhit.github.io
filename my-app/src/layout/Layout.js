import React from 'react';
import './layout.css';
import {
    colors as config_colors,
    mobile
} from './config';

// Layout components
import Sidebar from './Sidebar';
import MainCol from './MainCol';
// import Root from "../routes/root";

import GlobalContext from './GlobalContext';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            showMenu: 1,
            is_mobile: false
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState(
            {
                width: window.innerWidth,
                height: window.innerHeight,
                is_mobile: (window.innerWidth >= mobile.collapse_point ? false : true)
            }
        );
    }

    render() {
        let site_style = {
            display: 'flex',
            flexDirection: (this.state.width >= mobile.collapse_point ? 'row' : 'column'),
            alignItems: (this.state.width >= mobile.collapse_point ? 'flex-start' : 'stretch'),
            flexWrap: 'nowrap',
            minHeight: '100vh',
            fontFamily: 'Sans-Serif',
            // backgroundColor: config_colors.black
        }

        // let elements_to_render = [];

        // // if (this.state.showMenu || this.state.width >= mobile.collapse_point) {
            // elements_to_render.push(<Sidebar key="1" width={this.state.width} />)
        // // }

        // // if (!this.state.showMenu || this.state.width >= mobile.collapse_point) {
            // elements_to_render.push(<MainCol key="2" width={this.state.width} />)
        // // }

        return (
            <GlobalContext.Provider value={{
                is_mobile: (this.state.width >= mobile.collapse_point ? false : true),
                width: this.state.width
            }}>
                <div style={site_style}>
                    <Sidebar key="1" width={this.state.width} />
                    <MainCol key="2" width={this.state.width} />
                    {/* {elements_to_render.map(elem => (elem))} */}
                </div>
            </GlobalContext.Provider>
        );
    }
}

export default Layout;