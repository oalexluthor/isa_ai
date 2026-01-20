"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Check, Copy, Terminal, Workflow, Code2 } from "lucide-react"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 rounded-md p-2 text-muted-foreground opacity-0 transition-all hover:bg-secondary hover:text-foreground group-hover:opacity-100"
      aria-label="Copiar código"
    >
      {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
    </button>
  )
}

function OllamaLogo() {
  return (
    <svg viewBox="0 0 32 32" className="size-8" fill="currentColor">
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4c2.5 0 4.5 1.5 5.5 3.5.5 1 .5 2 .5 3 0 2-1 3.5-2.5 4.5 1 .5 2 1.5 2.5 3 .5 1 .5 2.5 0 3.5-1 2-3 3.5-6 3.5s-5-1.5-6-3.5c-.5-1-.5-2.5 0-3.5.5-1.5 1.5-2.5 2.5-3-1.5-1-2.5-2.5-2.5-4.5 0-1 0-2 .5-3C10.5 7.5 13.5 6 16 6zm-2 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-2 5c-1.5 0-3 .5-3.5 1.5-.25.5-.25 1 0 1.5.5 1 2 1.5 3.5 1.5s3-.5 3.5-1.5c.25-.5.25-1 0-1.5-.5-1-2-1.5-3.5-1.5z"/>
    </svg>
  )
}

function N8nLogo() {
  return (
    <svg viewBox="0 0 32 32" className="size-6" fill="currentColor">
      <path d="M16 4L4 10v12l12 6 12-6V10L16 4zm0 2.5l8.5 4.25L16 15 7.5 10.75 16 6.5zM6 12.25l9 4.5v8.5l-9-4.5v-8.5zm20 0v8.5l-9 4.5v-8.5l9-4.5z"/>
    </svg>
  )
}

const ollamaCode = `ollama pull isa-guardrail
ollama run isa-guardrail "Meu cliente João Silva (CPF 123.456.789-00)..."`

const pythonCode = `from langchain.llms import Ollama

guardrail = Ollama(model="isa-guardrail")
clean_prompt = guardrail.invoke(sensitive_input)`

