import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">About TechSolutions</h3>
                    <p>Leading IT solutions provider specializing in custom software development, cloud solutions, and AI integration. Based in Jakarta, serving clients worldwide.</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Contact</h3>
                    <p>Email: contact@techsolutions.dev</p>
                    <p>Phone: +62 21 1234 5678</p>
                    <p>Address: Sudirman Central Business District, Jakarta</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Resources</h3>
                    <div className="footer-links">
                        <a href="#" className="footer-link">Documentation</a>
                        <a href="#" className="footer-link">API References</a>
                        <a href="#" className="footer-link">Blog</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Connect</h3>
                    <div className="footer-links">
                        <a href="#" className="footer-link">GitHub</a>
                        <a href="#" className="footer-link">LinkedIn</a>
                        <a href="#" className="footer-link">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 TechSolutions. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    );
};

export default Footer;