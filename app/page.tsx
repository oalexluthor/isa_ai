import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EnterpriseTrust } from "@/components/enterprise-trust"
import { HowItWorks } from "@/components/how-it-works"
import { CodeDemo } from "@/components/code-demo"
import { Integrations } from "@/components/integrations"
import { Benchmarks } from "@/components/benchmarks"
import { Benefits } from "@/components/benefits"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <EnterpriseTrust />
      <HowItWorks />
      <CodeDemo />
      <Integrations />
      <Benchmarks />
      <Benefits />
      <Footer />
    </main>
  )
}
