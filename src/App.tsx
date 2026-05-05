import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Services from './notFound/Services.tsx';
import Contact from './notFound/Contact.tsx';
import Home from './pages/Home.tsx';
import WebPortfolio from './pages/WebPortfolio.tsx';
import LeadsPortfolio from './pages/LeadsPortfolio.tsx';
import AdsPortfolio from './pages/AdsPortfolio.tsx';

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

