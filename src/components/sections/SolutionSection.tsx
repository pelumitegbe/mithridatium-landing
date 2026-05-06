import { Cpu, FileBarChart, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Section from "./Section";

const solutionFeatures = [
  {
    icon: Cpu,
    title: "Flexible defense selection",
    desc: "Choose from multiple state-of-the-art defenses and run them individually based on your analysis needs.",
  },
  {
    icon: Layers,
    title: "Local & Hugging Face",
    desc: "Point Mithridatium at a checkpoint on disk or any model on the HF hub.",
  },
  {
    icon: FileBarChart,
    title: "Clear verdicts",
    desc: "Human-readable reports with structured JSON output for your CI pipeline.",
  },
];

export default function SolutionSection() {
  return (
    <Section
      id="solution"
      eyebrow="Our approach"
      title="One pipeline, multiple defense options"
      subtitle="Mithridatium supports multiple backdoor detection methods and allows users to run them individually on a selected model. Each defense analyzes the model from a different angle and produces a verdict, key metrics, and a structured report."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {solutionFeatures.map((feature) => (
          <Card
            key={feature.title}
            className="border-border/60"
            style={{ background: "var(--gradient-card)" }}
          >
            <CardContent className="p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
