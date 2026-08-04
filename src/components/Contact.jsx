import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#f6f6f6] text-[#2f2a76]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-julius mb-6">
            Contact Us
          </h2>

          <p className="text-lg font-raleway opacity-80 max-w-2xl mx-auto">
            Have questions about FastQueues? We're here to help you manage
            queues smarter and faster. Reach out anytime!
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
  {/* LEFT */}
  <div className="space-y-10">
    <div>
      <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
        Get in Touch
      </h3>

      <p className="text-gray-600 leading-8">
        We'd love to hear from you. Whether you have a question,
        feedback, or need support, our team is ready to assist.
      </p>
    </div>

    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <div className="bg-[#F4400D]/10 p-3 rounded-full">
          <Mail className="text-[#F4400D]" size={24} />
        </div>

        <div>
          <h4 className="font-semibold">Email</h4>
          <p className="text-gray-600 break-all">
            support@fastqueues.com
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-[#F4400D]/10 p-3 rounded-full">
          <Phone className="text-[#F4400D]" size={24} />
        </div>

        <div>
          <h4 className="font-semibold">Phone</h4>
          <p className="text-gray-600">
            +234 800 123 4567
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-[#F4400D]/10 p-3 rounded-full">
          <MapPin className="text-[#F4400D]" size={24} />
        </div>

        <div>
          <h4 className="font-semibold">Address</h4>
          <p className="text-gray-600">
            Calabar, Cross River, Nigeria
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* RIGHT */}
  <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
    <form className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Subject
        </label>

        <input
          type="text"
          placeholder="Enter subject"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Message
        </label>

        <textarea
          rows={6}
          placeholder="Write your message..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#F4400D] text-white py-4 rounded-xl font-semibold hover:bg-[#d43a0b] transition duration-300"
      >
        Send Message
      </button>

    </form>
  </div>
</div>
      </div>
    </section>
  );
};

export default Contact;