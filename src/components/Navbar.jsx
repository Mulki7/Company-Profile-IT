import React from 'react';

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">TechSolutions</div>
                <div className="navbar-links">
                    <a onClick={() => scrollToSection('home')} className="navbar-link">Home</a>
                    <a onClick={() => scrollToSection('solutions')} className="navbar-link">Solutions</a>
                    <a onClick={() => scrollToSection('projects')} className="navbar-link">Projects</a>
                    <a onClick={() => scrollToSection('careers')} className="navbar-link">Careers</a>
                    <a onClick={() => scrollToSection('contact')} className="navbar-link">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;