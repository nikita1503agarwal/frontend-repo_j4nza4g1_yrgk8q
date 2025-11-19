import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="absolute -top-32 right-1/2 h-72 w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.25),transparent)] blur-2xl" />
        <div className="absolute -bottom-40 left-1/3 h-72 w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(14,165,233,0.2),transparent)] blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Grow Your Local Business With Your Own AI Assistant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl"
            >
              Automate reservations, messages, and support — 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#contact" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">Book a Demo</a>
              <a href="#pricing" className="px-6 py-3 rounded-full border border-slate-300 text-slate-800 font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors">Get Your AI Assistant</a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 grid sm:grid-cols-2 gap-3 text-slate-600 text-sm"
            >
              {[
                'Customer support',
                'Appointment scheduling',
                'Reservations',
                'FAQs',
                'Recommendations',
                'Upsells',
                'Message automation (WhatsApp, Instagram, Facebook)',
                '24/7 availability',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/10 text-blue-700 text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="relative h-[340px] sm:h-[420px] md:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200/80">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
