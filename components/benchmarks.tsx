"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"
import { Zap, Brain, Cpu } from "lucide-react"

interface BenchmarkBarProps {
  label: string
  value: number
  maxValue: number
  displayValue: string
  isHero?: boolean
  isVisible: boolean
  delay?: number
}

function BenchmarkBar({
  label,
  value,
  maxValue,
  displayValue,
  isHero = false,
  isVisible,
  delay = 0,
}: BenchmarkBarProps) {
  const [width, setWidth] = useState(0)
  const percentage = (value / maxValue) * 100

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, percentage, delay])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className={isHero ? "font-semibold text-foreground" : "text-muted-foreground"}>
          {label}
        </span>
        <span className={isHero ? "font-mono font-bold text-primary" : "font-mono text-muted-foreground"}>
          {displayValue}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-secondary/50">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            isHero
              ? "bg-gradient-to-r from-primary to-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]"
              : "bg-muted-foreground/30"
          }`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

interface BenchmarkCardProps {
  icon: React.ReactNode
  title: string
  description: string
  children: React.ReactNode
  isVisible: boolean
}

function BenchmarkCard({ icon, title, description, children, isVisible }: BenchmarkCardProps) {
  return (
    <div
      className={`rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

export function Benchmarks() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative px-6 py-24">
      {/* Background Effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Por que{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              270M de Parâmetros
            </span>
            ?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            O equilíbrio ideal entre a velocidade de um Regex e a inteligência de uma LLM. 
            Latência ultra-baixa para aplicações em tempo real.
          </p>
        </div>

        {/* Benchmark Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Latency Card */}
          <BenchmarkCard
            icon={<Zap className="h-5 w-5" />}
            title="Latência"
            description="Quanto menor, melhor"
            isVisible={isVisible}
          >
            <BenchmarkBar
              label="ISA (270M)"
              value={48}
              maxValue={1200}
              displayValue="48ms"
              isHero
              isVisible={isVisible}
              delay={200}
            />
            <BenchmarkBar
              label="Llama-3 (8B)"
              value={520}
              maxValue={1200}
              displayValue="520ms"
              isVisible={isVisible}
              delay={400}
            />
            <BenchmarkBar
              label="GPT-4 (API)"
              value={1200}
              maxValue={1200}
              displayValue="1.2s+"
              isVisible={isVisible}
              delay={600}
            />
          </BenchmarkCard>

          {/* Accuracy Card */}
          <BenchmarkCard
            icon={<Brain className="h-5 w-5" />}
            title="Precisão Contextual"
            description="Quanto maior, melhor"
            isVisible={isVisible}
          >
            <BenchmarkBar
              label="ISA (270M)"
              value={96}
              maxValue={100}
              displayValue="96%"
              isHero
              isVisible={isVisible}
              delay={300}
            />
            <div className="pt-1 text-[10px] uppercase tracking-wider font-bold text-primary/80">
              Detecta contexto, não apenas padrões
            </div>
            <BenchmarkBar
              label="Baseado em Regras (Regex)"
              value={55}
              maxValue={100}
              displayValue="55%"
              isVisible={isVisible}
              delay={500}
            />
            <div className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/60">
              Falha em erros de digitação e variações
            </div>
          </BenchmarkCard>

          {/* Hardware Card */}
          <BenchmarkCard
            icon={<Cpu className="h-5 w-5" />}
            title="Requisitos de Hardware"
            description="Uso estimado de VRAM"
            isVisible={isVisible}
          >
            <div className="space-y-4">
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">ISA (270M)</span>
                  <span className="font-mono font-bold text-primary">{"< 500MB"}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Roda em Raspberry Pi, Edge ou CPU simples
                </p>
              </div>
              <div className="rounded-lg border border-border/30 bg-secondary/20 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Llama-3 (8B)</span>
                  <span className="font-mono text-muted-foreground">~5.5GB</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground/70">
                  Exige GPU dedicada para boa performance
                </p>
              </div>
            </div>
          </BenchmarkCard>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-xs text-muted-foreground/60 italic">
          * Testes realizados em CPU padrão (Equivalente a Apple M1 Air 8GB). Resultados de LLMs locais usando Ollama (Q4_K_M).
        </p>
      </div>
    </section>
  )
}