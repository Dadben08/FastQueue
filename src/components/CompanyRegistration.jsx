import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Building2,
  Mail,
  Phone,
  Lock,
  MapPin,
} from "lucide-react";
import bgImage from "../assets/img/fastqueue.png";
import { pricingOptions } from "../constants";

const CompanyRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get selected plan and billing from Pricing page
  const initialPlan = location.state?.plan || "Free";
  const initialBilling = location.state?.billing || "monthly";

  const [plan, setPlan] = useState(initialPlan);
  const [billing, setBilling] = useState(initialBilling);

  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  // Find selected plan
  const selectedPlan = pricingOptions.find(
    (option) => option.title === plan
  );

  // Get price based on billing cycle
  const price =
    billing === "yearly"
      ? selectedPlan?.yearlyPrice || "₦0"
      : selectedPlan?.monthlyPrice || "₦0";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle plan selection
  const handlePlanChange = (e) => {
    setPlan(e.target.value);
  };

  // Handle billing selection
  const handleBillingChange = (e) => {
    setBilling(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    navigate("/payment", {
      state: {
        ...formData,
        plan,
        billing,
        price,
      },
    });
  };

  return (
    <div
      className="relative min-h-screen flex items-center py-12 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div>
          <h1 className="text-4xl font-bold text-[#F4400D] mb-4">
            Register Your Company
          </h1>

          <p className="text-white mb-6">
            Create your FastQueue business account and start accepting
            queue bookings online.
          </p>

          {/* PLAN CARD */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">

            <h3 className="text-xl font-semibold text-[#2F2A76] mb-5">
              Select Your Plan
            </h3>

            {/* PLAN DROPDOWN */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose Plan
              </label>

              <select
                value={plan}
                onChange={handlePlanChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F4400D] focus:border-[#F4400D] outline-none bg-white"
              >
                {pricingOptions.map((option) => (
                  <option
                    key={option.title}
                    value={option.title}
                  >
                    {option.title}
                  </option>
                ))}
              </select>
            </div>

            {/* BILLING DROPDOWN */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Billing Cycle
              </label>

              <select
                value={billing}
                onChange={handleBillingChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F4400D] focus:border-[#F4400D] outline-none bg-white"
              >
                <option value="monthly">
                  Monthly
                </option>

                <option value="yearly">
                  Yearly
                </option>
              </select>
            </div>

            {/* PLAN DETAILS */}
            <div className="border-t border-gray-200 pt-4">

              {/* PLAN */}
              <div className="flex justify-between py-2">
                <span className="text-gray-600">
                  Plan
                </span>

                <span className="font-semibold text-gray-900">
                  {plan}
                </span>
              </div>

              {/* BILLING */}
              <div className="flex justify-between py-2">
                <span className="text-gray-600">
                  Billing
                </span>

                <span className="font-semibold text-gray-900 capitalize">
                  {billing}
                </span>
              </div>

              {/* PRICE */}
              <div className="flex justify-between py-2">
                <span className="text-gray-600">
                  Price
                </span>

                <span className="font-semibold text-xl text-[#F4400D]">
                  {price}
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* COMPANY NAME */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Company Name
              </label>

              <div className="relative">
                <Building2
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#F4400D] outline-none"
                  placeholder="Enter company name"
                />
              </div>
            </div>

            {/* BUSINESS TYPE */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Business Type
              </label>

              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#F4400D] outline-none"
              >
                <option value="">
                  Select business type
                </option>

                <option value="Hospital">
                  Hospital
                </option>

                <option value="Bank">
                  Bank
                </option>

                <option value="Government Office">
                  Government Office
                </option>

                <option value="Restaurant">
                  Restaurant
                </option>

                <option value="Salon">
                  Salon
                </option>

                <option value="School">
                  School
                </option>

                <option value="Hotel">
                  Hotel
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#F4400D] outline-none"
                  placeholder="company@email.com"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Phone
              </label>

              <div className="relative">
                <Phone
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#F4400D] outline-none"
                  placeholder="+234 xxx xxx xxxx"
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Address
              </label>

              <div className="relative">
                <MapPin
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#F4400D] outline-none"
                  placeholder="Company address"
                />
              </div>
            </div>

            {/* PASSWORDS */}
            <div className="grid grid-cols-2 gap-4">

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#F4400D] outline-none"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />

                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength={6}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#F4400D] outline-none"
                    placeholder="Confirm password"
                  />
                </div>
              </div>

            </div>

            {/* CONTINUE */}
            <button
              type="submit"
              className="w-full bg-[#F4400D] text-white py-3 rounded-xl font-semibold hover:bg-[#d9380c] transition"
            >
              Continue to Payment
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;