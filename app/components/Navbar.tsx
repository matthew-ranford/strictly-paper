'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const leftNavLinks = [
    { href: '#about', text: 'Who We Are' },
    { href: '#services', text: 'Our Services' },
    // { href: '#gallery', text: 'Gallery' },
  ]

  const rightNavLinks = [
    { href: '#gallery', text: 'Gallery' },
    { href: '#reviews', text: 'Reviews' },
    { href: '#contact', text: 'Contact Us' },
  ]

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="flex justify-around items-center pt-2 pb-6 px-0 lg:px-20 2xl:px-10 bigger-screens:px-14 navbar-container">
        <ul className="hidden lg:flex gap-16 2xl:gap-20 bigger-screens:gap-10 text-xl 2xl:text-2xl bigger-screens:text-3xl">
          {leftNavLinks.map((link, index) => (
            <li className="list-none nav-link" key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <h1 className="text-amber-600 text-center text-6xl lg:text-7xl 2xl:text-8xl">
          <span className="block">Strictly</span>
          <span className="block">Paper</span>
        </h1>
        <ul className="hidden lg:flex gap-10 text-xl 2xl:text-2xl bigger-screens:text-3xl">
          {rightNavLinks.map((link, index) => (
            <li className="list-none nav-link" key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <ul
          className={`absolute lg:hidden w-full flex flex-col items-right gap-4 px-4 text-right text-5xl sm:text-6xl bg-zinc-200 ${
            isOpen ? 'top-36' : 'hidden'
          }`}
        >
          {[...leftNavLinks, ...rightNavLinks].map((link, index) => (
            <li className="list-none py-2" key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex">
          <button onClick={handleMenuClick}>
            <span
              className={`bg-zinc-950 block transition-all duration-700 ease-out
         h-1 rounded-2xl ${
           isOpen ? 'w-14 rotate-45 translate-y-1.5' : 'w-14 -translate-y-0.5'
         }`}
            ></span>

            <span
              className={`bg-zinc-950 block transition-all duration-700 ease-out
         h-1 rounded-2xl ml-auto ${
           isOpen ? 'w-14 -rotate-45 -translate-y-1.5' : 'w-8 translate-y-0.5'
         }`}
            ></span>
          </button>
        </div>
      </nav>
    </>
  )
}
