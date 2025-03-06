// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';

// library.add(faCaretDown,faBars);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     document.body.classList.toggle('overflow-hidden');
//   };

// function Navbar() {
//   return (
//     <nav className="bg-white container mx-auto px-10 rounded-full shadow-md h-20 py-2 ">
//       <ul className="flex items-center justify-around text-gray-700 mt-2">
//         <li>
//           <Link to="/" className="hover:text-purple-500">Home</Link>
//         </li>
//         <li>
//           <Link to="/" className="flex items-center hover:text-purple-500">
//             Homeopathy Treatment
//             <FontAwesomeIcon icon="caret-down" className="ml-1" />
//           </Link>
//         </li>
//         <li>
//           <Link to="/HairGrowth" className="flex items-center hover:text-purple-500">
//             Hair Treatment
//             <FontAwesomeIcon icon="caret-down" className="ml-1" />
//           </Link>
//         </li>
//         <li>
//           <Link to="/" className="flex items-center hover:text-purple-500">
//             Skin Treatment
//             <FontAwesomeIcon icon="caret-down" className="ml-1" />
//           </Link>
//         </li>
//         <li>
//           <Link to="/Abots" className="hover:text-purple-500">About</Link>
//         </li>
//         <li>
//           <Link to="/ContactForm" className="hover:text-purple-500">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';

// library.add(faCaretDown, faBars);

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     document.body.classList.toggle('overflow-hidden');
//   };

//   return (
//     <nav className="bg-white shadow-md container mx-auto  rounded-full ounded-full h-20 py-2 w-full">
//          {/* <nav className="bg-white container mx-auto px-10 rounded-full shadow-md h-20 py-2 "></nav> */}
//       {/* "bg-white container mx-auto px-10 rounded-full shadow-md h-20 py-2 " */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="text-xl font-bold text-purple-600 hover:text-purple-700">
//               Aura Homoeopathy
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="hover:text-purple-500">Home</Link>
//             <Link to="/homeopathy" className="flex items-center hover:text-purple-500">
//               Homeopathy Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/HairGrowth" className="flex items-center hover:text-purple-500">
//               Hair Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/skin-treatment" className="flex items-center hover:text-purple-500">
//               Skin Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/Abots" className="hover:text-purple-500">About</Link>
//             <Link to="/ContactForm" className="hover:text-purple-500">Contact</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-600 hover:text-purple-600 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <FontAwesomeIcon icon={faBars} className="text-2xl" />
//           </button>
//         </div>

//         {/* Mobile Sidebar */}
//         <div className={`fixed inset-y-0 right-0 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} bg-white shadow-lg w-full z-50`}>
//           <div className="flex flex-col items-center py-8 space-y-6">
//             <Link to="/" className="hover:text-purple-500">Home</Link>
//             <Link to="/homeopathy" className="flex items-center hover:text-purple-500">
//               Homeopathy Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/hair-treatment" className="flex items-center hover:text-purple-500">
//               Hair Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/skin-treatment" className="flex items-center hover:text-purple-500">
//               Skin Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/about" className="hover:text-purple-500">About</Link>
//             <Link to="/contact" className="hover:text-purple-500">Contact</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// ---------------------------------- 2 sceond------------------------------------------------------
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import faTimes for close icon
// import { library } from '@fortawesome/fontawesome-svg-core';

// library.add(faCaretDown, faBars, faTimes);

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const mobileMenuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     document.body.classList.toggle('overflow-hidden');
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//     document.body.classList.remove('overflow-hidden');
//   };


//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         closeMenu();
//       }
//     };

//     if (isMenuOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isMenuOpen]);


//   return (
//     <nav className="bg-white shadow-md container mx-auto rounded-full h-20 py-2 w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           {/* <div className="flex items-center">
//             <Link to="/" className="text-xl font-bold text-purple-600 hover:text-purple-700">
//               Aura Homoeopathy
//             </Link>
//           </div> */}

