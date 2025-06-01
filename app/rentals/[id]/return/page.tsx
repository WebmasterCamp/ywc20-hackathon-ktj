"use client"

import { useState } from 'react';
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  UploadCloud, 
  Loader2, 
  X, 
  FileImage, 
  ArrowLeft, 
  CheckCircle2 
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

export default function UploadReturnEvidentPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [comments, setComments] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Convert FileList to array and append to existing files
      const newFiles = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };
  
  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };
  
  const handleSubmit = () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one photo as return evidence",
        variant: "destructive"
      });
      return;
    }
    
    setUploading(true);
    
    // Simulate uploading files
    setTimeout(() => {
      setUploading(false);
      setUploadComplete(true);
      
      toast({
        title: "Return evidence uploaded",
        description: "Your return evidence has been successfully submitted",
      });
      
      // Redirect after a delay
      setTimeout(() => {
        router.push('/rentals');
      }, 2000);
    }, 2000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => router.push('/rentals')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Rentals
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Upload Return Evidence</CardTitle>
          <CardDescription>
            For rental #{params.id}. Please upload photos of the tools you're returning.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* File Upload */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Upload Photos</h3>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              {!uploadComplete ? (
                <>
                  <UploadCloud className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop files here, or click to browse
                  </p>
                  <Input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                    multiple
                    disabled={uploading}
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => document.getElementById('file-upload')?.click()}
                    disabled={uploading}
                  >
                    Browse Files
                  </Button>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                  <p className="font-medium">Upload Complete!</p>
                  <p className="text-sm text-muted-foreground">
                    Your return evidence has been successfully submitted.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Uploaded files preview */}
          {uploadedFiles.length > 0 && !uploadComplete && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Uploaded Files ({uploadedFiles.length})</h3>
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted p-2 rounded-md">
                    <div className="flex items-center">
                      <FileImage className="h-5 w-5 text-blue-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium truncate max-w-[200px]">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeFile(index)}
                      disabled={uploading}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Additional Comments */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Additional Comments</h3>
            <Textarea 
              placeholder="Add any comments about the condition of the tools or the return process"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              disabled={uploading || uploadComplete}
              className="resize-none"
              rows={4}
            />
          </div>
          
          {/* Instructions */}
          <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
            <h3 className="text-sm font-medium text-blue-800 mb-2">Return Instructions</h3>
            <ul className="text-sm text-blue-700 space-y-1 list-disc pl-4">
              <li>Take clear photos of each tool showing its condition</li>
              <li>Make sure all attachments and accessories are visible</li>
              <li>If there's any damage, take close-up photos of the damaged areas</li>
              <li>Include photos of the packing/shipping label if returning by mail</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => router.push('/rentals')}
            disabled={uploading}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={uploading || uploadComplete}
          >
            {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {uploading ? 'Uploading...' : 'Submit Return Evidence'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}