'use client'

import { Fragment, useEffect, useRef, useState } from "react";
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
  ArrowDown,
  type LucideIcon,
} from "lucide-react";

type Step = {
  icon: LucideIcon;
  label: string;
  caption: string;
  tone: "primary" | "accent";
};

const steps: Step[] = [
  { icon: Inbox, label: "Customer Request", caption: "Order placed", tone: "primary" },
  {
    icon: BrainCircuit,
    label: "AI Reads & Analyzes",
    caption: "Requirements understood",
    tone: "primary",
  },
  {
    icon: ClipboardList,
    label: "Project Planning",
    caption: "Smart plan generated",
    tone: "accent",
  },
  {
    icon: Users,
    label: "Team Assignment",
    caption: "Right people, right tasks",
    tone: "accent",
  },
  {
    icon: Code2,
    label: "Design & Development",
    caption: "Solution built",
    tone: "primary",
  },
  {
    icon: ShieldCheck,
    label: "AI Quality Check",
    caption: "Reviewed & optimized",
    tone: "primary",
  },
  {
    icon: Rocket,
    label: "Project Delivery",
    caption: "Shipped to client",
    tone: "accent",
  },
  { icon: Star, label: "Client Feedback", caption: "Insights collected", tone: "accent" },
  {
    icon: TrendingUp,
    label: "Business Growth",
    caption: "Next opportunities",
    tone: "primary",
  },
];

type RowLayout = {
  steps: Step[];
  direction: "left" | "right";
  turn: "left" | "right" | null;
};

const rowLayouts: RowLayout[] = [
  { steps: steps.slice(0, 3), direction: "right", turn: "right" },
  { steps: [steps[5], steps[4], steps[3]], direction: "left", turn: "left" },
  { steps: steps.slice(6, 9), direction: "right", turn: null },
];

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
        "group flex w-[108px] flex-col items-center text-center transition-all duration-700 ease-out sm:w-[120px] lg:w-[150px]",
        shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0",
      ].join(" ")}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="relative">
        <span
          className="absolute -inset-2 animate-ring-spin rounded-radius-sm border border-dashed border-border opacity-60 transition-opacity group-hover:opacity-100 dark:border-white/10 sm:-inset-3"
          aria-hidden="true"
        />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-radius-sm bg-card transition-transform duration-300 group-hover:scale-110 dark:bg-dark sm:h-16 sm:w-16 lg:h-[74px] lg:w-[74px]">
          <Icon
            className={accent ? "h-6 w-6 text-accent sm:h-7 sm:w-7 lg:h-8 lg:w-8" : "h-6 w-6 text-primary sm:h-7 sm:w-7 lg:h-8 lg:w-8"}
            strokeWidth={1.5}
          />
        </div>
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-radius-sm bg-primary text-[10px] font-semibold text-primary-foreground sm:h-6 sm:w-6 sm:text-[11px]">
          {index + 1}
        </span>
      </div>

      <p className="mt-2 whitespace-nowrap text-[11px] font-semibold leading-tight text-foreground dark:text-backgroundBody sm:mt-2.5 sm:text-xs lg:text-sm">
        {step.label}
      </p>
      <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-muted-foreground dark:text-dark-100 sm:text-[11px]">
        {step.caption}
      </p>
    </div>
  );
}

const FLOW_COLOR = "#615CCE";

function Connector({
  delay = 0,
  direction = "right",
}: {
  delay?: number;
  direction?: "left" | "right";
}) {
  const line = (
    <span
      className="h-[2px] min-w-0 flex-1 animate-flow-dash-march bg-[repeating-linear-gradient(90deg,#615CCE_0_8px,transparent_8px_14px)] bg-[length:14px_2px]"
      style={{ animationDelay: `${delay}ms` }}
    />
  );

  const arrowClass =
    "h-3.5 w-3.5 shrink-0 text-[#615CCE] sm:h-4 sm:w-4";

  return (
    <div
      className="hidden w-full min-w-0 max-w-none flex-1 items-center self-start pt-7 sm:pt-8 lg:pt-[37px] md:flex"
      aria-hidden="true"
    >
      {direction === "left" && (
        <ArrowLeft className={`mr-0.5 ${arrowClass}`} color={FLOW_COLOR} />
      )}
      {line}
      {direction === "right" && (
        <ArrowRight className={`ml-0.5 ${arrowClass}`} color={FLOW_COLOR} />
      )}
    </div>
  );
}

