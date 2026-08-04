// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// import authService from "../services/authservice";

// const SignUpModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   // State to manage form fields
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [customCategory, setCustomCategory] = useState("");

//   // Status messages
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [registrationComplete, setRegistrationComplete] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.id]: e.target.value,
//     });
//   };

//   // Category selector
//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//     if (event.target.value !== "other") {
//       setCustomCategory("");
//     }
//   };

//   const isCustomInputDisabled = selectedCategory !== "other";

//   // Form Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     // Basic validation
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     // Build category value
//     const finalCategory =
//       selectedCategory === "other" ? customCategory : selectedCategory;

//     if (!finalCategory) {
//       setError("Please select or enter a category");
//       return;
//     }

//     const payload = {
//       orgName: form.orgName,
//       orgEmail: form.email,
//       orgPassword: form.password,
//       orgAddress: form.address,
//       orgPhone: form.phone,
//       category: finalCategory,
//     };

//     console.log("PAYLOAD SENT:", payload);

//     try {
//       setLoading(true);

//       const response = await authService.registerOrg(payload);
//       console.log("RESPONSE DATA:", response.data);
//       setSuccess(
//         response.data.message ||
//           "Account created successfully! Check your email to verify your account."
//       );
//       setRegistrationComplete(true);

//       // Reset form
//       setForm({
//         orgName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         address: "",
//         phone: "",
//       });
//       setSelectedCategory("");
//       setCustomCategory("");
//     } catch (err) {
//       console.error("ERROR:", err.response?.data || err.message);
//       setError(err.response?.data?.message || err.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // Modal Backdrop
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="relative w-10/12 max-w-3xl max-h-[90vh] p-8 rounded-xl bg-white shadow-xl transform transition-all duration-300 scale-100 overflow-y-auto">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//         >
//           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
//           </svg>
//         </button>

//         {/* Registration Complete View */}
//         {registrationComplete ? (
//           <div className="flex flex-col items-center justify-center py-8">
//             {/* Success Icon */}
//             <div className="mb-6 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
//               <svg
//                 className="w-12 h-12 text-green-500"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>

//             {/* Success Message */}
//             <h2 className="text-2xl font-bold text-[#2f2a76] mb-3 text-center">
//               Registration Successful!
//             </h2>
//             <p className="text-gray-600 text-center mb-6 max-w-md">{success}</p>

//             {/* Instructions */}
//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-md">
//               <h3 className="font-semibold text-blue-900 mb-2">Next Steps:</h3>
//               <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
//                 <li>Check your email inbox</li>
//                 <li>Click the verification link in the email</li>
//                 <li>Complete your onboarding process</li>
//               </ol>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex gap-4">
//               <button
//                 onClick={onClose}
//                 className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => {
//                   setRegistrationComplete(false);
//                   setSuccess("");
//                 }}
//                 className="px-6 py-2 bg-[#f4400d] text-white rounded-full hover:bg-[#d63a0c] transition-colors"
//               >
//                 Register Another
//               </button>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* Title */}
//             <div className="text-center mb-6">
//               <h2 className="text-3xl font-bold text-[#2f2a76] mb-2">
//                 Create an Organization Account
//               </h2>
//               <p className="text-sm text-gray-600">
//                 Start managing your queues
//               </p>
//             </div>

//             {/* Google Signup */}
//             <div className="mb-4 flex justify-center">
//               <button className="px-6 py-3 flex items-center gap-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
//                 <FcGoogle className="w-5 h-5" />
//                 Sign up with Google
//               </button>
//             </div>

//             <div className="flex items-center justify-center my-4">
//               <span className="text-sm text-gray-400">or</span>
//             </div>

//             {/* Error/Success Messages */}
//             {error && (
//               <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
//                 {error}
//               </div>
//             )}
//             {success && (
//               <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//                 {success}
//               </div>
//             )}

//             {/* Signup Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Organization Name */}
//               <div>
//                 <label
//                   htmlFor="orgName"
//                   className="block mb-1 text-sm font-medium text-gray-700"
//                 >
//                   Organization Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="orgName"
//                   value={form.orgName}
//                   onChange={handleChange}
//                   required
//                   className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4400d]"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Category Select */}
//                 <div className="col-span-1">
//                   <label
//                     htmlFor="category"
//                     className="block mb-1 text-sm font-medium text-gray-700"
//                   >
//                     Category <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="category"
//                     required
//                     value={selectedCategory}
//                     onChange={handleCategoryChange}
//                     className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4400d]"
//                   >
//                     <option value="">Select</option>
//                     <option value="bank">Bank</option>
//                     <option value="hospital">Hospital / Clinic</option>
//                     <option value="fuel-station">Fuel Station</option>
//                     <option value="restaurant">Restaurant / Eatery</option>
//                     <option value="government-office">Government Office</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 {/* Custom Category Input */}
//                 <div className="col-span-1 transition-all duration-300 ease-in-out">
//                   <label
//                     htmlFor="custom-category"
//                     className="block mb-1 text-sm font-medium text-gray-700"
//                   >
//                     Specify Category{" "}
//                     {!isCustomInputDisabled && (
//                       <span className="text-red-500">*</span>
//                     )}
//                   </label>
//                   <input
//                     type="text"
//                     id="custom-category"
//                     required={!isCustomInputDisabled}
//                     disabled={isCustomInputDisabled}
//                     value={customCategory}
//                     onChange={(e) => setCustomCategory(e.target.value)}
//                     placeholder="e.g., Veterinary Clinic, Auto Repair"
//                     className={`w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4400d] ${
//                       isCustomInputDisabled
//                         ? "bg-gray-100 cursor-not-allowed opacity-60"
//                         : ""
//                     }`}
//                   />
//                 </div>
//               </div>

//               {/* Address */}
//               <div>
//                 <label
//                   htmlFor="address"
//                   className="block mb-1 text-sm font-medium text-gray-700"
//                 >
//                   Organization Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="address"
//                   value={form.address}
//                   onChange={handleChange}
//                   required
//                   placeholder="e.g., 123 Main Street, City, State"
//                   className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4400d]"
//                 />
//               </div>

//               {/* Email and Phone in grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Email */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-1 text-sm font-medium text-gray-700"
//                   >
//                     Email Address <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                     className="normal-case w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4400d]"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block mb-1 text-sm font-medium text-gray-700"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     placeholder="e.g., +234 123 456 7890"
//                     className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4400d]"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block mb-1 text-sm font-medium text-gray-700"
//                 >
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={form.password}
//                   onChange={handleChange}
//                   required
//                   className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4400d]"
//                 />
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label
//                   htmlFor="confirmPassword"
//                   className="block mb-1 text-sm font-medium text-gray-700"
//                 >
//                   Confirm Password <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   value={form.confirmPassword}
//                   onChange={handleChange}
//                   required
//                   className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4400d]"
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center pt-2">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className={`px-8 py-3 font-semibold text-white bg-[#f4400d] rounded-full border border-transparent hover:bg-transparent hover:text-[#f4400d] hover:border-[#f4400d] transition-all duration-300 ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   {loading ? "Creating Account..." : "Create Account"}
//                 </button>
//               </div>
//             </form>

//             {/* Footer */}
//             <div className="mt-6 text-center text-sm text-gray-500">
//               Already have an account?{" "}
//               <Link
//                 to="/signin"
//                 className="font-semibold text-[#2f2a76] hover:text-[#f4400d] transition-colors"
//               >
//                 Log in
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignInModal;
