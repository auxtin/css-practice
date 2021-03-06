import React, { Component } from 'react';
import { nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div class='header'>
            <ul>
                <li>
                    <a id='underline' href='/about'>
                        About
                    </a>
                </li>
                <li>
                    < a id='underline' href='/projects'>
                        Projects
                    </a>
                </li>
                {/* <li>
                    <a id='underline' href='/coursework'>
                        Coursework
                    </a>
                </li> */}
                <li>
                    <a id='underline' href='/goals'>
                        Goals
                    </a>
                </li>
                <li>
                    <a id='underline' href='/resume'>
                        Resume
                    </a>
                </li>
                <li>
                    <a id='underline' href='/contact'>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
        );
    }
}

export default Header;