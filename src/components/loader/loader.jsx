import React, { Component } from 'react';
import './loader.css';
import LoaderGif from './loader.gif';

class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <img src={LoaderGif} width="200px"/>
            </div>
        );
    }
}

export default Loader;