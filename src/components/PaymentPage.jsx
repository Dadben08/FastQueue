import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  X,
} from "lucide-react";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  // Get plan and billing from Pricing page
  const plan = location.state?.plan || "Standard";

  const [billing, setBilling] = useState(location.state?.billing || "monthly");

  const prices = {
    monthly: {
      Free: 0,
      Standard: 10000,
      Pro: 25000,
    },
    yearly: {
      Free: 0,
      Standard: 100000,
      Pro: 250000,
    },
  };

  const price = prices[billing][plan];

  const handlePayment = (e) => {
    e.preventDefault();

    // Simulate successful payment
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#F4400D] hover:text-[#d93608] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            to="/pricing"
            className="px-4 py-2 border border-[#F4400D] text-[#F4400D] rounded-lg hover:bg-[#F4400D] hover:text-white transition"
          >
            Back to Pricing
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#2F2A76]">
            Complete your subscription
          </h1>

          <p className="text-gray-600 mt-2">
            You selected the{" "}
            <span className="font-semibold text-[#F4400D]">{plan}</span> plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Payment details
            </h2>

            {/* Billing Toggle */}
            {plan !== "Free" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Billing cycle
                </label>

                <div className="inline-flex rounded-xl border border-gray-200 p-1 bg-gray-50">
                  <button
                    type="button"
                    onClick={() => setBilling("monthly")}
                    className={
                      billing === "monthly"
                        ? "px-5 py-2 rounded-lg bg-[#F4400D] text-white font-medium"
                        : "px-5 py-2 rounded-lg text-gray-600"
                    }
                  >
                    Monthly
                  </button>

                  <button
                    type="button"
                    onClick={() => setBilling("yearly")}
                    className={
                      billing === "yearly"
                        ? "px-5 py-2 rounded-lg bg-[#F4400D] text-white font-medium"
                        : "px-5 py-2 rounded-lg text-gray-600"
                    }
                  >
                    Yearly
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handlePayment} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder name
                </label>
                <input
                  type="text"
                  placeholder="ValueGate"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card number
                </label>

                <div className="relative">
                  <CreditCard className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />

                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full rounded-xl border border-gray-300 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
                />

                <input
                  type="password"
                  placeholder="CVV"
                  className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
                />
              </div>

              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
              />

              <button
                type="submit"
                className="w-full bg-[#F4400D] hover:bg-[#d93608] text-white py-3 rounded-xl font-semibold transition"
              >
                {plan === "Free"
                  ? "Activate Free Plan"
                  : `Pay ₦${price.toLocaleString()}`}
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Secure payment protected with encryption
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Order summary
            </h3>

            <div className="flex justify-between mb-4">
              <span>Plan</span>
              <span className="font-semibold">{plan}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Billing</span>
              <span className="font-semibold capitalize">{billing}</span>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total</span>

              <span className="text-3xl font-bold text-[#F4400D]">
                {plan === "Free" ? "Free" : `₦${price.toLocaleString()}`}
              </span>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600 w-5 h-5" />
                <span>Unlimited queue tickets</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600 w-5 h-5" />
                <span>Real-time customer updates</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600 w-5 h-5" />
                <span>Priority support</span>
              </div>
            </div>
          </div>
        </div>
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center relative">
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>

              <h2 className="text-2xl font-bold text-[#2F2A76] mb-3">
                Payment Successful!
              </h2>

              <p className="text-gray-600 mb-6">
                Your{" "}
                <span className="font-semibold text-[#F4400D]">{plan}</span>{" "}
                plan has been activated successfully.
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Plan</span>
                  <span className="font-semibold">{plan}</span>
                </div>

                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Billing</span>
                  <span className="font-semibold capitalize">{billing}</span>
                </div>

                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Amount</span>
                  <span className="font-semibold text-[#F4400D]">
                    {plan === "Free" ? "Free" : `₦${price.toLocaleString()}`}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate("/dashboard")}
                className="w-full bg-[#F4400D] text-white py-3 rounded-xl font-semibold hover:bg-[#d93608] transition"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
