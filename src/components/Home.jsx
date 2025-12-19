import React from 'react';

const Home = () => {
  return (
    <div className="pt-16 font-sans scroll-smooth">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 via-teal-600 to-green-600 text-white py-28 text-center relative overflow-hidden">
        <div className="animate-fade-in-up relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Complete Business Solutions Partner</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">One-Stop Solution for Printing, Packaging, Stationery & Industrial Supplies</p>
          <button className="bg-sky-500 hover:bg-white hover:text-blue-700 transition-all px-8 py-3 rounded-lg font-semibold shadow-xl transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services" className="bg-sky-50 py-20 scroll-mt-20">
        <h2 className="text-center text-4xl font-bold text-blue-800 mb-16">Our Core Services</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {[
            ["🖨️", "Printing Services", "Professional offset, digital, and large format printing for business cards, brochures, posters, wedding cards, labels, and more."],
            ["📦", "Packaging Solutions", "Comprehensive packaging including corrugated boxes, cartons, custom designs, food packaging, and pharmaceutical solutions."],
            ["📄", "Stationery Supplies", "Complete office stationery range - premium copy paper, notebooks, files, folders, writing instruments, and desk accessories."],
            ["🏭", "Industrial Supplies", "Full industrial supply solutions for factories - safety equipment, tools, storage solutions, and maintenance products."],
            ["🍽️", "Pantry Supplies", "Office pantry essentials - disposable items, tissue papers, beverages, cutlery, and cleaning supplies."],
            ["💼", "Office Solutions", "Complete office setup - furniture, computer accessories, printers, electronics, and storage solutions."]
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-green-700 mb-4 group-hover:text-blue-700 transition-colors">
                {item[0]} {item[1]}
              </h3>
              <p className="text-gray-700">{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-white">
        <h2 className="text-center text-4xl font-bold text-blue-800 mb-16">Why Choose PADMAMBA?</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 px-6 text-center">
          {[
            ["✔️", "One-Stop Solution", "All business supplies from single vendor"],
            ["💰", "Competitive Pricing", "Best market rates & bulk discounts"],
            ["⚡", "Quick Turnaround", "Fast delivery without compromising quality"],
            ["🎯", "High Quality", "Genuine products from trusted brands"],
            ["🎨", "Customization", "Tailored solutions for your brand"],
            ["🚚", "Free Delivery", "Complimentary delivery on min. orders"]
          ].map((item, i) => (
            <div key={i} className="hover:scale-110 transition-transform duration-300">
              <div className="text-5xl mb-4">{item[0]}</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">{item[1]}</h3>
              <p className="text-gray-600">{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT RANGE - UPDATED WITH IMAGE CONTENT */}
      <section id="products" className="py-20 bg-sky-50 scroll-mt-20">
        <h2 className="text-center text-4xl font-bold text-blue-800 mb-16">Our Product Range</h2>
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* Printing Category */}
          <div className="hover:pl-4 transition-all duration-500 border-l-0 hover:border-l-8 border-sky-500">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Printing Services</h3>
            <div className="h-1 bg-sky-500 mb-8 w-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border-l-4 border-blue-700 shadow-sm">
                <span className="font-bold text-blue-700">Offset Printing</span> – Cost-effective volume printing.
              </div>
              <div className="bg-white p-6 rounded-xl border-l-4 border-blue-700 shadow-sm">
                <span className="font-bold text-blue-700">Digital Printing</span> – Quick turnaround for short runs.
              </div>
              <div className="bg-white p-6 rounded-xl border-l-4 border-blue-700 shadow-sm">
                <span className="font-bold text-blue-700">Business Materials</span> – Cards, Brochures & Catalogs.
              </div>
            </div>
          </div>

          {/* Packaging Category - From Image Content */}
          <div className="hover:pl-4 transition-all duration-500 border-l-0 hover:border-l-8 border-sky-500">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Packaging Solutions</h3>
            <div className="h-1 bg-sky-500 mb-8 w-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-700 shadow-sm">
                <span className="font-bold text-blue-800">Box Solutions</span> – Corrugated, Carton, Custom Design, Food & Pharma
              </div>
              <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-700 shadow-sm">
                <span className="font-bold text-blue-800">E-commerce Packaging</span> – Optimized for online deliveries
              </div>
              <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-700 shadow-sm">
                <span className="font-bold text-blue-800">Protective Materials</span> – Bubble Wrap, Stretch Films, Shrink Wrap, Tape
              </div>
            </div>
          </div>

          {/* Office & Stationery - From Image Content */}
          <div className="hover:pl-4 transition-all duration-500 border-l-0 hover:border-l-8 border-sky-500">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Office & Stationery</h3>
            <div className="h-1 bg-sky-500 mb-8 w-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-700 shadow-sm">
                <span className="font-bold text-blue-800">Paper Products</span> – Premium Copy Paper (A4, A3, Legal), Notebooks, Registers
              </div>
              <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-700 shadow-sm">
                <span className="font-bold text-blue-800">Office Furniture</span> – Desks, Chairs, Storage Solutions
              </div>
              <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-700 shadow-sm">
                <span className="font-bold text-blue-800">Writing Instruments</span> – Pens, Pencils, Markers & Desk Accessories
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gradient-to-r from-green-700 via-teal-600 to-blue-700 py-20 text-white scroll-mt-20">
        <h2 className="text-center text-4xl font-bold mb-16">Contact Us Today</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
            <h3 className="text-2xl font-bold mb-4">Head Office</h3>
            <p>#223, Goudar Street, Kalghatgi 581204, Dharwad, KA</p>
            <p className="mt-4 font-bold text-sky-300">📞 9448103391</p>
          </div>
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
            <h3 className="text-2xl font-bold mb-4">Hubli Branch</h3>
            <p>#07, Ground Floor, Satellite Tower, Hubballi 580020</p>
            <p className="mt-4 font-bold text-sky-300">📞 6363489350</p>
          </div>
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
            <h3 className="text-2xl font-bold mb-4">Email & Web</h3>
            <p>✉️ marketing@padmambaprinters.com</p>
            <p>🌐 www.padmambaprinters.com</p>
          </div>
        </div>
      </section>

      {/* UPDATED COLORFUL MAP SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-green-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-500"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold tracking-widest uppercase text-sm rounded-full">
              Explore Our Location
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mt-6 bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent">
              Visit Our Head Office
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Located in the heart of Kalghatgi with easy access and ample parking facilities</p>
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Colorful Info Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-br from-purple-600 to-blue-700 p-8 rounded-3xl shadow-2xl text-white transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Kalghatgi Head Office</h4>
                    <p className="text-blue-100 text-sm">Main Headquarters</p>
                  </div>
                </div>
                <p className="text-blue-100 mt-2">#223, Goudar Street, Kalghatgi 581204, Dharwad, Karnataka</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-blue-200 font-semibold flex items-center">
                    <span className="mr-2">🗺️</span> View larger map
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">10 AM - 7 PM</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-teal-700 p-8 rounded-3xl text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                <h4 className="text-xl font-bold mb-4">Quick Directions</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-lg">🚗</span>
                    </div>
                    <span className="text-sm">Easily accessible via Haliyal-Kalghatgi Rd.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-lg">🅿️</span>
                    </div>
                    <span className="text-sm">Ample parking space available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-lg">🚌</span>
                    </div>
                    <span className="text-sm">Bus stop within 200 meters</span>
                  </div>
                </div>
                <button className="mt-8 w-full bg-white text-green-700 py-4 rounded-xl font-bold hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  📍 Get Directions Now
                </button>
              </div>
            </div>

            {/* Vibrant Map Display */}
            <div className="lg:col-span-8">
              <div className="relative p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl shadow-2xl overflow-hidden group">
                <div className="absolute top-8 left-8 z-20 bg-gradient-to-r from-blue-700 to-purple-700 px-6 py-3 rounded-2xl shadow-xl border-2 border-white/30 hidden md:block animate-bounce">
                  <p className="text-white font-bold flex items-center">
                    <span className="animate-pulse mr-3 text-yellow-300">📍</span> 
                    <span>Padmamba Printers - Head Office</span>
                  </p>
                </div>

                {/* Colorful location pins */}
                <div className="absolute top-1/3 left-1/4 z-20 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg animate-ping"></div>
                <div className="absolute top-1/3 left-1/4 z-20 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg border border-blue-100">
                  <p className="text-blue-800 font-bold flex items-center">
                    <span className="mr-2">🌍</span> 
                    <span>Live Location View</span>
                  </p>
                </div>

                {/* Colorful Map with vibrant colors */}
                <iframe 
                  title="Padmamba Printers Location" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.647635216873!2d74.97003641537715!3d15.182999189395705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8db86196236b7%3A0xc6657c91350a4805!2sKalghatgi%2C%20Karnataka%20581204!5e0!3m2!1sen!2sin!4v1647421234567!5m2!1sen!2sin" 
                  className="w-full h-[550px] rounded-2xl transition-all duration-700 saturate-150 brightness-105 group-hover:saturate-200 group-hover:brightness-110" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>

                {/* Map controls overlay */}
                <div className="absolute bottom-6 left-6 z-20 flex space-x-3">
                  <button className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-100 transition-colors">
                    <span className="text-xl">➕</span>
                  </button>
                  <button className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-100 transition-colors">
                    <span className="text-xl">➖</span>
                  </button>
                  <button className="bg-blue-600 text-white p-3 rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                    <span className="text-xl">📍</span>
                  </button>
                </div>
              </div>

              {/* Additional map info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white">⏰</span>
                    </div>
                    <div>
                      <p className="font-bold text-blue-800">Open Hours</p>
                      <p className="text-sm text-blue-600">Mon-Sat: 9AM-7PM</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-50 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white">🚚</span>
                    </div>
                    <div>
                      <p className="font-bold text-green-800">Free Delivery</p>
                      <p className="text-sm text-green-600">Within 10km radius</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-4 rounded-xl border border-purple-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <p className="font-bold text-purple-800">Call Ahead</p>
                      <p className="text-sm text-purple-600">9448103391</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS */}
      <section className="bg-gradient-to-r from-green-700 via-teal-600 to-blue-700 py-20">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 text-center shadow-2xl transform -translate-y-10 relative z-20">
          <h2 className="text-3xl font-bold text-green-700 mb-10">🎉 Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-semibold">
            <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 hover:bg-sky-100 transition-colors">🎁 10% OFF on First Order</div>
            <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 hover:bg-sky-100 transition-colors">📦 FREE Delivery on ₹5000+</div>
            <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 hover:bg-sky-100 transition-colors">💼 Bulk Order Pricing</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;