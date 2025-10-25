import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-100 text-white py-16 min-h-[70vh] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="JSO Logo" className="w-12 h-12" />
            <h2 className="text-2xl font-bold">JSO</h2>
          </div>

          <p className="text-gray-300 mb-4">
            JSO Waste and Renewable is a pioneer in waste management services
            dating back to 1961. We are a wholly Ghanaian owned company,
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• Domestic Waste management,</li>
            <li>• Waste Landfill Management,</li>
            <li>•Industry Waste management,</li>
            <li>• Renewables and Recycling.</li>
          </ul>
        </div>

        {/* Office Address Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">
            Office Address
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">Ghana</h4>
              <p className="text-gray-300">
                Stanley Owusu Street, Mallam,
                <br />
                Accra, Ghana
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">
            Newsletter
          </h3>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-6 py-4 rounded-full bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
            />

            <button
              type="submit"
              className="w-full px-6 py-4 cursor-pointer rounded-full bg-green-400 hover:bg-green-500 text-primary-100 font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
