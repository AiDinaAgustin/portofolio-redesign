'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { CheckIcon } from "@heroicons/react/20/solid";  

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <div className="relative isolate">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-8 lg:px-8">
          <div className="flex lg:flex-1">
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <Bars3Icon className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative isolate px-6 py-24 pt-40 lg:px-8">
        <div className="text-center max-w-2xl mx-auto py-20 sm:py-24 lg:py-32">
          <p className="mt-8 text-lg text-gray-400 sm:text-xl">
            Welcome to My Digital Space!
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl mt-4">
            Fullstack Developer
          </h1>
          <div className="mt-6 flex justify-center">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 whitespace-nowrap">
              From Sukabumi, West Java
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="#"
              className="flex flex-col items-center gap-2 group"
            >
              <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors mb-6">
                Scroll to explore
              </span>
              <div className="w-10 h-10 rounded-full border-2 border-indigo-400 flex items-center justify-center animate-bounce">
                <svg
                  className="w-5 h-5 text-indigo-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </main>

      </div>      
    </div>
  )
}
