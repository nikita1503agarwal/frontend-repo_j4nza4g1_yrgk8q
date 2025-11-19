import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ready to Get Started?</h2>
            <p className="mt-3 text-slate-600">Book a free 20-minute demo. We’ll review your goals and show how your AI assistant can start generating ROI this week.</p>

            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Done-for-you setup</li>
              <li>• No contract, cancel anytime</li>
              <li>• 24/7 automation included</li>
            </ul>

            <a href="#contact" className="mt-8 inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">Get Started</a>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will reach out shortly.')}} className="rounded-2xl border border-slate-200 p-6 bg-white shadow">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Business Type</label>
                <select className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  <option>Restaurant</option>
                  <option>Clinic</option>
                  <option>Barber Shop</option>
                  <option>Car Service</option>
                  <option>Salon</option>
                  <option>Dental Office</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Tell us about your goals"></textarea>
              </div>
              <button className="mt-2 inline-flex justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">Book a Demo</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
