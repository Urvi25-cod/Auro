// // import type React from "react"
// import { useState } from "react"

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     date: "",
//     message: "",
//     countryCode: "IND"
//   })

//   const handleSubmit = () => {
//     e.preventDefault()
//     if (!formData.name || !formData.phone || !formData.message) {
//       alert("Please fill all required fields")
//       return
//     }
//     console.log(formData)
//     // Add your submission logic here
//   }

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <div className="border border-pink-300 rounded-lg p-6 shadow-sm">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Get In Touch</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Input */}
//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Full name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="First name"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               required
//             />
//           </div>

//           {/* Phone Input */}
//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Phone number <span className="text-red-500">*</span>
//             </label>
//             <div className="flex">
//               <select
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-400"
//                 value={formData.countryCode}
//                 onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
//               >
//                 <option value="IND">+91</option>
//                 <option value="USA">+1</option>
//                 <option value="UK">+44</option>
//               </select>
//               <input
//                 type="tel"
//                 placeholder="9999 999 999"
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-400"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                 required
//               />
//             </div>
//           </div>

//           {/* Date Input */}
//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Select date
//             </label>
//             <input
//               type="date"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
//               value={formData.date}
//               onChange={(e) => setFormData({...formData, date: e.target.value})}
//             />
//           </div>

//           {/* Message Input */}
//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Message <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               rows={4}
//               placeholder="Your message"
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
//               value={formData.message}
//               onChange={(e) => setFormData({...formData, message: e.target.value})}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-pink-500 text-white py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors font-medium"
//           >
//             Book an appointment
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Abc() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")
  const [countryCode, setCountryCode] = useState("IND")

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ name, phone, date, message, countryCode })
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="border border-pink-300 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Get In Touch</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Full name
            </label>
            <input
              type="text"
              id="name"
              placeholder="First name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone number
            </label>
            <div className="flex">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center justify-between px-3 py-3 border border-gray-300 rounded-l-lg bg-white text-gray-700 focus:outline-none"
                >
                  <span>{countryCode}</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="hidden absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <div
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setCountryCode("IND")}
                  >
                    IND
                  </div>
                  <div
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setCountryCode("USA")}
                  >
                    USA
                  </div>
                  <div
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setCountryCode("UK")}
                  >
                    UK
                  </div>
                </div>
              </div>
              <input
                type="tel"
                id="phone"
                placeholder="+91 9999 999 999"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-1 focus:ring-pink-400"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 mb-2">
              Select date
            </label>
            <div className="relative">
              <input
              id="date"
              type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400 bg-white"
                value={date}
                onChange={e => setDate(e.target.value)}
              >
                
              </input>
              {/* <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div> */}
            </div>
          </div>
          {/* <div>
           <label className="block text-gray-700 mb-2 font-medium">
              Select date
            </label>
           <input
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div> */}

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#b05888] text-white py-3 px-4 rounded-lg hover:bg-[#9d4d79] transition-colors"
          >
            Book an appointment
          </button>
        </form>
      </div>
    </div>
  )
}