import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/home/search-bar';
import RecommendedTools from '@/components/home/recommended-tools';
import HeroSection from '@/components/home/hero-section';
import FeatureSection from '@/components/home/feature-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Search Bar Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto w-full">
        <div className="bg-card rounded-xl p-6 shadow-lg border">
          <h2 className="text-xl font-semibold mb-4 text-center">Find the Perfect Tool for Your Project</h2>
          <SearchBar />
        </div>
      </section>
      
      {/* Recommended Tools */}
      <section className="py-12 px-4 max-w-6xl mx-auto w-full">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Recommended Tools</h2>
          <Link href="/equipment">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <RecommendedTools />
      </section>
      
      {/* Features */}
      <FeatureSection />
    </div>
  );
}