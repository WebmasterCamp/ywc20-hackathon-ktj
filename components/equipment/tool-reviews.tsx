"use client"

import { useState } from 'react';
import { Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    toolId: 1,
    userName: "John S.",
    rating: 5,
    comment: "Excellent drill, performed better than expected for my renovation project. Battery life was impressive.",
    date: "2023-08-15T10:30:00Z"
  },
  {
    id: 2,
    toolId: 1,
    userName: "Emma W.",
    rating: 4,
    comment: "Good quality drill, powerful enough for most tasks. The only minor issue was the weight after extended use.",
    date: "2023-07-22T14:45:00Z"
  },
  {
    id: 3,
    toolId: 2,
    userName: "Michael D.",
    rating: 5,
    comment: "This impact wrench made light work of removing stubborn lug nuts. Highly recommend!",
    date: "2023-08-10T09:15:00Z"
  },
  {
    id: 4,
    toolId: 3,
    userName: "Sarah K.",
    rating: 4,
    comment: "The rotary hammer was perfect for installing anchors in concrete walls. Very efficient.",
    date: "2023-07-05T16:30:00Z"
  }
];

export default function ToolReviews({ toolId, toolName }: { toolId: number, toolName: string }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState(mockReviews.filter(r => r.toolId === toolId));
  const [newReview, setNewReview] = useState({
    userName: "",
    rating: 5,
    comment: ""
  });
  
  const handleRatingChange = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };
  
  const handleSubmitReview = () => {
    // Validate form
    if (!newReview.userName.trim() || !newReview.comment.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide your name and review comment",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate submitting review
    setLoading(true);
    
    setTimeout(() => {
      const reviewToAdd = {
        id: Date.now(),
        toolId,
        userName: newReview.userName,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString()
      };
      
      setReviews([reviewToAdd, ...reviews]);
      setNewReview({
        userName: "",
        rating: 5,
        comment: ""
      });
      
      toast({
        title: "Review submitted",
        description: `Thank you for reviewing the ${toolName}`
      });
      
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="space-y-8 p-4 border rounded-md mt-2">
      {/* Write a review section */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="userName">Your Name</Label>
            <Input 
              id="userName"
              value={newReview.userName}
              onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <Label>Rating</Label>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className="focus:outline-none"
                >
                  <Star 
                    className={`h-6 w-6 ${star <= newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <Label htmlFor="comment">Your Review</Label>
            <Textarea 
              id="comment"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              placeholder="Share your experience with this tool"
              rows={4}
            />
          </div>
          
          <Button 
            onClick={handleSubmitReview} 
            disabled={loading}
            className="w-full"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Review
          </Button>
        </div>
      </div>
      
      {/* Reviews list */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
        
        {reviews.length === 0 ? (
          <div className="text-center py-8 border rounded-lg">
            <p className="text-muted-foreground">No reviews yet. Be the first to review this tool!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">{review.userName}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
                <p className="mt-2 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}