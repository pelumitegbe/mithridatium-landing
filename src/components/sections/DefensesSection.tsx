import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { defenses } from "@/data/defenses";
import type { Defense } from "@/data/defenses";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";
import Section from "./Section";

const detailSections = [
  { title: "How it works", key: "howItWorks" },
  { title: "What it needs", key: "requirements" },
  { title: "Best used for", key: "bestFor" },
  { title: "Limitations", key: "limitations" },
] as const;

export default function DefensesSection() {
  const [selectedDefense, setSelectedDefense] = useState<Defense | null>(null);

  return (
    <>
      <Section
        id="defenses"
        eyebrow="Detection methods"
        title="Four focused defenses"
        subtitle="Each method probes the model from a different angle. Select a card to inspect one defense at a time."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {defenses.map((defense) => (
            <Card
              key={defense.name}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${defense.name}`}
              onClick={() => setSelectedDefense(defense)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedDefense(defense);
                }
              }}
              className="group relative cursor-pointer overflow-hidden border-border/60 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ background: "var(--gradient-card)" }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40"
                style={{ background: "var(--gradient-primary)" }}
              />
              <CardContent className="relative p-7">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                    <defense.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{defense.name}</h3>
                    <Badge variant="outline" className="mt-1 border-accent/40 text-accent">
                      {defense.tag}
                    </Badge>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{defense.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                  View details
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Modal
        title={selectedDefense?.name ?? "Defense details"}
        isOpen={selectedDefense !== null}
        onClose={() => setSelectedDefense(null)}
      >
        {selectedDefense && (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                <selectedDefense.icon className="h-6 w-6" />
              </div>
              <div>
                <Badge variant="outline" className="border-accent/40 text-accent">
                  {selectedDefense.tag}
                </Badge>
                <p className="mt-2 text-sm text-muted-foreground">{selectedDefense.desc}</p>
              </div>
            </div>

            <div className="grid gap-4">
              {detailSections.map((section) => (
                <div
                  key={section.key}
                  className="rounded-xl border border-border/50 bg-background/30 p-4"
                >
                  <h3 className="font-semibold">{section.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {selectedDefense[section.key]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
