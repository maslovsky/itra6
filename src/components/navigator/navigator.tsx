import React from 'react';
import { NavLink } from "react-router-dom";

import "./navigator.css";

import topics from '../../enums/topics';

export default function Navigator() {
    return (
        <nav>
            <ul className="tabs">
                <li>
                    <span><NavLink activeClassName="is-active" exact to="/itra6">{topics.whatIsUp}</NavLink></span>
                    {/*/itra6 only for github pages*/}
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
};