"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  
  const handleSearch = () => {
    // Build query parameters
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (startDate) params.append('startDate', startDate.toISOString());
    if (endDate) params.append('endDate', endDate.toISOString());
    
    // Navigate to equipment page with search parameters
    router.push(`/equipment?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      <div className="col-span-1">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              id="location" 
              placeholder="Enter your location" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>
      
      <div className="col-span-1">
        <div className="space-y-2">
          <Label htmlFor="start-date">Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="start-date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="col-span-1">
        <div className="space-y-2">
          <Label htmlFor="end-date">End Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="end-date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                fromDate={startDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="col-span-1">
        <Button className="w-full" onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}