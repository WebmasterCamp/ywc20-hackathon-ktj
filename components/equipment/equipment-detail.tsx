"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Calendar, 
  Info, 
  Plus, 
  Minus,
  Star,
  ShoppingCart,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { useCompareStore, useCartStore } from '@/lib/store';
import ToolReviews from './tool-reviews';

export default function EquipmentDetail({ tool }: { tool: any }) {
  const router = useRouter();
  const { toast } = useToast();
  const { addToCompare, compareItems } = useCompareStore();
  const { addToCart } = useCartStore();
  
  const [rentalDuration, setRentalDuration] = useState(1);
  const [rentalType, setRentalType] = useState<'day' | 'week'>('day');
  
  // Calculate rental cost
  const getRentalCost = () => {
    if (rentalType === 'day') {
      return tool.dailyPrice * rentalDuration;
    } else {
      return tool.weeklyPrice * rentalDuration;
    }
  };
  
  const handleAddToCompare = () => {
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
  
  const handleAddToCart = () => {
    addToCart({
      ...tool,
      rentalDuration,
      rentalType
    });
    
    toast({
      title: "Added to cart",
      description: `${tool.name} has been added to your cart`,
    });
  };
  
  // Determine if we should recommend purchase
  const shouldRecommendPurchase = () => {
    // Assuming purchase price is approximately 10x the daily rental price
    const estimatedPurchasePrice = tool.dailyPrice * 10;
    const totalRentalCost = getRentalCost();
    
    // If rental cost is more than 70% of purchase price, recommend purchase
    return totalRentalCost > (estimatedPurchasePrice * 0.7);
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tool Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image 
              src={tool.image}
              alt={tool.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        
        {/* Tool Details */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold">{tool.name}</h1>
              <Badge variant="outline">{tool.category}</Badge>
            </div>
            
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(tool.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
              <span className="text-sm ml-1">{tool.rating} rating</span>
            </div>
            
            {tool.stock > 0 ? (
              <p className="text-sm text-green-600 mt-1">In Stock ({tool.stock} available)</p>
            ) : (
              <p className="text-sm text-red-500 mt-1">Out of Stock</p>
            )}
          </div>
          
          <p className="text-muted-foreground">{tool.description}</p>
          
          <Separator />
          
          {/* Rental Options */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Rental Options</h2>
            
            <div className="flex gap-4 mb-4">
              <Button 
                variant={rentalType === 'day' ? 'default' : 'outline'}
                onClick={() => setRentalType('day')}
                className="flex-1"
              >
                Daily Rate: ${tool.dailyPrice.toFixed(2)}/day
              </Button>
              
              <Button 
                variant={rentalType === 'week' ? 'default' : 'outline'}
                onClick={() => setRentalType('week')}
                className="flex-1"
              >
                Weekly Rate: ${tool.weeklyPrice.toFixed(2)}/week
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium">Duration ({rentalType}s):</p>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setRentalDuration(Math.max(1, rentalDuration - 1))}
                  disabled={rentalDuration <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{rentalDuration}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setRentalDuration(rentalDuration + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="font-medium">Total Rental Cost:</p>
              <p className="text-xl font-bold">${getRentalCost().toFixed(2)}</p>
            </div>
            
            {/* Purchase Recommendation */}
            {shouldRecommendPurchase() && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-md cursor-pointer">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm">This rental cost is approaching the purchase price. Click to see buying options.</p>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Consider Purchasing Instead</AlertDialogTitle>
                    <AlertDialogDescription>
                      Your rental cost (${getRentalCost().toFixed(2)}) is approaching the purchase price of this tool (approximately ${(tool.dailyPrice * 10).toFixed(2)}). It might be more economical to purchase this tool instead.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Continue Renting</AlertDialogCancel>
                    <AlertDialogAction>View Purchase Options</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
            
            <div className="flex gap-4">
              <Button 
                className="flex-1" 
                onClick={handleAddToCart}
                disabled={tool.stock <= 0}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                {tool.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button 
                variant="outline" 
                onClick={handleAddToCompare}
                disabled={compareItems.length >= 3 && !compareItems.some(item => item.id === tool.id)}
              >
                Add to Compare
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Specifications and Reviews Tabs */}
      <Tabs defaultValue="specifications" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="specifications" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tool.specifications && Object.entries(tool.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between p-2 bg-muted/40 rounded">
                <span className="font-medium">{key}:</span>
                <span>{value as string}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <ToolReviews toolId={tool.id} toolName={tool.name} />
        </TabsContent>
      </Tabs>
      
      {/* Related Tools would go here */}
    </div>
  );
}