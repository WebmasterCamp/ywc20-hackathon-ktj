import Link from 'next/link'
import { PenTool } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <PenTool className="h-6 w-6" />
            <span className="text-xl font-bold">ToolShare</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            Professional tools on demand, without the commitment of ownership.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
            <li><Link href="/equipment" className="text-sm hover:underline">Equipment List</Link></li>
            <li><Link href="/rentals" className="text-sm hover:underline">Rental History</Link></li>
            <li><Link href="/contact" className="text-sm hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-4">Help & Support</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/faq" className="text-sm hover:underline">FAQ</Link></li>
            <li><Link href="/terms" className="text-sm hover:underline">Terms of Service</Link></li>
            <li><Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link></li>
            <li><Link href="/returns" className="text-sm hover:underline">Returns Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <address className="not-italic text-sm text-muted-foreground">
            <p>123 Tool Street</p>
            <p>Toolville, TX 12345</p>
            <p className="mt-2">support@toolshare.com</p>
            <p>(555) 123-4567</p>
          </address>
          <div className="flex gap-4 mt-4">
            {/* Social icons would go here */}
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ToolShare. All rights reserved.
        </div>
      </div>
    </footer>
  )
}