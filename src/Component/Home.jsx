// import React from 'react';
// import doctor from '../images/doctor.png'; // Replace with your actual doctor image path
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';

// library.add(faPhone);

// function Home() {
//   return (
//     <div className="bg-gray-100">
//       <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row items-center">
//         {/* Left Side: Text Content */}
//         <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//           <p className="text-purple-500 font-semibold mb-2">
//             <span className="mr-1">❤️</span> Your Health, Our Priority
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Comprehensive Medical Care Tailored To You.
//           </h1>
//           <p className="text-gray-600 mb-6">
//             Welcome, We Are Dedicated To Providing Personalized And Compassionate Healthcare.
//           </p>
//           <button className="bg-purple-500 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700">
//             Book An Appointment
//           </button>
//         </div>

//         {/* Right Side: Doctor Image */}
//         <div className="md:w-1/2">
//           <img src={doctor} alt="Doctor" className="rounded-lg shadow-xl" />
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-white">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
//           {/* Stats */}
//           <div className="flex justify-around items-center">
//             <div>
//               <p className="text-3xl font-bold text-gray-800">240</p>
//               <p className="text-gray-600">Best Doctor</p>
//             </div>
//             <div>
//               <p className="text-3xl font-bold text-gray-800">20</p>
//               <p className="text-gray-600">Surgery Room</p>
//             </div>
//             <div>
//               <p className="text-3xl font-bold text-gray-800">+1500</p>
//               <p className="text-gray-600">Patient Capacity</p>
//             </div>
//           </div>

//           {/* Emergency Call Section */}
//           <div className="bg-[#a349a3] text-white py-6 px-10  flex flex-col items-center justify-center">
//             <h2 className="text-xl font-semibold">Emergency Call</h2>
//             <p className="flex items-center">
//               <FontAwesomeIcon icon={faPhone} className="mr-2" />
//               +91 97262 37092
//             </p>
//             <p className="text-sm">You Are About To Initiate An Emergency Call, Confirm To Proceed.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import d5 from '../images/d5.png';
import doctor from '../images/doctor.png'; // Replace with your actual doctor image path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faHeart,
    faUser, // Replace with Dermatology icon if you have one
    faRunning, // Replace with Physiotherapy icon if you have one
    faBone, // Replace with Orthopaedics icon if you have one
    faPhone,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import d1 from '../images/d1.png';
import d2 from '../images/d2.png';
import OurHappyClients from './OurHappyClients';

library.add(faPhone, faHeart, faUser, faRunning, faBone, faCheck);

