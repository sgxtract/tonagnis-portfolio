import type { ProjectsContent } from "@/types";

export const projects: ProjectsContent = {
  tag: "selected work",
  title:
    "A few projects that show how I approach the full stack, from schema to shipped interface.",
  items: [
    {
      title: "GovGuide",
      status: "in-progress",
      description:
        "A guide to Philippine government services: where to go, what to bring, the steps, and the fees. National requirements are shared across the country, while local offices and city-run services are added city by city, starting with Sorsogon. Every guide links to its official source and shows when it was last checked.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "Claude Code"],
      sourceUrl: "https://github.com/sgxtract/govguide",
      liveUrl: "https://ph-govguide.vercel.app/",
    },
    {
      title: "Procurement Monitoring System (PMS)",
      status: "in-progress",
      description:
        "A procurement monitoring platform built for the Local Government of Sorsogon. Staff submit and track procurement requests through a structured workflow, with public visibility into active procurements for transparency.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
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
