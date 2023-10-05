import React, { use } from "react";
import { client } from "../../utils/configSanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

async function getWork() {
  const query = `*[_type=="work"]`;
  const works = await client.fetch(query);
  return works;
}

const Work = () => {
  const works = use(getWork());
  console.log(works);
  return (
    <div className="flex flex-col items-center justify-center h-full overflow-x-hidden z-20 space-y-5 ">
      <h1 className="sm:text-5xl text-3xl mytext">Meine Projekte</h1>
      <p className="max-w-sm md:max-w-xl px-5 sm:px-0 text-xs text-center sm:text-lg">
        {" "}
        Eine kleine Collection meiner aktuellen Projekte{" "}
      </p>
      <div className="w-full flex flex-row  px-10 flex-shrink-0 space-x-2 pt-10">
        {works.map((work, index) => (
          <div
            key={index}
            className="shadow-xl rounded-xl flex flex-col justify-between w-1/3 flex-shrink-0">
            <div className="flex justify-center items-center relative w-full h-28 sm:h-52 md:h-96">
              <img
                alt={work.title}
                src={urlFor(work.imgUrl.asset._ref).width(400).url()}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="p-5">
              <h3 className="text-center  text-md sm:text-2xl mb-2">
                {work.title}
              </h3>
              <p className="text-center  text-xs sm:text-md">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
