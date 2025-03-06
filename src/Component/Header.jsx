// import React from "react";
// import logo from '../images/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faMapMarkerAlt,
//   faPhone,
//   faEnvelope,
//   faSearch,
// } from '@fortawesome/free-solid-svg-icons';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// const Header = () =>{

// return(
//     <>
//          <div className="bg-white py-4">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between flex-wrap">
//           {/* Logo */}
//           <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
//             <div className="flex items-center">
//               <img
//                 src={logo}
//                 alt="Aura Homoeopathy Logo"
//                 className="h-12 mr-2"
//               />
//               <div>
//                 <h1 className="text-lg font-semibold">Aura Homoeopathy</h1>
//                 <p className="text-sm text-gray-500">
//                   Holistic approach & solutions for your health.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Address, Phone, Email */}
//           <div className="w-full md:w-auto flex items-center justify-center mb-2 md:mb-0">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-700" />
//             <p className="text-sm text-gray-700">
//               A-604 Vama Apex, Althan Canal Road, Surat, 395017
//             </p>
//           </div>
//           <div className="w-full md:w-auto flex items-center justify-center mb-2 md:mb-0">
//             <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-700" />
//             <p className="text-sm text-gray-700">+91 97262 37092</p>
//           </div>
//           <div className="w-full md:w-auto flex items-center justify-center mb-2 md:mb-0">
//             <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-700" />
//             <p className="text-sm text-gray-700">princyc415@gmail.com</p>
//           </div>

//           {/* Search Bar */}
//           <div className="w-full md:w-auto flex justify-center">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
//               />
//               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
//                 <FontAwesomeIcon icon={faMagnifyingGlass} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
// )
// }


// export default Header;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import logo from  '../images/logo.png'; // Import your logo image
import Navbar from "../Component/Navbar";


library.add(faMapMarkerAlt, faPhone, faEnvelope, faSearch,faCaretDown);

function Header() {
  return (
    <>
    <div className="bg-white py-1 shadow-md">
      <div className="px-4 flex items-center justify-between">
        {/* Left Side: Logo and Name */}
        <div className="flex items-center">
          <img src={logo} alt="Aura Homoeopathy Logo" className="h- w-auto mr-4" />
        </div>

        {/* Middle Side: Address, Phone, Email */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center text-gray-700">
            <FontAwesomeIcon icon="map-marker-alt" className="mr-2" />
            <p className="text-sm">A-604 Vama Apex, Althan Canal Road, Surat, 395017</p>
          </div>
          <div className="flex items-center text-gray-700">
            <FontAwesomeIcon icon="phone" className="mr-2" />
            <p className="text-sm">+91 97262 37092</p>
          </div>
          <div className="flex items-center text-gray-700">
            <FontAwesomeIcon icon="envelope" className="mr-2" />
            <p className="text-sm">princyc415@gmail.com</p>
          </div>
        </div>

        {/* Right Side: Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-500"
          />
          <button className="ml-2 text-gray-500 hover:text-purple-500">
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
      </div>
    </div>
<Navbar/>
    </>
  );
}

export default Header;
