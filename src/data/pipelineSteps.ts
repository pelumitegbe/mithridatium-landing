import { Upload, SlidersHorizontal, ScanLine, FileCheck } from "lucide-react";

export const pipelineSteps = [
  {
    icon: Upload,
    title: "Load model",
    desc: "Upload a local checkpoint or select a model from Hugging Face.",
  },
  {
    icon: SlidersHorizontal,
    title: "Select defense",
    desc: "Choose a backdoor detection method (multi-defense support coming soon)",
  },
  {
    icon: ScanLine,
    title: "Analyze behavior",
    desc: "The selected defense probes the model to detect suspicious patterns.",
  },
  {
    icon: FileCheck,
    title: "Get verdict",
    desc: "Receive a clear result with metrics and a structured report.",
  },
];
