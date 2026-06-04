
export function QuoteOfTheMonth() {
  return (
    <section className="py-16 bg-white border-y">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Quote of the Month</h3>
        <blockquote className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-4xl font-headline italic leading-relaxed text-primary">
            "Thy word is a lamp unto my feet, and a light unto my path. In the truth we find the strength to enforce the mandate of heaven upon earth."
          </p>
          <footer className="mt-6 text-muted-foreground font-medium">— Lead Pastor's Desk</footer>
        </blockquote>
      </div>
    </section>
  )
}
