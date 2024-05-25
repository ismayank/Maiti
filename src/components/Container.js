import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../css/Container.css';
import imageSrc from "../Images/logo.jpg";

function Container() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 200; // Adjust this value as needed
            const bannerHeight = document.getElementById("banner").offsetHeight; // Get the height of the banner
            if (window.scrollY + bannerHeight >= threshold) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <div id="banner"> {/* Assuming the banner has an id of "banner" */}
                {/* Banner content */}
            </div>
            <div className={`header ${isFixed ? 'fixed' : ''}`}>
                <div className="logo-section">
                    <img src={imageSrc} alt="logo" className="logo"/>
                    <span className="logo-name">Maiti Labs</span>
                </div>
                <nav className={`navigation ${isFixed ? 'fixed' : ''}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/services">Awareness Portal</Link></li>
                        <li><Link to="/projects">Career</Link></li>
                        <li><Link to="/blog">Contact</Link></li>
                        <li><Link to="/contact">Team</Link></li>
                    </ul>
                </nav>
                <button className="button login-button">Login</button>
            </div>
        </div>
    );
}

export default Container;
