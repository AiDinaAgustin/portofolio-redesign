'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, Linkedin, Github, FileDown } from "lucide-react"
import HeroParticles from "./HeroParticles";


export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      {/* Contact */}
      <div className=" py-24 sm:py-32 overflow-hidden">
      <HeroParticles />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-gray-300">
            Let’s connect and create something awesome together.
          </p>
        </div>

        {/* Kontak Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          {/* Whatsapp */}
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-800/40 rounded-2xl p-6 shadow-lg hover:shadow-purple-800/40 transition">
            <div className="flex items-center justify-between mb-3">
              <Phone className="w-6 h-6 text-purple-400" />
              <span className="text-sm text-gray-400">Always Available</span>
            </div>
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p className="mt-2 text-gray-300">0856 5957 3835</p>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-800/40 rounded-2xl p-6 shadow-lg hover:shadow-indigo-700/40 transition">
            <div className="flex items-center justify-between mb-3">
              <Mail className="w-6 h-6 text-indigo-400" />
              <span className="text-sm text-gray-400">For Work & Projects</span>
            </div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2 text-gray-300">aidinaagustin2@gmail.com</p>
          </div>

          {/* LinkedIn */}
          <Link href="linkedin.com/in/aidina-agustin/" className="bg-gradient-to-br from-[#14203a] to-[#1f2a4d] rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/30 transition">
            <div className="flex items-center justify-between mb-3">
              <Linkedin className="w-6 h-6 text-blue-400" />
              <span className="text-sm text-gray-400">Connect with me</span>
            </div>
            <h3 className="text-xl font-semibold">LinkedIn</h3>
            <p className="mt-2 text-gray-300">/aidina-agustin</p>
          </Link>

          {/* GitHub */}
          <Link href="https://github.com/AiDinaAgustin" className="bg-gradient-to-br from-[#1e1633] to-[#2b1b47] rounded-2xl p-6 shadow-lg hover:shadow-purple-600/30 transition">
            <div className="flex items-center justify-between mb-3">
              <Github className="w-6 h-6 text-gray-300" />
              <span className="text-sm text-gray-400">My Repositories</span>
            </div>
            <h3 className="text-xl font-semibold">Github</h3>
            <p className="mt-2 text-gray-300">/AiDinaAgustin</p>
          </Link>

          {/* Download CV */}
          <Link 
            href="/cv/Ai Dina Agustin-resume.pdf" 
            download
            className="md:col-span-2 bg-gradient-to-br from-[#3b1030] to-[#501b44] rounded-2xl p-6 shadow-lg hover:shadow-pink-700/30 transition block cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <FileDown className="w-6 h-6 text-pink-400" />
              <span className="text-sm text-gray-400">Updated Nov 2025</span>
            </div>
            <h3 className="text-xl font-semibold">Download CV</h3>
            <p className="mt-2 text-gray-300">Grab the latest version of my portfolio CV.</p>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}
