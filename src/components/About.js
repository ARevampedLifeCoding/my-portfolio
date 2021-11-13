import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import img from "../img/portfolio-background.jpeg";
import imageUrlBuilder from "./@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) {
    return <div>Loading...</div>;
  }
  return (
    <main className="relative">
      <img src={img} alt="computer" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img src={urlFor(author.Image).url()} className="rounded w-32 h-32 ld:w-64 lg:h-64 mr-8 "/>
          <div>
            <h1></h1>
            <div>BLOCK CONTENT</div>
          </div>
        </section>
      </div>
    </main>
  );
}
