import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./navigator.css";
import topics from '../../enums/topics';

class Navigator extends Component {
    render() {
        return (
            <nav>
                <ul className="tabs">
                    <li>
                        <span><NavLink activeClassName="is-active" exact to="/">{topics.whatIsUp}</NavLink></span>
                    </li>
                    <li>
                        <span><NavLink activeClassName="is-active" exact to="/bee">{topics.bee}</NavLink></span>
                    </li>
                    <li>
                        <span><NavLink activeClassName="is-active" exact to="/health">{topics.health}</NavLink></span>
                    </li>
                    <li>
                        <span><NavLink activeClassName="is-active" exact to="/js">{topics.js}</NavLink></span>
                    </li>
                    <li>
                        <span><NavLink activeClassName="is-active" exact to="/ufo">{topics.ufo}</NavLink></span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigator;