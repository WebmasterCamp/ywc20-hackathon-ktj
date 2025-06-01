import { Suspense } from 'react';
import EquipmentList from '@/components/equipment/equipment-list';
import FilterSidebar from '@/components/equipment/filter-sidebar';
import { Loader2 } from 'lucide-react';
import CompareFloatingButton from '@/components/equipment/compare-floating-button';

export default function EquipmentPage({ 
  searchParams 
}: { 
  searchParams: { 
    location?: string, 
    startDate?: string, 
    endDate?: string,
    category?: string,
    priceMin?: string,
    priceMax?: string
  } 
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Equipment Rental</h1>
      
      {/* Active filters summary */}
      {Object.keys(searchParams).length > 0 && (
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <h2 className="text-lg font-medium mb-2">Active Filters:</h2>
          <div className="flex flex-wrap gap-2">
            {searchParams.location && (
              <div className="bg-background px-3 py-1 rounded-full text-sm border">
                Location: {searchParams.location}
              </div>
            )}
            {searchParams.startDate && (
              <div className="bg-background px-3 py-1 rounded-full text-sm border">
                From: {new Date(searchParams.startDate).toLocaleDateString()}
              </div>
            )}
            {searchParams.endDate && (
              <div className="bg-background px-3 py-1 rounded-full text-sm border">
                To: {new Date(searchParams.endDate).toLocaleDateString()}
              </div>
            )}
            {searchParams.category && (
              <div className="bg-background px-3 py-1 rounded-full text-sm border">
                Category: {searchParams.category}
              </div>
            )}
            {(searchParams.priceMin || searchParams.priceMax) && (
              <div className="bg-background px-3 py-1 rounded-full text-sm border">
                Price: ${searchParams.priceMin || '0'} - ${searchParams.priceMax || '∞'}
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filter sidebar */}
        <div className="lg:col-span-1">
          <FilterSidebar />
        </div>
        
        {/* Equipment list */}
        <div className="lg:col-span-3">
          <Suspense fallback={
            <div className="flex justify-center items-center min-h-[400px]">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          }>
            <EquipmentList searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
      
      {/* Compare floating button */}
      <CompareFloatingButton />
    </div>
  );
}