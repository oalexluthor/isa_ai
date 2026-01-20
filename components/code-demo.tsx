"use client"

import { ArrowRight, Code2, MessageSquareText } from "lucide-react"
import { useState } from "react"

const examples = {
  json: {
    title: "Estrutura de API (JSON)",
    input: `{
  "action": "refund_request",
  "customer": {
    "name": "Carlos Oliveira",
    "cpf": "123.456.789-00",
    "email": "carlos.oliver@gmail.com"
  },
  "amount": 1500.00
}`,
    output: `{
  "action": "refund_request",
  "customer": {
    "name": "[PESSOA_01]",
    "cpf": "[DOC_ID_01]",
    "email": "[EMAIL_01]"
  },
  "amount": 1500.00
}`
  },
  text: {
    title: "Texto em Prosa (Chat)",
    input: "Olá, meu nome é Carlos Oliveira e gostaria de atualizar meu endereço. Moro na Rua das Flores, 123, São Paulo. Meu CPF é 123.456.789-00 e meu telefone é (11) 98888-7777.",
    output: "Olá, meu nome é [PESSOA_01] e gostaria de atualizar meu endereço. Moro na [ENDERECO_01]. Meu CPF é [DOC_ID_01] e meu telefone é [TELEFONE_01]."
  }
}

export function CodeDemo() {
  const [activeTab, setActiveTab] = useState<"json" | "text">("json")

  return (
    <section className="bg-muted/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Veja em Ação
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Observe como a ISA transforma dados sensíveis em tokens seguros em tempo real, preservando o contexto para a LLM.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mb-8 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("json")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${activeTab === "json" ? "bg-primary text-primary-foreground shadow-lg" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`}
          >
            <Code2 className="h-4 w-4" /> JSON Data
          </button>
          <button
            onClick={() => setActiveTab("text")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${activeTab === "text" ? "bg-primary text-primary-foreground shadow-lg" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`}
          >
            <MessageSquareText className="h-4 w-4" /> Texto Simples
          </button>
        </div>

        {/* Code Comparison */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-4">
          {/* Input */}
          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="text-sm font-medium text-red-400">Entrada Original</span>
              <span className="ml-auto rounded bg-red-500/10 px-2 py-0.5 text-xs text-red-400">
                Contém PII
              </span>
            </div>
            <div className="min-h-[300px] overflow-hidden rounded-xl border border-red-500/20 bg-slate-950">
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <span className="text-xs text-slate-500 font-mono">input.{activeTab === "json" ? "json" : "txt"}</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed whitespace-pre-wrap">
                <code className="font-mono text-slate-300">
                  <span dangerouslySetInnerHTML={{ __html: highlightSensitive(examples[activeTab].input) }} />
                </code>
              </pre>
            </div>
          </div>

          {/* Output */}
          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="text-sm font-medium text-emerald-400">Saída Anonimizada</span>
              <span className="ml-auto rounded bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">
                Seguro para Enviar
              </span>
            </div>
            <div className="min-h-[300px] overflow-hidden rounded-xl border border-emerald-500/20 bg-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <span className="text-xs text-slate-500 font-mono">output.{activeTab === "json" ? "json" : "txt"}</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed whitespace-pre-wrap">
                <code className="font-mono text-slate-300">
                  <span dangerouslySetInnerHTML={{ __html: highlightAnonymized(examples[activeTab].output) }} />
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="rounded bg-red-500/20 px-2 py-0.5 font-mono text-xs text-red-400 font-bold">
              DADOS SENSÍVEIS
            </span>
            <span className="text-muted-foreground">Risco de vazamento detectado</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-xs text-emerald-400 font-bold">
              [TOKEN_SEGURO]
            </span>
            <span className="text-muted-foreground">Substituição neural preservando o contexto</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function highlightSensitive(text: string): string {
  const sensitivePatterns = [
    { pattern: /Carlos Oliveira/g, className: "text-red-400 bg-red-500/10 px-1 rounded" },
    { pattern: /123\.456\.789-00/g, className: "text-red-400 bg-red-500/10 px-1 rounded" },
    { pattern: /carlos\.oliver@gmail\.com/g, className: "text-red-400 bg-red-500/10 px-1 rounded" },
    { pattern: /Rua das Flores, 123, São Paulo/g, className: "text-red-400 bg-red-500/10 px-1 rounded" },
    { pattern: /\(11\) 98888-7777/g, className: "text-red-400 bg-red-500/10 px-1 rounded" },
  ]

  let result = escapeHtml(text)
  sensitivePatterns.forEach(({ pattern, className }) => {
    result = result.replace(pattern, (match) => `<span class="${className}">${match}</span>`)
  })
  return result
}

function highlightAnonymized(text: string): string {
  const tokenPatterns = [
    { pattern: /\[PESSOA_01\]/g, className: "text-emerald-400 bg-emerald-500/10 px-1 rounded font-bold" },
    { pattern: /\[DOC_ID_01\]/g, className: "text-emerald-400 bg-emerald-500/10 px-1 rounded font-bold" },
    { pattern: /\[EMAIL_01\]/g, className: "text-emerald-400 bg-emerald-500/10 px-1 rounded font-bold" },
    { pattern: /\[ENDERECO_01\]/g, className: "text-emerald-400 bg-emerald-500/10 px-1 rounded font-bold" },
    { pattern: /\[TELEFONE_01\]/g, className: "text-emerald-400 bg-emerald-500/10 px-1 rounded font-bold" },
  ]

  let result = escapeHtml(text)
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