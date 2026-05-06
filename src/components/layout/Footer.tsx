import { Github, Shield } from "lucide-react";
import { externalLinks } from "@/data/links";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground">
            <Shield className="h-4 w-4" />
          </span>
          <div>
            <div className="font-semibold">Mithridatium</div>
            <div className="text-xs text-muted-foreground">
              AI model integrity verification - research project.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={externalLinks.blogPost}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog post
          </a>
          <a
            href={externalLinks.developer}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Developed by Pelumi
          </a>
        </div>
      </div>
    </footer>
  );
}
