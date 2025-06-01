"use client"

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Filter, ArrowRight } from 'lucide-react';

// Tool categories
const categories = [
  "Power Tools",
  "Hand Tools",
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Painting",
  "Automotive",
  "Concrete & Masonry"
];

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize state from URL params
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('category')?.split(',') || []
  );
  
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.get('priceMin')) || 0,
    Number(searchParams.get('priceMax')) || 100
  ]);
  
  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Update category parameter
    if (selectedCategories.length > 0) {
      params.set('category', selectedCategories.join(','));
    } else {
      params.delete('category');
    }
    
    // Update price range parameters
    params.set('priceMin', priceRange[0].toString());
    params.set('priceMax', priceRange[1].toString());
    
    router.push(`/equipment?${params.toString()}`);
  };
  
  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 100]);
  };
  
  // Filter sidebar content
  const filterContent = (
    <div className="py-4 space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={`category-${category}`} 
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, category]);
                  } else {
                    setSelectedCategories(selectedCategories.filter(c => c !== category));
                  }
                }}
              />
              <Label htmlFor={`category-${category}`}>{category}</Label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-lg font-medium mb-3">Price Range (per day)</h3>
        <div className="space-y-6">
          <Slider
            value={[priceRange[0], priceRange[1]]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value) => setPriceRange([value[0], value[1]])}
          />
          
          <div className="flex justify-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div className="flex flex-col gap-2">
        <Button onClick={applyFilters}>
          Apply Filters
        </Button>
        <Button variant="outline" onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop filters */}
      <div className="hidden lg:block sticky top-20 bg-card rounded-lg border p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        {filterContent}
      </div>
      
      {/* Mobile filters */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            {filterContent}
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}