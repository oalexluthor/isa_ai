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
    title: "Data Leakage & Shadow AI",
    description:
      "Employees often paste sensitive customer data, API keys, or financial reports into web-based LLMs, inadvertently training public models on your private data.",
  },
  {
    icon: FileWarning,
    title: "Regulatory Non-Compliance",
    description:
      "Regulations like GDPR, CCPA, and LGPD impose massive fines for PII exposure. Sending unmasked data to 3rd-party clouds is a liability.",
  },
  {
    icon: AlertTriangle,
    title: "Intellectual Property Loss",
    description:
      "Once your data leaves your local environment, you lose control over its lifecycle and its potential exposure in future model iterations.",
  },
]

const solutions = [
  {
    icon: Lock,
    title: "Zero-Trust Privacy",
    description:
      "ISA acts as a stateless local filter. It intercepts prompts, replaces sensitive entities with secure markers, and only then allows the 'safe' version to reach the cloud.",
  },
  {
    icon: Brain,
    title: "Contextual Integrity",
    description:
      "Unlike primitive regex filters, ISA's 270M neural engine understands the context, ensuring that names, addresses, and IDs are swapped while keeping the prompt's meaning 100% intact.",
  },
  {
    icon: Server,
    title: "Cost-Effective Governance",
    description:
      "Avoid expensive enterprise 'Privacy Clouds'. ISA runs locally on standard hardware, providing a lightweight guardrail for every employee's terminal or agent pipeline.",
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
            Enterprise Security
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Bridging the Gap Between{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Innovation
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Compliance
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground">
            Large Language Models are powerful, but they are data-hungry. ISA
            ensures your corporate intelligence stays within your perimeter.
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
                The Invisible Risks
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
                The ISA Advantage
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
                Security Whitepaper
              </div>
              <div className="text-sm text-muted-foreground">
                Download our compliance guide
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
