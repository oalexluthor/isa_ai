import { ArrowRight } from "lucide-react"

const inputCode = `{
  "message": "Process refund for John Smith",
  "customer": {
    "name": "John Smith",
    "ssn": "123-45-6789",
    "email": "john.smith@email.com"
  },
  "amount": 299.99
}`

const outputCode = `{
  "message": "Process refund for [PERSON_01]",
  "customer": {
    "name": "[PERSON_01]",
    "ssn": "[DOC_ID_01]",
    "email": "[EMAIL_01]"
  },
  "amount": 299.99
}`

export function CodeDemo() {
  return (
    <section className="bg-muted/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            See It In Action
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Watch how ISA transforms sensitive data into safe, anonymized tokens in real-time.
          </p>
        </div>

        {/* Code Comparison */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-4">
          {/* Input */}
          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="text-sm font-medium text-red-400">Original Input</span>
              <span className="ml-auto rounded bg-red-500/10 px-2 py-0.5 text-xs text-red-400">
                Contains PII
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border border-red-500/20 bg-slate-950">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-slate-500">user_prompt.json</span>
              </div>
              {/* Code */}
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
                <code className="font-mono text-slate-300">
                  {inputCode.split("\n").map((line, i) => (
                    <div key={i} className="flex">
                      <span className="mr-4 select-none text-slate-600">{i + 1}</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: highlightSensitive(line),
                        }}
                      />
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>

          {/* Arrow (Desktop) */}
          <div className="hidden items-center justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:flex lg:-translate-x-1/2 lg:-translate-y-1/2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-lg shadow-primary/20">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
          </div>

          {/* Arrow (Mobile) */}
          <div className="flex items-center justify-center lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <ArrowRight className="h-4 w-4 rotate-90 text-primary" />
            </div>
          </div>

          {/* Output */}
          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="text-sm font-medium text-emerald-400">Anonymized Output</span>
              <span className="ml-auto rounded bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">
                Safe to Send
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border border-emerald-500/20 bg-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-slate-500">anonymized_prompt.json</span>
              </div>
              {/* Code */}
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
                <code className="font-mono text-slate-300">
                  {outputCode.split("\n").map((line, i) => (
                    <div key={i} className="flex">
                      <span className="mr-4 select-none text-slate-600">{i + 1}</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: highlightAnonymized(line),
                        }}
                      />
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="rounded bg-red-500/20 px-2 py-0.5 font-mono text-xs text-red-400">
              PII
            </span>
            <span className="text-muted-foreground">Sensitive data detected</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-xs text-emerald-400">
              [TOKEN]
            </span>
            <span className="text-muted-foreground">Anonymized placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function highlightSensitive(line: string): string {
  const sensitivePatterns = [
    { pattern: /"John Smith"/g, className: "text-red-400 bg-red-500/10 px-1 rounded" },
    { pattern: /"123-45-6789"/g, className: "text-red-400 bg-red-500/10 px-1 rounded" },
    {
      pattern: /"john\.smith@email\.com"/g,
      className: "text-red-400 bg-red-500/10 px-1 rounded",
    },
  ]

  let result = escapeHtml(line)
  sensitivePatterns.forEach(({ pattern, className }) => {
    result = result.replace(pattern, (match) => `<span class="${className}">${match}</span>`)
  })
  return result
}

function highlightAnonymized(line: string): string {
  const tokenPatterns = [
    { pattern: /\[PERSON_01\]/g, className: "text-emerald-400 bg-emerald-500/10 px-1 rounded" },
    { pattern: /\[DOC_ID_01\]/g, className: "text-emerald-400 bg-emerald-500/10 px-1 rounded" },
    { pattern: /\[EMAIL_01\]/g, className: "text-emerald-400 bg-emerald-500/10 px-1 rounded" },
  ]

  let result = escapeHtml(line)
  tokenPatterns.forEach(({ pattern, className }) => {
    result = result.replace(pattern, (match) => `<span class="${className}">${match}</span>`)
  })
  return result
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
