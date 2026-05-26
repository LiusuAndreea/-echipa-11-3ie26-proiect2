import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MusicPlayerUI from '../components/MusicPlayerUI'

export default function MainLayout({ children, hidePlayer = false }) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {!hidePlayer && <MusicPlayerUI />}
    </div>
  )
}
