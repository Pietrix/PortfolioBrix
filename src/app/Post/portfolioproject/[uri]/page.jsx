import { FaRegFilePdf } from "react-icons/fa6";
import Link from "next/link";

async function getPost(uri) {
  const query = `
  query query($uri: ID!) {
    portfolioProject(id: $uri, idType: URI) {
      portfolioProjectField {
        description
        document {
          node {
            mediaItemUrl
          }
        }
        title
        outcomes
      }
      id
    }
  }
  `;
  const variables = {
    uri,
  };
  
  const res = await fetch(process.env.GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query , variables
    }),
  })

  const responseBody = await res.json();

  if (responseBody && responseBody.data && responseBody.data.portfolioProject) {
    return responseBody.data.portfolioProject;
  } else {
    throw new Error("Failed to fetch the post");
  }
    
}

export default async function PostDetails({ params }) {
  const post = await getPost("portfolioproject/"+params.uri);

  return (
    <main>
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className=" my-3 text-center">{post.portfolioProjectField.title}</h1>
        <div className="flex items-center mb-5">
          {post.portfolioProjectField.outcomes.includes('PT') ? 
            <div className="hasTooltip">
              <span className="tooltip absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
                Professional duties
              </span>
              <img className="size-10" src="/PT.svg"></img>
            </div> : ""}
          {post.portfolioProjectField.outcomes.includes('SO') ? <div className="hasTooltip">
              <span className="tooltip absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
                Situation-orientation
              </span>
              <img className="size-10" src="/SO.svg"></img>
            </div> : ""}
          {post.portfolioProjectField.outcomes.includes('TO') ? <div className="hasTooltip">
              <span className="tooltip absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
                Future-oriented organization
              </span>
              <img className="size-10" src="/TO.svg"></img>
            </div> : ""}
          {post.portfolioProjectField.outcomes.includes('OP') ? <div className="hasTooltip">
              <span className="tooltip absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
                Investigative problem solving
              </span>
              <img className="size-10" src="/OP.svg"></img>
            </div> : ""}
          {post.portfolioProjectField.outcomes.includes('PL') ? <div className="hasTooltip">
              <span className="tooltip absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
                Personal leadership
              </span>
              <img className="size-10" src="/PL.svg"></img>
            </div> : ""}
          {post.portfolioProjectField.outcomes.includes('GI') ? <div className="hasTooltip">
              <span className="tooltip absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
                Targeted interaction
              </span>
              <img className="size-10" src="/GI.svg"></img>
            </div> : ""}
        </div>
        <a className="mx-auto w-2/3 max-w-4xl">{post.portfolioProjectField.description}</a>
      </div>
        <div  className="Document flex flex-col justify-center items-center my-10">
          <a></a>
          {post.portfolioProjectField.document != undefined && post.portfolioProjectField.document != null ? <object className="pdf" alt={post.portfolioProjectField.document.node.mediaItemUrl} data={post.portfolioProjectField.document.node.mediaItemUrl} width="60%" height="800px"></object> : "No document"}
        </div>
        <Link href={post.portfolioProjectField.document.node.mediaItemUrl}>
          <div className="downloadButton flex justify-center items-center text-white bg-black rounded-full mx-auto max-w-fit py-4 px-10 md:mt-0 mt-10">
            <p className="mr-4">Open bestand</p>
            <FaRegFilePdf />
          </div>
        </Link>
    </main>
  );
}
