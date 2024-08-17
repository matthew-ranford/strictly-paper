'use client'

import { useState } from 'react'
import { titan } from '@/fonts'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const leftNavLinks = [
    { href: '#about', text: 'Who We Are' },
    { href: '#services', text: 'Our Services' },
  ]

  const rightNavLinks = [
    { href: '#gallery', text: 'Gallery' },
    { href: '#reviews', text: 'Reviews' },
    { href: '#contact', text: 'Contact Us' },
  ]

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  const navItemVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        stagger: 0.1,
      },
    }),
  }

  return (
    <>
      <motion.nav
        className="flex justify-around items-center pt-2 pb-6 px-0 lg:px-20 2xl:px-10 bigger-screens:px-14 navbar-container"
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'linear', duration: 1.5 }}
      >
        <ul className="hidden lg:flex gap-16 2xl:gap-20 bigger-screens:gap-10 text-xl 2xl:text-2xl bigger-screens:text-3xl">
          {leftNavLinks.map((link, index) => (
            <li className="list-none nav-link" key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <div className={titan.className}>
          <h1 className="text-amber-500 text-center text-6xl lg:text-7xl 2xl:text-8xl">
            <span className="block">Strictly</span>
            <span className="block">Paper</span>
          </h1>
        </div>
        <ul className="hidden lg:flex gap-11 bigger-screens:gap-12 text-xl 2xl:text-2xl bigger-screens:text-3xl">
          {rightNavLinks.map((link, index) => (
            <li className="list-none nav-link" key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <motion.ul
          className={`absolute lg:hidden w-full min-h-screen flex flex-col items-right gap-3 py-16 sm:py-8 px-4 text-right text-5xl sm:text-6xl bg-zinc-50 ${
            isOpen
              ? 'top-36 animate-slideIn border-4 border-zinc-950 rounded-2xl'
              : 'hidden'
          }`}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
        >
          {[...leftNavLinks, ...rightNavLinks].map((link, index) => (
            <motion.div
              className={titan.className}
              key={index}
              custom={index}
              variants={navItemVariants}
            >
              <li className="list-none py-2">
                <a href={link.href} onClick={handleMenuClick}>
                  {link.text}
                </a>
              </li>
            </motion.div>
          ))}
        </motion.ul>
        <div className="lg:hidden flex">
          <button
            onClick={handleMenuClick}
            aria-label="button"
            aria-controls="navbar-dropdown-menu"
            aria-expanded={isOpen}
            type="button"
          >
            <span
              className={`bg-zinc-950 block transition-all duration-700 ease-out
         h-1 rounded-2xl ${
           isOpen ? 'w-14 rotate-45 translate-y-1.5' : 'w-14 -translate-y-0.5'
         }`}
            ></span>
            <span
              className={`bg-zinc-950 block transition-all duration-700 ease-out
         h-1 rounded-2xl ml-auto ${
           isOpen ? 'w-14 -rotate-45 -translate-y-0.5' : 'w-8 translate-y-0.5'
         }`}
            ></span>
          </button>
        </div>
      </motion.nav>
    </>
  )
}
