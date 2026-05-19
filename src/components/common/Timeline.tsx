"use client";

import type { TimelineEntry } from "@/data/portfolio";
import TimelineItem from "@/components/common/TimelineItem";

type TimelineProps = {
  entries: TimelineEntry[];
  className?: string;
};

export default function Timeline({ entries, className = "" }: TimelineProps) {
  return (
    <div className={`flex flex-col ${className}`.trim()}>
      {entries.map((entry, index) => (
        <TimelineItem key={`${entry.year}-${index}`} index={index} {...entry} />
      ))}
    </div>
  );
}