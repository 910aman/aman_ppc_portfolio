import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="app-shell">
    <Navbar />
    <main id="main-content" className="page-content">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;

