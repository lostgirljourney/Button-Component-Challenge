import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="nav-section">
            <h1 className="web"><span className="dev">Dev</span>challenges.io</h1>

            <ul>
                <li>
                    Colors
                </li>
                <li>
                    Typography
                </li>
                <li>
                    Spaces
                </li>
                <li>
                    <span className="active">Buttons</span>
                </li>
                <li>
                    Inputs
                </li>
                <li>
                    Grid
                </li>
            </ul>
        </div>
    );
}