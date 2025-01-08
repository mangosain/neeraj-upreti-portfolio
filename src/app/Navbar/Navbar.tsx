'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../Navbar/Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link href="/">
                    <span>&lt;Neeraj /&gt;</span>
                </Link>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <Link href="/Project">
                        Project
                    </Link>
                </li>
                <li>
                    <Link href="/Resume">
                        Resume
                    </Link>
                </li>
                <li>
                    <Link href="/About">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/Skills">
                        Skills
                    </Link>
                </li>
            </ul>

            {/* Hamburger icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
