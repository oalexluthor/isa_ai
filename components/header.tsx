"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Shield, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">ISA (Inteligent Sensitive Anonymizer)</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#docs"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Documentação
          </Link>
          <Link
            href="#benchmarks"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Benchmarks
          </Link>
          <Button
            asChild
            variant="outline"
            className="gap-2 border-primary/30 text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] bg-transparent"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <Star className="h-3.5 w-3.5" />
              Star on GitHub
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link
              href="#docs"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentação
            </Link>
            <Link
              href="#benchmarks"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benchmarks
            </Link>
            <Button
              asChild
              variant="outline"
              className="w-full gap-2 border-primary/30 text-foreground transition-all hover:border-primary hover:bg-primary/10 bg-transparent"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <Star className="h-3.5 w-3.5" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
