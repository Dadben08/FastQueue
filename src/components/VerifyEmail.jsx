import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, RefreshCw, CheckCircle } from 'lucide-react';

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || '';

  const handleContinue = () => {
    navigate('/registration-success', {
      state: location.state,
    });
  };

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-200 p-8 text-center'>
        <div className='w-20 h-20 mx-auto bg-[#F4400D]/10 rounded-full flex items-center justify-center mb-6'>
          <Mail className='text-[#F4400D]' size={36} />
        </div>

        <h1 className='text-3xl font-bold text-[#2F2A76] mb-3'>
          Verify Your Email
        </h1>

        <p className='text-gray-600 mb-6'>
          We've sent a verification link to
        </p>

        <p className='font-semibold text-[#2F2A76] mb-6'>{email}</p>

        <div className='bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6'>
          <div className='flex items-start gap-3'>
            <CheckCircle className='text-blue-600 mt-1' size={20} />
            <p className='text-sm text-blue-700 text-left'>
              Click the verification link in your email before continuing.
            </p>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className='w-full bg-[#F4400D] text-white py-3 rounded-xl font-semibold hover:bg-[#d9380c] transition mb-4'
        >
          I've Verified My Email
        </button>

        <button className='w-full border border-gray-300 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2'>
          <RefreshCw size={18} />
          Resend Verification Email
        </button>

        <button
          onClick={() => navigate('/company-registration')}
          className='mt-4 text-[#2F2A76] font-medium hover:underline'
        >
          Change Email Address
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;