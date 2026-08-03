'use client'

import { useEffect, useRef, useState } from "react";
import {
  Inbox,
  BrainCircuit,
  ClipboardList,
  Users,
  Code2,
  ShieldCheck,
  Rocket,
  Star,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";

type Step = {
  icon: LucideIcon;
  label: string;
  caption: string;
  tone: "primary" | "accent";
};

const steps: Step[] = [
  { icon: Inbox, label: "Customer\nRequest", caption: "Order placed", tone: "primary" },
  {
    icon: BrainCircuit,
    label: "AI Reads &\nAnalyzes",
    caption: "Requirements understood",
    tone: "primary",
  },
  {
    icon: ClipboardList,
    label: "Project\nPlanning",
    caption: "Smart plan generated",
    tone: "accent",
  },
  {
    icon: Users,
    label: "Team\nAssignment",
    caption: "Right people, right tasks",
    tone: "accent",
  },
  {
    icon: Code2,
    label: "Design &\nDevelopment",
    caption: "Solution built",
    tone: "primary",
  },
  {
    icon: ShieldCheck,
    label: "AI Quality\nCheck",
    caption: "Reviewed & optimized",
    tone: "primary",
  },
  {
    icon: Rocket,
    label: "Project\nDelivery",
    caption: "Shipped to client",
    tone: "accent",
  },
  { icon: Star, label: "Client\nFeedback", caption: "Insights collected", tone: "accent" },
  {
    icon: TrendingUp,
    label: "Business\nGrowth",
    caption: "Next opportunities",
    tone: "primary",
  },
];

const rows = [steps.slice(0, 3), steps.slice(3, 6), steps.slice(6, 9)];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const items = Array.from(node.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset["reveal"]);
            setVisible((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -8% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Node({
  step,
  index,
  shown,
}: {
  step: Step;
  index: number;
  shown: boolean;
}) {
  const Icon = step.icon;
  const accent = step.tone === "accent";

  return (
    <div
      data-reveal={index}
      className={[
        "group flex w-[150px] flex-col items-center text-center transition-all duration-700 ease-out sm:w-[168px]",
        shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0",
      ].join(" ")}
      style={{ transitionDelay: `${(index % 3) * 140}ms` }}
    >
      <div className="relative">
        <span
          className="absolute -inset-3 animate-ring-spin rounded-radius-sm border border-dashed border-border opacity-60 transition-opacity group-hover:opacity-100 dark:border-white/10"
          aria-hidden="true"
        />
        <div
          className="relative flex h-[74px] w-[74px] items-center justify-center rounded-radius-sm bg-card transition-transform duration-300 group-hover:scale-110 dark:bg-dark"
        >
          <Icon
            className={accent ? "h-8 w-8 text-accent" : "h-8 w-8 text-primary"}
            strokeWidth={1.5}
          />
        </div>
        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-radius-sm bg-primary text-[11px] font-semibold text-primary-foreground">
          {index + 1}
        </span>
      </div>

      <p className="mt-4 whitespace-pre-line text-sm font-semibold leading-snug text-foreground dark:text-backgroundBody sm:text-base">
        {step.label}
      </p>
      <p className="mt-1 text-xs text-muted-foreground dark:text-dark-100">{step.caption}</p>
    </div>
  );
}

function Connector({ direction }: { direction: "right" | "left" }) {
  return (
    <div className="hidden flex-1 items-center gap-2 pb-12 md:flex" aria-hidden="true">
      {direction === "left" && <ArrowLeft className="h-4 w-4 shrink-0 text-primary" />}
      <span className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-primary/55 to-transparent" />
      {direction === "right" && <ArrowRight className="h-4 w-4 shrink-0 text-primary" />}
    </div>
  );
}

function RowLink() {
  return (
    <div className="flex h-14 items-center justify-center md:h-16" aria-hidden="true">
      <span className="h-full w-0.5 bg-gradient-to-b from-primary/55 to-transparent" />
    </div>
  );
}

export default function OrderProcess() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden px-5 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(97,92,206,0.12),transparent_70%)] opacity-40 dark:opacity-25" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[11px] font-medium tracking-[0.22em] text-muted-foreground uppercase backdrop-blur dark:border-white/10 dark:bg-dark/60 dark:text-dark-100">
          AI Workflow
        </span>
        <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-foreground dark:text-backgroundBody md:text-6xl">
          From customer request to{" "}
          <span className="bg-[linear-gradient(90deg,#615cc7_0%,#6f62bf_25%,#9671ac_50%,#d38b8e_75%,#db8e8b_100%)] bg-clip-text text-transparent">
            business growth
          </span>
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground dark:text-dark-100 md:text-base">
          Nine automated steps showing how AI supports the entire delivery process —
          planning, routing, reviewing and advising — without replacing your team.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto mt-16 max-w-5xl">
        {rows.map((row, rowIndex) => (
            <div key={rowIndex}>
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-4">
                {row.map((step, i) => {
                  const stepIndex = steps.indexOf(step);
                  return (
                    <div
                      key={step.label}
                      className="flex w-full flex-col items-center md:contents"
                    >
                      <Node step={step} index={stepIndex} shown={visible.has(stepIndex)} />
                      {i < row.length - 1 && <Connector direction="right" />}
                    </div>
                  );
                })}
              </div>
              {rowIndex < rows.length - 1 && <RowLink />}
            </div>
          ))}

        <div className="mt-14 flex justify-center">
          <div className="flex items-center gap-3 rounded-radius-sm border border-border bg-card/70 px-6 py-4 backdrop-blur dark:border-white/10 dark:bg-dark/70">
            <CheckCircle2 className="h-6 w-6 text-primary" strokeWidth={1.6} />
            <p className="text-base font-semibold text-foreground dark:text-backgroundBody">
              Workflow <span className="text-accent">Completed</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
