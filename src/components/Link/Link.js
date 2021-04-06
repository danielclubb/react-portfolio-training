import React from 'react';
import './Link.css';

const Link = ({ url, title }) => (
    <a 
    className="App-link"
    href={url}
    target="_blank"
    >
        {title}
    </a>
);

export default Link;