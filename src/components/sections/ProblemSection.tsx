import { AlertTriangle, Crosshair, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Section from "./Section";

const problems = [
  {
    icon: AlertTriangle,
    title: "Pretrained does not mean trustworthy",
    desc: "Teams ship third-party weights without auditing what's hidden inside them.",
  },
  {
    icon: Crosshair,
    title: "Triggers are silent",
    desc: "Backdoors stay dormant until a specific input flips the model's prediction.",
  },
  {
    icon: Search,
    title: "Verification is hard",
    desc: "Existing tooling is fragmented, research-only, and rarely production friendly.",
  },
];

export default function ProblemSection() {
  return (
    <Section
      id="problem"
      eyebrow="The problem"
      title="The hidden risk in pretrained models"
      subtitle="Backdoored models look perfectly normal on benchmarks - until an attacker triggers them."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {problems.map((problem) => (
          <Card
            key={problem.title}
            className="border-border/60 transition-colors hover:border-primary/40"
            style={{ background: "var(--gradient-card)" }}
          >
            <CardContent className="p-6">
              <problem.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold">{problem.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{problem.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
