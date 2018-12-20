import React from 'react';
import './loader.css';
import LoaderGif from './loader.gif';

export default function Loader() {
    return (
        <div className="loader">
            <img src={LoaderGif} width="200px"/>
        </div>
    );
};