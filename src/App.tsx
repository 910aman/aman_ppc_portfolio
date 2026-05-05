import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services.tsx';
import WebPortfolio from './pages/WebPortfolio';
import LeadsPortfolio from './pages/LeadsPortfolio';
import AdsPortfolio from './pages/AdsPortfolio';
import Contact from './pages/Contact.tsx';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/web-development" element={<WebPortfolio />} />
      <Route path="/leads-generation" element={<LeadsPortfolio />} />
      <Route path="/google-ads" element={<AdsPortfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Layout>
);

export default App;

