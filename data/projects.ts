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
        "A centralized guide to Philippine government services, showing where to go, what requirements to bring, and the step-by-step process for transactions like LTO applications. Since most requirements are the same nationwide, it serves Filipinos across the country rather than a single city.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "Claude"],
      sourceUrl: "https://github.com/sgxtract/govguide",
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
