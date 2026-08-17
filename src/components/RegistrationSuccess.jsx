import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, CreditCard, LayoutDashboard } from 'lucide-react';

const RegistrationSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { companyName, plan, billing } = location.state || {};

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='max-w-lg w-full bg-white rounded-3xl shadow-xl border border-gray-200 p-8 text-center'>
        <div className='w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6'>
          <CheckCircle2 className='text-green-600' size={48} />
        </div>

        <h1 className='text-3xl font-bold text-[#2F2A76] mb-3'>
          Registration Successful
        </h1>

        <p className='text-gray-600 mb-8'>
          Your company has been created successfully.
        </p>

        <div className='bg-gray-50 rounded-2xl p-6 text-left mb-8'>
          <h3 className='font-semibold text-[#2F2A76] mb-4'>
            Registration Summary
          </h3>

          <div className='space-y-3'>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Company</span>
              <span className='font-semibold'>{companyName}</span>
            </div>

            <div className='flex justify-between'>
              <span className='text-gray-600'>Plan</span>
              <span className='font-semibold'>{plan}</span>
            </div>

            <div className='flex justify-between'>
              <span className='text-gray-600'>Billing</span>
              <span className='font-semibold capitalize'>{billing}</span>
            </div>
          </div>
        </div>

        {plan !== 'Free' ? (
          <button
            onClick={() =>
              navigate('/payment', {
                state: {
                  companyName,
                  plan,
                  billing,
                },
              })
            }
            className='w-full bg-[#F4400D] text-white py-3 rounded-xl font-semibold hover:bg-[#d9380c] transition flex items-center justify-center gap-2 mb-4'
          >
            <CreditCard size={20} />
            Continue to Payment
          </button>
        ) : (
          <button
            onClick={() => navigate('/dashboard')}
            className='w-full bg-[#F4400D] text-white py-3 rounded-xl font-semibold hover:bg-[#d9380c] transition flex items-center justify-center gap-2 mb-4'
          >
            <LayoutDashboard size={20} />
            Go to Dashboard
          </button>
        )}

        <button
          onClick={() => navigate('/dashboard')}
          className='w-full border border-gray-300 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition'
        >
          Skip for Now
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;