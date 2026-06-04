
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, PlayCircle, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Ministries", href: "/ministries" },
  { name: "Satellite Centers", href: "/satellite-centers" },
  { name: "Give Online", href: "/give" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-accent">
            <Image
              src="/tebcilogo.jpg"
              alt="TEBCI Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-2xl tracking-tight text-primary leading-none">TEBCI</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Enforcers</span>
          </div>
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-accent">
            <Image
              src="/enforcer2.png"
              alt="TEBCI Logo"
              fill
              className="object-cover"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide transition-colors hover:text-accent"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-destructive text-white hover:bg-destructive/90 px-8 font-bold shadow-lg shadow-accent/20 rounded-full h-11">
            <Link href="/live"><PlayCircle className="h-5 w-5" /> Live Stream</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ChevronLeft className="h-7 w-7" />
          ) : (
            <ChevronRight className="h-7 w-7 animate-bounce-x" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden absolute top-20 left-0 w-full bg-background border-b transition-all duration-300 ease-in-out overflow-y-auto",
          isOpen ? "max-h-[calc(100vh-5rem)] py-6 shadow-2xl opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-4 px-4 pb-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold py-3 border-b border-border last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="default" className="w-full bg-destructive hover:bg-destructive/90 h-14 text-lg font-bold rounded-xl">
            <Link href="/live" onClick={() => setIsOpen(false)}><PlayCircle className="h-5 w-5" /> Live Stream</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
