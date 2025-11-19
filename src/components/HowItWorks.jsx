import React from 'react'
import { motion } from 'framer-motion'
import { Search, Brain, Clock } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'We analyze your business needs',
      desc: 'A quick discovery call to learn your services, hours, workflows, FAQs, and tools you already use.'
    },
    {
      icon: Brain,
      title: 'We create and train your custom AI agent',
      desc: 'We integrate with your calendar, booking, and messaging tools, then train the agent on your policies.'
    },
    {
      icon: Clock,
      title: 'It works 24/7 to automate your operations',
      desc: 'From bookings to FAQs and upsells, your assistant handles it — day and night.'
    },
  ]

  return (
    <section id="how" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-3 text-slate-600">Set up in days, not months. Simple, done-for-you process.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
