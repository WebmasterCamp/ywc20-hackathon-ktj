"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, Loader2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useCompareStore } from '@/lib/store';

// Mock data for tools
import { tools } from '@/lib/mock-data';

export default function EquipmentList({ 
  searchParams 
} : { 
  searchParams?: { 
    location?: string, 
    startDate?: string, 
    endDate?: string,
    category?: string,
    priceMin?: string,
    priceMax?: string
  } 
}) {
  const [loading, setLoading] = useState(true);
  const [filteredTools, setFilteredTools] = useState<any[]>([]);
  const { toast } = useToast();
  const { addToCompare, compareItems } = useCompareStore();
  
  // Filter tools based on search parameters
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      let filtered = [...tools];
      
      // Apply category filter
      if (searchParams?.category) {
        const categories = searchParams.category.split(',');
        filtered = filtered.filter(tool => 
          categories.includes(tool.category)
        );
      }
      
      // Apply price filter
      if (searchParams?.priceMin || searchParams?.priceMax) {
        const min = searchParams.priceMin ? parseFloat(searchParams.priceMin) : 0;
        const max = searchParams.priceMax ? parseFloat(searchParams.priceMax) : Infinity;
        
        filtered = filtered.filter(tool => 
          tool.dailyPrice >= min && tool.dailyPrice <= max
        );
      }
      
      setFilteredTools(filtered);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [searchParams]);
  
  const handleAddToCompare = (tool: any) => {
    if (compareItems.length >= 3 && !compareItems.some(item => item.id === tool.id)) {
      toast({
        title: "Compare limit reached",
        description: "You can only compare up to 3 tools at a time",
        variant: "destructive"
      });
      return;
    }
    
    addToCompare(tool);
    
    toast({
      title: compareItems.some(item => item.id === tool.id) 
        ? "Already in compare list" 
        : "Added to compare",
      description: compareItems.some(item => item.id === tool.id)
        ? `${tool.name} is already in your compare list`
        : `${tool.name} has been added to your compare list`,
    });
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }
  
  if (filteredTools.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-medium mb-2">No tools found</h3>
        <p className="text-muted-foreground mb-6">
          Try adjusting your search criteria or browse all tools.
        </p>
        <Link href="/equipment">
          <Button>View All Tools</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTools.map((tool) => (
        <Card key={tool.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="relative h-48 overflow-hidden">
            <Image 
              src={tool.image} 
              alt={tool.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            {tool.stock > 0 ? (
              <p className="text-sm text-green-600 mt-1">In Stock ({tool.stock} available)</p>
            ) : (
              <p className="text-sm text-red-500 mt-1">Out of Stock</p>
            )}
          </CardContent>
          
          <CardFooter className="p-4 pt-0 grid grid-cols-2 gap-2">
            <Link href={`/equipment/${tool.id}`} className="col-span-1">
              <Button variant="outline" className="w-full">View Details</Button>
            </Link>
            <Button 
              variant="ghost"
              className="col-span-1"
              onClick={() => handleAddToCompare(tool)}
              disabled={compareItems.length >= 3 && !compareItems.some(item => item.id === tool.id)}
            >
              <Plus className="mr-1 h-4 w-4" />
              Compare
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}