function Home() {
    return (
        <>
            <div>
                <div className="bg-[#f2f2f2]">
                    <div className="container mx-auto py-15 px-4 flex flex-col md:flex-row items-center">
                        {/* Left Side: Text Content */}
                        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                            <p className="text-purple-500 font-semibold mb-2">
                                <span className="mr-1">❤️</span> Your Health, Our Priority
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                                Comprehensive Medical Care Tailored To You.
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Welcome, We Are Dedicated To Providing Personalized And Compassionate Healthcare.
                            </p>
                            <button className="bg-[#A5487D] text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700">
                                Book An Appointment
                            </button>
                        </div>

                        {/* Right Side: Doctor Image */}
                        <div className="md:w-1/2">
                            <img src={doctor} alt="Doctor" className="rounded-lg shadow-xl w-full h-auto object-cover" />

                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-white">
                        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                            {/* Stats */}
                            <div className="flex justify-around items-center">
                                <div>
                                    <p className="text-3xl font-bold text-gray-800">240</p>
                                    <p className="text-gray-600">Best Doctor</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-800">20</p>
                                    <p className="text-gray-600">Surgery Room</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-800">+1500</p>
                                    <p className="text-gray-600">Patient Capacity</p>
                                </div>
                            </div>

                            {/* Emergency Call Section */}
                            <div className="bg-[#A5487D] text-white py-12 px-12  flex flex-col items-center justify-center">
                                <h2 className="text-xl font-semibold">Emergency Call</h2>
                                <p className="flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                    +91 97262 37092
                                </p>
                                <p className="text-sm">You Are About To Initiate An Emergency Call, Confirm To Proceed.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-12">
                    <div className="container mx-auto px-4">
                        {/* Heading Section */}
                        <div className="mb-10">
                            <p className=" text-2xl text-[#A5487D] uppercase font-bold tracking-wider">Services & Specialties</p>
                            <br></br>
                            <h2 className="text-4xl font-bold text-gray-800 ">
                                Comprehensive Health Care
                            </h2>
                            {/* <h2 className='"text-3xl font-bold text-gray-800 '> Services Tailored To Your Needs</h2> */}
                            <h2 className="text-4xl font-bold text-gray-800 mt-2">
                            Services Tailored To Your Needs
                            </h2>
                        </div>
                        

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Cardiology */}
                            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-5xl text-gray-700 mb-4">
                                    <FontAwesomeIcon icon="heart" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cardiology</h3>
                                <p className="text-gray-600 text-sm">
                                    Branch of medicine that concerns diseases and disorders of the heart.
                                </p>
                            </div>

                            {/* Dermatology */}
                            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-5xl text-gray-700 mb-4">
                                    <FontAwesomeIcon icon="user" />  {/* Replace with Dermatology icon */}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dermatology</h3>
                                <p className="text-gray-600 text-sm">
                                    Branch of medicine that studies the skin and parts related to the skin.
                                </p>
                            </div>

                            {/* Physiotherapy */}
                            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-5xl text-gray-700 mb-4">
                                    <FontAwesomeIcon icon="running" />  {/* Replace with Physiotherapy icon */}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Physiotherapy</h3>
                                <p className="text-gray-600 text-sm">
                                    Treatment to restore, maintain, and make the most of a patient's mobility.
                                </p>
                            </div>

                            {/* Orthopaedics */}
                            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-5xl text-gray-700 mb-4">
                                    <FontAwesomeIcon icon="bone" />  {/* Replace with Orthopaedics icon */}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Orthopaedics</h3>
                                <p className="text-gray-600 text-sm">
                                    Broad based medical and surgical specialty dedicated to the prevention, diagnosis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto py-16 px-4">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <p className="text-[#A5487D]  text-2xl uppercase font-semibold tracking-wider">Why Choose Us</p>
                        <br></br>
                        <h2 className="text-3xl font-bold text-gray-800">Our Commitment </h2>
                        <span className='text-3xl font-bold text-gray-800'>To Healing</span>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Image */}
                        <div className="md:w-1/2" >
                            <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
                                {/* Main Image */}
                                <img
                                    src={d1}
                                    alt="Offshore Oil Rig"
                                    className="w-full shadow-md"
                                />
                                {/* Overlay Image */}
                                <img
                                    src={d2}
                                    alt="Cargo Ship"
                                    className="absolute bottom-[6%] left-[70%] w-1/3 sm:w-[180px] lg:w-[200px] top-[60%]"
                                />
                            </div>
                        </div>

                        {/* Text and List */}
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Your Health Is Our Priority. Explore Our Services And Find The Care Your Need.
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Discover the heart of our hospital, where dedicated professionals work together to provide exceptional healthcare services with compassion and expertise.
                            </p>

                            {/* List of Benefits */}
                            <ul>
                                <li className="flex items-center mb-2">
                                    <FontAwesomeIcon icon="check" className="text-purple-500 mr-2" />
                                    <p className="text-gray-700">24 hours emergency assistance call</p>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FontAwesomeIcon icon="check" className="text-purple-500 mr-2" />
                                    <p className="text-gray-700">We are committed providing healthcare service</p>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FontAwesomeIcon icon="check" className="text-purple-500 mr-2" />
                                    <p className="text-gray-700">Really know the true needs and expectations of patients</p>
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon icon="check" className="text-purple-500 mr-2" />
                                    <p className="text-gray-700">Quality</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <OurHappyClients />

                <div
                    className="container mx-auto px-12 py-24 md:py-14 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-md relative"
                    style={{ backgroundColor: '#A5487D' }} // Consistent background color
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-30">
                        <img
                            src={d5}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-white">Start Now Your</h2>
                        <p className="text-xl text-white">Consult Your Health</p>
                    </div>

                    {/* Right Side: Button */}
                    <div className="relative z-10">
                        <button
                            className="bg-white text-[#A5487D] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D]"
                        >
                            Book Consultation
                        </button>
                    </div>
                </div>





            </div>
        </>
    );
}

export default Home;

