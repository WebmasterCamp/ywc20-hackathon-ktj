"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, Download, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function ConfirmationPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Mock confirmation details
  const confirmationDetails = {
    confirmationNumber: "RA-" + Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
    rentDate: new Date().toLocaleDateString(),
    returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    items: [
      { name: "Professional Drill", duration: "2 days", price: 51.98 },
      { name: "Pressure Washer", duration: "1 day", price: 35.00 }
    ]
  };
  
  const handleSubmit = () => {
    if (!termsAccepted) {
      toast({
        title: "Terms Required",
        description: "You must accept the rental terms and conditions to continue",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate API request to save agreement
    setSubmitted(true);
    
    toast({
      title: "Agreement Accepted",
      description: "Your rental agreement has been accepted and saved. A copy has been emailed to you.",
    });
    
    // Redirect to rental status page after a delay
    setTimeout(() => {
      router.push('/rentals');
    }, 2000);
  };
  
  const downloadAgreement = () => {
    toast({
      title: "Download Started",
      description: "Your rental agreement is being downloaded.",
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Card className="border-2 border-green-500 mb-8">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Payment Successful!</h2>
          <p className="text-muted-foreground">Your rental has been confirmed.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Rental Agreement</CardTitle>
          <CardDescription>
            Please review and accept the rental agreement to complete your order
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Confirmation Details */}
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2">Confirmation Details</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-muted-foreground">Confirmation Number:</p>
              <p className="font-medium">{confirmationDetails.confirmationNumber}</p>
              
              <p className="text-muted-foreground">Rental Date:</p>
              <p>{confirmationDetails.rentDate}</p>
              
              <p className="text-muted-foreground">Return Due Date:</p>
              <p>{confirmationDetails.returnDate}</p>
            </div>
          </div>
          
          {/* Rented Items */}
          <div>
            <h3 className="font-medium mb-2">Rented Items</h3>
            <div className="space-y-2">
              {confirmationDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between py-2 border-b last:border-0">
                  <div>
                    <p>{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                  </div>
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Agreement Text */}
          <div>
            <h3 className="font-medium mb-2">Rental Terms & Conditions</h3>
            <div className="bg-muted p-4 rounded-lg max-h-64 overflow-y-auto text-sm space-y-4">
              <p>
                This Rental Agreement ("Agreement") is entered into between ToolShare ("Company") and the Customer as of the date of acceptance.
              </p>
              <p>
                <strong>1. Equipment Rental.</strong> Company agrees to rent to Customer the equipment listed above ("Equipment") for the specified rental period.
              </p>
              <p>
                <strong>2. Rental Period.</strong> The rental period begins on the date the Equipment is delivered or picked up and ends on the return date specified above.
              </p>
              <p>
                <strong>3. Rental Fees.</strong> Customer agrees to pay the rental fees as specified above. Additional charges may apply for late returns, damage, or loss.
              </p>
              <p>
                <strong>4. Security Deposit.</strong> A security deposit may be required and will be refunded upon return of the Equipment in good condition.
              </p>
              <p>
                <strong>5. Equipment Condition.</strong> Customer acknowledges receiving the Equipment in good working condition and agrees to return it in the same condition, ordinary wear and tear excepted.
              </p>
              <p>
                <strong>6. Use of Equipment.</strong> Customer agrees to use the Equipment in a careful and proper manner and in accordance with all applicable laws and regulations.
              </p>
              <p>
                <strong>7. Maintenance and Repair.</strong> Customer shall not perform any repairs or modifications to the Equipment without prior written consent from Company.
              </p>
              <p>
                <strong>8. Loss or Damage.</strong> Customer is responsible for any loss or damage to the Equipment during the rental period, regardless of cause.
              </p>
              <p>
                <strong>9. Limitation of Liability.</strong> Company shall not be liable for any indirect, incidental, or consequential damages arising from the use of the Equipment.
              </p>
            </div>
          </div>
          
          {/* Accept Terms */}
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="terms" 
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(!!checked)}
            />
            <div className="space-y-1">
              <Label htmlFor="terms" className="font-medium">I accept the terms and conditions</Label>
              <p className="text-sm text-muted-foreground">
                By checking this box, I acknowledge that I have read, understood, and agree to the terms and conditions outlined in the rental agreement.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="outline"
            className="w-full sm:w-auto"
            onClick={downloadAgreement}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Agreement
          </Button>
          <Button 
            className="w-full sm:w-auto"
            onClick={handleSubmit}
            disabled={submitted}
          >
            {submitted ? 'Processing...' : 'Accept & Continue'}
          </Button>
        </CardFooter>
      </Card>
      
      <div className="mt-6 flex items-center justify-center gap-2 p-4 bg-amber-50 rounded-lg text-amber-800 border border-amber-200">
        <AlertCircle className="h-5 w-5" />
        <p className="text-sm">
          A copy of this agreement will be sent to your email address for your records.
        </p>
      </div>
      
      <div className="mt-6 text-center">
        <Link href="/equipment">
          <Button variant="link">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
}