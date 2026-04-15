import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import HeroImage from "@/public/images/hero-image.svg"

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center px-2 md:px-12 lg:px-24 py-12 lg:py-24 bg-background'>
      <div className='flex flex-col items-center text-center max-w-7xl mx-auto'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-[#1F2937] tracking-tight leading-[1.1] title'>
          Your Solo Business, <br/> All in One Space
        </h1>

        <p className='mt-6 text-[#6B7280] text-[14px] md:text-[16px] w-[80%] mx-0 md:w-[60%] md:mx-0 leading-relaxed'>
          Manage clients, track projects, and send invoices without the chaos. 
          The friendly CRM built specifically for creative freelancers.
        </p>

        <div className='flex items-start md:items-center justify-center gap-2 mt-6 sm:w-auto'>
          <Button className="rounded-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-4 py-3 md:px-8 md:h-10 text-[14px] md:text-base">
            <Link href="#">Start Free</Link>
          </Button>
          <Button variant="outline" className="rounded-full border-2 md:border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488]/5 px-4 py-3 md:px-8 md:h-10 text-[14px] md:text-base group transition-all">
            <Link href="#" className='flex items-center gap-2'>
              See How It Works
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        </div>

        <div className='py-14'>
          <div className='p-2 md:p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/40 overflow-hidden'>
            <Image 
              src={HeroImage} 
              alt="Solospace Dashboard Preview" 
              width={1000} 
              height={800} 
              className='w-full h-auto rounded-xl border border-[#1F2937]/5'
              priority
            />
          </div>
        </div>
      
    </section>
  )
}

export default Hero