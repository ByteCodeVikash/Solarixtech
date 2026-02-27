import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Career from './pages/Career';
import DataEntry from './pages/subpages/DataEntry';
import SoftwareDev from './pages/subpages/SoftwareDev';
import Logistics from './pages/subpages/Logistics';
import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services/data-entry" element={<DataEntry />} />
          <Route path="/services/software-development" element={<SoftwareDev />} />
          <Route path="/services/logistics" element={<Logistics />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
