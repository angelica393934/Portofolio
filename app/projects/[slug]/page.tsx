   import { notFound } from "next/navigation";
   import ProjectDetail from "@/components/ProjectDetail";
   import { projects, slugOf } from "@/data/content";

   export function generateStaticParams() {
     return projects.map((p) => ({ slug: slugOf(p) }));
   }

   export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
     const { slug } = await params;
     if (!projects.some((p) => slugOf(p) === slug)) notFound();
     return <ProjectDetail slug={slug} />;
   }