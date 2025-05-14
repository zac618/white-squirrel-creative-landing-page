import React from 'react';
import './App.css';

const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
];

function App() {
    return (
        <div>
            {/* Header & Navigation */}
            <header id="header">
                <nav className="navbar">
                    <div className="logo">White Squirrel Creative</div>
                    <ul className="nav-links">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                    <a href="#get-a-quote" className="cta-btn">Get a quote</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="hero">
                <div className="hero-content">
                    <h1>Design.<br />Develop.<br />Create.</h1>
                    <p className="hero-subheading">Be creative. Studiun potte catisai iosclictors thru elisiciu coës tubolöcity alis pulito veteleit and desling.</p>
                    <a href="#get-a-quote" className="cta-btn hero-cta">Get a quote</a>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio">
                {/* TODO: Implement portfolio section */}
            </section>

            {/* Services Section */}
            <section id="services">
                {/* TODO: Implement services section */}
            </section>

            {/* About Section */}
            <section id="about">
                {/* TODO: Implement about section */}
            </section>

            {/* Get a Quote Section */}
            <section id="get-a-quote">
                {/* TODO: Implement get a quote form */}
            </section>

            {/* Footer */}
            <footer id="footer">
                {/* TODO: Implement footer */}
            </footer>
        </div>
    );
}

export default App; 