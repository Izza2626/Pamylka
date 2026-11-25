
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import StructuredData from "./seo/StructuredData";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <StructuredData />

        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Services listing page */}
          <Route path="/services" element={<Services />} />

          {/* Individual service detail pages */}
          <Route
            path="/services/:slug"
            element={<ServiceDetail />}
          />

          <Route path="/projects" element={<Projects />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route path="/terms" element={<Terms />} />

          {/* 404 - keep this last */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
