// import React, { useState } from 'react';

// const HairGrowths = () => {
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [faqOpen, setFaqOpen] = useState([false, false, false]);


//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const toggleFaq = (index) => {
//     const newFaqOpen = [...faqOpen];
//     newFaqOpen[index] = !newFaqOpen[index];
//     setFaqOpen(newFaqOpen);
//   };

//   return (
//     <div className="container mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//       {/* Left Section: Text Content */}
//       <div>
//         {/* Tab Navigation */}
//         <div className="flex border-b border-gray-200 mb-4">
//           {['Overview', 'Causes', 'Symptoms', 'Homeopathic Tratment', 'Faqs'].map(
//             (tab) => (
//               <button
//                 key={tab}
//                 className={`px-4 py-2 font-semibold ${
//                   activeTab === tab
//                     ? 'text-[#A5487D] border-b-2 border-[#A5487D]'
//                     : 'text-gray-500 hover:text-gray-700'
//                 }`}
//                 onClick={() => handleTabClick(tab)}
//               >
//                 {tab}
//               </button>
//             )
//           )}
//         </div>

//         {/* Tab Content */}
//         {activeTab === 'Overview' && (
//           <div>
//             <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//               Overview of Hair Growth Treatment
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Hair growth treatment focuses on revitalizing the scalp,
//               strengthening hair follicles, and promoting natural regrowth.
//               Various factors such as stress, hormonal imbalances, nutritional
//               deficiencies, and genetics contribute to hair loss, thinning, and
//               premature graying. A holistic approach, including homeopathy,
//               personalized nutrition, and scalp therapies, can effectively
//               address these issues without harmful side effects.
//             </p>
//             <p className="text-gray-600 mb-6">
//               Homeopathic remedies stimulate hair follicles, improve blood
//               circulation, and restore the body's natural balance to encourage
//               healthy hair growth. These treatments target the root cause of
//               hair loss rather than just the symptoms, ensuring long-lasting
//               results.
//             </p>
//             <p className="text-gray-600">
//               By using safe, natural solutions, hair growth treatment not only
//               enhances hair thickness and strength but also improves overall
//               scalp health. With a personalized and holistic approach,
//               individuals can achieve fuller, healthier, and more vibrant hair.
//             </p>
//           </div>
//         )}

//         {activeTab === 'Causes' && (
//           <div>
//             {/* Content for Causes tab */}
//             <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//               Causes of Hair Loss
//             </h2>
            
//             <div className="text-gray-600">
//               <p className="mb-4">Hair loss and thinning can result from various internal and external factors. Identifying the root cause is essential for effective treatment. Below are some common causes of hair loss:</p>

//               <ol className="list-decimal pl-5">
//                 <li className="mb-2">
//                   <span className="font-semibold">Hormonal Imbalance</span>
//                   <p>Hormones play a crucial role in hair growth, and imbalances can lead to excessive shedding. Conditions such as thyroid disorders, PCOS (Polycystic Ovary Syndrome), and changes in estrogen or testosterone levels can disrupt the natural hair growth cycle, leading to thinning or bald patches.</p>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Nutritional Deficiencies</span>
//                   <p>A lack of essential vitamins and minerals, such as iron, biotin, zinc, and vitamin D, can weaken hair follicles and hinder healthy growth. Poor diet, restrictive eating habits, or underlying health conditions can contribute to these deficiencies, making hair brittle and prone to falling out.</p>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Stress and Anxiety</span>
//                   <p>Chronic stress can trigger hair loss conditions such as telogen effluvium, where a large number of hair follicles prematurely enter the resting phase. Stress can also lead to scalp tension, which reduces blood flow and nutrient supply to hair follicles, slowing down growth.</p>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Genetics (Hereditary Hair Loss)</span>
//                   <p>Androgenetic alopecia, or hereditary hair loss, is one of the most common causes of baldness in both men and women. Genetic predisposition affects hair follicle sensitivity to hormones, gradually leading to thinning and receding hairlines over time.</p>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Poor Scalp Health</span>
//                   <p>A dry, flaky, or oily scalp can clog hair follicles, leading to inflammation and reduced hair growth. Dandruff, scalp infections, and conditions like seborrheic dermatitis can weaken the roots, making hair prone to shedding.</p>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Excessive Use of Chemical-Based Hair Products</span>
//                   <p>Frequent use of harsh shampoos, hair dyes, heat styling tools, and chemical treatments (such as perms or straightening) can damage the hair shaft and weaken follicles, causing breakage and hair thinning.</p>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Medical Conditions and Medications</span>
//                   <p>Certain medical conditions, such as alopecia areata (an autoimmune disorder), anemia, and chronic illnesses, can lead to sudden hair loss. Additionally, medications such as chemotherapy drugs, antidepressants, and blood pressure medications may have hair loss as a side effect.</p>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Aging and Hormonal Changes</span>
//                   <p>As people age, the hair growth cycle slows down, and follicles produce thinner, weaker strands. Hormonal changes during menopause or andropause can also contribute to significant hair thinning and reduced density.</p>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Environmental Factors and Pollution</span>
//                   <p>Exposure to pollution, UV radiation, and toxins in the environment can damage the scalp and hair follicles. Hard water, chlorine, and pollutants can weaken hair strands, making them more susceptible to breakage and loss.</p>
//                 </li>
//                 <li>
//                   <span className="font-semibold">Poor Hair Care Practices</span>
//                   <p>Tight hairstyles, excessive brushing, or pulling hair too often can cause traction alopecia, leading to hair loss along the hairline. Not washing hair regularly or using unsuitable hair care products can also contribute to hair fall and scalp issues.</p>
//                 </li>
//               </ol>
//             </div>
//           </div>
//         )}

