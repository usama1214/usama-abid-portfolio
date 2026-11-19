import type { IconType } from "react-icons";
import {
  SiWordpress,
  SiWoocommerce,
  SiPhp,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

// The toolset used across the projects (see src/data/portfolio.ts),
// scrolling in the ticker below the hero. Tools without a Simple Icons
// brand mark fall back to a monogram badge. GitHub uses its white variant
// so it stays visible on the dark chips.
export type Tool = { label: string; icon?: IconType; color?: string; abbr?: string };

export const tools: Tool[] = [
  { label: "WordPress", icon: SiWordpress, color: "#21759B" },
  { label: "Gutenberg", abbr: "Gb" },
  { label: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
  { label: "PHP", icon: SiPhp, color: "#777BB4" },
  { label: "MySQL", icon: SiMysql, color: "#4479A1" },
  { label: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { label: "CSS", icon: SiCss, color: "#1572B6" },
  { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { label: "jQuery", icon: SiJquery, color: "#0769AD" },
  { label: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { label: "WPForms", abbr: "WF" },
  { label: "Photoshop", abbr: "Ps" },
  { label: "Illustrator", abbr: "Ai" },
  { label: "Figma", icon: SiFigma, color: "#F24E1E" },
  { label: "Git", icon: SiGit, color: "#F05032" },
  { label: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

// Looks up a tool by exact label first ("GitHub"), then by substring
// for compound skill labels ("Git / GitHub", "Serverless (Vercel, Mangum)").
// Used by the Skills section to icon-match skillGroups items without
// duplicating this data there.
export function findTool(label: string): Tool | undefined {
  const needle = label.toLowerCase();
  return (
    tools.find((t) => t.label.toLowerCase() === needle) ??
    tools.find((t) => needle.includes(t.label.toLowerCase()))
  );
}
