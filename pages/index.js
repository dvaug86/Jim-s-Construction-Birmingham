import Head from "next/head";
import HomePage from "@/components/HomePage";
import { createClient } from "contentful";
import ProjectCard from "@/components/ProjectCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "jimsConstructionBirmingham",
  });
  return {
    props: { projects: res.items },
  };
}
export default function Home({ projects }) {
  console.log(projects);
  return (
    <div className="proj-gallery">
      {projects.map((project) => (
        <ProjectCard key={project.sys.id} project={project}/>  
      ))}
    </div>
  );
}
