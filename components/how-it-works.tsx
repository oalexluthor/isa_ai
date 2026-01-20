import { User, Shield, FileCheck, Cloud, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: User,
    label: "User Input",
    description: "Raw prompt with sensitive data",
    color: "text-muted-foreground",
    bgColor: "bg-muted/50",
    borderColor: "border-border",
  },
  {
    icon: Shield,
    label: "ISA Guardrail",
    description: "Local anonymization",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/50",
    glow: true,
  },
  {
    icon: FileCheck,
    label: "Safe Text",
    description: "Anonymized & clean",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/50",
  },
  {
    icon: Cloud,
    label: "Cloud LLM",
    description: "GPT-4, Claude, Grok",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/50",
  },
]

export function HowItWorks() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            ISA intercepts your prompts locally, anonymizes sensitive data, and ensures only safe
            content reaches external LLM providers.
          </p>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-border via-primary/50 to-cyan-500/50 md:block" />

          {/* Steps */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.label} className="relative flex flex-col items-center">
                {/* Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-primary md:hidden">
                    <ArrowRight className="h-5 w-5 rotate-90" />
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative flex w-full flex-col items-center rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${step.borderColor} ${step.bgColor} ${
                    step.glow ? "shadow-[0_0_30px_rgba(16,185,129,0.15)]" : ""
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full border ${step.borderColor} ${step.bgColor}`}
                  >
                    <step.icon className={`h-7 w-7 ${step.color}`} />
                  </div>

                  {/* Label */}
                  <h3 className={`mb-1 font-semibold ${step.color}`}>{step.label}</h3>
                  <p className="text-center text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Step Number */}
                <div className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Zero data leaves your infrastructure.</span>{" "}
            ISA runs entirely on your edge devices or servers, ensuring complete privacy compliance.
          </p>
        </div>
      </div>
    </section>
  )
}
