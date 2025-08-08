import Bezirke from '@/components/Bezirke';
import Hero from '@/components/Hero';
import Search from '@/components/Search';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Hero />
      <Search />
      <Bezirke />
    </main>
  );
}
