import { ArrowRight, Calendar, CreditCard, Package, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Calendar className="h-10 w-10" />,
    title: "Easy Booking",
    description: "Book tools in advance with our simple online reservation system."
  },
  {
    icon: <Package className="h-10 w-10" />,
    title: "Delivery Options",
    description: "Get tools delivered to your doorstep or pick them up at our locations."
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Secure Payments",
    description: "Pay securely online with multiple payment options available."
  },
  {
    icon: <RefreshCw className="h-10 w-10" />,
    title: "Simple Returns",
    description: "Return process is easy with convenient drop-off or pickup options."
  }
];

export default function FeatureSection() {
  return (
    <>
      <section id="how-it-works\" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Renting tools with ToolShare is quick and easy. Follow these simple steps to get the tools you need for your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/equipment">
              <Button className="group">
                Start Browsing Tools
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why contractors and DIY enthusiasts choose ToolShare for their project needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ToolShare saved me thousands of dollars on equipment I only needed for a single renovation project. The quality was professional-grade.",
                author: "Michael T., Homeowner"
              },
              {
                quote: "As a small contractor, having access to specialty tools without the capital investment has been a game-changer for my business.",
                author: "Sarah L., Contractor"
              },
              {
                quote: "The convenience of having tools delivered to my worksite and picked up when I'm done is incredibly valuable. Great service!",
                author: "David R., DIY Enthusiast"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
                <p className="italic mb-4 text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}