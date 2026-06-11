import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Writing from '@/components/Writing';
import Contact from '@/components/Contact';
import posts from '@/data/posts.json';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Writing posts={posts} />
        <Contact />
      </main>
    </>
  );
}
