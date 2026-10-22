import type { ProjectsContent } from "@/types";

export const projects: ProjectsContent = {
  tag: "selected work",
  title:
    "A few projects that show how I approach the full stack, from schema to shipped interface.",
  items: [
    {
      title: "Government Services Guide (GovGuide)",
      status: "in-progress",
      description:
        "placeholder",
      tags: ["Next.js", "TypeScript", "Node.js", "Claude Code"],
      sourceUrl: "https://github.com/sgxtract/pms",
    },
    {
      title: "Procurement Monitoring System (PMS)",
      status: "in-progress",
      description:
        "A procurement monitoring platform built for the Local Government of Sorsogon. Staff submit and track procurement requests through a structured workflow, with public visibility into active procurements for transparency.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
      sourceUrl: "https://github.com/sgxtract/pms",
    },
    {
      title: "Online Parking Management System (OPMS)",
      description:
        "A parking reservation system that lets users book a specific slot in advance, backed by a PHP/Laravel REST API returning JSON, consumed by a native Android app built in Java.",
      tags: ["PHP", "Laravel", "MySQL", "REST API", "JSON", "Java", "Android"],
      sourceUrl: "https://github.com/sgxtract/opms",
    },
  ],
};
