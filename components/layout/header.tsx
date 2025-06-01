"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PenTool, ShoppingCart, Menu, X, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Equipment', path: '/equipment' },
  { name: 'Rental History', path: '/rentals' },
  { name: 'Contact Us', path: '/contact' }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-200",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <PenTool className="h-6 w-6" />
          <span className="text-xl font-bold">ToolShare</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon" aria-label="User Profile">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-sm font-medium px-2 py-1 rounded-md transition-colors hover:bg-muted"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}