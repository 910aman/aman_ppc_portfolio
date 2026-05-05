import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Web Dev', to: '/web-development' },
  { label: 'Leads Gen', to: '/leads-generation' },
  { label: 'Google Ads', to: '/google-ads' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <span className="brand-badge">MS</span>
          <div>
            <p>Muhammad Shoaib</p>
            <span>Growth Strategist</span>
          </div>
        </NavLink>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="cta-button">
          Let&apos;s Talk
        </NavLink>

        <button
          className="mobile-trigger"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className={`mobile-drawer ${isOpen ? 'mobile-drawer--open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link--active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="cta-button cta-button--outline">
          Book a Strategy Call
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

