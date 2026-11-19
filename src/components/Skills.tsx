import type { IconType } from "react-icons";
import { TbCode, TbBrandWordpress, TbDatabase, TbPlugConnected, TbPalette } from "react-icons/tb";
import { skillGroups } from "@/data/portfolio";
import { findTool } from "./toolIcons";

const groupStyle: Record<string, { Icon: IconType; badge: string; icon: string }> = {
  "Frontend": {
    Icon: TbCode,
    badge: "border-accent/20 bg-accent/10",
    icon: "text-accent-light",
  },
  "WordPress & CMS": {
    Icon: TbBrandWordpress,
    badge: "border-violet-500/20 bg-violet-500/10",
    icon: "text-violet-400",
  },
  "Backend & Data": {
    Icon: TbDatabase,
    badge: "border-sky-500/20 bg-sky-500/10",
    icon: "text-sky-400",
  },
  "Forms & Integrations": {
    Icon: TbPlugConnected,
    badge: "border-emerald-500/20 bg-emerald-500/10",
    icon: "text-emerald-400",
  },
  "Design & Docs": {
    Icon: TbPalette,
    badge: "border-rose-500/20 bg-rose-500/10",
    icon: "text-rose-400",
  },
};

export default function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          / stack
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Tools I build with
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const style = groupStyle[group.title];
          return (
            <div
              key={group.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${style.badge}`}
                >
                  <style.Icon className={`h-3.5 w-3.5 ${style.icon}`} />
                </span>
                <h3 className="font-mono text-sm font-medium text-zinc-200">
                  {group.title}
                </h3>
                <span className="ml-auto font-mono text-[10px] text-zinc-600">
                  {group.items.length}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => {
                  const tool = findTool(item);
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-400"
                    >
                      {tool?.icon && (
                        <tool.icon className="h-3 w-3 shrink-0" color={tool.color} />
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
