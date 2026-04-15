import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/images/Solospace..svg"
import { Send, Camera, Code } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Changelog', href: '#' },
    ],
    Resources: [
      { name: 'Freelance Guide', href: '#' },
      { name: 'Invoice Templates', href: '#' },
      { name: 'Help Center', href: '#' },
    ]
  }

  return (
    <footer className="px-6 md:px-12 lg:px-24 pt-24 pb-12 bg-background border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src={Logo} alt="Solospace Logo" width={140} height={140} className="w-[160px]" />
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-[280px]">
              The friendly, all-in-one CRM built to help solo freelancers thrive without the stress.
            </p>
            
          </div>

          {/* Links Columns */}
          <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 py-10 lg:py-0'>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-[#1F2937] font-bold text-sm tracking-wide">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[#6B7280] text-sm hover:text-[#1F2937] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h4 className="text-[#1F2937] font-bold text-sm tracking-wide">Stay Updated</h4>
            <p className="text-[#6B7280] text-sm">Get freelance tips and product updates.</p>
            <div className="flex lg:flex-col gap-3">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email address..." 
                  className="w-full bg-[#1F2937] text-[#6B7280] border-none rounded-full h-12 px-5 text-sm focus:ring-2 focus:ring-[#2563EB] outline-none transition-all"
                />
              </div>
              <button className="px-10 bg-[#2563EB] cursor-pointer text-white font-bold text-sm h-12 rounded-full hover:bg-[#2563EB]/90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#6B7280] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#6B7280] text-xs">
            © {currentYear} Solospace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[#6B7280] hover:text-[#1F2937] transition-colors">
              <Send className="size-5" />
            </Link>
            <Link href="#" className="text-[#6B7280] hover:text-[#1F2937] transition-colors">
              <Camera className="size-5" />
            </Link>
            <Link href="#" className="text-[#6B7280] hover:text-[#1F2937] transition-colors">
              <Code className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
