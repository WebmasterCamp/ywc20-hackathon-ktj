import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-16rem)]">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <LogIn className="h-10 w-10 mx-auto text-primary mb-3" />
          <CardTitle className="text-2xl font-bold font-headline">เข้าสู่ระบบ ช่างเช่า</CardTitle>
          <CardDescription>เข้าถึงบัญชีของคุณและจัดการการเช่าของคุณ</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">ที่อยู่อีเมล</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
                <Label htmlFor="password">รหัสผ่าน</Label>
                <Link href="/forgot-password" passHref className="text-xs text-primary hover:underline">
                    ลืมรหัสผ่าน?
                </Link>
            </div>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Login</Button>
          <p className="text-xs text-center text-muted-foreground">
            ยังไม่มีบัญชีใช่ไหม?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              ลงทะเบียน
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
