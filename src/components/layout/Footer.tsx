"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function Footer() {
  const { toast } = useToast();
  const [currentYear, setCurrentYear] = useState<number | string>("")

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, []);

  const joinComm = () => {
    toast({
      variant: "destructive",
      title: "Failure Joining!",
      description: "Page is undergoing upgrade and integration, please come back later and join again.",
      duration: 3000,
    });
  }



  return (
    <footer className="bg-background text-foreground pt-24 pb-12 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1: Mission & Brand */}
          <div className="space-y-8">
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
            <p className="text-muted-foreground leading-relaxed font-medium">
              Welcome to the Enforcers World. Here! We live and overcome by the truth..
            </p>
            <div className="flex space-x-5">
              <Link href="#" className="p-2.5 rounded-full bg-primary/5 hover:bg-accent hover:text-white transition-all border border-primary/10"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="p-2.5 rounded-full bg-primary/5 hover:bg-accent hover:text-white transition-all border border-primary/10"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="p-2.5 rounded-full bg-primary/5 hover:bg-accent hover:text-white transition-all border border-primary/10"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="p-2.5 rounded-full bg-primary/5 hover:bg-accent hover:text-white transition-all border border-primary/10"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-headline font-bold text-xl mb-8 text-primary relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-accent transition-colors">Upcoming Programs</Link></li>
              <li><Link href="/give" className="hover:text-accent transition-colors">Give Online</Link></li>
              <li><Link href="/satellite-centers" className="hover:text-accent transition-colors">Satellite Centers</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-headline font-bold text-xl mb-8 text-primary relative inline-block">
              Stay Connected
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h4>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                <span>IPOINT, Choba, First Mechanic, Port Harcourt</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+234 805 833 9408</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>bishop@deenforcersworld.com</span>
              </p>
            </div>
          </div>

          {/* Column 4: Connect & Newsletter */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">Join Our Community</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent w-full text-sm"
                />
                <button className="bg-accent text-white px-4 py-2 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20" onClick={joinComm}>
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-medium">
          <p>© {currentYear} <Link href="/" className="hover:text-accent transition-colors"> Truth Enforcers Bible Church Intl.</Link></p>
        </div>
      </div>
    </footer>
  )
}
