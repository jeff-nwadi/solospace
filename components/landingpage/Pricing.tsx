import React from 'react'
import { Check } from "lucide-react"
import { Button } from "../ui/button"
import Link from 'next/link'

const pricingData = [
  {
    title: "Starter",
    price: "0",
    description: "Perfect for side hustlers.",
    features: [
      "Up to 5 active clients",
      "Basic pipeline",
      "3 invoices per month"
    ],
    buttonText: "Get Started",
    isPopular: false
  },
  {
    title: "Pro",
    price: "19",
    description: "For full-time freelancers.",
    features: [
      "Unlimited clients",
      "Custom pipelines",
      "Unlimited invoices & Stripe",
      "AI smart follow-ups"
    ],
    buttonText: "Start 14-Day Trial",
    isPopular: true
  },
  {
    title: "Studio",
    price: "49",
    description: "When you start hiring help.",
    features: [
      "Everything in Pro",
      "Up to 3 team members",
      "Advanced permissions"
    ],
    buttonText: "Upgrade to Studio",
    isPopular: false
  }
]

export default function Pricing() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 bg-background">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-[#1F2937] tracking-tight title">
          Simple pricing for solo pros.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingData.map((tier) => (
          <div 
            key={tier.title}
            className={`relative flex flex-col bg-white p-8 md:p-10 rounded-[32px] border-2 transition-all ${
              tier.isPopular ? 'border-[#2563EB]' : 'border-gray-100'
            }`}
          >
            {tier.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1F2937] subtitle mb-2">{tier.title}</h3>
              <p className="text-[#6B7280] text-sm">{tier.description}</p>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-black text-[#1F2937] title">${tier.price}</span>
              <span className="text-[#6B7280] ml-1">/mo</span>
            </div>

            <ul className="flex-1 space-y-4 mb-10">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#0D9488]/10 flex items-center justify-center">
                    <Check className="size-3 text-[#0D9488]" strokeWidth={3} />
                  </div>
                  <span className="text-[#1F2937] text-sm leading-tight">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={tier.isPopular ? "default" : "outline"}
              className={`w-full rounded-2xl md:rounded-full h-12 text-sm font-bold transition-all ${
                tier.isPopular 
                  ? 'bg-[#2563EB] hover:bg-[#2563EB]/90 text-white border-none' 
                  : 'bg-transparent border-gray-200 text-[#1F2937] hover:bg-gray-50'
              }`}
            >
              <Link href="#">{tier.buttonText}</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
