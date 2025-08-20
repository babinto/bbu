import { Button } from '@/components/ui/button';
import { MailCheck } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div 
      className="bg-background flex flex-col items-center justify-center min-h-screen text-center p-4"
    >
      <div 
        className="p-8 rounded-3xl shadow-lg max-w-sm w-full"
        style={{ backgroundColor: '#fefdee' }}
      >
        <MailCheck className="h-14 w-14 text-accent mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-foreground mb-2">Thank you!</h1>
        <p className="text-muted-foreground mb-6 text-lg">
          Your message was sent gracefully.
          <br />
          I&apos;ll get back to you as soon as possible.
        </p>
        <Button asChild className="mb-1">
          <Link href="/">Bye.</Link>
        </Button>
      </div>
    </div>
  );
}
