"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreditCard, Loader2, Building as BuildingBank, Truck, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useCartStore } from '@/lib/store';
import { useToast } from "@/hooks/use-toast"

export default function PaymentPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { items, clearCart } = useCartStore();
  
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });
  const [processing, setProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  
  // Calculate total
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const itemPrice = item.rentalType === 'day'
        ? item.dailyPrice * item.rentalDuration
        : item.weeklyPrice * item.rentalDuration;
      return total + itemPrice;
    }, 0);
  };
  
  const handleCardDetailsChange = (field: string, value: string) => {
    setCardDetails({ ...cardDetails, [field]: value });
  };
  
  const validateCardDetails = () => {
    if (paymentMethod !== 'credit-card') return true;
    
    const { cardNumber, cardHolder, expiryDate, cvv } = cardDetails;
    
    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
      toast({
        title: "Missing information",
        description: "Please fill in all credit card details",
        variant: "destructive"
      });
      return false;
    }
    
    // Basic validation
    if (cardNumber.replace(/\s/g, '').length < 15) {
      toast({
        title: "Invalid card number",
        description: "Please enter a valid credit card number",
        variant: "destructive"
      });
      return false;
    }
    
    if (cvv.length < 3) {
      toast({
        title: "Invalid CVV",
        description: "Please enter a valid security code",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };
  
  const handlePaymentSubmit = () => {
    if (!validateCardDetails()) return;
    
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setPaymentComplete(true);
      
      // After payment is complete, show confirmation dialog
      setTimeout(() => {
        clearCart();
        router.push('/confirmation');
      }, 2000);
    }, 2000);
  };
  
  if (items.length === 0 && !paymentComplete) {
    // Redirect to cart if there are no items and payment is not complete
    router.push('/cart');
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-8">Payment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Payment Methods */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Select your preferred payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 border rounded-md p-4">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer">
                    <CreditCard className="h-5 w-5" />
                    Credit / Debit Card
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2 border rounded-md p-4">
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                  <Label htmlFor="bank-transfer" className="flex items-center gap-2 cursor-pointer">
                    <BuildingBank className="h-5 w-5" />
                    Bank Transfer
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2 border rounded-md p-4">
                  <RadioGroupItem value="cash-delivery" id="cash-delivery" />
                  <Label htmlFor="cash-delivery" className="flex items-center gap-2 cursor-pointer">
                    <Truck className="h-5 w-5" />
                    Cash on Delivery
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
          
          {paymentMethod === 'credit-card' && (
            <Card>
              <CardHeader>
                <CardTitle>Card Details</CardTitle>
                <CardDescription>Enter your credit or debit card information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456"
                    value={cardDetails.cardNumber}
                    onChange={(e) => handleCardDetailsChange('cardNumber', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardHolder">Card Holder Name</Label>
                  <Input 
                    id="cardHolder" 
                    placeholder="John Smith"
                    value={cardDetails.cardHolder}
                    onChange={(e) => handleCardDetailsChange('cardHolder', e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input 
                      id="expiryDate" 
                      placeholder="MM/YY"
                      value={cardDetails.expiryDate}
                      onChange={(e) => handleCardDetailsChange('expiryDate', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input 
                      id="cvv" 
                      placeholder="123"
                      type="password" 
                      maxLength={4}
                      value={cardDetails.cvv}
                      onChange={(e) => handleCardDetailsChange('cvv', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Order Summary */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your rental details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-sm">{item.name} ({item.rentalDuration} {item.rentalType}s)</span>
                    <span className="text-sm font-medium">
                      ${(item.rentalType === 'day'
                        ? item.dailyPrice * item.rentalDuration
                        : item.weeklyPrice * item.rentalDuration).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <Separator />
              
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              
              <div className="text-xs text-muted-foreground space-y-2 pt-2">
                <p>
                  By proceeding, you agree to our Terms of Service and Privacy Policy.
                </p>
                <p className="flex items-center gap-1 text-amber-600">
                  <AlertCircle className="h-3 w-3" />
                  Payment is secure and encrypted
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={handlePaymentSubmit}
                disabled={processing}
              >
                {processing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {processing ? 'Processing Payment...' : 'Confirm Payment'}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {/* Payment Complete Dialog */}
      <AlertDialog open={paymentComplete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Payment Successful!</AlertDialogTitle>
            <AlertDialogDescription>
              Your payment has been processed successfully. You will be redirected to the confirmation page shortly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}