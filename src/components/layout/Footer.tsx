import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <span className="brand-badge">MS</span>
        <p className="footer-title">Muhammad Shoaib</p>
        <p className="footer-copy">
          Full-funnel growth partner specialising in web development, lead
          generation, and paid acquisition for ambitious service brands.
        </p>
      </div>

      <div>
        <p className="footer-label">Navigation</p>
        <div className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/web-development">Web Development</NavLink>
          <NavLink to="/leads-generation">Leads Generation</NavLink>
          <NavLink to="/google-ads">Google Ads</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>

      <div>
        <p className="footer-label">Contact</p>
        <a href="mailto:hello@shoaibstudio.com" className="footer-link">
          hello@shoaibstudio.com
        </a>
        <a href="tel:+923008559911" className="footer-link">
          +92 300 855 9911
        </a>
        <p className="footer-availability">Available for new projects worldwide</p>
      </div>
    </div>
    <p className="footer-bottom">© {new Date().getFullYear()} Shoaib Studio. All rights reserved.</p>
  </footer>
);

export default Footer;