//           {/* Desktop Menu */}
//           {/* <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="hover:text-purple-500">Home</Link>
//             <Link to="/homeopathy" className="flex items-center hover:text-purple-500">
//               Homeopathy Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/HairGrowth" className="flex items-center hover:text-purple-500">
//               Hair Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/Skin " className="flex items-center hover:text-purple-500">
//               Skin Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/abots" className="hover:text-purple-500">About</Link>
//             <Link to="/ContactForm" className="hover:text-purple-500">Contact</Link>
//           </div> */}
//            <div className="hidden md:flex items-center space-x-8 ml-30">
//             <Link to="/" className="hover:text-purple-500">Home</Link>
//             <Link to="/homeopathy" className="flex items-center hover:text-purple-500">
//               Homeopathy Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <div className="relative group">
//             <Link to="/HairGrowth" className="flex items-center hover:text-purple-500">
//               Hair Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//               <div className="py-1" role="menu" aria-orientation="vertical">
//                 <Link to="/HairGrowth" className="block px-4 py-2 text-sm text-white bg-purple-600 hover:bg-purple-700 flex items-center justify-between" role="menuitem">
//                   Hair Growth Treatment
//                   <FontAwesomeIcon icon="chevron-right" className="ml-1" />
//                 </Link>
//                 <Link to="/HairLoss" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between" role="menuitem">
//                   Hair Loss Treatment
//                   <FontAwesomeIcon icon="chevron-right" className="ml-1" />
//                 </Link>
//                 <Link to="/Male" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between" role="menuitem">
//                   Male Pattern Baldness
//                   <FontAwesomeIcon icon="chevron-right" className="ml-1" />
//                 </Link>
//                 <Link to="/Femal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between" role="menuitem">
//                   Female Pattern Baldness
//                   <FontAwesomeIcon icon="chevron-right" className="ml-1" />
//                 </Link>
//                 <Link to="/Alopecia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between" role="menuitem">
//                   Alopecia
//                   <FontAwesomeIcon icon="chevron-right" className="ml-1" />
//                 </Link>
//                 <Link to="/Dandruff1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between" role="menuitem">
//                   Dandruff Treatment
//                   <FontAwesomeIcon icon="chevron-right" className="ml-1" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//             <Link to="/Skin " className="flex items-center hover:text-purple-500">
//               Skin Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/abots" className="hover:text-purple-500">About</Link>
//             <Link to="/ContactForm" className="hover:text-purple-500">Contact</Link>
//           </div>


//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-600 hover:text-purple-600 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <FontAwesomeIcon icon={faBars} className="text-2xl" />
//           </button>
//         </div>