//         {activeTab === 'Symptoms' && (
//           <div>
//             {/* Content for Symptoms tab */}
//             <div className="text-gray-600">
//             {/* Content for Symptoms tab */}
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               Symptoms of Hair Problems
//             </h2>
//             <div className="mb-4">
//               <p>Hair loss can manifest in various ways, depending on the underlying cause. Recognizing the early signs can help in seeking timely treatment. Below are the common symptoms associated with hair loss and thinning:</p>
//               <ol className="list-decimal pl-5">
//                 <li className="mb-2">
//                   <span className="font-semibold">Gradual Thinning of Hair</span>
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>One of the most common signs of hair loss, especially due to aging or genetics.</li>
//                     <li>Hair becomes progressively thinner over time, particularly at the crown or hairline.</li>
//                     <li>More noticeable in men as a receding hairline and in women as overall volume loss.</li>
//                   </ul>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Increased Hair Shedding</span>
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>Excessive hair fall while brushing, washing, or running fingers through hair.</li>
//                     <li>More hair left on pillows, clothing, and shower drains.</li>
//                     <li>Can be triggered by stress, hormonal imbalances, or nutrient deficiencies.</li>
//                   </ul>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Bald Patches or Circular Spots</span>
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>Sudden appearance of small, round bald spots on the scalp, beard, or eyebrows.</li>
//                     <li>Can be a sign of alopecia areata, an autoimmune condition that attacks hair follicles.</li>
//                     <li>Affected areas may feel smooth or itchy before hair falls out.</li>
//                   </ul>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Receding Hairline</span>
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>More common in men, where hair starts thinning around the temples.</li>
//                     <li>Can eventually lead to a U-shaped or M-shaped hairline.</li>
//                     <li>Often linked to hereditary factors or hormonal changes.</li>
//                   </ul>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Weak, Brittle, and Dry Hair</span>
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>Hair strands become fragile, break easily, and lack shine.</li>
//                     <li>Split ends and rough texture may indicate poor scalp health and nutritional deficiencies.</li>
//                     <li>Frequent exposure to chemicals, heat, or pollution can contribute to hair weakening.</li>
//                   </ul>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Slow or Stunted Hair Growth</span>
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>Hair takes longer to grow or does not reach previous lengths.</li>
//                     <li>Can be due to poor blood circulation to the scalp or follicle damage.</li>
//                     <li>May indicate underlying health issues affecting hair's natural growth cycle.</li>
//                   </ul>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Itchy, Flaky, or Irritated Scalp</span>
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>Persistent dandruff, itching, or redness on the scalp.</li>
//                     <li>Can be due to scalp infections, seborrheic dermatitis, or an unhealthy scalp environment.</li>
//                     <li>If left untreated, it may weaken hair roots and cause increased hair fall.</li>
//                   </ul>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Widening Parting in Women</span>
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>A gradual increase in the visible scalp along the part line.</li>
//                     <li>A common early sign of female pattern hair loss (androgenetic alopecia).</li>
//                     <li>Often accompanied by overall hair thinning rather than patchy bald spots.</li>
//                   </ul>
//                 </li>
//                 <li className="mb-2">
//                   <span className="font-semibold">Excessive Hair Loss After Illness or Pregnancy</span>
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>Postpartum hair loss is common due to hormonal shifts after childbirth.</li>
//                     <li>Hair may shed excessively for months after severe illness, fever, or surgery (telogen effluvium).</li>
//                     <li>Usually temporary but may require proper care and treatment for recovery.</li>
//                   </ul>
//                 </li>
//                 <li>
//                   <span className="font-semibold">Hair Loss in Other Parts of the Body</span>
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>In some cases, hair loss is not limited to the scalp.</li>
//                     <li>Can affect eyebrows, eyelashes, beard, or body hair.</li>
//                     <li>Often linked to medical conditions such as alopecia areata or side effects of certain medications.</li>
//                   </ul>
//                 </li>
//               </ol>
//             </div>
//           </div>
//           </div>
//         )}

