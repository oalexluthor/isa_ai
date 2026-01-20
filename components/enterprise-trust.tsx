import {
  AlertTriangle,
  ShieldAlert,
  FileWarning,
  Lock,
  ShieldCheck,
  Brain,
  Server,
  FileText,
  ArrowRight,
} from "lucide-react"

const risks = [
  {
    icon: ShieldAlert,
    title: "Vazamento de Dados & Shadow AI",
    description:
      "Colaboradores costumam colar dados sensíveis de clientes ou relatórios financeiros em LLMs web, treinando inadvertidamente modelos públicos com seus dados privados.",
  },
  {
    icon: FileWarning,
    title: "Não Conformidade Regulatória",
    description:
      "Regulamentações como a LGPD impõem multas pesadas pela exposição de PII. Enviar dados não mascarados para nuvens de terceiros é um risco jurídico.",
  },
  {
    icon: AlertTriangle,
    title: "Perda de Propriedade Intelectual",
    description:
      "Assim que seus dados saem do ambiente local, você perde o controle sobre seu ciclo de vida e a possível exposição em futuras iterações dos modelos.",
  },
]

const solutions = [
  {
    icon: Lock,
    title: "Privacidade Zero-Trust",
    description:
      "A ISA atua como um filtro local sem estado (stateless). Ela intercepta os prompts, substitui entidades sensíveis por marcadores seguros e só então libera o envio.",
  },
  {
    icon: Brain,
    title: "Integridade Contextual",
    description:
      "Diferente de filtros regex primitivos, o motor neural da ISA entende o contexto, garantindo que nomes e IDs sejam trocados mantendo o sentido original do prompt.",
  },
  {
    icon: Server,
    title: "Governança de Baixo Custo",
    description:
      "Evite 'Nuvens de Privacidade' caras. A ISA roda localmente em hardware comum, fornecendo um guardrail leve para cada terminal ou pipeline de agentes.",
  },
]

export function EnterpriseTrust() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-[400px] w-[300px] rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Segurança Corporativa
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Unindo a{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Inovação
            </span>{" "}
            à{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Conformidade
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground">
            Modelos de Linguagem são poderosos, mas famintos por dados. A ISA
            garante que a inteligência corporativa permaneça dentro do seu perímetro.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Column 1: Risks */}
          <div className="space-y-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-500/20">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-amber-400">
                Os Riscos Invisíveis
              </h3>
            </div>

            <div className="space-y-4">
              {risks.map((risk) => (
                <div
                  key={risk.title}
                  className="group relative rounded-xl border border-amber-500/10 bg-amber-950/10 p-6 transition-all duration-300 hover:border-amber-500/20 hover:bg-amber-950/20"
                >
                  {/* Subtle warning indicator */}
                  <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-amber-500/50" />

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-500/20 transition-colors group-hover:bg-amber-500/15">
                      <risk.icon className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">
                        {risk.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {risk.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">
                A Vantagem da ISA
              </h3>
            </div>

            <div className="space-y-4">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="group relative rounded-xl border border-primary/10 bg-primary/5 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/10"
                >
                  {/* Subtle success indicator */}
                  <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-primary/50" />

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">
                        {solution.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-xl border border-border/50 bg-secondary/50 px-6 py-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-medium text-foreground">
                Security Whitepaper (PT-BR)
              </div>
              <div className="text-sm text-muted-foreground">
                Baixe nosso guia de conformidade
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}