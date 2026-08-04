import React, { useEffect } from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
useLocation,
useNavigate,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Howitworks from './components/Howitworks';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import ScrollToTop from "./components/ScrollToTop";

import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import OrganizationSetup from './pages/OrganizationSetup';
import RegistrationDashBoard from './pages/Registrationdashboard';

import RequireAuth from './guards/RequireAuth';
import SetupGuard from './guards/SetupGuard';

import Industry from './components/Industry';
import School from './components/School';
import Bank from './components/Bank';
import Hospital from './components/Hospital';
import Restaurant from './components/Restaurant';
import Retail from './components/Retail';
import Government from './components/Government';
import Warehouse from './components/Warehouse';
import Hotel from './components/Hotel';
import Barber from './components/Barber';

// ---------------- HOME PAGE ----------------
const HomePage = () => {
const location = useLocation();
const navigate = useNavigate();

useEffect(() => {
if (location.state?.scrollTo) {
const sectionId = location.state.scrollTo;

  setTimeout(() => {
    const element = document.getElementById(sectionId);

    if (element) {
      const navbarHeight = 80;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }

    // Clear state after scrolling
    navigate('/', { replace: true, state: {} });
  }, 300);
}


}, [location, navigate]);

return (
<> <Hero />


  <section id='features'>
    <Features />
  </section>

  <div className='max-w-7xl mx-auto pt-20 px-6'>
    <section id='about'>
      <About />
    </section>

    <section id='pricing'>
      <Pricing />
    </section>

    <section id='howitworks'>
      <Howitworks />
    </section>

    <section id='faq'>
      <Faq />
    </section>

    <section id='contact'>
      <Contact />
    </section>
  </div>
</>


);
};

// ---------------- APP ----------------
function App() {
const LayoutWrapper = ({ children }) => (
<> <Navbar /> <div className='pt-24'>{children}</div> <Footer />
</>
);

return ( <Router> <ScrollToTop /> <Routes>
<Route path='/signup' element={<AuthPage />} />
<Route path='/login' element={<AuthPage />} />
<Route path='/dashboard' element={<DashboardPage />} />

    <Route path='/industry' element={<Industry />} />
    <Route path='/school' element={<School />} />
    <Route path='/banks' element={<Bank />} />
    <Route path='/hospitals' element={<Hospital />} />
    <Route path='/restaurants' element={<Restaurant />} />
    <Route path='/retail' element={<Retail />} />
    <Route path='/government' element={<Government />} />
    <Route path='/warehouses' element={<Warehouse />} />
    <Route path='/hotels' element={<Hotel />} />
    <Route path='/barber' element={<Barber />} />

    <Route
      path='/setup'
      element={
        <RequireAuth>
          <SetupGuard>
            <OrganizationSetup />
          </SetupGuard>
        </RequireAuth>
      }
    />

    <Route path='/regdashboard' element={<RegistrationDashBoard />} />

    {/* Home */}
    <Route
      path='/'
      element={
        <LayoutWrapper>
          <HomePage />
        </LayoutWrapper>
      }
    />

    {/* Features */}
    <Route
      path='/features'
      element={
        <LayoutWrapper>
          <FeaturesPage />
        </LayoutWrapper>
      }
    />

    {/* Pricing */}
    <Route
      path='/pricing'
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