function RowTurn({
  delay = 0,
  align = "right",
}: {
  delay?: number;
  align?: "left" | "right";
}) {
  const vertical = (
    <div className="flex flex-col items-center py-1">
      <span
        className="h-6 w-[2px] animate-flow-dash-march-y bg-[repeating-linear-gradient(180deg,#615CCE_0_8px,transparent_8px_14px)] bg-[length:2px_14px] sm:h-8"
        style={{ animationDelay: `${delay}ms` }}
      />
      <ArrowDown
        className="-mt-px h-3.5 w-3.5 shrink-0 text-[#615CCE] sm:h-4 sm:w-4"
        color={FLOW_COLOR}
      />
    </div>
  );

  return (
    <div
      className="hidden grid-cols-[minmax(0,1fr)_minmax(3rem,1.25fr)_minmax(0,1fr)_minmax(3rem,1.25fr)_minmax(0,1fr)] md:grid"
      aria-hidden="true"
    >
      {align === "left" ? (
        <>
          <div className="flex justify-center">{vertical}</div>
          <div className="col-span-4" />
        </>
      ) : (
        <>
          <div className="col-span-4" />
          <div className="flex justify-center">{vertical}</div>
        </>
      )}
    </div>
  );
}

function MobileConnector({ delay = 0 }: { delay?: number }) {
  return (
    <div className="flex flex-col items-center py-1 md:hidden" aria-hidden="true">
      <span
        className="h-5 w-[2px] animate-flow-dash-march-y bg-[repeating-linear-gradient(180deg,#615CCE_0_8px,transparent_8px_14px)] bg-[length:2px_14px]"
        style={{ animationDelay: `${delay}ms` }}
      />
      <ArrowDown
        className="-mt-px h-3.5 w-3.5 shrink-0 text-[#615CCE]"
        color={FLOW_COLOR}
      />
    </div>
  );
}

export default function OrderProcess() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-5 sm:py-14 md:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(97,92,206,0.12),transparent_70%)] opacity-40 dark:opacity-25" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[11px] font-medium tracking-[0.22em] text-muted-foreground uppercase backdrop-blur dark:border-white/10 dark:bg-dark/60 dark:text-dark-100">
          AI Workflow
        </span>
        <h1 className="mt-4 font-display text-3xl leading-[1.08] tracking-tight text-foreground dark:text-backgroundBody sm:mt-5 sm:text-4xl lg:text-5xl xl:text-6xl">
          From customer request to{" "}
          <span className="bg-[linear-gradient(90deg,#615cc7_0%,#6f62bf_25%,#9671ac_50%,#d38b8e_75%,#db8e8b_100%)] bg-clip-text text-transparent">
            business growth
          </span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-dark-100 sm:mt-4 md:text-base">
          Nine automated steps showing how AI supports the entire delivery process —
          planning, routing, reviewing and advising — without replacing your team.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto mt-8 max-w-5xl sm:mt-10 lg:mt-12">
        <div className="flex flex-col items-center gap-0 md:hidden">
          {steps.map((step, index) => (
            <Fragment key={step.label}>
              <Node step={step} index={index} shown={visible.has(index)} />
              {index < steps.length - 1 && <MobileConnector delay={index * 120} />}
            </Fragment>
          ))}
        </div>

        <div className="hidden md:block">
          {rowLayouts.map((row, rowIndex) => (
            <div key={rowIndex}>
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(3rem,1.25fr)_minmax(0,1fr)_minmax(3rem,1.25fr)_minmax(0,1fr)] items-start gap-x-1 lg:gap-x-2">
                {row.steps.map((step, i) => {
                  const stepIndex = steps.indexOf(step);

                  return (
                    <Fragment key={step.label}>
                      <div className="flex justify-center">
                        <Node step={step} index={stepIndex} shown={visible.has(stepIndex)} />
                      </div>
                      {i < row.steps.length - 1 && (
                        <Connector delay={stepIndex * 120} direction={row.direction} />
                      )}
                    </Fragment>
                  );
                })}
              </div>
              {row.turn && <RowTurn delay={(rowIndex * 3 + 2) * 120} align={row.turn} />}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="flex items-center gap-3 rounded-radius-sm border border-border bg-card/70 px-5 py-3 backdrop-blur dark:border-white/10 dark:bg-dark/70 sm:px-6 sm:py-4">
            <CheckCircle2 className="h-5 w-5 text-primary sm:h-6 sm:w-6" strokeWidth={1.6} />
            <p className="text-sm font-semibold text-foreground dark:text-backgroundBody sm:text-base">
              Workflow <span className="text-accent">Completed</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
