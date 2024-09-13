import React from 'react';
import { navLinks } from '../constants'; // Ensure navLinks is an array of objects

const NavItems = ({ isMobile }) => {
  return (
    <ul className={`nav-ul ${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-4'}`}>
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Amir
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          {/* Desktop Nav Items */}
          <nav className="sm:flex hidden">
            <NavItems isMobile={false} />
          </nav>
        </div>
      </div>

      {/* Mobile Nav Items in Sidebar */}
      {isOpen && (
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} sm:hidden`}>
          <nav className="p-5">
            <NavItems isMobile={true} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
