import { pipelineSteps } from "@/data/pipelineSteps";
import { Card, CardContent } from "@/components/ui/Card";
import Section from "./Section";

export default function HowItWorksSection() {
  return (
    <Section id="how" eyebrow="How it works" title="From model to verdict in four steps">
      <div className="grid gap-4 md:grid-cols-4">
        {pipelineSteps.map((step, index) => (
          <Card
            key={step.title}
            className="relative border-border/60"
            style={{ background: "var(--gradient-card)" }}
          >
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
