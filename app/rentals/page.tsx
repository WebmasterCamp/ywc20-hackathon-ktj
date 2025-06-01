"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  CheckCircle2, 
  Package, 
  Truck, 
  AlertTriangle, 
  UploadCloud, 
  FileText,
  InfoIcon
} from 'lucide-react';

// Mock rental data
const mockRentals = [
  {
    id: "RA-234567",
    status: "active",
    tools: [
      {
        id: 1,
        name: "Professional Drill",
        image: "https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    startDate: "2025-05-15",
    endDate: "2025-05-18",
    delivery: {
      status: "delivered",
      trackingNumber: "TRK12345678",
      courier: "Express Delivery"
    }
  },
  {
    id: "RA-345678",
    status: "pending",
    tools: [
      {
        id: 3,
        name: "Rotary Hammer",
        image: "https://images.pexels.com/photos/5583061/pexels-photo-5583061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 6,
        name: "Pipe Wrench Set",
        image: "https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    startDate: "2025-05-20",
    endDate: "2025-05-25",
    delivery: {
      status: "processing",
      trackingNumber: "TRK23456789",
      courier: "Express Delivery"
    }
  },
  {
    id: "RA-123456",
    status: "completed",
    tools: [
      {
        id: 2,
        name: "Cordless Impact Wrench",
        image: "https://images.pexels.com/photos/2876328/pexels-photo-2876328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    startDate: "2025-05-01",
    endDate: "2025-05-05",
    delivery: {
      status: "returned",
      trackingNumber: "TRK01234567",
      courier: "Express Delivery"
    }
  }
];

export default function RentalsPage() {
  const [rentals] = useState(mockRentals);
  
  // Filter rentals by status
  const activeRentals = rentals.filter(rental => rental.status === "active");
  const pendingRentals = rentals.filter(rental => rental.status === "pending");
  const completedRentals = rentals.filter(rental => rental.status === "completed");
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  const getRentalDays = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-blue-500 border-blue-500">Pending</Badge>;
      case "completed":
        return <Badge variant="secondary">Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  const getDeliveryStatusInfo = (status: string) => {
    switch (status) {
      case "processing":
        return {
          icon: <Package className="h-5 w-5 text-blue-500" />,
          text: "Processing",
          description: "Your order is being prepared for delivery."
        };
      case "in_transit":
        return {
          icon: <Truck className="h-5 w-5 text-amber-500" />,
          text: "In Transit",
          description: "Your tools are on the way to your location."
        };
      case "delivered":
        return {
          icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
          text: "Delivered",
          description: "Your tools have been delivered successfully."
        };
      case "returning":
        return {
          icon: <Truck className="h-5 w-5 text-purple-500" />,
          text: "Returning",
          description: "Your tools are being returned to our warehouse."
        };
      case "returned":
        return {
          icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
          text: "Returned",
          description: "Your tools have been successfully returned."
        };
      default:
        return {
          icon: <InfoIcon className="h-5 w-5 text-gray-500" />,
          text: status,
          description: "Status information"
        };
    }
  };
  
  const renderRentalCard = (rental: any) => (
    <Card key={rental.id} className="mb-6">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Rental #{rental.id}</CardTitle>
            <CardDescription>
              {formatDate(rental.startDate)} - {formatDate(rental.endDate)} ({getRentalDays(rental.startDate, rental.endDate)} days)
            </CardDescription>
          </div>
          {getStatusBadge(rental.status)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Tools */}
          <div>
            <h3 className="text-sm font-medium mb-2">Rented Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rental.tools.map((tool: any) => (
                <div key={tool.id} className="flex items-center space-x-3 border rounded-lg p-2">
                  <div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0">
                    <Image 
                      src={tool.image} 
                      alt={tool.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{tool.name}</p>
                    <Link href={`/equipment/${tool.id}`} className="text-xs text-primary hover:underline">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Rental Status */}
          <div className="flex items-center gap-2 p-3 rounded-md border">
            <div className="flex-shrink-0">
              {rental.status === "active" ? (
                <Clock className="h-5 w-5 text-amber-500" />
              ) : rental.status === "completed" ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <Clock className="h-5 w-5 text-blue-500" />
              )}
            </div>
            <div>
              <p className="font-medium">
                {rental.status === "active" 
                  ? "Return due on " + formatDate(rental.endDate)
                  : rental.status === "completed"
                    ? "Returned on " + formatDate(rental.endDate)
                    : "Rental starts on " + formatDate(rental.startDate)
                }
              </p>
              {rental.status === "active" && (
                <p className="text-xs text-amber-500">
                  {new Date(rental.endDate) < new Date() 
                    ? "Overdue! Please return immediately" 
                    : `${getRentalDays(new Date().toISOString().split('T')[0], rental.endDate)} days remaining`
                  }
                </p>
              )}
            </div>
          </div>
          
          {/* Delivery Status */}
          {rental.delivery && (
            <div className="flex items-center gap-2 p-3 rounded-md border">
              <div className="flex-shrink-0">
                {getDeliveryStatusInfo(rental.delivery.status).icon}
              </div>
              <div>
                <p className="font-medium">{getDeliveryStatusInfo(rental.delivery.status).text}</p>
                <p className="text-xs text-muted-foreground">
                  {getDeliveryStatusInfo(rental.delivery.status).description}
                </p>
                {rental.delivery.trackingNumber && (
                  <p className="text-xs">
                    Tracking: <span className="font-medium">{rental.delivery.trackingNumber}</span> ({rental.delivery.courier})
                  </p>
                )}
              </div>
            </div>
          )}
          
          {/* Return Warning for active rentals approaching deadline */}
          {rental.status === "active" && new Date(rental.endDate) < new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) && (
            <div className="flex items-start gap-2 p-3 rounded-md bg-amber-50 border border-amber-200 text-amber-800">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="font-medium">Return Deadline Approaching</p>
                <p className="text-sm">
                  Please return your rented tools before {formatDate(rental.endDate)} to avoid late fees.
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2">
        <Link href={`/rentals/${rental.id}`} className="w-full sm:w-auto">
          <Button variant="outline" className="w-full">
            <FileText className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </Link>
        
        {rental.status === "active" && (
          <Link href={`/rentals/${rental.id}/return`} className="w-full sm:w-auto">
            <Button className="w-full">
              <UploadCloud className="mr-2 h-4 w-4" />
              Upload Return Evidence
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Rentals</h1>
      
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="active">
            Active ({activeRentals.length})
          </TabsTrigger>
          <TabsTrigger value="pending">
            Pending ({pendingRentals.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completedRentals.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4">
          {activeRentals.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">You have no active rentals</p>
                <Link href="/equipment">
                  <Button className="mt-4">Browse Equipment</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            activeRentals.map(renderRentalCard)
          )}
        </TabsContent>
        
        <TabsContent value="pending" className="space-y-4">
          {pendingRentals.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">You have no pending rentals</p>
                <Link href="/equipment">
                  <Button className="mt-4">Browse Equipment</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            pendingRentals.map(renderRentalCard)
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {completedRentals.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">You have no completed rentals</p>
                <Link href="/equipment">
                  <Button className="mt-4">Browse Equipment</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            completedRentals.map(renderRentalCard)
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}