//         {/* Mobile Sidebar */}
//         <div
//           ref={mobileMenuRef}
//           className={`fixed inset-y-0 right-0 transform transition-transform duration-300 ease-in-out bg-white shadow-lg w-full z-50 ${
//             isMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}
//         >
//            {/* Close Button */}
//            <button
//               className="absolute top-4 right-4 text-gray-600 hover:text-purple-600 focus:outline-none"
//               onClick={closeMenu}
//             >
//               <FontAwesomeIcon icon={faTimes} className="text-2xl" />
//             </button>
//           <div className="flex flex-col items-center py-12 space-y-6">
//             <Link to="/" className="hover:text-purple-500" onClick={closeMenu}>Home</Link>
//             <Link to="/homeopathy" className="flex items-center hover:text-purple-500">
//               Homeopathy Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/HairGrowth" className="flex items-center hover:text-purple-500" onClick={closeMenu}>
//               Hair Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/skin-treatment" className="flex items-center hover:text-purple-500">
//               Skin Treatment
//               <FontAwesomeIcon icon="caret-down" className="ml-1" />
//             </Link>
//             <Link to="/abots" className="hover:text-purple-500" onClick={closeMenu}>About</Link>
//             <Link to="/ContactForm" className="hover:text-purple-500" onClick={closeMenu}>Contact</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCaretDown, faBars, faTimes, faChevronRight);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHairDropdownOpen, setIsHairDropdownOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('overflow-hidden');
    setIsHairDropdownOpen(false); // Close dropdown when menu toggles
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
    setIsHairDropdownOpen(false); // Close dropdown when closing menu
  };

  const toggleHairDropdown = () => {
    setIsHairDropdownOpen(!isHairDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-md container mx-auto md:rounded-full  h-20 py-2 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-30">
            <Link to="/" className="hover:text-purple-500">Home</Link>
            <Link to="/homeopathy" className="flex items-center hover:text-purple-500">
              Homeopathy Treatment
              <FontAwesomeIcon icon="caret-down" className="ml-1" />
            </Link>
            <div className="relative group">
              <Link
                to="/HairGrowth"
                className="flex items-center hover:text-purple-500"
              >
                Hair Treatment
                <FontAwesomeIcon icon="caret-down" className="ml-1" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white  opacity-0
               group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-50">
                <div className="" role="menu" aria-orientation="vertical">
                  <Link to="/HairGrowth" className="block px-4 py-2 text-sm hover:bg-[#b05888] hover:text-white  flex items-center justify-between" role="menuitem">
                    Hair Growth Treatment
                    <FontAwesomeIcon icon="chevron-right" className="ml-1" />
                  </Link>
                  <Link to="/HairLoss" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#b05888] hover:text-white flex items-center justify-between" role="menuitem">
                    Hair Loss Treatment
                    <FontAwesomeIcon icon="chevron-right" className="ml-1" />
                  </Link>
                  <Link to="/Male" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#b05888] hover:text-white  flex items-center justify-between" role="menuitem">
                    Male Pattern Baldness
                    <FontAwesomeIcon icon="chevron-right" className="ml-1" />
                  </Link>
                  <Link to="/Femal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#b05888] hover:text-white  flex items-center justify-between" role="menuitem">
                    Female Pattern Baldness
                    <FontAwesomeIcon icon="chevron-right" className="ml-1" />
                  </Link>
                  <Link to="/Alopecia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#b05888] hover:text-white  flex items-center justify-between" role="menuitem">
                    Alopecia
                    <FontAwesomeIcon icon="chevron-right" className="ml-1" />
                  </Link>
                  <Link to="/Dandruff" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#b05888] hover:text-white  flex items-center justify-between" role="menuitem">
                    Dandruff Treatment
                    <FontAwesomeIcon icon="chevron-right" className="ml-1" />
                  </Link>
                  <Link to="/gynecological problems" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#b05888] hover:text-white  flex items-center justify-between" role="menuitem">
                  gynecological problems.
                    <FontAwesomeIcon icon="chevron-right" className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/Skin " className="flex items-center hover:text-purple-500">
              Skin Treatment
              <FontAwesomeIcon icon="caret-down" className="ml-1" />
            </Link>
            <Link to="/abots" className="hover:text-purple-500">About</Link>
            <Link to="/ContactForm" className="hover:text-purple-500">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-purple-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          ref={mobileMenuRef}
          className={`fixed inset-y-0 right-0 transform transition-transform duration-300 ease-in-out bg-white shadow-lg w-full z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-purple-600 focus:outline-none"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>

          <div className="flex flex-col items-center py-12 space-y-6">
            <Link to="/" className="hover:text-purple-500" onClick={closeMenu}>Home</Link>
            <Link to="/homeopathy" className="flex items-center hover:text-purple-500">
              Homeopathy Treatment
              <FontAwesomeIcon icon="caret-down" className="ml-1" />
            </Link>

            {/* Mobile Hair Treatment Dropdown */}
            {/* <div className="w-full"></div> */}
            <div>
              <button
                onClick={toggleHairDropdown}
              // className="flex items-center justify-between w-full hover:text-purple-500 focus:outline-none"
              >
                Hair Treatment
                <FontAwesomeIcon icon="caret-down" className="ml-1" />
              </button>
              {isHairDropdownOpen && (
                <div className="mt-2 space-y-2">
                  <Link to="/HairGrowth" className="block py-2 pl-4 text-sm hover:text-purple-500" onClick={closeMenu}>
                    Hair Growth Treatment
                  </Link>
                  <Link to="/HairLoss" className="block py-2 pl-4 text-sm hover:text-purple-500" onClick={closeMenu}>
                    Hair Loss Treatment
                  </Link>
                  <Link to="/Male" className="block py-2 pl-4 text-sm hover:text-purple-500" onClick={closeMenu}>
                    Male Pattern Baldness
                  </Link>
                  <Link to="/Femal" className="block py-2 pl-4 text-sm hover:text-purple-500" onClick={closeMenu}>
                    Female Pattern Baldness
                  </Link>
                  <Link to="/Alopecia" className="block py-2 pl-4 text-sm hover:text-purple-500" onClick={closeMenu}>
                    Alopecia
                  </Link>
                  <Link to="/Dandruff1" className="block py-2 pl-4 text-sm hover:text-purple-500" onClick={closeMenu}>
                    Dandruff Treatment
                  </Link>
                  <Link to="/Dandruff1" className="block py-2 pl-4 text-sm hover:text-purple-500" onClick={closeMenu}>
                  gynecological problems.
                  </Link>
                </div>
              )}
            </div>

            <Link to="/Skin" className="flex items-center hover:text-purple-500">
              Skin Treatment
              <FontAwesomeIcon icon="caret-down" className="ml-1" />
            </Link>
            <Link to="/abots" className="hover:text-purple-500" onClick={closeMenu}>About</Link>
            <Link to="/ContactForm" className="hover:text-purple-500" onClick={closeMenu}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




