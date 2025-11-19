import React from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'Cât de repede putem fi live?',
    a: 'Majoritatea asistenților pornesc în 3-5 zile, în funcție de integrări și materialele de antrenare.'
  },
  {
    q: 'Ce platforme susțineți?',
    a: 'WhatsApp, Instagram, Facebook și chat pe site. Putem integra și instrumentele tale de programări și calendare.'
  },
  {
    q: 'Există contract?',
    a: 'Fără contract. Plătești $4/zi pentru mentenanță și hosting de automatizări. Poți anula oricând.'
  },
  {
    q: 'Poate asistentul să facă upsell?',
    a: 'Da. Putem configura logică de upsell pentru add-on-uri, pachete, upgrade-uri și promoții, pe baza regulilor tale de business.'
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Întrebări frecvente</h2>
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
