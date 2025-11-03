import {
  AboutSection,
  BlogSection,
  HeroSection,
  ServicesSection,
} from "@/sections";
import { client } from "@/sanity/lib/client";

export const POSTS_QUERY = `*[
  _type == "post"
]|order(publishedAt desc)[0...12]{_id, title, slug, mainImage, excerpt, publishedAt}`;
export const options = { next: { revalidate: 30 } };

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  console.log("Posts:", posts);
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection data={posts} />
    </main>
  );
}
