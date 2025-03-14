import React, { useContext } from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About DownWee</h3>
          <p>
            DownWee is a powerful and user-friendly media downloader that helps you save videos and media content from various platforms with just a click. Our tool makes downloading your favorite content simple, fast, and hassle-free.
          </p>
        </div>
        
        <div className="footer-section social">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/iamgroot464?igsh=MXg5aWNrcTZ0OHV2OQ==" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://github.com/baseergroot" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>© 2025 DownWee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;