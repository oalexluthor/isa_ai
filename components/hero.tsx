import { Github, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleNetwork } from "@/components/particle-network"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Particle Network Background */}
      <div className="pointer-events-none absolute inset-0">
        <ParticleNetwork />
      </div>

      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-[300px] w-[400px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Guardrail de Privacidade Open Source
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Proteja seus Prompts.{" "}
          <span className="bg-gradient-to-r from-primary to-emerald-300 bg-clip-text text-transparent">
            Use LLMs com Confiança.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          ISA é um Guardrail de IA leve{" "} que anonimiza
          {/* <span className="font-mono text-primary">(270M)</span>  */}
          dados sensíveis localmente antes mesmo de saírem da sua infraestrutura.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            <a href="https://github.com/oalexluthor/isa_ai" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              Ver no GitHub
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-border bg-transparent text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-foreground"
          >
            <a href="https://huggingface.co/AlexLuthor/isa-v0.5.2/tree/main">
              <Download className="h-5 w-5" />
              Baixar GGUF/LoRA
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-border/50 pt-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">270M / 1B</div>
            <div className="text-sm text-muted-foreground">Parâmetros</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">{"<"}50ms</div>
            <div className="text-sm text-muted-foreground">Latência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Processamento Local</div>
          </div>
        </div>
      </div>
    </section>
  )
}
