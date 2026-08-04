// import React, { useState, useMemo } from 'react';

// // --- Data Definitions (Simulated Business Categories) ---
// const INDUSTRY_CATEGORIES = [
//   { id: 1, name: "Banking & Finance", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> }, // Dollar sign
//   { id: 2, name: "Healthcare & Clinics", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/><path d="M12 11V6M12 6H9.5a3.5 3.5 0 1 1 0 7h5a3.5 3.5 0 0 0 0 7H6"/></svg> }, // Hospital/Cross
//   { id: 3, name: "Education & Schools", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11V6l8-4 8 4v5"/><path d="M14 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M22 17H2"/><path d="M22 22H2"/></svg> }, // Graduation Cap
//   { id: 4, name: "Government Services", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="15" rx="2" ry="2"/><path d="M6 12h.01"/><path d="M10 12h.01"/><path d="M14 12h.01"/><path d="M18 12h.01"/><path d="M2 17h20"/><path d="M12 21V6"/></svg> }, // Building
//   { id: 5, name: "Retail & Shopping", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 12.08a2 2 0 0 0 2 1.92h9.72a2 2 0 0 0 2-1.92L23 6H6"/></svg> }, // Shopping Cart
//   { id: 6, name: "Other Industries", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M10 21V7l2-4 2 4v14"/></svg> }, // Briefcase
// ];

// // Available time slots (8 AM to 5 PM, 30-minute intervals)
// const TIME_SLOTS = Array.from({ length: 19 }, (_, i) => {
//   const hour = Math.floor(8 + i / 2);
//   const minute = (i % 2) * 30;
//   return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
// });

// // --- Queue Animation Component (Updated for visibility) ---
// const QueueAnimation = () => {
//   // Define CSS keyframes: Move element from off-screen right to off-screen left
//   const animationStyle = `
//     @keyframes queue-flow-visible {
//       /* Start at the staggered position (defined by 'left' style) */
//       0% { transform: translateX(0); opacity: 0.2; } 
//       5% { opacity: 0.4; }
//       95% { opacity: 0.4; }
//       /* Move left past the viewport (200vw total distance) */
//       100% { transform: translateX(-200vw); opacity: 0.2; } 
//     }
//   `;

//   // Array to represent multiple abstract "people" elements
//   const people = useMemo(() => Array.from({ length: 15 }, (_, i) => ({
//     id: i,
//     // Adjust delay for smoother staggering start
//     delay: `${i * 2.0}s`, 
//     duration: '60s', // Slower movement is more subtle
//     size: `${Math.floor(Math.random() * 8) + 16}px`, // Slightly larger elements for better visibility
//     top: `${Math.random() * 100}vh`, 
//     // Use low-contrast colors
//     color: i % 3 === 0 ? 'bg-sky-200' : (i % 3 === 1 ? 'bg-gray-300' : 'bg-indigo-200'),
//     // Initial position: 100vw (right edge) + stagger offset (i*200px)
//     initialLeft: `calc(100vw + ${i * 200}px)`, 
//   })), []);

//   return (
//     <>
//       <style>{animationStyle}</style>
//       {/* Background container: fixed, full screen, low opacity, z-0 */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-50 z-0 bg-gray-100">
//         {people.map(person => (
//           <div
//             key={person.id}
//             // Removed 'shadow-lg' for cleaner background aesthetic
//             className={`absolute rounded-full opacity-40 ${person.color}`} 
//             style={{
//               width: person.size,
//               height: person.size,
//               top: person.top,
//               // Start position, already staggered off-screen right
//               left: person.initialLeft, 
//               // Apply animation that moves it left (translateX negative)
//               animation: `queue-flow-visible ${person.duration} linear infinite`,
//               animationDelay: person.delay,
//             }}
//           />
//         ))}
//       </div>
//     </>
//   );
// };


// const App = () => {
//   const [currentPage, setCurrentPage] = useState('home'); // 'home', 'dashboard', 'confirmation'
//   const [registrationStep, setRegistrationStep] = useState(1); // 1, 2, 3
//   const [formData, setFormData] = useState({
//     firstName: '',
//     middleName: '',
//     surname: '',
//     sex: '',
//     phone: '',
//     email: '',
//     category: INDUSTRY_CATEGORIES[0].name,
//     date: new Date().toISOString().slice(0, 10),
//     time: TIME_SLOTS[0],
//   });

