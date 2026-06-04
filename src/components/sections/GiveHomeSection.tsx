
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Copy, Check, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function GiveHomeSection() {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  // Fetching account details from environment variables
  const bankName = process.env.NEXT_PUBLIC_BANK_NAME || "";
  const accountNumber = process.env.NEXT_PUBLIC_ACCOUNT_NUMBER || "";
  const accountName = process.env.NEXT_PUBLIC_ACCOUNT_NAME || "";

  const handleCopy = () => {
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

  return (
    <section className="py-24 bg-background border-t border-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Left Side: Content (Top on Mobile) */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-widest">
              <Heart className="h-3.5 w-3.5" /> Kingdom Partnership
            </div>
            
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight">
              Sow into the <br /> 
              <span className="text-accent">Truth Mandate</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Your giving enables us to reach the lost at all costs and help believers fulfill their divine potential. Join us in enforcing the truth across the globe through your faithful support.
            </p>

            <div className="pt-4">
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white rounded-xl h-14 px-8 font-bold group shadow-xl transition-all">
                <Link href="/give" className="flex items-center gap-2">
                  View Giving Options <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side: Account Card (Bottom on Mobile) */}
          <div className="w-full lg:w-1/2">
            <Card className="bg-[#3D1A16] border-none rounded-[2.5rem] overflow-hidden shadow-2xl text-white transform transition-all hover:scale-[1.02]">
              <div className="py-8 text-center border-b border-white/10">
                <h3 className="text-xl md:text-2xl font-black tracking-[0.2em] uppercase opacity-80">
                  Truth Enforcers
                </h3>
              </div>

              <CardContent className="p-0">
                <div className="p-12 text-center space-y-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-accent bg-white flex items-center justify-center">
                      <Image
                        src="/fcmblogo.png"
                        alt="Bank Logo"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-bold tracking-widest uppercase">{bankName || "FCMB BANK"}</h4>
                  </div>

                  <div className="space-y-3 group cursor-pointer" onClick={handleCopy}>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Account Number</p>
                    <div className="flex items-center justify-center gap-4 group-hover:text-accent transition-colors">
                      <p className="text-4xl md:text-5xl font-black tracking-tighter">{accountNumber || "0000000000"}</p>
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                        {copied ? <Check className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5" />}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Account Name</p>
                    <p className="text-2xl md:text-3xl font-black tracking-tighter">{accountName || "TEBCI INTL"}</p>
                  </div>
                </div>

                <div className="bg-black/20 py-5 text-center italic text-white/40 text-[10px] tracking-widest">
                  "WE LIVE AND OVERCOME BY THE TRUTH"
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
