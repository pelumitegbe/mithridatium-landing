import { Activity, Brain, Crosshair, Layers } from "lucide-react";

export const defenses = [
  {
    icon: Brain,
    name: "FreeEagle",
    tag: "Data-free",
    desc: "Analyzes internal model bias without requiring any input data - fast triage for unknown models.",
    howItWorks:
      "FreeEagle analyzes internal model layers and looks for abnormal class bias without needing external input data.",
    requirements: "Requires white-box access to model architecture and weights.",
    bestFor: "Fast inspection of downloaded models when no dataset is available.",
    limitations: "May depend on architecture support and does not work with API-only model access.",
  },
  {
    icon: Activity,
    name: "STRIP",
    tag: "Stability",
    desc: "Detects abnormal prediction stability when inputs are perturbed and superimposed.",
    howItWorks:
      "STRIP mixes an input with other images and checks whether the model's prediction remains unusually stable.",
    requirements: "Requires input data or sample images from the expected dataset.",
    bestFor:
      "Detecting trigger behavior where a backdoored model stays locked onto a target class.",
    limitations: "Can be sensitive to dataset mismatch and threshold calibration.",
  },
  {
    icon: Layers,
    name: "MMBD",
    tag: "Class dominance",
    desc: "Identifies suspicious dominance patterns across output classes that hint at planted triggers.",
    howItWorks:
      "MMBD analyzes class-level behavior and looks for abnormal dominance toward specific output classes.",
    requirements: "Requires model access and compatible output logits.",
    bestFor: "Finding suspicious class dominance patterns.",
    limitations: "May need calibration across datasets and model types.",
  },
  {
    icon: Crosshair,
    name: "AEVA",
    tag: "Trigger sim",
    desc: "Simulates trigger-like behavior through targeted input perturbations to surface backdoors.",
    howItWorks:
      "AEVA perturbs input images and observes how predictions change to identify possible trigger-like behavior.",
    requirements: "Requires query access to the model and representative input data.",
    bestFor: "Black-box style analysis where only model predictions are available.",
    limitations: "Can be computationally expensive because it requires many model queries.",
  },
];

export type Defense = (typeof defenses)[number];