//   // Calculate position in the queue (simulated) based on chosen time
//   const simulatedQueuePosition = useMemo(() => {
//     const timeIndex = TIME_SLOTS.indexOf(formData.time);
//     return timeIndex === -1 ? 1 : timeIndex + 1;
//   }, [formData.time]);


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleNextStep = () => {
//     if (registrationStep < 3) {
//       setRegistrationStep(prev => prev + 1);
//     } else {
//       // Step 3 is the final confirmation
//       setCurrentPage('confirmation');
//     }
//   };

//   const handlePrevStep = () => {
//     if (registrationStep > 1) {
//       setRegistrationStep(prev => prev - 1);
//     } else {
//       setCurrentPage('home');
//     }
//   };
  
//   // --- Components for Dashboard Steps ---

//   const StepIndicator = ({ current, total }) => (
//     <div className="flex justify-center items-center mb-8">
//       {Array.from({ length: total }).map((_, index) => (
//         <div 
//           key={index} 
//           className={`h-2 mx-1 rounded-full transition-all duration-300 ${
//             index + 1 <= current ? 'bg-sky-500 w-8' : 'bg-gray-300 w-6'
//           }`}
//         />
//       ))}
//     </div>
//   );

//   const Step1Category = () => (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-gray-700">Step 1: Select Your Service Category</h3>
//       <p className="text-sm text-gray-500">Choose the industry that best matches the business you plan to visit.</p>
      
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {INDUSTRY_CATEGORIES.map(cat => {
//           const isSelected = formData.category === cat.name;
//           const IconComponent = cat.icon;

//           return (
//             <button
//               key={cat.id}
//               onClick={() => setFormData(prev => ({ ...prev, category: cat.name }))}
//               className={`p-4 flex flex-col items-center justify-center text-center rounded-xl transition-all duration-200 shadow-md border-2 
//                 ${isSelected 
//                   ? 'border-sky-500 bg-sky-50 text-sky-700' 
//                   : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600'
//                 }`}
//             >
//               <IconComponent className="w-8 h-8 mb-2" />
//               <span className="text-sm font-medium">{cat.name}</span>
//             </button>
//           );
//         })}
//       </div>
//       <div className="flex justify-end mt-6">
//         <button
//           onClick={handleNextStep}
//           className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-[1.02]"
//         >
//           Next: Your Details
//         </button>
//       </div>
//     </div>
//   );

//   const Step2Details = () => (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-gray-700">Step 2: Personal & Contact Information</h3>
      
//       {/* Name Fields */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {['firstName', 'middleName', 'surname'].map(field => (
//           <div key={field}>
//             <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
//               {field.replace('Name', ' Name')}
//             </label>
//             <input
//               type="text"
//               name={field}
//               id={field}
//               value={formData[field]}
//               onChange={handleInputChange}
//               required={field !== 'middleName'}
//               placeholder={`Enter ${field.replace('Name', ' name')}`}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-2.5"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Sex Status */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Sex Status</label>
//         <div className="mt-2 flex space-x-4">
//           {['Male', 'Female', 'Other'].map(sexOption => (
//             <label key={sexOption} className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="sex"
//                 value={sexOption}
//                 checked={formData.sex === sexOption}
//                 onChange={handleInputChange}
//                 required
//                 className="form-radio h-4 w-4 text-sky-600 focus:ring-sky-500"
//               />
//               <span className="ml-2 text-sm text-gray-700">{sexOption}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Contact Fields */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             placeholder="example@mail.com"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-2.5"
//           />
//         </div>
//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//           <input
//             type="tel"
//             name="phone"
//             id="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//             placeholder="+234 800 000 0000"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-2.5"
//           />
//         </div>
//       </div>
      
//       <div className="flex justify-between mt-6">
//         <button
//           onClick={handlePrevStep}
//           className="text-gray-600 hover:text-sky-600 font-semibold py-2 px-4 rounded-full transition-colors"
//         >
//           &larr; Back
//         </button>
//         <button
//           onClick={handleNextStep}
//           // Simple client-side validation check
//           disabled={!formData.firstName || !formData.surname || !formData.email || !formData.phone || !formData.sex}
//           className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-[1.02] disabled:bg-gray-400"
//         >
//           Next: Appointment Time
//         </button>
//       </div>
//     </div>
//   );

//   const Step3Appointment = () => (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-gray-700">Step 3: Choose Date & Time</h3>
//       <p className="text-sm text-gray-500">Select an available slot for your visit to ensure minimal waiting time.</p>

//       {/* Date Picker */}
//       <div>
//         <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
//         <input
//           type="date"
//           name="date"
//           id="date"
//           value={formData.date}
//           onChange={handleInputChange}
//           required
//           min={new Date().toISOString().slice(0, 10)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-2.5"
//         />
//       </div>

//       {/* Time Slot Selector */}
//       <div>
//         <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">Available Time Slots (8:00 AM - 5:00 PM)</label>
//         <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 max-h-48 overflow-y-auto p-2 border rounded-lg bg-gray-50">
//           {TIME_SLOTS.map(slot => (
//             <button
//               key={slot}
//               type="button"
//               onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
//               className={`p-2 text-sm rounded-lg font-medium transition-all duration-150 border 
//                 ${formData.time === slot 
//                   ? 'bg-sky-500 text-white border-sky-500 shadow-md' 
//                   : 'bg-white text-gray-700 hover:bg-gray-200 border-gray-300'
//                 }`}
//             >
//               {slot}
//             </button>
//           ))}
//         </div>
//       </div>
      
//       <div className="flex justify-between mt-6">
//         <button
//           onClick={handlePrevStep}
//           className="text-gray-600 hover:text-sky-600 font-semibold py-2 px-4 rounded-full transition-colors"
//         >
//           &larr; Back
//         </button>
//         <button
//           onClick={handleNextStep} // This handles the final submit/confirmation view
//           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-xl transition-transform transform hover:scale-[1.02]"
//         >
//           Confirm & Get Receipt
//         </button>
//       </div>
//     </div>
//   );

//   const renderDashboardStep = () => {
//     switch (registrationStep) {
//       case 1:
//         return <Step1Category />;
//       case 2:
//         return <Step2Details />;
//       case 3:
//         return <Step3Appointment />;
//       default:
//         return <Step1Category />;
//     }
//   };

//   const renderPage = () => {
//     // switch (currentPage) {
//       case 'home':
//         return (
//           // Home content is high contrast and stands out well against the background
//           <div className="flex flex-col items-center justify-center h-full px-4 text-center">
//             <h1 className="text-5xl font-extrabold mb-4 text-sky-700 tracking-tight">FastQueue <span className="text-gray-800">App</span></h1>
//             <p className="text-xl text-gray-600 mb-10 max-w-2xl">
//               Eliminate waiting lines. Pre-register your visit for any service, from banking to school appointments.
//             </p>
//             <Link
//               // onClick={() => setCurrentPage('dashboard')}
//               to="/regdashboard"
//               className="bg-sky-500 hover:bg-sky-600 text-white font-extrabold py-4 px-12 text-lg rounded-full shadow-2xl shadow-sky-300 transition-all transform 
//               hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-500 focus:ring-opacity-50"
//             >
//               Join Queue
//             </Link>
//           </div>
//         );
//       case 'dashboard':
//         return (
//           // Dashboard card needs a solid white background for form readability
//           <div className="w-full max-w-3xl mx-auto p-6 md:p-10 bg-white rounded-2xl shadow-2xl border border-gray-100">
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Registration Dashboard</h2>
//             <StepIndicator current={registrationStep} total={3} />
//             {renderDashboardStep()}
//           </div>
//         );
//       case 'confirmation':
//         return (
//           // Confirmation card needs a solid white background for receipt readability
//           <div className="flex flex-col items-center justify-center h-full px-4 text-center w-full max-w-xl mx-auto p-10 bg-white rounded-2xl shadow-2xl">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500 mb-6 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
//             strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//             <h2 className="text-3xl font-bold mb-4 text-gray-800">Registration Confirmed!</h2>
//             <p className="text-lg text-gray-600 mb-6 max-w-xl">
//               <strong>Success!</strong> A confirmation receipt has been simulated and sent to your email (<strong>{formData.email}</strong>).
//             </p>
            
//             {/* Simulated Receipt Details */}
//             <div className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl text-left space-y-2">
//                 <p className="text-gray-700 font-semibold border-b pb-1 mb-2">Queue Appointment Details:</p>
//                 <p><strong>Service:</strong> {formData.category}</p>
//                 <p><strong>Appointment Time:</strong> <span className="text-sky-600 font-extrabold">{formData.date} at {formData.time}</span></p>
//                 <p><strong>Simulated Queue Position:</strong> #{simulatedQueuePosition}</p>
//                 <p><strong>Full Name:</strong> {formData.firstName} {formData.middleName} {formData.surname}</p>
//             </div>

//             <p className="text-sm text-gray-500 mt-4">
//               *Please arrive 5 minutes before your scheduled time.*
//             </p>

//             <button
//               onClick={() => setCurrentPage('home')}
//               className="mt-8 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
//             >
//               Start New Queue
//             </button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   // };

//   return (
//     // Main container uses a transparent background since the animation component provides the background color (bg-gray-100)
//     <div className="min-h-screen font-sans">
//       {/* 1. Queue Animation as background layer */}
//       <QueueAnimation /> 
      
//       {/* 2. Main Content Wrapper: positioned above the animation (z-10) */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
//         <div className="w-full max-w-4xl min-h-[500px] flex items-center justify-center">
//           {renderPage()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
