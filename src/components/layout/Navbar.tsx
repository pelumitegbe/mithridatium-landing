import { useEffect, useState } from "react";
import { ArrowRight, Shield } from "lucide-react";
import { externalLinks } from "@/data/links";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("page-scroll");

    function handleScroll() {
      setIsScrolled((scrollContainer?.scrollTop ?? window.scrollY) > 16);
    }

    handleScroll();
    scrollContainer?.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-border/40 bg-background/70 backdrop-blur-xl"
          : "border-border/20 bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground">
            <Shield className="h-4 w-4" />
          </span>
          <span>Mithridatium</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#problem" className="hover:text-foreground transition-colors">
            Problem
          </a>
          <a href="#how" className="hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#defenses" className="hover:text-foreground transition-colors">
            Defenses
          </a>
          <a href="#results" className="hover:text-foreground transition-colors">
            Results
          </a>
        </nav>
        <Button variant="outlineGlow" size="sm" asChild>
          <a href={externalLinks.demo} target="_blank" rel="noreferrer">
            Try the demo <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}
