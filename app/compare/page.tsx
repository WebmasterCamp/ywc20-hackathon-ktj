"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { X, Star, ArrowLeft, ShoppingCart } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCompareStore, useCartStore } from '@/lib/store';
import { useToast } from '@/components/ui/use-toast';

export default function ComparePage() {
  const router = useRouter();
  const { compareItems, removeFromCompare, clearCompare } = useCompareStore();
  const { addToCart } = useCartStore();
  const { toast } = useToast();
  
  // Redirect if no items to compare
  useEffect(() => {
    if (compareItems.length < 2) {
      router.push('/equipment');
    }
  }, [compareItems.length, router]);
  
  if (compareItems.length < 2) {
    return null; // Will redirect in useEffect
  }
  
  const handleAddToCart = (tool: any) => {
    addToCart({
      ...tool,
      rentalDuration: 1,
      rentalType: 'day'
    });
    
    toast({
      title: "Added to cart",
      description: `${tool.name} has been added to your cart`,
    });
  };
  
  // Get all unique specification keys across all tools
  const allSpecKeys = compareItems.reduce((keys: string[], tool) => {
    if (tool.specifications) {
      Object.keys(tool.specifications).forEach(key => {
        if (!keys.includes(key)) {
          keys.push(key);
        }
      });
    }
    return keys;
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Compare Tools</h1>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" onClick={() => clearCompare()}>
            Clear All
          </Button>
          <Link href="/equipment">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Equipment
            </Button>
          </Link>
        </div>
      </div>
      
      <ScrollArea className="w-full border rounded-lg">
        <div className="min-w-[800px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Feature</TableHead>
                {compareItems.map((tool) => (
                  <TableHead key={tool.id} className="text-center">
                    <div className="flex flex-col items-center">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="self-end mb-2"
                        onClick={() => removeFromCompare(tool.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <div className="relative h-24 w-24 mx-auto mb-2">
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <Link href={`/equipment/${tool.id}`} className="font-medium hover:underline">
                        {tool.name}
                      </Link>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Category */}
              <TableRow>
                <TableCell className="font-medium">Category</TableCell>
                {compareItems.map((tool) => (
                  <TableCell key={tool.id} className="text-center">{tool.category}</TableCell>
                ))}
              </TableRow>
              
              {/* Daily Price */}
              <TableRow>
                <TableCell className="font-medium">Daily Price</TableCell>
                {compareItems.map((tool) => (
                  <TableCell key={tool.id} className="text-center font-bold">${tool.dailyPrice.toFixed(2)}</TableCell>
                ))}
              </TableRow>
              
              {/* Weekly Price */}
              <TableRow>
                <TableCell className="font-medium">Weekly Price</TableCell>
                {compareItems.map((tool) => (
                  <TableCell key={tool.id} className="text-center font-bold">${tool.weeklyPrice?.toFixed(2) || '-'}</TableCell>
                ))}
              </TableRow>
              
              {/* Rating */}
              <TableRow>
                <TableCell className="font-medium">Rating</TableCell>
                {compareItems.map((tool) => (
                  <TableCell key={tool.id} className="text-center">
                    <div className="flex items-center justify-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{tool.rating}</span>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
              
              {/* Availability */}
              <TableRow>
                <TableCell className="font-medium">Availability</TableCell>
                {compareItems.map((tool) => (
                  <TableCell key={tool.id} className="text-center">
                    {tool.stock > 0 ? (
                      <span className="text-green-600">In Stock ({tool.stock})</span>
                    ) : (
                      <span className="text-red-500">Out of Stock</span>
                    )}
                  </TableCell>
                ))}
              </TableRow>
              
              {/* Specifications */}
              {allSpecKeys.map(key => (
                <TableRow key={key}>
                  <TableCell className="font-medium">{key}</TableCell>
                  {compareItems.map(tool => (
                    <TableCell key={tool.id} className="text-center">
                      {tool.specifications?.[key] || '-'}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              
              {/* Actions */}
              <TableRow>
                <TableCell className="font-medium">Actions</TableCell>
                {compareItems.map((tool) => (
                  <TableCell key={tool.id} className="text-center">
                    <div className="flex flex-col gap-2 items-center">
                      <Link href={`/equipment/${tool.id}`} className="w-full">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        className="w-full"
                        disabled={tool.stock <= 0}
                        onClick={() => handleAddToCart(tool)}
                      >
                        <ShoppingCart className="mr-2 h-3 w-3" />
                        Add to Cart
                      </Button>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
    </div>
  );
}