import React from 'react';
import {
    colors as config_colors
} from './config';

import {
    Link,
    BrowserRouter as Router,
} from "react-router-dom"

import GlobalContext from "./GlobalContext";

class MainMenu extends React.Component {
    static contextType = GlobalContext; // This is required so that this.context works. I'm not sure why it works this way
    render() {
        let menu_style = {
            paddingTop: '10px',
            color: 'white',
            backgroundColor: config_colors.black,
            transition: 'transform .2s ease-out',
        };

        if (this.context.is_mobile) {
            menu_style.overflow = 'hidden';
            menu_style.position = 'absolute';
            menu_style.zIndex = '0';
            menu_style.top = this.props.offset;
            menu_style.left = '0';
            menu_style.right = '0';
            menu_style.transform = (this.props.hidden ? 'translateY(-100%)' : 'translateY(0)');
        }

        console.log(menu_style);

        return (
            <div style={menu_style}>
                {/* <ExternalLinkItem text='Christmas Lists' page="../christmaslists/" is_server_link={true} /> */}
                {/* <ReactLinkItem onClick={this.props.handleClick} text='One Whit' page="onewhit" /> */}
                {/* <ReactLinkItem onClick={this.props.handleClick} text='Resume' page="resume" /> */}
                <ReactLinkItem onClick={this.props.handleClick} text='NPC Generator' page="npcgenerator" />
            </div>
        );
    }
}

class ReactLinkItem extends React.Component {
    constructor (props) {
        super(props)
    }

    static contextType = GlobalContext;

    render() {
        return (
            <Link onClick={(this.context.is_mobile ? this.props.onClick : false)} style={{textDecoration:"none"}} to={"/" + this.props.page}>
                <MenuItem {...this.props} />
            </Link>
        );
    }
}

class ExternalLinkItem extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <a style={{textDecoration:"none"}} href={"/" + this.props.page} target="_blank">
                <MenuItem {...this.props} />
            </a>
        );
    }
}

class MenuItem extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            is_hover: false
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
        let item_style = {
            padding: '15px 20px 15px 20px',
            textDecoration: 'None',
            color: 'white'
        };

        if (this.state.is_hover) {
            item_style.backgroundColor = config_colors.grey0
            item_style.color = 'black'
        }

        return (
            <div style={item_style}
                    className="main_menu_item"
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}
            >
                {this.props.text}
            </div>
        );
    }
}

export default MainMenu;