//         {activeTab === 'Homeopathic Tratment' && (
//           <div>
//             {/* Content for Homeopathic Treatment tab */}
//             <div className="text-gray-600">
//              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Homeopathic Hair Growth Treatment</h2>
             
//              <ol className="list-decimal pl-5">
//                <li className="mb-4">
//                  <span className="font-semibold">Homeopathic Hair Growth Treatment</span>
//                  <p>Homeopathy offers a natural and holistic approach to hair regrowth by treating the underlying causes of hair loss. Personalized remedies strengthen hair from within, addressing hormonal imbalances, nutritional deficiencies, and scalp health. Homeopathic treatments promote long-term results without harmful side effects.</p>
//                </li>
//                <li className="mb-4">
//                  <span className="font-semibold">Nutritional Support for Hair Growth</span>
//                  <p>A well-balanced diet rich in protein, iron, biotin, and essential fatty acids can support healthy hair growth. Supplements may also help replenish nutrient deficiencies and improve hair texture, strength, and shine.</p>
//                </li>
//                <li className="mb-4">
//                  <span className="font-semibold">Stress Management and Lifestyle Changes</span>
//                  <p>Managing stress through meditation, yoga, exercise, and proper sleep can prevent stress-related hair loss. Reducing caffeine and alcohol intake can also improve scalp health and hair growth.</p>
//                </li>
//                <li className="mb-4">
//                  <span className="font-semibold">Scalp Care and Hygiene</span>
//                  <p>Keeping the scalp clean and well-moisturized is essential for preventing infections and buildup. Natural oils like coconut, castor, and rosemary oil can improve scalp circulation and stimulate hair follicles.</p>
//                </li>
//                <li>
//                  <span className="font-semibold">Avoiding Harsh Chemical Treatments</span>
//                  <p>Limiting the use of chemical-based hair products, heat styling, and tight hairstyles can protect hair from further damage. Switching to mild, sulfate-free shampoos and herbal conditioners can support hair strength and regrowth.</p>
//                </li>
//              </ol>
             
//              <p className="mt-4">By addressing the root cause of hair loss and following a holistic treatment plan, individuals can achieve healthy, strong, and vibrant hair naturally.</p>
//            </div>
//           </div>
//         )}

//         {activeTab === 'Faqs' && (
//           <div>
//             {/* Content for FAQs tab */}
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
      
//               <div className="space-y-4">
//                 {/* FAQ 1 */}
//                 <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <button
//                     className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
//                     onClick={() => toggleFaq(0)}
//                   >
//                     1. What causes hair loss, and can it be reversed?
//                     <span className="text-2xl">{faqOpen[0] ? '-' : '+'}</span>
//                   </button>
//                   {faqOpen[0] && (
//                     <div className="p-4">
//                       <p className="text-gray-700">Content for the first FAQ</p>
//                     </div>
//                   )}
//                 </div>
      
