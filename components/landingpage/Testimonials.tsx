"use client"

import React from 'react'
import { Star } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  {
    quote: "Before Solospace, I literally kept track of my projects in a notebook and Apple Notes. Now everything is in one place, and the automated invoices have helped me get paid weeks faster.",
    author: "Sarah Jenkins",
    role: "Freelance Graphic Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop"
  },
  {
    quote: "The interface is just so clean and soft. It doesn't feel like a rigid corporate CRM. It actually feels like a workspace designed for creatives. The AI follow-up suggestions are magic.",
    author: "Marcus Cole",
    role: "Copywriter & Content Strategist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop"
  },
  {
    quote: "Solospace simplified my entire workflow. Sending invoices and tracking projects is now the easiest part of my day, allowing me to focus entirely on my creative output.",
    author: "Elena Rodriguez",
    role: "Digital Illustrator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop"
  }
]

export default function Testimonials() {
  const marqueeReviews = [...reviews, ...reviews, ...reviews, ...reviews]

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="flex gap-6 animate-scroll w-max">
          {marqueeReviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-10 rounded-3xl w-[320px] md:w-[480px] flex flex-col items-start flex-shrink-0"
            >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 text-[#F59E0B] stroke-[1.5]" />
              ))}
            </div>
            
            <p className="text-[#4B5563] text-[15px] leading-relaxed mb-8 grow">
              {review.quote}
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <div className="relative size-10 overflow-hidden rounded-full">
                <Image 
                  src={review.avatar} 
                  alt={review.author} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#1F2937] text-sm">{review.author}</span>
                <span className="text-[#6B7280] text-[13px]">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

