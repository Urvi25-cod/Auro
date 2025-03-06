import React from 'react';
import d5 from '../images/d5.PNG';
import Dandruff1 from './Dandruff1';


const Dandruff = () => {
    return (
        <>
            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    {/* Heading and Description */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">
                            Skin Treatment
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Skin treatments can cause a variety of symptoms, depending on the type of treatment, the individual's skin type, and any underlying conditions. Below is a detailed breakdown of symptoms based on different categories of skin treatments:
                        </p>
                    </div>

                    {/* Banner */}
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
                                               <div className="flex space-x-4">
                                                   <button
                                                       className="bg-white text-[#A5487D] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D]"
                                                   >
                                                       Book Consultation
                                                   </button>
                                                   <button className="bg-white text-[#A5487D] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D]">
                                   Book An Appointment
                                 </button>
                                               </div>
                                           </div>
                </div>
            </div>
            <Dandruff1 />
        </>
    );
};

export default Dandruff;
