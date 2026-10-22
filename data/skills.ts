import { FaCss3Alt, FaMicrosoft } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiAnthropic,
  SiDocker,
  SiFedora,
  SiGit,
  SiGithub,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { SkillsContent } from "@/types";

export const skills: SkillsContent = {
  tag: "tech stack",
  title: "Tools I reach for the most, and a few I'm adding.",
  groups: [
    {
      label: "Main skills",
      variant: "primary",
      items: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Supabase", icon: SiSupabase },
        { name: "Node.js", icon: SiNodedotjs },
      ],
    },
    {
      label: "Tools",
      variant: "secondary",
      items: [
        { name: "Claude Code", icon: SiAnthropic },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Docker", icon: SiDocker },
        { name: "Vercel", icon: SiVercel },
        { name: "VS Code", icon: VscVscode },
        { name: "Fedora", icon: SiFedora },
      ],
    },
    {
      label: "Additional skills",
      variant: "secondary",
      items: [
        { name: "PHP", icon: SiPhp },
        { name: "Laravel", icon: SiLaravel },
        { name: "MySQL", icon: SiMysql },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Python", icon: SiPython },
        { name: "OpenAI / ChatGPT", icon: RiOpenaiFill },
        { name: "Google Sheets", icon: SiGooglesheets },
        { name: "Microsoft Apps", icon: FaMicrosoft },
      ],
    },
  ],
};

export const skillIcons = new Map(
  skills.groups
    .flatMap((group) => group.items)
    .map((skill) => [skill.name, skill.icon]),
);
