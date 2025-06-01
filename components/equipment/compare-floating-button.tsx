"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetFooter
} from '@/components/ui/sheet'
import { SplitSquareHorizontal, X } from 'lucide-react'
import { useCompareStore } from '@/lib/store'
import Image from 'next/image'

export default function CompareFloatingButton() {
  const [open, setOpen] = useState(false)
  const { compareItems, removeFromCompare, clearCompare } = useCompareStore()
  
  if (compareItems.length === 0) return null
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-4 left-4 shadow-lg gap-2 z-10"
          variant="secondary"
        >
          <SplitSquareHorizontal className="h-4 w-4" />
          Compare ({compareItems.length})
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-auto max-h-[80vh]">
        <SheetHeader>
          <SheetTitle>Compare Tools ({compareItems.length}/3)</SheetTitle>
          <SheetDescription>
            You can compare up to 3 tools side by side
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {compareItems.map(tool => (
              <div key={tool.id} className="relative w-full max-w-[240px] bg-card rounded-lg border p-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 h-6 w-6"
                  onClick={() => removeFromCompare(tool.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                
                <div className="relative h-32 mb-3">
                  <Image 
                    src={tool.image} 
                    alt={tool.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                
                <h3 className="font-medium text-base mb-1">{tool.name}</h3>
                <p className="text-sm mb-1">${tool.dailyPrice.toFixed(2)}/day</p>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </div>
            ))}
            
            {Array(3 - compareItems.length).fill(0).map((_, i) => (
              <div 
                key={`empty-${i}`} 
                className="w-full max-w-[240px] h-[168px] bg-muted/50 rounded-lg border border-dashed border-muted-foreground/20 flex items-center justify-center"
              >
                <p className="text-muted-foreground text-sm">Add tool to compare</p>
              </div>
            ))}
          </div>
        </div>
        
        <SheetFooter className="flex-row justify-between sm:justify-between gap-2">
          <Button variant="outline" onClick={() => clearCompare()}>
            Clear All
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Continue Shopping
            </Button>
            <Link href="/compare" onClick={() => setOpen(false)}>
              <Button disabled={compareItems.length < 2}>
                Compare Details
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}