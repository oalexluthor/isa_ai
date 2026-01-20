import { Cpu, Blocks, Lock } from "lucide-react"

const benefits = [
  {
    icon: Cpu,
    title: "Ultra-Lightweight",
    description:
      "At just 270M parameters (based on Gemma 3), ISA runs efficiently on CPU and edge devices with minimal overhead. No GPU required.",
    highlight: "270M params",
  },
  {
    icon: Blocks,
    title: "Framework Agnostic",
    description:
      "Seamlessly integrates with LangChain, AutoGen, CrewAI, and any custom agent framework. Drop-in compatibility with your existing stack.",
    highlight: "Any framework",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "Your data remains yours. No PII is ever sent to third-party providers. Full compliance with GDPR, HIPAA, and enterprise security requirements.",
    highlight: "Zero leakage",
  },
]

export function Benefits() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for Enterprise Security
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            ISA provides peace of mind for developers and security teams deploying LLMs in
            production environments.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
            >
              {/* Glow Effect */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="relative mb-3 text-xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="relative mb-4 text-muted-foreground">{benefit.description}</p>

              {/* Highlight Badge */}
              <span className="relative inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {benefit.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
