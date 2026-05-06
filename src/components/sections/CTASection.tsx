import { ArrowRight } from "lucide-react";
import { externalLinks } from "@/data/links";
import { Button } from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="mx-auto flex min-h-screen max-w-7xl snap-start items-center px-6 py-24"
    >
      <div
        className="relative w-full overflow-hidden rounded-3xl border border-primary/30 px-8 py-16 text-center"
        style={{ background: "var(--gradient-card)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: "var(--gradient-primary)",
            maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
          }}
        />
        <div className="relative">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Start verifying your models
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Run Mithridatium on your next checkpoint and see exactly what's hiding inside.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href={externalLinks.demo} target="_blank" rel="noreferrer">
                Try the demo <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outlineGlow" size="xl" asChild>
              <a href={externalLinks.github} target="_blank" rel="noreferrer">
                View documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
