import React from 'react';
import d5 from '../images/d5.png';
import HairLoss1 from './HairLoss1';


const HairLoss = () => {
  return (
    <>
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Heading and Description */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Hair Growth Treatment
          </h2>
          <p className="text-gray-600 mt-2">
          Hair loss treatments vary depending on the cause and severity of hair loss. Common options include medications like minoxidil, which is a topical solution that stimulates hair growth, and finasteride, an oral medication that helps prevent further hair loss
           by blocking the hormone responsible for hair thinning
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
    <HairLoss1/>
    </>
  );
};

export default HairLoss;
