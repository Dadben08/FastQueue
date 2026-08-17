import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import { navItems } from '../constants';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

const navigate = useNavigate();
const location = useLocation();

const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

const handleScrollNavigation = (sectionId) => {
if (location.pathname !== '/') {
navigate('/', { state: { scrollTo: sectionId } });
} else {
const element = document.getElementById(sectionId);
if (element) {
element.scrollIntoView({
behavior: 'smooth',
block: 'start',
});
}
}

setMobileDrawerOpen(false);


};

return ( <div className='navbar' id='Navbar'> <nav className='header fixed top-0 left-0 w-full bg-white shadow-md z-50'> <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
{/* LOGO */} <div className='flex-shrink-0'> <img src={logo} alt='FastQueues' className='h-16 w-auto' /> </div>


      {/* DESKTOP NAV */}
      <ul className='hidden lg:flex space-x-12 font-sub text-[#2f2a76] justify-center flex-1'>
        {navItems.map((item, index) => (
          <li key={index} className='relative group'>
            {item.dropdown ? (
              <span className='cursor-pointer transition-colors hover:text-orange-600'>
                {item.label}
              </span>
            ) : item.path ? (
              <RouterLink
                to={item.path}
                className='cursor-pointer transition-colors hover:text-orange-600'
              >
                {item.label}
              </RouterLink>
            ) : item.href === '/' ? (
              <RouterLink
                to='/'
                className='cursor-pointer transition-colors hover:text-orange-600'
              >
                {item.label}
              </RouterLink>
            ) : (
              <button
                onClick={() =>
                  handleScrollNavigation(item.href.replace('#', ''))
                }
                className='cursor-pointer transition-colors hover:text-orange-600 bg-transparent border-none p-0'
              >
                {item.label}
              </button>
            )}

            {/* DROPDOWN MENU */}
            {item.dropdown && (
              <ul className='absolute left-0 top-full bg-white shadow-lg rounded-lg py-3 px-2 w-56 z-50 hidden group-hover:flex flex-col'>
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    {subItem.path ? (
                      <RouterLink
                        to={subItem.path}
                        className='block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded'
                      >
                        {subItem.label}
                      </RouterLink>
                    ) : (
                      <button
                        onClick={() =>
                          handleScrollNavigation(
                            subItem.href.replace('#', '')
                          )
                        }
                        className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded bg-transparent border-none cursor-pointer'
                      >
                        {subItem.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* AUTH BUTTONS */}
      <div className='hidden lg:flex space-x-8 items-center'>
        <RouterLink
          to='/login'
          className='font-sub text-[#2f2a76] hover:text-[#F4400D]'
        >
          Sign In
        </RouterLink>

        <RouterLink
          to='/signup'
          className='px-10 py-4 bg-[#F4400D] text-white rounded-full font-semibold hover:bg-transparent hover:text-[#F4400D] hover:border-[#F4400D] border'
        >
          Sign Up
        </RouterLink>
      </div>

      {/* MOBILE BUTTON */}
      <div className='lg:hidden'>
        <button onClick={toggleNavbar}>
          {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>

    {/* MOBILE MENU */}
    {mobileDrawerOpen && (
      <div className='fixed inset-0 z-40 bg-neutral-900 bg-opacity-95 flex flex-col items-center justify-center lg:hidden'>
        <button
          onClick={toggleNavbar}
          className='absolute top-6 right-6 text-white'
        >
          <X size={28} />
        </button>

        <ul className='space-y-6 text-white text-lg text-center'>
          {navItems.map((item, index) => (
            <li key={index}>
              {item.dropdown ? (
                <>
                  <p className='font-semibold text-xl mb-3'>
                    {item.label}
                  </p>

                  <ul className='space-y-3'>
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        {subItem.path ? (
                          <RouterLink
                            to={subItem.path}
                            onClick={() => setMobileDrawerOpen(false)}
                            className='text-gray-300 hover:text-[#F4400D]'
                          >
                            {subItem.label}
                          </RouterLink>
                        ) : (
                          <button
                            onClick={() =>
                              handleScrollNavigation(
                                subItem.href.replace('#', '')
                              )
                            }
                            className='text-gray-300 hover:text-[#F4400D] bg-transparent border-none cursor-pointer'
                          >
                            {subItem.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : item.path ? (
                <RouterLink
                  to={item.path}
                  onClick={() => setMobileDrawerOpen(false)}
                  className='hover:text-[#F4400D]'
                >
                  {item.label}
                </RouterLink>
              ) : item.href === '/' ? (
                <RouterLink
                  to='/'
                  onClick={() => setMobileDrawerOpen(false)}
                  className='hover:text-[#F4400D]'
                >
                  {item.label}
                </RouterLink>
              ) : (
                <button
                  onClick={() =>
                    handleScrollNavigation(item.href.replace('#', ''))
                  }
                  className='hover:text-[#F4400D] bg-transparent border-none text-white cursor-pointer'
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE AUTH */}
        <div className='flex flex-col gap-4 mt-12 w-72'>
          <RouterLink
            to='/login'
            onClick={() => setMobileDrawerOpen(false)}
            className='text-center py-3 border border-[#F4400D] text-[#F4400D] rounded-full'
          >
            Sign In
          </RouterLink>

          <RouterLink
            to='/company-registration'
            onClick={() => setMobileDrawerOpen(false)}
            className='text-center py-3 bg-[#F4400D] text-white rounded-full'
          >
            Sign Up
          </RouterLink>
        </div>
      </div>
    )}
  </nav>
</div>


);
};

export default Navbar;
