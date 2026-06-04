"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Wallet, Coins, HandHelping, Copy, Check } from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { Toaster } from "@/components/ui/toaster"

export default function GivePage() {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  // Fetching account details from environment variables with safe defaults
  const bankName = process.env.NEXT_PUBLIC_BANK_NAME || "";
  const accountNumber = process.env.NEXT_PUBLIC_ACCOUNT_NUMBER || "";
  const accountName = process.env.NEXT_PUBLIC_ACCOUNT_NAME || "";

  const handleCopy = () => {
    // Explicit type guard to satisfy TypeScript and ensure runtime safety
    if (typeof accountNumber === 'string' && accountNumber.length > 0) {
      navigator.clipboard.writeText(accountNumber.replace(/\s/g, ""))
      setCopied(true)
      toast({
        variant: "success",
        title: "Copied!",
        description: "Account number copied to clipboard.",
        duration: 2000,
      })
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const givingTypes = [
    {
      id: "item-1",
      title: "Offering",
      icon: <HandHelping className="h-5 w-5 text-accent" />,
      content: "Your offerings support the daily operations and missions of the church. It is a sacrifice of praise that enables the work of the ministry to flourish in our community.",
      scripture: "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.",
      reference: "2 Corinthians 9:7"
    },
    {
      id: "item-2",
      title: "Tithes",
      icon: <Wallet className="h-5 w-5 text-accent" />,
      content: "The tithe is the first tenth of our increase, acknowledging God as our source and provider. By returning the tithe, we open the windows of heaven over our lives.",
      scripture: "Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts.",
      reference: "Malachi 3:10"
    },
    {
      id: "item-3",
      title: "Donation",
      icon: <Heart className="h-5 w-5 text-accent" />,
      content: "Special donations help us with specific building projects, community outreach programs, and welfare for the needy. Your generosity reaches those in need.",
      scripture: "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom.",
      reference: "Luke 6:38"
    },
    {
      id: "item-4",
      title: "Seed Faith",
      icon: <Coins className="h-5 w-5 text-accent" />,
      content: "Sowing a seed is an intentional act of faith for a specific breakthrough. We believe that every seed sown into the good soil of this ministry will bring a harvest.",
      scripture: "Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap.",
      reference: "Galatians 6:7"
    }
  ]

  return (
    <main className="min-h-screen flex flex-col pt-20 bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary/20 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <Heart className="h-64 w-64" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">Kingdom Agendas</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed italic">
            "Take a moment to commit to our kingdom agendas."
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Ways to Give</h2>
            </div>

            <Accordion type="single" collapsible className="w-full ">
              {givingTypes.map((type) => (
                <AccordionItem key={type.id} value={type.id} className="border-none bg-accent/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center group-data-[state=open]:bg-accent group-data-[state=open]:text-white transition-colors">
                        {type.icon}
                      </div>
                      <span className="text-xl font-bold text-primary">{type.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 pt-2">
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {type.content}
                      </p>
                      <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-accent italic text-foreground">
                        <p className="mb-2">"{type.scripture}"</p>
                        <p className="font-bold text-accent text-sm">— {type.reference}</p>
                      </div>
                    </div>
                  </AccordionContent>
                  <div className="w-full">
                    <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-primary/90 to-transparent" />
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Account Details Section */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#3D1A16] border-none rounded-[2rem] overflow-hidden shadow-2xl text-white">
              {/* Header Branding */}
              <div className="py-8 text-center border-b border-white/10">
                <h3 className="text-2xl md:text-3xl font-black tracking-[0.3em] uppercase opacity-80">
                  Truth Enforcers Bible Church
                </h3>
              </div>

              <CardContent className="p-0">
                <div className="grid relative">
                  {/* Bank Information */}
                  <div className="p-12 text-center space-y-6">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-accent bg-white flex items-center justify-center">
                        <Image
                          src="/fcmblogo.png"
                          alt="Bank Logo"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-bold tracking-widest uppercase">{bankName || "BANK DETAILS"}</h4>
                    </div>

                    <div className="space-y-2 group cursor-pointer" onClick={handleCopy}>
                      <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Account Number</p>
                      <div className="flex items-center justify-center gap-4 group-hover:text-accent transition-colors">
                        <p className="text-3xl md:text-5xl font-black tracking-tighter">{accountNumber || "Loading..."}</p>
                        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                          {copied ? <Check className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5" />}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Account Name</p>
                      <p className="text-2xl md:text-5xl font-black tracking-tighter">{accountName || "TEBCI INTL"}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Quote */}
                <div className="bg-black/20 py-6 text-center italic text-white/40 text-sm">
                  "The Enforcers world... Here we live and overcome by the truth."
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </main>
  )
}
