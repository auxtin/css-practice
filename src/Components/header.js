import React, { Component } from 'react';
import { nav } from 'react-bootstrap';

class header extends Component {
    render() {
        return (
            <div className="section">
                <nav class="navbar navbar-dark bg-dark">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/about">About Me <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        </ul>
                  
                </nav>
            </div>
                );
            }
        }
        
export default header;