export function Integrations() {
  return (
    <section className="relative px-6 py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/2 h-[400px] w-[600px] -translate-y-1/2 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Privacidade Integrada em{" "}
            <span className="text-primary">Qualquer Stack</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Não importa se você roda agentes locais ou pipelines complexos de automação, a ISA se integra em segundos.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="ollama" className="w-full">
          <TabsList className="mx-auto mb-8 flex w-fit bg-secondary/50 p-1">
            <TabsTrigger 
              value="ollama" 
              className="gap-2 px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              <Terminal className="size-4" />
              Inferência Local
            </TabsTrigger>
            <TabsTrigger 
              value="n8n" 
              className="gap-2 px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              <Workflow className="size-4" />
              Automação
            </TabsTrigger>
            <TabsTrigger 
              value="python" 
              className="gap-2 px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              <Code2 className="size-4" />
              Python
            </TabsTrigger>
          </TabsList>

          {/* Ollama Tab */}
          <TabsContent value="ollama" className="animate-in fade-in-50 duration-300">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <OllamaLogo />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Integração com Ollama</h3>
                  <p className="text-sm text-muted-foreground">Rode a ISA localmente com um único comando</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg border border-border/50 bg-background">
                <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-4 py-2">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-500/70" />
                    <div className="size-3 rounded-full bg-yellow-500/70" />
                    <div className="size-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground font-mono">Terminal</span>
                </div>
                <CopyButton text={ollamaCode} />
                <pre className="overflow-x-auto p-4 font-mono text-sm">
                  <code>
                    <span className="text-muted-foreground">$</span>{" "}
                    <span className="text-primary">ollama pull</span>{" "}
                    <span className="text-foreground">isa-guardrail</span>
                    {"\n"}
                    <span className="text-muted-foreground">$</span>{" "}
                    <span className="text-primary">ollama run</span>{" "}
                    <span className="text-foreground">isa-guardrail</span>{" "}
                    <span className="text-amber-400">{'"Meu cliente João Silva (CPF 123.456.789-00)..."'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </TabsContent>

          {/* n8n Tab */}
          <TabsContent value="n8n" className="animate-in fade-in-50 duration-300">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <N8nLogo />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Fluxo no n8n</h3>
                  <p className="text-sm text-muted-foreground">Automação visual com privacidade nativa</p>
                </div>
              </div>

              {/* Workflow Visualization */}
              <div className="overflow-x-auto rounded-lg border border-border/50 bg-background p-6">
                <div className="flex items-center justify-center gap-0 min-w-max">
                  {/* Webhook Node */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-32 items-center justify-center rounded-lg border-2 border-purple-500/50 bg-purple-500/10 text-purple-400 transition-all hover:border-purple-500 hover:bg-purple-500/20">
                      <div className="text-center">
                        <div className="text-xs font-medium">Webhook</div>
                        <div className="text-[10px] opacity-70">Gatilho</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center px-2">
                    <div className="h-0.5 w-8 bg-border" />
                    <div className="size-0 border-y-4 border-l-6 border-y-transparent border-l-border" />
                  </div>

                  {/* ISA Node */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-32 items-center justify-center rounded-lg border-2 border-primary/50 bg-primary/10 text-primary transition-all hover:border-primary hover:bg-primary/20">
                      <div className="text-center">
                        <div className="text-xs font-medium">ISA Anonymizer</div>
                        <div className="text-[10px] opacity-70">Guardrail</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center px-2">
                    <div className="h-0.5 w-8 bg-border" />
                    <div className="size-0 border-y-4 border-l-6 border-y-transparent border-l-border" />
                  </div>

                  {/* ChatGPT Node */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-32 items-center justify-center rounded-lg border-2 border-green-500/50 bg-green-500/10 text-green-400 transition-all hover:border-green-500 hover:bg-green-500/20">
                      <div className="text-center">
                        <div className="text-xs font-medium">ChatGPT</div>
                        <div className="text-[10px] opacity-70">LLM Cloud</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center px-2">
                    <div className="h-0.5 w-8 bg-border" />
                    <div className="size-0 border-y-4 border-l-6 border-y-transparent border-l-border" />
                  </div>

                  {/* Slack Node */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-32 items-center justify-center rounded-lg border-2 border-amber-500/50 bg-amber-500/10 text-amber-400 transition-all hover:border-amber-500 hover:bg-amber-500/20">
                      <div className="text-center">
                        <div className="text-xs font-medium">Slack</div>
                        <div className="text-[10px] opacity-70">Saída</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="mt-4 text-center">
                  <span className="rounded-full bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
                    Arraste e solte a ISA em qualquer workflow
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Python Tab */}
          <TabsContent value="python" className="animate-in fade-in-50 duration-300">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Code2 className="size-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Python / LangChain</h3>
                  <p className="text-sm text-muted-foreground">Integração nativa com os frameworks de IA mais populares</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg border border-border/50 bg-background">
                <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-4 py-2">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-500/70" />
                    <div className="size-3 rounded-full bg-yellow-500/70" />
                    <div className="size-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground font-mono">main.py</span>
                </div>
                <CopyButton text={pythonCode} />
                <pre className="overflow-x-auto p-4 font-mono text-sm">
                  <code>
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-foreground">langchain.llms</span>{" "}
                    <span className="text-purple-400">import</span>{" "}
                    <span className="text-primary">Ollama</span>
                    {"\n\n"}
                    <span className="text-muted-foreground"># Inicializa o guardrail</span>
                    {"\n"}
                    <span className="text-foreground">guardrail</span>{" "}
                    <span className="text-purple-400">=</span>{" "}
                    <span className="text-primary">Ollama</span>
                    <span className="text-foreground">(</span>
                    <span className="text-amber-400">model</span>
                    <span className="text-purple-400">=</span>
                    <span className="text-green-400">"isa-guardrail"</span>
                    <span className="text-foreground">)</span>
                    {"\n\n"}
                    <span className="text-muted-foreground"># Anonimiza dados sensíveis</span>
                    {"\n"}
                    <span className="text-foreground">clean_prompt</span>{" "}
                    <span className="text-purple-400">=</span>{" "}
                    <span className="text-foreground">guardrail</span>
                    <span className="text-purple-400">.</span>
                    <span className="text-primary">invoke</span>
                    <span className="text-foreground">(</span>
                    <span className="text-foreground">input_sensivel</span>
                    <span className="text-foreground">)</span>
                  </code>
                </pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}