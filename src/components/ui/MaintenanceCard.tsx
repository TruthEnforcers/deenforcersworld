import React from "react"
import { Hammer, Settings, Home } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MaintenanceCard() {
  return (
    <div className="flex-grow flex items-center justify-center py-20 px-4">
      <Card className="max-w-2xl w-full border-none shadow-2xl bg-accent/10 rounded-[2.5rem] overflow-hidden">
        <CardContent className="p-12 text-center flex flex-col items-center">
          <div className="h-24 w-24 bg-accent/10 rounded-full flex items-center justify-center mb-8 relative">
            <Settings className="h-12 w-12 text-accent animate-spin-slow" style={{ animationDuration: '8s' }} />
            <Hammer className="h-8 w-8 text-primary absolute -bottom-1 -right-1" />
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
            Page Under Maintenance & Upgrading
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
            We are currently enhancing this section of <strong>De Enforcers World</strong> to serve you better. Our team is working hard to bring you a more powerful and seamless experience.
          </p>
          <div className="space-y-4 w-full">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-6">
              Come back very soon
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 rounded-2xl text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" /> Back to Homepage
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
