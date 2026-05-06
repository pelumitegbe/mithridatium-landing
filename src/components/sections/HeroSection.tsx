import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-shield.jpg";
import { externalLinks } from "@/data/links";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen snap-start overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 md:py-28 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            AI Model Integrity Verification
          </div>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Verify the integrity of
            <br />
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              AI models
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Mithridatium helps you detect hidden backdoors in machine learning models - with unified
            suite of state-of-the-art defenses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href={externalLinks.demo} target="_blank" rel="noreferrer">
                View demo <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outlineGlow" size="xl" asChild>
              <a href="#defenses">Explore defenses</a>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-sm">
            {[
              { k: "4", v: "Detection methods" },
              { k: "HF", v: "Hugging Face ready" },
              { k: "JSON", v: "Structured reports" },
            ].map((stat) => (
              <div key={stat.v}>
                <div className="text-2xl font-semibold text-foreground">{stat.k}</div>
                <div className="text-muted-foreground">{stat.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-3xl opacity-60 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="overflow-hidden rounded-2xl border border-border/60 shadow-[var(--shadow-elegant)]">
            <img
              src={heroImg}
              alt="Neural network protected by a glowing security shield"
              width={1536}
              height={1024}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
