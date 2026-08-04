// FastQueues/frontend/src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Howitworks from "./components/Howitworks";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import About from "./components/About";
import BlogPost from "./components/BlogPost";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import OrganizationSetup from "./pages/OrganizationSetup";
import RegistrationDashBoard from "./pages/Registrationdashboard";
import RequireAuth from "./guards/RequireAuth";
import SetupGuard from "./guards/SetupGuard";
import Industry from "./components/Industry";
import School from "./components/School";
import Bank from "./components/Bank";
import Hospital from "./components/Hospital";
import Restaurant from "./components/Restaurant";
import Retail from "./components/Retail";
import Government from "./components/Government";
import Warehouse from "./components/Warehouse";
import Hotel from "./components/Hotel";
import Barber from "./components/Barber"

function App() {
  // Component wrapper for pages that require the Navbar and Footer (Layout)
  const LayoutWrapper = ({ children }) => (
    <>
      <Navbar />
      <div className="pt-24">
        {" "}
        {children}
      </div>
      <Footer />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/school" element={<School />} />
        <Route path="/banks" element={<Bank />} />
        <Route path="/hospitals" element={<Hospital />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/government" element={<Government />} />
        <Route path="/warehouses" element={<Warehouse />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/Barber" element={<Barber />} />
        <Route
          path="/setup"
          element={
            <RequireAuth>
              <SetupGuard>
                <OrganizationSetup />
              </SetupGuard>
            </RequireAuth>
          }
        />
        {/* <Route path="/setup" element={<RequireAuth><OrganizationSetup /></RequireAuth>} /> */}
        <Route path="/regdashboard" element={<RegistrationDashBoard />} />

        {/* Homepage */}
        <Route
          path="/"
          element={
            <LayoutWrapper>
              <Hero />
              <Features />
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <About />
                
                
                <Pricing />
                <Howitworks />
                <Faq />
                <Contact />
              </div>
            
            </LayoutWrapper>
          }
        />

        {/* Features page */}
        <Route
          path="/features"
          element={
            <LayoutWrapper>
              <FeaturesPage />
            </LayoutWrapper>
          }
        />

        {/* Pricing page */}
        <Route
          path="/pricing"
          element={
            <LayoutWrapper>
              <PricingPage />
            </LayoutWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
