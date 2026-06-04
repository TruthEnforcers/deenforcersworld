"use client";

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { majorPrograms } from "../page";
import { MaintenanceCard } from "@/components/ui/MaintenanceCard";

export default function ProgramArchivePage() {
  const now = new Date()
  const upcoming = majorPrograms.filter(p => p.date >= now)
  const archive = majorPrograms.filter(p => p.date < now)

  return (
    <main className="min-h-screen flex flex-col pt-20 bg-background text-foreground overflow-hidden">
      <Navbar />
      <MaintenanceCard /> 

      {/* Hero */}
      {/* <section className="bg-primary/10 py-24 border-b border-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-6">Program Archive</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic leading-relaxed">
            "A record of our journey and the milestones of truth in De Enforcers World."
          </p>
        </div>
      </section> */}

      {/* Listing */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Upcoming Section */}
            {/* {upcoming.length > 0 && (
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Upcoming Milestones</h2>
                  <div className="h-px flex-grow bg-accent/20" />
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcoming.map((prog) => (
                    <ProgramListingCard key={prog.id} program={prog} />
                  ))}
                </div>
              </div>
            )} */}

            {/* Archive Section */}
            {/* <div className="space-y-12">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Past Glories</h2>
                <div className="h-px flex-grow bg-accent/20" />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {archive.map((prog) => (
                  <ProgramListingCard key={prog.id} program={prog} isArchive />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section> */} 

      <Footer />
    </main>
  )
}

function ProgramListingCard({ program, isArchive = false }: { program: any, isArchive?: boolean }) {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-primary/5 flex flex-col h-full hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className={isArchive ? "bg-black/60 backdrop-blur-md text-white border-none" : "bg-accent text-white border-none"}>
            {isArchive ? "Archive" : "Upcoming"}
          </Badge>
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-accent text-sm font-bold mb-3">
            <Calendar className="h-4 w-4" />
            {program.dateStr}
          </div>
          <h3 className="text-2xl font-headline font-bold text-primary leading-tight mb-4 group-hover:text-accent transition-colors">
            {program.title}
          </h3>
        </div>
        <div className="pt-6 border-t border-primary/5">
          <Link href="/about#contact" className="flex items-center gap-2 text-sm font-black text-primary/40 uppercase tracking-widest hover:text-accent transition-colors group/link">
            Details <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
