"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/public/images/Solospace..svg"
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before allowing state updates or complex rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    if (!mounted) return
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: 'How It Works', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  // Prevent hydration issues by only rendering interactive parts after mount
  // However, we still want the basic structure for SEO/LCP
  return (
    <nav className='relative z-50'>
      <div className='flex justify-between items-center px-6 md:px-8 lg:px-24 py-6 md:py-8'>
        <Link href="/" className="relative z-50">
          <Image src={Logo} alt="Logo" width={130} height={130} className="md:w-[150px]" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:block'>
          <ul className='flex gap-8 text-[#6B7280] text-[14px] font-medium'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-foreground transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden lg:flex items-center gap-4'>
          <Link href="#" className='text-[#1F2937] text-[14px] font-medium px-5 py-2 hover:bg-black/5 rounded-lg transition-colors'>
            Login
          </Link>
          <Button className="bg-[#2563EB] hover:bg-[#2563EB]/90 rounded-full px-6 text-white border-none h-10">
            <Link href="#">Start Free</Link>
          </Button>
        </div>

        {/* Mobile Menu Button - Safe toggle */}
        <button 
          className='lg:hidden p-2 text-foreground relative z-50'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mounted && isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mounted && (
        <div 
          className={`fixed inset-0 bg-background/80 backdrop-blur-xl lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <ul className='flex flex-col items-center gap-8 text-foreground text-xl font-medium'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className='flex flex-col w-full gap-4 pt-8 border-t border-foreground/10'>
              <Link 
                href="#" 
                onClick={() => setIsMenuOpen(false)}
                className='text-center text-foreground text-lg font-medium py-3 rounded-xl border border-foreground/10'
              >
                Login
              </Link>
              <Link 
                href="#" 
                onClick={() => setIsMenuOpen(false)}
                className='text-center bg-[#2563EB] text-white text-[16px] font-medium py-3 rounded-xl'
              >
                Start free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header