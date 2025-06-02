import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HelpCircle, Search, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    value: "item-1",
    question: "ฉันจะเช่าเครื่องมือได้อย่างไร?",
    answer: "เลือกดูรายการเครื่องมือของเรา เลือกเครื่องมือที่คุณต้องการ เลือกวันที่ต้องการเช่า และดำเนินการชำระเงิน คุณจะต้องสร้างบัญชีหากยังไม่มี"
  },
  {
    value: "item-2",
    question: "รับชำระเงินด้วยวิธีใดบ้าง?",
    answer: "เรารับชำระด้วยบัตรเครดิต/เดบิตหลักๆ, e-wallets และบริการเก็บเงินปลายทางในบางพื้นที่ คุณสามารถดูตัวเลือกทั้งหมดได้ที่หน้าชำระเงิน"
  },
  {
    value: "item-3",
    question: "ถ้าเครื่องมือเสียหายระหว่างช่วงเวลาเช่าล่ะ?",
    answer: "โปรดแจ้งความเสียหายทันทีผ่านหน้ารายละเอียดการเช่าของคุณ หรือติดต่อฝ่ายสนับสนุน ค่าซ่อมแซมหรือเปลี่ยนอาจเกิดขึ้นตามเงื่อนไขสัญญาเช่า ทั้งนี้ขึ้นอยู่กับความเสียหายและการที่คุณเลือกซื้อประกันหรือไม่"
  },
  {
    value: "item-4",
    question: "ฉันจะคืนเครื่องมือได้อย่างไร?",
    answer: "คุณสามารถนำเครื่องมือมาคืนที่จุดรับคืนที่เรากำหนด หรือนัดหมายให้ไปรับหากคุณเลือกบริการนั้น ตรวจสอบให้แน่ใจว่าได้อัปโหลดหลักฐานการคืนผ่านหน้ารายละเอียดการเช่าของคุณแล้ว"
  },
  {
    value: "item-5",
    question: "ฉันสามารถขยายเวลาเช่าได้หรือไม่?",
    answer: "ได้ หากเครื่องมือพร้อมให้เช่าต่อ คุณสามารถขอขยายเวลาผ่านหน้ารายละเอียดการเช่าของคุณได้ จะมีค่าใช้จ่ายเพิ่มเติม"
  }
];

export default function HelpCenterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
 <header className="mb-10 text-center">
        <HelpCircle className="h-16 w-16 mx-auto text-primary mb-4" />
 <h1 className="text-4xl font-bold font-headline mb-2">ศูนย์ช่วยเหลือ</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions or get in touch with our support team.
        </p>
      </header>

      <section className="mb-12 max-w-xl mx-auto">
        <div className="relative">
          <Input
 type="search"
            placeholder="Search help articles or FAQs..."
            className="h-12 text-base pl-12 pr-4"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </section>

 <section className="mb-12">
        <h2 className="text-2xl font-semibold font-headline mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqItems.map(item => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger className="text-base text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section>
 <h2 className="text-2xl font-semibold font-headline mb-6 text-center">ติดต่อฝ่ายสนับสนุน</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <MessageSquare className="h-8 w-8 text-primary" />
 <CardTitle className="text-xl">แชทกับเรา</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Get instant help from our support agents via live chat.</p>
 <Button className="w-full">เริ่มแชท</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <Phone className="h-8 w-8 text-primary" />
 <CardTitle className="text-xl">โทรหาเรา</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Speak directly to a support representative.</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="tel:+66001234567">Call +66 (0)0-123-4567</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
