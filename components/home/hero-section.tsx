import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-80"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      />
      
      {/* Hero content */}
      <div className="relative container mx-auto px-4 py-24 sm:py-32 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Professional Tools on Demand
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Rent high-quality tools for your projects without the commitment of ownership.
          Save money and space with our convenient rental service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/equipment">
            <Button size="lg" className="text-base">
              Browse Equipment
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button variant="outline" size="lg" className="text-base bg-transparent text-white border-white hover:bg-white/10">
              How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}