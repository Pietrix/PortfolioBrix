"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Projects = ({ data }) => {

  let filters = ["PT", "SO", "TO", "OP", "PL", "GI"];
  const params = useSearchParams();

  const [selectedFilter, setSelectedFilter] = useState(params.get("outcome" || "0"));
  const [filteredPosts, setFilteredPosts] = useState(data);

  useEffect(() => {
    filterPosts();
  }, [selectedFilter]);

  const buttonHandler = (activeCategory) => {
    if(activeCategory === selectedFilter){
      setSelectedFilter("0")
    }
    else{
      setSelectedFilter(activeCategory)
    }
  }

  const filterPosts = () => {
    if (selectedFilter == 0 || selectedFilter == null || selectedFilter == undefined ) {
      setFilteredPosts(data);
    } else {
      
      let temp = data.filter((x) =>
        x.portfolioProjectField.outcomes.includes(selectedFilter.toString())
      );
      setFilteredPosts(temp);
    }
  };

  const toggelQuery = (key, value) => {
    const query = Object.fromEntries(params);
    if(query[key] == value){
      delete query[key];
    } else{
      query[key] = value;
    }
    return query;
  }

  return (
    <div id="wrapper">
      <section id="buttons" className="px-10 md:px-0 py-10 md:flex justify-center content-center grid grid-cols-2 gap-4">
        {filters.map((category, idx) => (
          <Link className="flex justify-center" key={`filters-${idx}`} href={{
            pathname: "/",
            query: toggelQuery("outcome", category)
          }}>
          <button
            onClick={() => buttonHandler(category)}
            className={`button ${
              selectedFilter === category ? "active" : "off"
            } flex flex-col justify-center items-center mx-3 my-4 md:my-6 rounded-xl`}   
          >
                        <div className="hasTooltip2">
              <span className="tooltip2 absolute z-150 whitespace-normal py-1.5 px-3 text-sm font-normal focus:outline-none max-w-32 md:max-w-fit">
              {category == 'PT' && <p>Profesional duties</p>}
                      {category == 'SO' && <p>Situation-orientation</p>}
                      {category == 'TO' && <p>Future-oriented organization</p>}
                      {category == 'OP' && <p>Investigative problem solving</p>}
                      {category == 'PL' && <p>Personal leadership</p>}
                      {category == 'GI' && <p>Targeted interaction</p>}
              </span>
            <img className="size-16 md:size-20" src={`${category}.svg`}></img>
            </div>
          </button>
          </Link>

        ))}
      </section>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {filteredPosts.map((post) => (
          <div key={post.id} className="card">
            <Link href={`/Post/${post.uri}`}>
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src={post.portfolioProjectField.mainimage.node.mediaItemUrl}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {post.portfolioProjectField.title}
                  </p>
                  <p className="description text-gray-400 mr-3 uppercase text-xs">
                    {post.portfolioProjectField.description}
                  </p>
                  <div className="flex items-center">
                    {post.portfolioProjectField.outcomes.includes('PT') ? <img className="size-8" src="PT.svg"></img> : ""}
                    {post.portfolioProjectField.outcomes.includes('SO') ? <img className="size-8" src="SO.svg"></img> : ""}
                    {post.portfolioProjectField.outcomes.includes('TO') ? <img className="size-8" src="TO.svg"></img> : ""}
                    {post.portfolioProjectField.outcomes.includes('OP') ? <img className="size-8" src="OP.svg"></img> : ""}
                    {post.portfolioProjectField.outcomes.includes('PL') ? <img className="size-8" src="PL.svg"></img> : ""}
                    {post.portfolioProjectField.outcomes.includes('GI') ? <img className="size-8" src="GI.svg"></img> : ""}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};
export default Projects;
