import React from 'react';
import { FiArrowRight, FiCode, FiCloud, FiShield } from 'react-icons/fi';

const Header = () => {
    return (
        <header className="header">
            <div className="header-background">
                <div className="header-overlay"></div>
                <div className="animated-bg"></div>
            </div>
            <div className="header-content">
                <div className="brand-badge">
                    <span className="badge-text">Welcome to</span>
                </div>
                <h1 className="header-title">
                    <span className="title-tech">Tech</span>
                    <span className="title-solutions">Solutions</span>
                </h1>
                <p className="header-subtitle">Transforming Ideas into Powerful Digital Solutions</p>
                <p className="header-description">
                    We specialize in delivering cutting-edge technology solutions that help businesses
                    grow, innovate, and stay ahead in the digital era. From custom software development
                    to cloud solutions, we're your trusted technology partner.
                </p>
                <div className="header-features">
                    <div className="feature">
                        <FiCode className="feature-icon" />
                        <span>Custom Development</span>
                    </div>
                    <div className="feature">
                        <FiCloud className="feature-icon" />
                        <span>Cloud Solutions</span>
                    </div>
                    <div className="feature">
                        <FiShield className="feature-icon" />
                        <span>Enterprise Security</span>
                    </div>
                </div>
                <div className="header-actions">
                    <button className="header-button primary">
                        Get Started
                        <FiArrowRight className="button-icon" />
                    </button>
                    <button className="header-button secondary">
                        View Our Work
                    </button>
                </div>
                <div className="scroll-indicator">
                    <div className="mouse"></div>
                    <span>Scroll to explore</span>
                </div>
            </div>
        </header>
    );
};

export default Header;