//                 {/* FAQ 2 */}
//                 <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <button
//                     className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
//                     onClick={() => toggleFaq(1)}
//                   >
//                     2. How long does it take to see results from hair growth treatments?
//                     <span className="text-2xl">{faqOpen[1] ? '-' : '+'}</span>
//                   </button>
//                   {faqOpen[1] && (
//                     <div className="p-4">
//                       <p className="text-gray-700">Hair growth treatments take time to show visible results. Depending on the cause and treatment method, noticeable improvement can take anywhere from 3 to 6 months. Consistency in following the treatment plan is crucial for effective results.</p>
//                     </div>
//                   )}
//                 </div>
      
//                 {/* FAQ 3 */}
//                 <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <button
//                     className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
//                     onClick={() => toggleFaq(2)}
//                   >
//                     3. Are homeopathic treatments effective for hair regrowth?
//                     <span className="text-2xl">{faqOpen[2] ? '-' : '+'}</span>
//                   </button>
//                   {faqOpen[2] && (
//                     <div className="p-4">
//                       <p className="text-gray-700">Content for the third FAQ.</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Right Section: Contact Form */}
//       <div className="bg-white rounded-lg shadow-md p-6  border-2 border-pink-200">
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">
//           Get In Touch
//         </h3>

//         {/* Full Name Input */}
//         <div className="mb-4">
//           <label
//             htmlFor="fullName"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Full name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             placeholder="First name"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         {/* Phone Number Input */}
//         <div className="mb-4">
//           <label
//             htmlFor="phoneNumber"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Phone number
//           </label>
//           <div className="flex">
//             <select
//               id="countryCode"
//               className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
//             >
//               <option>IND +91</option>
//             </select>
//             <input
//               type="tel"
//               id="phoneNumber"
//               placeholder="9999 999 999"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//         </div>

//         {/* Select Date Input */}
//         <div className="mb-4">
//           <label
//             htmlFor="selectDate"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Select date
//           </label>
//           {/* Date Input */}
//           <input
//             type="date"
//             id="selectDate"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         {/* Message Input */}
//         <div className="mb-6">
//           <label
//             htmlFor="message"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Message
//           </label>
//           <textarea
//             id="message"
//             rows="4"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           ></textarea>
//         </div>

//         {/* Book an Appointment Button */}
//         <button
//           className="bg-[#A5487D] hover:bg-[#913f6b] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="button"
//         >
//           Book an appointment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HairGrowths;


import React, { useState } from 'react';
import { ChevronDown } from "lucide-react"

