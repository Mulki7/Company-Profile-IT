import React from 'react';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <div className="content-container">
        {/* Home Section */}
        <section id="home" className="section">
          <h2 className="section-title">Welcome to TechSolutions</h2>
          <div className="services-grid">
            <div className="service-card featured-card">
              <h3 className="service-title">Empowering Digital Innovation</h3>
              <p>We are a leading IT solutions provider helping businesses transform their digital landscape with cutting-edge technology solutions.</p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="section">
          <h2 className="section-title">Our Solutions</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Custom Software Development</h3>
              <p>Tailored software solutions designed to meet your specific business needs. From web applications to enterprise systems.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Cloud Solutions</h3>
              <p>Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud Platform.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">AI & Machine Learning</h3>
              <p>Intelligent solutions that leverage cutting-edge AI and ML technologies to drive business growth and innovation.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">Our Projects</h2>
          <div className="services-grid">
            <div className="service-card project-card">
              <h3 className="service-title">E-Commerce Platform</h3>
              <p>Built a scalable e-commerce platform handling 1M+ daily transactions using microservices architecture.</p>
            </div>
            <div className="service-card project-card">
              <h3 className="service-title">AI-Powered Analytics</h3>
              <p>Developed predictive analytics solution for a Fortune 500 company using machine learning.</p>
            </div>
            <div className="service-card project-card">
              <h3 className="service-title">Cloud Migration</h3>
              <p>Successfully migrated enterprise infrastructure to cloud, reducing costs by 40%.</p>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="section">
          <h2 className="section-title">Join Our Team</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Senior Software Engineer</h3>
              <p>Join our development team to build innovative solutions using modern technologies.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Cloud Architect</h3>
              <p>Design and implement scalable cloud infrastructure solutions for our clients.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">AI/ML Engineer</h3>
              <p>Work on cutting-edge AI and machine learning projects that make a difference.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h3 className="contact-title">Visit Us</h3>
              <p>Sudirman Central Business District<br/>Jakarta, Indonesia</p>
            </div>
            <div className="contact-card">
              <h3 className="contact-title">Contact Info</h3>
              <p>Email: contact@techsolutions.dev<br/>Phone: +62 21 1234 5678</p>
            </div>
            <div className="contact-card">
              <h3 className="contact-title">Business Hours</h3>
              <p>Monday - Friday<br/>9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App
