"use client";

import {
  Shield,
  ChevronRight,
  BookOpen,
  Terminal,
  Zap,
  Lock,
  Brain,
  Cpu,
  ChevronLeftCircleIcon,
} from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function DocsPage() {
  const menuItems = [
    { title: "Introdução", id: "introducao" },
    { title: "Instalação", id: "instalacao" },
    { title: "Como os Tokens Funcionam", id: "tokens" },
    { title: "Dicionário de entidades", id: "dicionarios_entidades" },
    { title: "System prompts e modos de operação", id: "system_prompts" },
    { title: "Padrões de Integração Arquitetural", id: "integracao_arquitetural" },
    { title: "Instalaçao e Setup", id: "instalacao" },
    { title: "FAQ e Limitações", id: "faq" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Decorativo - Mantendo a identidade do site */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[1000px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* 1. SIDEBAR (Navegação) */}
          <aside className="hidden w-64 lg:block">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4 text-primary font-bold uppercase tracking-widest text-xs">
                  <div className="flex flex-col">

   <div className="flex flex-row mb-8">
                       <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                                 <span className="text-lg font-bold tracking-tight text-foreground">  <ChevronLeftCircleIcon></ChevronLeftCircleIcon> Página Inicial  </span>
                               </Link>
                     </div>

                    <BookOpen className="size-4" /> Documentação
                  
                  </div>
                </div>
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground transition-all hover:bg-secondary hover:text-primary"
                    >
                      {item.title}
                      <ChevronRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* 2. CONTEÚDO PRINCIPAL */}
          <main className="flex-1 max-w-3xl">
            {/* Header da Página */}
            <header className="mb-16 border-b border-border/50 pb-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                v0.5.2-alfa   <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">ISA (Information Sensitive Anonymizer)</span>
        </Link>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Documentação Técnica{" "}
                <span className="text-primary">
                  ISA (Information Sensitive Anonymizer)
                </span>
              </h1>
              <p className="text-xl text-foreground leading-relaxed">
                Aprenda a configurar, integrar e expandir o guardrail de
                privacidade ultra-leve para seus agentes de IA.
              </p>
            </header>

            {/* Aqui entrarão os tópicos que vamos construir um por um */}
            <div className="space-y-24 mb-32">
              {/* Tópico: Introdução */}
              <section id="introducao" className="scroll-mt-24">
                <h2 className="mb-6 text-3xl font-bold tracking-tight border-l-4 border-primary pl-4">
                  Introdução
                </h2>
                <div className="prose prose-invert max-w-none text-foreground leading-relaxed space-y-4">
                  <p>
                    A ISA (Information Sensitive Anonymizer) foi projetada para
                    resolver um grande gargalo na adoção de LLMs em empresas:{" "}
                    <strong>a segurança de dados.</strong>
                  </p>
                  <p>
                    Diferente de soluções baseadas em nuvem, a ISA roda
                    localmente em sua infraestrutura, garantindo que Informações
                    Pessoais Identificáveis (PII) nunca cruzem os limites da sua rede
                    sem estarem devidamente mascaradas.
                  </p>
                </div>
              </section>

              {/* Espaço reservado para os próximos tópicos */}

              {/* Tópico: Como os Tokens Funcionam */}
              <section id="tokens" className="scroll-mt-24">
                <h2 className="mb-6 text-3xl font-bold tracking-tight border-l-4 border-emerald-500 pl-4">
                  Como os Tokens Funcionam
                </h2>
                <div className="prose prose-invert max-w-none text-foreground space-y-6">
                  <p>
                    O processo da ISA não é uma simples deleção (redacting), mas
                    sim uma{" "}
                    <strong>tokenização preservadora de contexto</strong>. O
                    fluxo segue três etapas críticas:
                  </p>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-border bg-secondary/30 p-4">
                      <div className="mb-2 font-bold text-primary">
                        1. Identificação
                      </div>
                      <p className="text-sm">
                        O llm identifica entidades sensíveis (PII) no
                        texto bruto usando pesos do Gemma 3.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-secondary/30 p-4">
                      <div className="mb-2 font-bold text-primary">
                        2. Substituição
                      </div>
                      <p className="text-sm">
                        Cada entidade é trocada por um token único (ex:{" "}
                        <code>[CONTACT_01]</code>) mantendo a estrutura
                        gramatical.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-secondary/30 p-4">
                      <div className="mb-2 font-bold text-primary">
                        3. Mapeamento (Em desenvolvimento)
                      </div>
                      <p className="text-sm">
                        A ISA poderá gerar uma resposta JSON, com o texto anonimizado e um mapa que permite
                        reverter os tokens após a resposta da LLM.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mt-8">
                    O Ciclo de Reversão (Funcionalidade em desenvolvimento)
                  </h3>
                  <p>
                    Para reversão de um texto anonimizado, você deve passar ele, juntamente do mapa em JSON com as tags de anonimização e seus valores originais. A ISA devolverá o texto com seus valores e formatação original.
                  </p>

                  <div className="rounded-lg bg-slate-950 p-4 font-mono text-xs overflow-x-auto border border-border">
                    <span className="text-emerald-400">
                      // Mapa de tradução gerado localmente
                    </span>
                    {"\n"}
                    {"{"}
                    {"\n"}
                    {"  "}
                    <span className="text-primary">"[PESSOA_01]"</span>:{" "}
                    <span className="text-amber-400">"Carlos Oliveira"</span>,
                    {"\n"}
                    {"  "}
                    <span className="text-primary">"[DOC_ID_01]"</span>:{" "}
                    <span className="text-amber-400">"123.456.789-00"</span>
                    {"\n"}
                    {"}"}
                  </div>

                  <p className="bg-primary/5 border-l-2 border-primary p-4 italic">
                    <strong>Dica de Segurança:</strong> Este mapa nunca deve ser
                    enviado para a LLM na nuvem. Ele deve permanecer na memória
                    da sua aplicação local ou no seu backend.
                  </p>
                </div>
              </section>

              {/* Tópico: Dicionário de Entidades */}
              <section id="dicionarios_entidades" className="scroll-mt-24">
                <h2 className="mb-6 text-3xl font-bold tracking-tight border-l-4 border-amber-500 pl-4">
                  Dicionário de Entidades
                </h2>
                <div className="prose prose-invert max-w-none text-foreground space-y-8">
                  <p>
                    A ISA suporta uma ampla gama de entidades divididas em
                    categorias lógicas. Cada entidade detectada é substituída
                    pelo seu marcador correspondente (Label).
                  </p>

                  {/* Grid de Categorias */}
                  <div className="space-y-12">
                    {/* 1. Documentos e Identidade */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />{" "}
                        Documentos e Identidade
                      </h3>
                      <div className="overflow-hidden rounded-xl border border-border bg-secondary/10">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-secondary/30 text-foreground uppercase text-[10px] tracking-wider">
                            <tr>
                              <th className="px-4 py-3 font-medium">
                                Tipo de Dado
                              </th>
                              <th className="px-4 py-3 font-medium text-right">
                                Marcador (Label)
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/50">
                            {[
                              { label: "IPV4", marker: "[ID]" },
                              {
                                label: "RG (Registro Geral)",
                                marker: "[ID]",
                              },
                              {
                                label: "Passaporte",
                                marker: "[ID]",
                              },
                              { label: "CNH", marker: "[ID]" },
                              {
                                label: "Título de Eleitor",
                                marker: "[ID]",
                              },
                              { label: "CNPJ", marker: "[ID]" },
                              { label: "Matrícula", marker: "[ID]" },
                              { label: "Device Identifier", marker: "[ID]" },
                              { label: "Unique Identifier", marker: "[ID]" },
                              { label: "Registro Médico", marker: "[ID]" },
                            ].map((item) => (
                              <tr
                                key={item.marker}
                                className="hover:bg-primary/5 transition-colors"
                              >
                                <td className="px-4 py-3">{item.label}</td>
                                <td className="px-4 py-3 text-right font-mono text-blue-400 font-bold">
                                  {item.marker}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* 2. Financeiro */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />{" "}
                        Financeiro e Valores
                      </h3>
                      <div className="overflow-hidden rounded-xl border border-border bg-secondary/10">
                        <table className="w-full text-left text-sm">
                          <tbody className="divide-y divide-border/50">
                            {[
                              {
                                label: "Cartão de Crédito",
                                marker: "[FINANCE]",
                              },
                              {
                                label: "Agência / Conta Bancária",
                                marker: "[FINANCE]",
                              },
                              {
                                label: "CVV",
                                marker: "[FINANCE]",
                              },
                              {
                                label: "SWIFT bic",
                                marker: "[FINANCE]",
                              },
                              { label: "IBAN", marker: "[FIN_IBAN]" },
                            ].map((item) => (
                              <tr
                                key={item.marker}
                                className="hover:bg-primary/5 transition-colors"
                              >
                                <td className="px-4 py-3">{item.label}</td>
                                <td className="px-4 py-3 text-right font-mono text-emerald-400 font-bold">
                                  {item.marker}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* 3. Saúde (PHI) */}
                    {/* <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-rose-500" />{" "}
                        Saúde (PHI - HIPAA Compliance)
                      </h3>
                      <div className="overflow-hidden rounded-xl border border-border bg-secondary/10">
                        <table className="w-full text-left text-sm">
                          <tbody className="divide-y divide-border/50">
                            {[
                              {
                                label: "Diagnósticos e Condições",
                                marker: "[PHI_DIAGNOSTICO]",
                              },
                              {
                                label: "Resultados de Exames",
                                marker: "[PHI_RESULTADO]",
                              },
                              {
                                label: "Medicamentos",
                                marker: "[PHI_MEDICAMENTO]",
                              },
                              {
                                label: "Nomes de Médicos",
                                marker: "[PHI_NOME_MEDICO]",
                              },
                              {
                                label: "Plano de Saúde ID",
                                marker: "[PHI_PLANO_ID]",
                              },
                            ].map((item) => (
                              <tr
                                key={item.marker}
                                className="hover:bg-primary/5 transition-colors"
                              >
                                <td className="px-4 py-3">{item.label}</td>
                                <td className="px-4 py-3 text-right font-mono text-rose-400 font-bold">
                                  {item.marker}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div> */}



                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-rose-500" />{" "}
                        Dados pessoais
                      </h3>
                      <div className="overflow-hidden rounded-xl border border-border bg-secondary/10">
                        <table className="w-full text-left text-sm">
                          <tbody className="divide-y divide-border/50">
                            {[
                              {
                                label: "Nome",
                                marker: "[PERSON]",
                              },
                              {
                                label: "Sobrenome",
                                marker: "[PERSON]",
                              },
                              {
                                label: "Nome de empresa",
                                marker: "[PERSON]",
                              },
                              {
                                label: "Nomes de usuário",
                                marker: "[PERSON]",
                              },
                            ].map((item) => (
                              <tr
                                key={item.marker}
                                className="hover:bg-primary/5 transition-colors"
                              >
                                <td className="px-4 py-3">{item.label}</td>
                                <td className="px-4 py-3 text-right font-mono text-rose-400 font-bold">
                                  {item.marker}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>



                    {/* 3. Contato */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />{" "}
                        Contato
                      </h3>
                      <div className="overflow-hidden rounded-xl border border-border bg-secondary/10">
                        <table className="w-full text-left text-sm">
                          <tbody className="divide-y divide-border/50">
                            {[
                              {
                                label: "Telefone Fixo",
                                marker: "[CONTACT]",
                              },
                              {
                                label: "Celular",
                                marker: "[CONTACT]",
                              },
                              {
                                label: "E-mail",
                                marker: "[CONTACT]",
                              },
                              {
                                label: "@ Rede social",
                                marker: "[CONTACT]",
                              },
                            ].map((item) => (
                              <tr
                                key={item.marker}
                                className="hover:bg-primary/5 transition-colors"
                              >
                                <td className="px-4 py-3">{item.label}</td>
                                <td className="px-4 py-3 text-right font-mono text-cyan-400 font-bold">
                                  {item.marker}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>


                    {/* 3. Datas */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-orange-500" />{" "}
                        Data / hora
                      </h3>
                      <div className="overflow-hidden rounded-xl border border-border bg-secondary/10">
                        <table className="w-full text-left text-sm">
                          <tbody className="divide-y divide-border/50">
                            {[
                              {
                                label: "Data",
                                marker: "[TIME]",
                              },
                              {
                                label: "Hora",
                                marker: "[TIME]",
                              },
                              {
                                label: "Timestamp",
                                marker: "[TIME]",
                              },
                            ].map((item) => (
                              <tr
                                key={item.marker}
                                className="hover:bg-primary/5 transition-colors"
                              >
                                <td className="px-4 py-3">{item.label}</td>
                                <td className="px-4 py-3 text-right font-mono text-orange-400 font-bold">
                                  {item.marker}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* 4. Localização */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />{" "}
                        Localização
                      </h3>
                      <div className="overflow-hidden rounded-xl border border-border bg-secondary/10">
                        <table className="w-full text-left text-sm">
                          <tbody className="divide-y divide-border/50">
                            {[
                              {
                                label: "Endereço",
                                marker: "[LOCATION]",
                              },
                              {
                                label: "Cidade/Estado",
                                marker: "[LOCATION]",
                              },
                              {
                                label: "Coordenadas geográficas",
                                marker: "[LOCATION]",
                              },
                              {
                                label: "CEP / ZIP code",
                                marker: "[LOCATION]",
                              },
                            ].map((item) => (
                              <tr
                                key={item.marker}
                                className="hover:bg-primary/5 transition-colors"
                              >
                                <td className="px-4 py-3">{item.label}</td>
                                <td className="px-4 py-3 text-right font-mono text-purple-400 font-bold">
                                  {item.marker}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>



{/* Secret */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />{" "}
                        Chaves, segredos e tokens.
                      </h3>
                      <div className="overflow-hidden rounded-xl border border-border bg-secondary/10">
                        <table className="w-full text-left text-sm">
                          <tbody className="divide-y divide-border/50">
                            {[
                              {
                                label: "API key",
                                marker: "[SECRET]",
                              },
                              {
                                label: "Access Token",
                                marker: "[SECRET]",
                              },
                              {
                                label: "Pin",
                                marker: "[SECRET]",
                              },
                              {
                                label: "Senhas",
                                marker: "[SECRET]",
                              },
                            ].map((item) => (
                              <tr
                                key={item.marker}
                                className="hover:bg-primary/5 transition-colors"
                              >
                                <td className="px-4 py-3">{item.label}</td>
                                <td className="px-4 py-3 text-right font-mono text-yellow-400 font-bold">
                                  {item.marker}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>




                  </div>

                  <div className="mt-8 rounded-lg bg-secondary/20 p-4 border border-border/50 text-sm italic">
                    Nota: A lista acima é um resumo das entidades mais comuns. Mais entidades serão adicionadas a medida que o treinamento for aprimorado.
                  </div>
                </div>
              </section>

              {/* Tópico: System Prompts e Modos */}
              <section id="system_prompts" className="scroll-mt-24">
                <h2 className="mb-6 text-3xl font-bold tracking-tight border-l-4 border-primary pl-4">
                  System Prompts e Modos de Operação
                </h2>

                <div className="prose prose-invert max-w-none text-foreground space-y-8">
                  <p>
                    A ISA pode ser configurada via <code>system_prompt</code>{" "}
                    para operar em diferentes níveis de profundidade. Isso
                    permite que ela se comporte como um simples filtro ou como
                    um orquestrador de privacidade completo.
                  </p>

                  {/* Modo 1: Anonimização Pura */}
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="size-5 text-primary" /> Modo 1:
                      Anonimização Pura
                    </h3>
                    <p className="text-sm mb-4">
                      Ideal para logs ou streams onde você não precisa reverter
                      os dados posteriormente.
                    </p>
                    <div className="space-y-3">
                      <div className="text-xs font-mono uppercase text-foreground">
                        System Prompt sugerido:
                      </div>
                      <div className="bg-slate-900 p-3 rounded border border-white/5 text-sm font-mono text-foreground">
                        "Você é um agente de privacidade. Substitua todos os PII
                        pelos labels correspondentes. Retorne apenas o texto
                        limpo."
                      </div>
                    </div>
                  </div>

                  {/* Modo 2: Anonimização + Mapeamento (JSON) */}
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-[0_0_20px_rgba(var(--primary),0.05)]">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Zap className="size-5 text-primary" /> Modo 2: Privacy
                      Orchestrator (Em desenvolvimento)
                    </h3>
                    <p className="text-sm mb-4">
                      A ISA retorna o texto limpo E um objeto JSON com o
                      "De-Para" dos dados originais.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-foreground">
                          Input:
                        </div>
                        <div className="bg-slate-950 p-3 rounded text-xs font-mono border border-border">
                          "O CPF do João é 123.456.789-00"
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-foreground">
                          Output:
                        </div>
                        <div className="bg-slate-950 p-3 rounded text-xs font-mono border border-emerald-500/30">
                          {`{
  "text": "O CPF de [PESSOA_01] é [DOC_CPF]",
  "map": {
    "[PESSOA_01]": "João",
    "[DOC_CPF]": "123.456.789-00"
  }
}`}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dicas de Ajuste Fino */}
                  {/* <div className="mt-12">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Ajuste de Sensibilidade
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="p-4 rounded-xl border border-border bg-secondary/10">
                        <h4 className="font-bold mb-2 text-primary text-sm uppercase">
                          Detecção Agressiva
                        </h4>
                        <p className="text-xs text-foreground italic mb-3">
                          "Seja extremamente rigoroso. Na dúvida se algo é um
                          nome ou endereço, anonimize."
                        </p>
                        <ul className="text-[11px] space-y-1 list-disc pl-4">
                          <li>Garante segurança máxima</li>
                          <li>Pode gerar mais falsos positivos</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-xl border border-border bg-secondary/10">
                        <h4 className="font-bold mb-2 text-primary text-sm uppercase">
                          Foco em Documentos
                        </h4>
                        <p className="text-xs text-foreground italic mb-3">
                          "Ignore nomes próprios em contextos casuais, foque
                          apenas em documentos e chaves técnicas."
                        </p>
                        <ul className="text-[11px] space-y-1 list-disc pl-4">
                          <li>Preserva melhor a fluidez do texto</li>
                          <li>Risco ligeiramente maior em logs de chat</li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
              </section>

              {/* Tópico: Casos de Borda e Verificação */}
              {/* <section id="edge-cases" className="scroll-mt-24">
                <h2 className="mb-6 text-3xl font-bold tracking-tight border-l-4 border-indigo-500 pl-4">
                  Casos de Borda e Limitações
                </h2>

                <div className="prose prose-invert max-w-none text-foreground space-y-8">
                  <p>
                    Embora a ISA seja otimizada para o contexto brasileiro, sua
                    base neural permite uma compreensão ampla de padrões
                    internacionais e formatos ambíguos.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2 font-sans">
                    
                    <div className="rounded-xl border border-border bg-secondary/5 p-5">
                      <h3 className="text-foreground font-bold mb-2 flex items-center gap-2">
                        🌍 Nomes e Contextos Globais
                      </h3>
                      <p className="text-sm">
                        A ISA identifica nomes como{" "}
                        <em>"Yukihiro Matsumoto"</em> ou{" "}
                        <em>"Svetlana Kuznetsova"</em> mesmo sem padrões
                        explícitos, pois analisa a estrutura sintática da frase
                        e não apenas uma lista de nomes comuns.
                      </p>
                    </div>

                    
                    <div className="rounded-xl border border-border bg-secondary/5 p-5">
                      <h3 className="text-foreground font-bold mb-2 flex items-center gap-2">
                        📑 Documentos Externos
                      </h3>
                      <p className="text-sm">
                        Formatos como SSN (EUA) ou NIE (Espanha) podem ser
                        detectados genericamente como{" "}
                        <code>[DOC_PASSAPORTE]</code> ou{" "}
                        <code>[TECH_DEVICE_ID]</code> dependendo do formato
                        numérico.
                      </p>
                    </div>
                  </div> 
                 
                </div>
              </section> */}

              {/* Tópico: Padrões de Integração Arquitetural */}
              <section id="integracao_arquitetural" className="scroll-mt-24">
                <h2 className="mb-6 text-3xl font-bold tracking-tight border-l-4 border-cyan-500 pl-4">
                  Padrões de Integração Arquitetural
                </h2>

                <div className="prose prose-invert max-w-none text-foreground space-y-12">
                  <p>
                    A versatilidade da ISA permite que ela seja implementada em
                    diferentes camadas da sua stack tecnológica. Abaixo estão os
                    dois padrões mais comuns utilizados em produção.
                  </p>

                  {/* Pattern 1: Privacy Proxy */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500 font-bold border border-cyan-500/20">
                        01
                      </div>
                      <h3 className="text-xl font-bold text-foreground m-0">
                        Privacy Proxy
                      </h3>
                    </div>
                    <p>
                      Neste cenário, a ISA atua como um middleware transparente
                      entre a sua aplicação e a API da LLM (OpenAI, Anthropic,
                      etc).
                    </p>
                    <div className="bg-secondary/20 border border-border rounded-xl p-6 font-sans">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
                        <div className="px-3 py-2 bg-background border border-border rounded">
                          App Client
                        </div>
                        <div className="text-primary">
                          ──▶ [DADOS SENSÍVEIS] ──▶
                        </div>
                        <div className="px-4 py-3 bg-cyan-500/20 border border-cyan-500 rounded font-bold text-cyan-400 italic">
                          ISA (LOCAL)
                        </div>
                        <div className="text-emerald-500">
                          ──▶ [DADOS LIMPOS] ──▶
                        </div>
                        <div className="px-3 py-2 bg-background border border-border rounded">
                          Cloud LLM
                        </div>
                      </div>
                    </div>
                    <p className="text-sm italic">
                      <strong>Ideal para:</strong> Aplicações web legadas que
                      precisam de segurança imediata sem alterar a lógica de
                      negócio.
                    </p>
                  </div>

                  {/* Pattern 2: Local Agent / CLI */}
                  {/* <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 font-bold border border-purple-500/20">
                        02
                      </div>
                      <h3 className="text-xl font-bold text-foreground m-0">
                        Pattern: Local Developer Agent
                      </h3>
                    </div>
                    <p>
                      A ISA roda como um serviço via Ollama diretamente na
                      máquina do desenvolvedor. O código ou logs são limpos
                      antes mesmo de serem commitados ou enviados para
                      ferramentas de debug.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>
                        Prevenção de vazamento em ferramentas de observability
                        (Sentry, Datadog).
                      </li>
                      <li>
                        Sanitização de comandos no terminal via{" "}
                        <code>isa run "comando"</code>.
                      </li>
                    </ul>
                    <p className="text-sm italic">
                      <strong>Ideal para:</strong> Equipes de DevOps e
                      Engenharia lidando com segredos, chaves de API e logs de
                      produção.
                    </p>
                  </div> */}

                  {/* Pattern 3: Batch Cleaning (Data Lake) */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">
                        02
                      </div>
                      <h3 className="text-xl font-bold text-foreground m-0">
                        Dataset Batch Cleaning
                      </h3>
                    </div>
                    <p>
                      Utilizado para processar grandes volumes de dados offline.
                      Essencial antes de realizar o <strong>Fine-tuning</strong>{" "}
                      de modelos proprietários ou alimentar bancos de dados
                      vetoriais (RAG).
                    </p>
                    <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-4 border-dashed">
                      <p className="text-sm text-emerald-200/70 m-0 leading-relaxed">
                        <strong>Implicação Ética e Técnica:</strong> Ao
                        anonimizar datasets de treino, você garante que o modelo
                        final não "decore" nomes de clientes reais, reduzindo
                        riscos de ataques de extração de dados.
                      </p>
                    </div>
                    <p className="text-sm italic">
                      <strong>Ideal para:</strong> Engenheiros de Dados e
                      Pesquisadores de IA.
                    </p>
                  </div>
                </div>
              </section>

              {/* Tópico: Instalação */}
              <section id="instalacao" className="scroll-mt-24">
                <h2 className="mb-6 text-3xl font-bold tracking-tight border-l-4 border-emerald-500 pl-4">
                  Instalação e Setup
                </h2>

                <div className="prose prose-invert max-w-none text-foreground space-y-6">
                  <p>
                    Por ser distribuída em formato GGUF, ISA pode rodar localmente com consumo mínimo
                    de recursos, seja usando Ollama, LM Studio ou VLLM. Verifique as instruções de como instalar um modelo customizado na sua plataforma de escolha.
                  </p>

                  {/* <Tabs defaultValue="ollama" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
                      <TabsTrigger value="ollama">Ollama</TabsTrigger>
                      <TabsTrigger value="lmstudio">LM Studio</TabsTrigger>
                      <TabsTrigger value="vllm">vLLM (Server)</TabsTrigger>
                    </TabsList>

                    
                    <TabsContent value="ollama" className="mt-4 space-y-4">
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                          Ollama{" "}
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                            Recomendado
                          </span>
                        </h3>
                        <p className="text-sm mb-4">
                          A forma mais rápida de rodar a ISA no Windows, macOS
                          ou Linux.
                        </p>
                        <div className="bg-slate-950 p-4 rounded-lg border border-border font-mono text-sm">
                          <span className="text-foreground">
                            # Baixar e rodar o modelo
                          </span>
                          {"\n"}
                          <span className="text-primary">ollama</span> run
                          isa-guardrail{"\n\n"}
                          <span className="text-foreground">
                            # Testar via API (CURL)
                          </span>
                          {"\n"}
                          curl http://localhost:11434/api/generate -d '{
                            "{"
                          }{" "}
                          {"\n"}
                          {"  "}"model": "isa-guardrail",{"\n"}
                          {"  "}"prompt": "Meu CPF é 123.456.789-00"{"\n"}
                          {"}"}'
                        </div>
                      </div>
                    </TabsContent>

                    
                    <TabsContent value="lmstudio" className="mt-4 space-y-4">
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 text-purple-400">
                          LM Studio
                        </h3>
                        <p className="text-sm mb-4">
                          Para quem prefere uma interface visual (GUI) e quer
                          carregar o modelo via GGUF.
                        </p>
                        <ol className="text-sm space-y-2 list-decimal pl-5">
                          <li>Abra o LM Studio e vá na aba de busca.</li>
                          <li>
                            Procure por{" "}
                            <code className="text-primary">isa-guardrail</code>.
                          </li>
                          <li>Selecione a versão GGUF (Q4_K_M ou Q8_0).</li>
                          <li>
                            Clique em <strong>Download</strong> e depois em{" "}
                            <strong>AI Chat</strong> para testar.
                          </li>
                        </ol>
                      </div>
                    </TabsContent>

                    
                    <TabsContent value="vllm" className="mt-4 space-y-4">
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 text-blue-400">
                          vLLM (Produção)
                        </h3>
                        <p className="text-sm mb-4">
                          Ideal para servir a ISA como um endpoint de alta
                          performance em clusters ou nuvem.
                        </p>
                        <div className="bg-slate-950 p-4 rounded-lg border border-border font-mono text-sm overflow-x-auto">
                          <span className="text-foreground">
                            # Rodar via Docker
                          </span>
                          {"\n"}
                          python -m vllm.entrypoints.openai.api_server \{"\n"}
                          {"  "}--model hf-repo/isa-guardrail \{"\n"}
                          {"  "}--dtype bfloat16 \{"\n"}
                          {"  "}--max-model-len 2048
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs> */}

                  {/* Requisitos de Hardware */}
                  <div className="mt-12 rounded-2xl border border-border bg-secondary/10 p-8">
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Cpu className="size-5 text-primary" /> Requisitos Mínimos
                      de Hardware
                    </h3>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="space-y-1">
                        <div className="text-xs text-foreground uppercase font-bold">
                          RAM / VRAM
                        </div>
                        <div className="text-lg font-semibold">~2GB</div>
                        <p className="text-[10px]">
                          Roda em qualquer PC moderno
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-foreground uppercase font-bold">
                          Armazenamento
                        </div>
                        <div className="text-lg font-semibold">2GB</div>
                        <p className="text-[10px]">
                          Espaço em disco para o modelo
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-foreground uppercase font-bold">
                          Arquitetura
                        </div>
                        <div className="text-lg font-semibold">ARM64 / x86</div>
                        <p className="text-[10px]">
                          Suporte a AMD, Apple M1/M2 e Intel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tópico: FAQ Técnica */}
              <section id="faq" className="scroll-mt-24">
                <h2 className="mb-6 text-3xl font-bold tracking-tight border-l-4 border-slate-500 pl-4">
                  FAQ Técnica & Limitações
                </h2>

                <div className="prose prose-invert max-w-none text-foreground space-y-6">
                  <div className="grid gap-6">
                    {/* Pergunta 1 */}
                    <div className="rounded-xl border border-border bg-secondary/10 p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        Qual o tamanho máximo de texto (Context Window)?
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Assim como o Gemma-3-270M, ISA suporta nativamente uma janela de contexto de{" "}
                        <strong>32.000 tokens</strong> (aproximadamente 24.000
                        palavras em Português). No estado atual, ainda não foram feitos testes com textos muito longos.
                      </p>
                      <div className="mt-3 p-3 bg-primary/5 rounded border border-primary/20 text-xs italic">
                        <strong>Dica para Textos Longos:</strong> Se você
                        precisar processar documentos jurídicos ou livros
                        inteiros, utilize uma estratégia de{" "}
                        <em>Sliding Window</em> (processamento por blocos de
                        tokens com sobreposição de 100 ou 200 tokens para manter
                        o contexto das frases).
                      </div>
                    </div>

                    {/* Pergunta 2 */}
                    <div className="rounded-xl border border-border bg-secondary/10 p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        O que fazer em caso de Falsos Positivos?
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Se a ISA anonimizar algo que não deveria (ex: um nome de
                        produto que ela confunde com um nome de pessoa), você
                        tem duas formas de mitigar:
                      </p>
                      <ul className="text-sm space-y-2 mt-2 list-disc pl-5">
                        <li>
                          <strong>Temperatura:</strong> Reduza a{" "}
                          <code>temperature</code> da inferência para{" "}
                          <code>0.1</code> ou <code>0.0</code> para torná-la
                          mais determinística.
                        </li>
                        <li>
                          <strong>Lista de Exceções:</strong> Adicione no System
                          Prompt:{" "}
                          <em>
                            "Ignore os termos 'X', 'Y' e 'Z', eles não são PII."
                          </em>
                        </li>
                      </ul>
                    </div>

                    {/* Pergunta 3 */}
                    <div className="rounded-xl border border-border bg-secondary/10 p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2 text-amber-400">
                        A ISA pode ser usada offline?
                      </h3>
                      <p className="text-sm leading-relaxed font-bold text-amber-100/70">
                        Sim! 100% offline.
                      </p>
                      <p className="text-sm">
                        Diferente de APIs como a da OpenAI ou Google, a ISA não
                        faz chamadas externas após o download do modelo. Isso a
                        torna ideal para ambientes <em>air-gapped</em>,
                        governamentais ou com restrições severas de rede.
                      </p>
                    </div>
                  </div>





                   <div className="relative overflow-hidden rounded-2xl border border-amber-500/50 bg-amber-500/5 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                          <path d="M12 9v4" />
                          <path d="M12 17h.01" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-amber-500 text-lg">
                          Aviso de Versão Beta
                        </h3>
                        <p className="text-sm leading-relaxed text-amber-200/70">
                          A ISA está atualmente em <strong>v0.5.2-alfa</strong>.
                          Como qualquer modelo probabilístico, existe uma
                          margem para falsos negativos (dados sensíveis
                          não detectados) ou falsos positivos.
                        </p>
                        <ul className="text-xs space-y-1 list-disc pl-4 text-amber-200/60">
                          <li>
                            Sempre revise fluxos que envolvam dados críticos de
                            saúde ou financeiros.
                          </li>
                          <li>
                            Em ambientes de produção, recomenda-se uma camada de
                            validação humana em casos de baixa confiança
                            (confidence score).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Nota Final */}
                  <div className="mt-12 text-center border-t border-border/50 pt-12">
                    <p className="text-sm italic">
                      Ainda tem dúvidas técnicas? Entre em contato via GitHub
                      Issues.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
