/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './header.css';

export default function header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Blog</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
