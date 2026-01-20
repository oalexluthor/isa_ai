import { Shield, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & License */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <span className="font-semibold text-foreground">ISA</span>
            </div>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">MIT License</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {'© '}{new Date().getFullYear()}{' ISA - Information Sensitive Anonymizer. Open source under MIT License.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
