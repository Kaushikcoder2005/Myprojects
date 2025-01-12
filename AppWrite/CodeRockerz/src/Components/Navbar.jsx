import React, { useContext, useState } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Context } from '../Context/Context';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const navItems = [
    // { name: 'Post', href: '/post', sign: <Plus size={25} className='mr-1' />  },   
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-12 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-800">
              BlogRockerz
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/post"
              className="text-gray-600 flex items-center hover:text-gray-900 px-3 py-2 rounded-full text-sm font-medium 
                     transform hover:scale-105 transition-transform duration-200
                 shadow-lg hover:shadow-xl
                         bg-white hover:bg-gray-100 
                           border border-gray-200
                           active:translate-y-2 active:shadow-lg"


            >
              <Plus size={25} className='mr-1' />
              Post
            </NavLink>

            {navItems.map(item => (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-gray-600 flex items-center hover:scale-105 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.sign}
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/post"
                className="text-gray-600 flex items-center hover:text-gray-900 px-3 py-2 rounded-full text-sm font-medium 
                      transform hover:scale-105 transition-transform duration-200
                  shadow-lg hover:shadow-xl
                          bg-white hover:bg-gray-100 
                            border border-gray-200
                            active:translate-y-2 active:shadow-lg  w-24 "


              >
                <Plus size={25} className='mr-1' />
                Post
              </NavLink>
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;