import type React from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto flex min-h-screen max-w-7xl snap-start items-center px-6 py-24"
    >
      <div className="w-full">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </div>
          )}
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
