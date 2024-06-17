import Image from "next/image";
import Link from "next/link";
import Projects from "./components/projects";

async function getPosts() {
  const query = `
  {
    portfolioProjects (first:100) {
      nodes {
        portfolioProjectField {
          description
          title
          outcomes
          mainimage {
            node {
              mediaItemUrl
            }
          }
        }
        id
        uri
      }
    }
  }
  `;

  const res = await fetch(
    `${process.env.GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // ... any other headers you need to include (like authentication tokens)
      },
      cache: "no-store",
    }
  );

  const { data } = await res.json();

  return data.portfolioProjects.nodes;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <Projects data={posts}/>
    </div>
  );
}
