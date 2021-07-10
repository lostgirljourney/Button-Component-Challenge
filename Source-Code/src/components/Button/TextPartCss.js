import React from 'react';
import './TextPart.css';

export default function TextPartCss(textCss) {
    return (
        <p className="textcss">{textCss.text}</p>
    );
};