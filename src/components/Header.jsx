import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="header-title">TechSolutions</h1>
                <p className="header-subtitle">Transforming Ideas into Powerful Digital Solutions</p>
                <p className="header-description">
                    We specialize in delivering cutting-edge technology solutions that help businesses
                    grow, innovate, and stay ahead in the digital era. From custom software development
                    to cloud solutions, we're your trusted technology partner.
                </p>
                <div className="header-actions">
                    <button className="header-button primary">
                        Get Started
                    </button>
                    <button className="header-button secondary">
                        View Our Work
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;