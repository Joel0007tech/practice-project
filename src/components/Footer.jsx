import React, { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">My Site</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-300 hover:text-white hover:border-white" onClick={toggleNav}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      {isOpen && (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
              Link 1
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
              Link 2
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
              Link 3
            </a>
          </div>
          <div>
            <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-300 hover:text-white hover:border-white" onClick={toggleNav}>
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M14.348 14.849a1.25 1.25 0 0 1-1.768 0l-2.83-2.828-2.828 2.828a1.25 1.25 0 0 1-1.768-1.768l2.828-2.828-2.828-2.828a1.25 1.25 0 1 1 1.768-1.768l2.828 2.828 2.83-2.828a1.25 1.25 0 0 1 1.768 1.768l-2.83 2.828 2.83 2.828a1.25 1.25 0 0 1 0 1.768z"/></svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
