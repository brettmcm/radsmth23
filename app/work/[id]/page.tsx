import Image from "next/image";
import { getPostDetails, getPostIdList } from "../../lib/work";

export async function getStaticPaths() {
  const paths = await getPostIdList();
  return {
    paths,
    fallback: false,
  };
}

export async function generateStaticParams() {
  const posts = await fetch("../../lib/work").then((res) => res.json());

  return posts.map((post: { slug: any }) => ({
    slug: post.slug,
  }));
}

export default async function CaseStudy({
  params,
}: {
  params: { id: string };
}) {
  const metaData = await getPostDetails(params.id);
  const galleryData = metaData.images;

  return (
    <article>
      <ul className="cs-meta">
        <li>
          <h3>Client</h3>
          {metaData.title}
        </li>
        <li>
          <h3>Category</h3>
          {metaData.category}
        </li>
        <li>
          <h3>Credit</h3>
          {metaData.credit}
        </li>
        <li>
          <h3>Location</h3>
          {metaData.location}
        </li>
        <li>
          <h3>Year</h3>
          {metaData.year}
        </li>
      </ul>
      <h1>{metaData.title}</h1>
      <p className="description">{metaData.desc}</p>
      <div className="gallery">
        {galleryData.map((image: any, index: any) => (
          <div key={index} className="galleryItem">
            <p className="caption">{image.caption}</p>
            <Image
              src={image.img}
              alt=""
              width={100}
              height={100}
              className="galleryImg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
            />
          </div>
        ))}
      </div>
    </article>
  );
}
