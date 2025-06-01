"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { X, Plus, Minus, ShoppingCart, Package2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useCartStore } from '@/lib/store';
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

export default function CartPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { items, removeFromCart, updateCartItem, clearCart } = useCartStore();
  const [deliveryService, setDeliveryService] = useState(false);
  const [toolManuals, setToolManuals] = useState(false);
  
  // Calculate subtotal
  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const itemPrice = item.rentalType === 'day' 
        ? item.dailyPrice * item.rentalDuration
        : item.weeklyPrice * item.rentalDuration;
      return total + itemPrice;
    }, 0);
  };
  
  // Calculate additional services cost
  const calculateAdditionalServices = () => {
    let additionalCost = 0;
    
    if (deliveryService) {
      additionalCost += 25; // Fixed delivery fee
    }
    
    if (toolManuals) {
      additionalCost += items.length * 5; // $5 per tool for manuals
    }
    
    return additionalCost;
  };
  
  // Calculate total
  const calculateTotal = () => {
    return calculateSubtotal() + calculateAdditionalServices();
  };
  
  const handleProceedToPayment = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before proceeding to payment",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, we would save the cart state including additional services
    router.push('/payment');
  };
  
  const updateRentalDuration = (itemId: number, change: number) => {
    const item = items.find(i => i.id === itemId);
    if (item) {
      const newDuration = Math.max(1, item.rentalDuration + change);
      updateCartItem(itemId, { rentalDuration: newDuration });
    }
  };
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any tools to your cart yet.
          </p>
          <Link href="/equipment">
            <Button>Browse Equipment</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="relative h-40 sm:h-auto sm:w-40 sm:min-w-[10rem]">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardContent className="flex-1 p-4 sm:p-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.rentalType === 'day' ? 'Daily Rate' : 'Weekly Rate'}:
                      </p>
                      <p className="font-medium">
                        ${item.rentalType === 'day' 
                          ? item.dailyPrice.toFixed(2) 
                          : item.weeklyPrice.toFixed(2)
                        }
                        /{item.rentalType}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Duration:</p>
                      <div className="flex items-center">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateRentalDuration(item.id, -1)}
                          disabled={item.rentalDuration <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-12 text-center">{item.rentalDuration}</span>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateRentalDuration(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <span className="ml-2">{item.rentalType}s</span>
                      </div>
                    </div>
                    
                    <div className="ml-auto">
                      <p className="text-sm text-muted-foreground mb-1">Subtotal:</p>
                      <p className="font-bold">
                        ${(item.rentalType === 'day' 
                          ? item.dailyPrice * item.rentalDuration 
                          : item.weeklyPrice * item.rentalDuration
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your rental details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Additional Services */}
              <div className="space-y-4">
                <h3 className="font-medium">Additional Services</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="delivery" 
                      checked={deliveryService}
                      onCheckedChange={(checked) => setDeliveryService(!!checked)}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="delivery" className="font-medium">Home Delivery Service</Label>
                      <p className="text-sm text-muted-foreground">
                        Get your tools delivered to your location (+$25.00)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="manuals" 
                      checked={toolManuals}
                      onCheckedChange={(checked) => setToolManuals(!!checked)}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="manuals" className="font-medium">Tool Manuals & Tutorials</Label>
                      <p className="text-sm text-muted-foreground">
                        Access to digital manuals and tutorial videos (+$5.00 per tool)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              {/* Cost breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                {deliveryService && (
                  <div className="flex justify-between">
                    <span>Delivery Service</span>
                    <span>$25.00</span>
                  </div>
                )}
                {toolManuals && (
                  <div className="flex justify-between">
                    <span>Tool Manuals & Tutorials</span>
                    <span>${(items.length * 5).toFixed(2)}</span>
                  </div>
                )}
                
                <Separator />
                
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button 
                className="w-full" 
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => clearCart()}
              >
                Clear Cart
              </Button>
            </CardFooter>
          </Card>
          
          {/* Need help card */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Package2 className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm">Free delivery on orders over $150</p>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm">View our <Link href="/returns" className="text-primary hover:underline">returns policy</Link></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}