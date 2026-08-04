
import React, { useState } from 'react';
import Pricing from '../components/Pricing';
import { CheckCircle2 } from 'lucide-react';

const comparisonData = [
  { feature: '1 Queue / day', Free: true, Standard: true, Pro: true, Enterprise: true },
  { feature: 'Unlimited Queues', Free: false, Standard: true, Pro: true, Enterprise: true },
  { feature: 'Basic Analytics', Free: true, Standard: true, Pro: true, Enterprise: true },
  { feature: 'Advanced Analytics', Free: false, Standard: false, Pro: true, Enterprise: true },
  { feature: 'SMS & Email Alerts', Free: false, Standard: true, Pro: true, Enterprise: true },
  { feature: 'Priority Support', Free: false, Standard: false, Pro: true, Enterprise: true },
  { feature: 'Dedicated Account Manager', Free: false, Standard: false, Pro: false, Enterprise: true },
  { feature: 'Custom Integrations', Free: false, Standard: false, Pro: false, Enterprise: true },
];

const plans = ['Free', 'Standard', 'Pro', 'Enterprise'];

const PricingPage = () => {
  const [billing, setBilling] = useState('monthly');

  return (
    <div className='bg-[#fafafa] min-h-screen'>
      {/* Hero */}
      <section className='relative overflow-hidden py-28 lg:py-36'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#F8F8FF] via-white to-[#FFF4EE]' />
        <div className='absolute -top-20 -right-20 w-72 h-72 bg-[#F4400D]/10 rounded-full blur-3xl' />
        <div className='absolute -bottom-20 -left-20 w-72 h-72 bg-[#2F2A76]/10 rounded-full blur-3xl' />
        <div className='absolute inset-0 opacity-[0.03] bg-[linear-gradient(#2F2A76_1px,transparent_1px),linear-gradient(90deg,#2F2A76_1px,transparent_1px)] bg-[size:40px_40px]' />

        <div className='relative max-w-5xl mx-auto px-6 text-center'>
          <div className='inline-flex items-center rounded-full bg-white/80 backdrop-blur border border-gray-200 px-5 py-2 text-sm font-medium text-[#2F2A76] shadow-sm mb-8'>
            Flexible pricing for every stage
          </div>

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2F2A76] leading-[1.05]'>
            Simple pricing that
            <br />
            <span className='text-[#F4400D]'>scales with you</span>
          </h1>

          <p className='mt-8 text-lg sm:text-xl text-[#2F2A76]/70 max-w-3xl mx-auto leading-relaxed'>
            Start free, upgrade when you need more. FastQueues helps businesses
            reduce wait times and improve customer satisfaction with a modern
            queue management platform.
          </p>

          {/* Billing toggle */}
          <div className='mt-10 inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-lg'>
            <button
              onClick={() => setBilling('monthly')}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                billing === 'monthly'
                  ? 'bg-[#2F2A76] text-white shadow-md'
                  : 'text-[#2F2A76] hover:bg-gray-50'
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling('yearly')}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                billing === 'yearly'
                  ? 'bg-[#2F2A76] text-white shadow-md'
                  : 'text-[#2F2A76] hover:bg-gray-50'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </section>

      <main className='max-w-7xl mx-auto px-6 pb-24'>
        {/* Pricing cards */}
        <section className='-mt-20 relative z-20'>
          <Pricing billing={billing} />
        </section>

        {/* Comparison table */}
        <section className='mt-32'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-[#2F2A76]'>
              Compare plans
            </h2>
            <p className='text-[#2F2A76]/70 mt-3 text-lg'>
              Everything you need to manage queues efficiently
            </p>
          </div>

          <div className='overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(47,42,118,0.08)]'>
            <table className='min-w-[850px] w-full border-collapse'>
              <thead>
                <tr className='bg-gradient-to-r from-[#F8F8FF] to-[#F3F1FF]'>
                  <th className='p-6 text-left text-[#2F2A76] font-semibold border-b border-gray-200'>
                    Features
                  </th>

                  {plans.map((plan) => (
                    <th
                      key={plan}
                      className={`p-6 text-center font-semibold border-b border-gray-200 ${
                        plan === 'Pro'
                          ? 'bg-[#2F2A76] text-white'
                          : 'text-[#2F2A76]'
                      }`}
                    >
                      <div className='flex flex-col items-center gap-2'>
                        {plan === 'Pro' && (
                          <span className='rounded-full bg-[#F4400D] px-3 py-1 text-xs font-semibold text-white'>
                            Most popular
                          </span>
                        )}
                        {plan}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
                    } hover:bg-[#F8F8FF]`}
                  >
                    <td className='p-6 font-medium text-[#2F2A76]'>
                      {item.feature}
                    </td>

                    {plans.map((plan) => (
                      <td
                        key={plan}
                        className={`p-6 text-center ${
                          plan === 'Pro' ? 'bg-[#F4F2FF]' : ''
                        }`}
                      >
                        {item[plan] ? (
                          <div className='mx-auto flex h-9 w-9 items-center justify-center rounded-full'>
                            <CheckCircle2 className='h-5 w-5 text-green-600' />
                          </div>
                        ) : (
                          <span className='text-gray-300 text-xl'>—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className='mt-32'>
          <div className='relative max-w-5xl mx-auto overflow-hidden rounded-[32px] bg-[#2F2A76] px-8 py-16 text-center text-white shadow-[0_30px_80px_rgba(47,42,118,0.25)]'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#2F2A76] via-[#37308A] to-[#40389A]' />
            <div className='absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-3xl' />
            <div className='absolute -bottom-16 -left-16 w-48 h-48 bg-[#F4400D]/20 rounded-full blur-3xl' />

            <div className='relative z-10'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
                Ready to transform your queue experience?
              </h2>

              <p className='text-white/80 text-lg max-w-2xl mx-auto mb-10'>
                Join businesses already using FastQueues to reduce wait times,
                improve customer satisfaction, and streamline daily operations.
              </p>

              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <a
                  href='/signup'
                  className='px-8 py-4 rounded-full bg-[#F4400D] hover:bg-[#d93a0b] transition-all duration-300 font-semibold shadow-lg hover:scale-105'
                >
                  Start free today
                </a>

                <a
                  href='/contact'
                  className='px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 font-semibold'
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;

