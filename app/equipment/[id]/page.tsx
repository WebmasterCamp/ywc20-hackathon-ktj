import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import EquipmentDetail from '@/components/equipment/equipment-detail';
import { Skeleton } from '@/components/ui/skeleton';
import { tools } from '@/lib/mock-data';

export default function EquipmentDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const toolId = parseInt(params.id);
  
  // Check if the tool exists
  const tool = tools.find(t => t.id === toolId);
  
  if (!tool) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<EquipmentDetailSkeleton />}>
        <EquipmentDetail tool={tool} />
      </Suspense>
    </div>
  );
}

function EquipmentDetailSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image skeleton */}
        <div className="w-full md:w-1/2">
          <Skeleton className="w-full aspect-square rounded-lg" />
        </div>
        
        {/* Details skeleton */}
        <div className="w-full md:w-1/2 space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-24 w-full" />
          
          <div className="space-y-2">
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-12 w-full" />
          </div>
          
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
      
      {/* Specifications skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-1/4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array(6).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}