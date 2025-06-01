"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Mock data for recommended tools
const mockRecommendedTools = [
  {
    id: 1,
    name: "Professional Drill",
    image: "https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    dailyPrice: 25.99,
    rating: 4.8,
    category: "Power Tools"
  },
  {
    id: 2,
    name: "Cordless Impact Wrench",
    image: "https://images.pexels.com/photos/2876328/pexels-photo-2876328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    dailyPrice: 32.50,
    rating: 4.6,
    category: "Power Tools"
  },
  {
    id: 3,
    name: "Rotary Hammer",
    image: "https://images.pexels.com/photos/5583061/pexels-photo-5583061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    dailyPrice: 28.75,
    rating: 4.5,
    category: "Power Tools"
  },
  {
    id: 4,
    name: "Table Saw",
    image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    dailyPrice: 45.00,
    rating: 4.9,
    category: "Saws & Cutting"
  }
];

export default function RecommendedTools() {
  const [tools, setTools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading data from an API
  useEffect(() => {
    const loadTools = setTimeout(() => {
      setTools(mockRecommendedTools);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(loadTools);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {tools.map((tool) => (
        <Card key={tool.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="relative h-48 overflow-hidden">
            <Image 
              src={tool.image} 
              alt={tool.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              {tool.category}
            </div>
          </div>
          
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1 line-clamp-1">{tool.name}</h3>
            <div className="flex justify-between items-center">
              <p className="font-bold">${tool.dailyPrice.toFixed(2)}<span className="text-sm font-normal text-muted-foreground">/day</span></p>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm">{tool.rating}</span>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Link href={`/equipment/${tool.id}`} className="w-full">
              <Button variant="outline" className="w-full">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}