import React from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'How fast can we go live?',
    a: 'Most assistants go live in 3-5 days depending on integrations and training materials.'
  },
  {
    q: 'Which platforms do you support?',
    a: 'WhatsApp, Instagram, Facebook, and web chat. We can also integrate your booking tools and calendars.'
  },
  {
    q: 'Is there a contract?',
    a: 'No contracts. Pay $4/day for maintenance & automation hosting. Cancel anytime.'
  },
  {
    q: 'Can the assistant upsell?',
    a: 'Yes. We can configure upsell logic for add-ons, bundles, upgrades, and promos based on your business rules.'
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((item, i) => (
            <motion.details key={i} className="group p-6" initial={false}>
              <summary className="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
                {item.q}
                <span className="ml-6 inline-block group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}
