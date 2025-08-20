'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MailPlus, PencilLine, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const errors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!form.current) return false;

    const nameInput = form.current.elements.namedItem('from_name') as HTMLInputElement;
    const emailInput = form.current.elements.namedItem('reply_to') as HTMLInputElement;
    const messageInput = form.current.elements.namedItem('message') as HTMLTextAreaElement;

    if (!nameInput.value.trim()) {
      errors.name = 'Please fill out this field.';
      isValid = false;
    }

    if (!emailInput.value.trim()) {
      errors.email = 'Please fill out this field.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      errors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      errors.message = 'Please fill out this field.';
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    if (!form.current) {
      setError('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
      return;
    }
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service is not configured correctly. Please contact the site administrator.');
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: (form.current.elements.namedItem('from_name') as HTMLInputElement).value,
      reply_to: (form.current.elements.namedItem('reply_to') as HTMLInputElement).value,
      message: (form.current.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        () => {
          form.current?.reset();
          router.push('/thank-you');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError('Failed to send message. Please try again later.');
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section id="contact" className="w-full max-w-[850px] px-6 md:px-8 py-6 flex flex-col justify-center flex-grow">
      <div className="flex flex-col items-center justify-center space-y-1 text-center">
        <div className="flex items-center gap-2">
          <MailPlus className="h-6 w-6" />
          <h2 className="text-2xl font-bold tracking-tighter">Let's get in touch</h2>
        </div>
        <p className="max-w-[600px] text-foreground/80">
          Have a project in mind or just want to say hi?
        </p>
        <div className="flex items-center gap-2 text-foreground/80">
          <p>Fill out the form below.</p>
          <PencilLine className="h-4 w-4" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[630px] flex-grow flex flex-col justify-center">
        <form ref={form} onSubmit={sendEmail} noValidate>
          <div className="mt-5">
            <Input 
              id="name" 
              name="from_name"
              placeholder="Your name" 
              className="mt-0"
            />
            {validationErrors.name && (
              <p className="mt-1 text-sm text-destructive">{validationErrors.name}</p>
            )}
          </div>
          
          <div className="mt-3">
            <Input 
              id="email" 
              name="reply_to"
              type="email" 
              placeholder="your@email.com" 
              className="mt-5"
            />
            {validationErrors.email && (
              <p className="mt-1 text-sm text-destructive">{validationErrors.email}</p>
            )}
          </div>
          
          <div className="mt-5">
            <Textarea 
              id="message" 
              name="message" 
              placeholder="What's on your mind?" 
              rows={4} 
              className="mt-5"
            />
            {validationErrors.message && (
              <p className="mt-1 text-sm text-destructive">{validationErrors.message}</p>
            )}
          </div>
          
          <div className="mt-5 flex gap-3">
            <Button type="submit" className="w-full text-white" disabled={isSubmitting}>
              <Send />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
          {error && (
            <p className="mt-2 text-sm text-destructive text-center">{error}</p>
          )}
          <div className="h-3"></div>
        </form>
      </div>
    </section>
  );
}