const HairGrowths = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [faqOpen, setFaqOpen] = useState([false, false, false]);

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")
  const [countryCode, setCountryCode] = useState("IND")

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleFaq = (index) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };
  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ name, phone, date, message, countryCode })
  }

  return (
    <div className="container mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
      {/* Left Section: Text Content */}
      <div>
        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-gray-200 mb-4">
          {['Overview', 'Causes', 'Symptoms', 'Homeopathic Tratment', 'Faqs'].map(
            (tab) => (
              <button
                key={tab}
                className={`px-3 py-2 md:px-4 md:py-2 font-semibold text-sm md:text-base ${
                  activeTab === tab
                    ? 'text-[#A5487D] border-b-2 border-[#A5487D]'
                    : 'text-gray-500 hover:text-gray-700'
                } mb-2`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Tab Content */}
        {activeTab === 'Overview' && (
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
              Overview of Hair Growth Treatment
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Hair growth treatment focuses on revitalizing the scalp,
              strengthening hair follicles, and promoting natural regrowth.
              Various factors such as stress, hormonal imbalances, nutritional
              deficiencies, and genetics contribute to hair loss, thinning, and
              premature graying. A holistic approach, including homeopathy,
              personalized nutrition, and scalp therapies, can effectively
              address these issues without harmful side effects.
            </p>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Homeopathic remedies stimulate hair follicles, improve blood
              circulation, and restore the body's natural balance to encourage
              healthy hair growth. These treatments target the root cause of
              hair loss rather than just the symptoms, ensuring long-lasting
              results.
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              By using safe, natural solutions, hair growth treatment not only
              enhances hair thickness and strength but also improves overall
              scalp health. With a personalized and holistic approach,
              individuals can achieve fuller, healthier, and more vibrant hair.
            </p>
          </div>
        )}

        {activeTab === 'Causes' && (
          <div>
            {/* Content for Causes tab */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
              Causes of Hair Loss
            </h2>
            
            <div className="text-gray-600 text-sm md:text-base">
              <p className="mb-3 md:mb-4">Hair loss and thinning can result from various internal and external factors. Identifying the root cause is essential for effective treatment. Below are some common causes of hair loss:</p>

              <ol className="list-decimal pl-4 md:pl-5">
                <li className="mb-2">
                  <span className="font-semibold">Hormonal Imbalance</span>
                  <p>Hormones play a crucial role in hair growth, and imbalances can lead to excessive shedding. Conditions such as thyroid disorders, PCOS (Polycystic Ovary Syndrome), and changes in estrogen or testosterone levels can disrupt the natural hair growth cycle, leading to thinning or bald patches.</p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Nutritional Deficiencies</span>
                  <p>A lack of essential vitamins and minerals, such as iron, biotin, zinc, and vitamin D, can weaken hair follicles and hinder healthy growth. Poor diet, restrictive eating habits, or underlying health conditions can contribute to these deficiencies, making hair brittle and prone to falling out.</p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Stress and Anxiety</span>
                  <p>Chronic stress can trigger hair loss conditions such as telogen effluvium, where a large number of hair follicles prematurely enter the resting phase. Stress can also lead to scalp tension, which reduces blood flow and nutrient supply to hair follicles, slowing down growth.</p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Genetics (Hereditary Hair Loss)</span>
                  <p>Androgenetic alopecia, or hereditary hair loss, is one of the most common causes of baldness in both men and women. Genetic predisposition affects hair follicle sensitivity to hormones, gradually leading to thinning and receding hairlines over time.</p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Poor Scalp Health</span>
                  <p>A dry, flaky, or oily scalp can clog hair follicles, leading to inflammation and reduced hair growth. Dandruff, scalp infections, and conditions like seborrheic dermatitis can weaken the roots, making hair prone to shedding.</p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Excessive Use of Chemical-Based Hair Products</span>
                  <p>Frequent use of harsh shampoos, hair dyes, heat styling tools, and chemical treatments (such as perms or straightening) can damage the hair shaft and weaken follicles, causing breakage and hair thinning.</p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Medical Conditions and Medications</span>
                  <p>Certain medical conditions, such as alopecia areata (an autoimmune disorder), anemia, and chronic illnesses, can lead to sudden hair loss. Additionally, medications such as chemotherapy drugs, antidepressants, and blood pressure medications may have hair loss as a side effect.</p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Aging and Hormonal Changes</span>
                  <p>As people age, the hair growth cycle slows down, and follicles produce thinner, weaker strands. Hormonal changes during menopause or andropause can also contribute to significant hair thinning and reduced density.</p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Environmental Factors and Pollution</span>
                  <p>Exposure to pollution, UV radiation, and toxins in the environment can damage the scalp and hair follicles. Hard water, chlorine, and pollutants can weaken hair strands, making them more susceptible to breakage and loss.</p>
                </li>
                <li>
                  <span className="font-semibold">Poor Hair Care Practices</span>
                  <p>Tight hairstyles, excessive brushing, or pulling hair too often can cause traction alopecia, leading to hair loss along the hairline. Not washing hair regularly or using unsuitable hair care products can also contribute to hair fall and scalp issues.</p>
                </li>
              </ol>
            </div>
          </div>
        )}

        {activeTab === 'Symptoms' && (
          <div>
            {/* Content for Symptoms tab */}
            <div className="text-gray-600 text-sm md:text-base">
            {/* Content for Symptoms tab */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
              Symptoms of Hair Problems
            </h2>
            <div className="mb-3 md:mb-4">
              <p>Hair loss can manifest in various ways, depending on the underlying cause. Recognizing the early signs can help in seeking timely treatment. Below are the common symptoms associated with hair loss and thinning:</p>
              <ol className="list-decimal pl-4 md:pl-5">
                <li className="mb-2">
                  <span className="font-semibold">Gradual Thinning of Hair</span>
                  <ul className="list-disc pl-4 md:pl-5 mt-1">
                    <li>One of the most common signs of hair loss, especially due to aging or genetics.</li>
                    <li>Hair becomes progressively thinner over time, particularly at the crown or hairline.</li>
                    <li>More noticeable in men as a receding hairline and in women as overall volume loss.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Increased Hair Shedding</span>
                  <ul className="list-disc pl-4 md:pl-5 mt-1">
                    <li>Excessive hair fall while brushing, washing, or running fingers through hair.</li>
                    <li>More hair left on pillows, clothing, and shower drains.</li>
                    <li>Can be triggered by stress, hormonal imbalances, or nutrient deficiencies.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Bald Patches or Circular Spots</span>
                  <ul className="list-disc pl-4 md:pl-5 mt-1">
                    <li>Sudden appearance of small, round bald spots on the scalp, beard, or eyebrows.</li>
                    <li>Can be a sign of alopecia areata, an autoimmune condition that attacks hair follicles.</li>
                    <li>Affected areas may feel smooth or itchy before hair falls out.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Receding Hairline</span>
                  <ul className="list-disc pl-4 md:pl-5 mt-1">
                    <li>More common in men, where hair starts thinning around the temples.</li>
                    <li>Can eventually lead to a U-shaped or M-shaped hairline.</li>
                    <li>Often linked to hereditary factors or hormonal changes.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Weak, Brittle, and Dry Hair</span>
                  <ul className="list-disc pl-4 md:pl-5 mt-1">
                    <li>Hair strands become fragile, break easily, and lack shine.</li>
                    <li>Split ends and rough texture may indicate poor scalp health and nutritional deficiencies.</li>
                    <li>Frequent exposure to chemicals, heat, or pollution can contribute to hair weakening.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Slow or Stunted Hair Growth</span>
                  <ul className="list-disc pl-4 md:pl-5 mt-1">
                    <li>Hair takes longer to grow or does not reach previous lengths.</li>
                    <li>Can be due to poor blood circulation to the scalp or follicle damage.</li>
                    <li>May indicate underlying health issues affecting hair's natural growth cycle.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Itchy, Flaky, or Irritated Scalp</span>
                  <ul className="list-disc pl-4 md:pl-5 mt-1">
                    <li>Persistent dandruff, itching, or redness on the scalp.</li>
                    <li>Can be due to scalp infections, seborrheic dermatitis, or an unhealthy scalp environment.</li>
                    <li>If left untreated, it may weaken hair roots and cause increased hair fall.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Widening Parting in Women</span>
                  <ul className="list-disc pl-4 md:pl-5 mt-1">
                    <li>A gradual increase in the visible scalp along the part line.</li>
                    <li>A common early sign of female pattern hair loss (androgenetic alopecia).</li>
                    <li>Often accompanied by overall hair thinning rather than patchy bald spots.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Excessive Hair Loss After Illness or Pregnancy</span>
                  <ul className="list-disc pl-4 md:pl-5 mt-1">
                    <li>Postpartum hair loss is common due to hormonal shifts after childbirth.</li>
                    <li>Hair may shed excessively for months after severe illness, fever, or surgery (telogen effluvium).</li>
                    <li>Usually temporary but may require proper care and treatment for recovery.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Hair Loss in Other Parts of the Body</span>
                  <ul className="list-disc pl-4 md:pl-5 mt-1">
                    <li>In some cases, hair loss is not limited to the scalp.</li>
                    <li>Can affect eyebrows, eyelashes, beard, or body hair.</li>
                    <li>Often linked to medical conditions such as alopecia areata or side effects of certain medications.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          </div>
        )}

        {activeTab === 'Homeopathic Tratment' && (
          <div>
            {/* Content for Homeopathic Treatment tab */}
            <div className="text-gray-600 text-sm md:text-base">
             <h2 className="text-2xl font-semibold text-gray-800 mb-3 md:mb-4">Homeopathic Hair Growth Treatment</h2>
             
             <ol className="list-decimal pl-4 md:pl-5">
               <li className="mb-3 md:mb-4">
                 <span className="font-semibold">Homeopathic Hair Growth Treatment</span>
                 <p>Homeopathy offers a natural and holistic approach to hair regrowth by treating the underlying causes of hair loss. Personalized remedies strengthen hair from within, addressing hormonal imbalances, nutritional deficiencies, and scalp health. Homeopathic treatments promote long-term results without harmful side effects.</p>
               </li>
               <li className="mb-3 md:mb-4">
                 <span className="font-semibold">Nutritional Support for Hair Growth</span>
                 <p>A well-balanced diet rich in protein, iron, biotin, and essential fatty acids can support healthy hair growth. Supplements may also help replenish nutrient deficiencies and improve hair texture, strength, and shine.</p>
               </li>
               <li className="mb-3 md:mb-4">
                 <span className="font-semibold">Stress Management and Lifestyle Changes</span>
                 <p>Managing stress through meditation, yoga, exercise, and proper sleep can prevent stress-related hair loss. Reducing caffeine and alcohol intake can also improve scalp health and hair growth.</p>
               </li>
               <li className="mb-3 md:mb-4">
                 <span className="font-semibold">Scalp Care and Hygiene</span>
                 <p>Keeping the scalp clean and well-moisturized is essential for preventing infections and buildup. Natural oils like coconut, castor, and rosemary oil can improve scalp circulation and stimulate hair follicles.</p>
               </li>
               <li>
                 <span className="font-semibold">Avoiding Harsh Chemical Treatments</span>
                 <p>Limiting the use of chemical-based hair products, heat styling, and tight hairstyles can protect hair from further damage. Switching to mild, sulfate-free shampoos and herbal conditioners can support hair strength and regrowth.</p>
               </li>
             </ol>
             
             <p className="mt-3 md:mt-4">By addressing the root cause of hair loss and following a holistic treatment plan, individuals can achieve healthy, strong, and vibrant hair naturally.</p>
           </div>
          </div>
        )}

        {activeTab === 'Faqs' && (
          <div>
            {/* Content for FAQs tab */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 md:mb-4">Frequently Asked Questions</h2>
      
              <div className="space-y-3 md:space-y-4">
                {/* FAQ 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-3 md:p-4 bg-[#D8B4C8] text-white font-semibold"
                    onClick={() => toggleFaq(0)}
                  >
                    1. What causes hair loss, and can it be reversed?
                    <span className="text-2xl">{faqOpen[0] ? '-' : '+'}</span>
                  </button>
                  {faqOpen[0] && (
                    <div className="p-3 md:p-4 text-sm md:text-base">
                      <p className="text-gray-700">Hair loss can be caused by a combination of genetic, hormonal, and environmental factors. The reversibility of hair loss depends on the underlying cause. In many cases, hair loss can be slowed or reversed with appropriate treatments and lifestyle changes.</p>
                    </div>
                  )}
                </div>
      
                {/* FAQ 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-3 md:p-4 bg-[#D8B4C8] text-white font-semibold"
                    onClick={() => toggleFaq(1)}
                  >
                    2. How long does it take to see results from hair growth treatments?
                    <span className="text-2xl">{faqOpen[1] ? '-' : '+'}</span>
                  </button>
                  {faqOpen[1] && (
                    <div className="p-3 md:p-4 text-sm md:text-base">
                      <p className="text-gray-700">Hair growth treatments take time to show visible results. Depending on the cause and treatment method, noticeable improvement can take anywhere from 3 to 6 months. Consistency in following the treatment plan is crucial for effective results.</p>
                    </div>
                  )}
                </div>
      
                {/* FAQ 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-3 md:p-4 bg-[#D8B4C8] text-white font-semibold"
                    onClick={() => toggleFaq(2)}
                  >
                    3. Are homeopathic treatments effective for hair regrowth?
                    <span className="text-2xl">{faqOpen[2] ? '-' : '+'}</span>
                  </button>
                  {faqOpen[2] && (
                    <div className="p-3 md:p-4 text-sm md:text-base">
                      <p className="text-gray-700">Homeopathic treatments aim to stimulate hair follicles and improve overall scalp health by addressing the underlying causes of hair loss. Many individuals have found homeopathic treatments to be beneficial for promoting natural hair regrowth with personalized remedies.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Section: Contact Form */}

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
    
    </div>
  );
};

export default HairGrowths;
