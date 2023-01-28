import React from 'react';
import lane from '../lane.png';
import MainMenu from './MainMenu';

import ham_menu_white from '../ham_menu_white.svg';
import ham_menu_black from '../ham_menu_black.svg';

import { 
    colors as config_colors, 
    mobile
} from './config';

import {
    Link,
} from "react-router-dom"

import GlobalContext from "./GlobalContext";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_show_menu: false
        }

        this.handleClick = this.handleClick.bind(this);

    }
    

    handleClick (e) {
        this.setState((prevState, props) => {
            return {is_show_menu: !prevState.is_show_menu}
        },() => {});

    }

    static contextType = GlobalContext;

    /**
     * props
     *  width int
     *  collapse_point int
     */
    render() {
        let title_height = '70px';

        let side_style = {
            backgroundColor: config_colors.black,
            flexGrow: '0',
            // width: (this.props.width > mobile.collapse_point ? '300px' : '100vw'),
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            height: title_height,
            position:'relative'
        }

        if (!this.context.is_mobile) {
            side_style.width = '300px'
        }

        let title_style = {
            color: 'white',
            fontSize: '25pt',
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
            fontWeight: 'bold',
            position: 'relative',
            height: title_height,
            padding: '10px 20px 10px 20px'
        }

        let top_bar_style = {
            display: 'flex', 
            justifyContent: 'space-between', 
            alignContent: 'center',
            position: 'relative',
            zIndex: '1',
            backgroundColor: config_colors.black,
        }

        return (
            <div id="side-bar" style={side_style}>
                <div id='top-bar' style={top_bar_style}>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <div style={title_style}>
                            {/* <img style={logo_style} src={lane} alt='lane logo' /> */}
                            <div>Tarron Lane</div>
                        </div>
                    </Link>
                    {(this.context.is_mobile ? <HamMenu onClick={this.handleClick}/> : '')}
                </div>
                {/* This is a space since in React the border-bottom property doesn't seem to be working */}
                <div style={{height: '10px', backgroundColor: config_colors.black}}></div>
                {/* {(
                    this.state.is_show_menu || !is_mobile 
                    ? <MainMenu offset={title_height} hidden={!this.state.is_show_menu} is_mobile={is_mobile} /> 
                    : ''
                )} */}
                <MainMenu handleClick={this.handleClick} offset={title_height} hidden={!this.state.is_show_menu} /> 
            </div>
        );
    }
}

class HamMenu extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            is_hover: false,
        }

        this.handleHover = this.handleHover.bind(this);
    } 

    handleHover () {
        this.setState((prevState, props) => {
            return {is_hover: !prevState.is_hover}
        }, () => {
        });
    }

    render() {
        let ham_menu_style = {
            display: 'block'
        }

        let div_style = {
            padding: '8px',
            borderRadius: '10px',
            display: 'block',
            alignSelf: 'center',
            margin: '10px'
        }

        let img_src = ham_menu_white;

        if (this.state.is_hover) {
            div_style.backgroundColor = config_colors.grey0
            img_src = ham_menu_black
        }

        return (<div 
            onMouseEnter={this.handleHover} 
            onMouseLeave={this.handleHover} 
            style={div_style}
            onClick={this.props.onClick}
        >
            <img src={img_src} style={ham_menu_style} alt="open menu" height="30px"/>
        </div>);
    }

}

export default Sidebar;