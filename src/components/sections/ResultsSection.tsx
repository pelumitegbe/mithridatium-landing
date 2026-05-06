import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Section from "./Section";

const cleanReport = `{
  "mithridatium_version": "0.1.1",
  "timestamp_utc": "2026-04-29T14:12:08Z",
  "model_path": "models/clean/resnet18_cifar10.pt",
  "defense": "freeeagle",
  "dataset": "cifar10",
  "results": {
    "verdict": "likely clean",
    "anomaly_metric": 0.679453,
    "thresholds": {
      "anomaly_metric_threshold": 2.0
    },
    "parameters": {
      "num_classes": 10,
      "inspect_layer_position": 2,
      "optimize_steps": 500
    }
  }
}`;

const backdooredReport = `{
  "mithridatium_version": "0.1.1",
  "timestamp_utc": "2026-04-29T14:18:31Z",
  "model_path": "models/poisoned/resnet18_poison.pt",
  "defense": "freeeagle",
  "dataset": "cifar10",
  "results": {
    "verdict": "likely backdoored",
    "anomaly_metric": 5.883796,
    "thresholds": {
      "anomaly_metric_threshold": 2.0
    },
    "parameters": {
      "num_classes": 10,
      "inspect_layer_position": 2,
      "optimize_steps": 500
    }
  }
}`;

export default function ResultsSection() {
  return (
    <Section
      id="results"
      eyebrow="Actionable results"
      title="Clear reports you can act on"
      subtitle="Mithridatium produces structured JSON reports with a verdict, key metrics, thresholds, and defense parameters."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-accent/40" style={{ background: "var(--gradient-card)" }}>
          <CardContent className="p-7">
            <div className="flex items-center gap-2 text-accent">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">Likely Clean</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              The anomaly metric stays below the configured threshold, so the model is not flagged.
            </p>
            <pre className="mt-5 max-h-96 overflow-x-auto overflow-y-auto rounded-lg border border-border/60 bg-background/60 p-4 text-xs">
              {cleanReport}
            </pre>
          </CardContent>
        </Card>

        <Card className="border-destructive/40" style={{ background: "var(--gradient-card)" }}>
          <CardContent className="p-7">
            <div className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">Likely Backdoored</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              The anomaly metric crosses the configured threshold, so the model is flagged as
              suspicious.
            </p>
            <pre className="mt-5 max-h-96 overflow-x-auto overflow-y-auto rounded-lg border border-border/60 bg-background/60 p-4 text-xs">
              {backdooredReport}
            </pre>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
