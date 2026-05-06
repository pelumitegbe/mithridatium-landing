import { Card, CardContent } from "@/components/ui/Card";
import Section from "./Section";

const useCases = [
  {
    title: "Pre-deployment validation",
    desc: "Gate model releases on automated integrity checks before they hit production.",
  },
  {
    title: "Research & experimentation",
    desc: "Benchmark new defenses or attacks against a reproducible pipeline.",
  },
  {
    title: "Third-party model audits",
    desc: "Vet open-source weights from the hub before integrating them into your stack.",
  },
];

export default function UseCasesSection() {
  return (
    <Section eyebrow="Use cases" title="Built for teams that ship ML responsibly">
      <div className="grid gap-6 md:grid-cols-3">
        {useCases.map((useCase) => (
          <Card
            key={useCase.title}
            className="border-border/60"
            style={{ background: "var(--gradient-card)" }}
          >
            <CardContent className="p-6">
              <h3 className="font-semibold">{useCase.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{useCase.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
