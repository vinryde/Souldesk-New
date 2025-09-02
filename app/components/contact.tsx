"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ContactForm() {
  return (
    <div className="h-[50rem] w-full rounded-md mt-10 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
        Ready to Transform Your Workforce?
        </h1>

        <p className="text-muted-foreground max-w-lg mx-auto my-4 text-sm text-center relative z-10">
        We believe in building genuine connections. Our team is ready to discuss how Soul Desk can help you foster a valued, accountable, and deeply connected workforce. Reach out to us directly, human to human.
        </p>

        <form className="space-y-4 relative z-10 mt-6">
          <Input type="text" placeholder="Your Name" className="w-full bg-[#fceef5]/40 backdrop-blur-3xl" />
          <Input type="text" placeholder="Company Name" className="w-full bg-[#fceef5]/40 backdrop-blur-3xl" />
          <Input type="email" placeholder="Email Address" className="w-full bg-[#fceef5]/40 backdrop-blur-3xl" />
          <Input
          type="textarea"
            placeholder="Your Message"
            className="w-full min-h-[120px] resize-y bg-[#fceef5]/40 backdrop-blur-3xl"
          />
          <Button type="submit" className="w-full bg-[#fceef5]/40 backdrop-blur-3xl text-gray-600 hover:text-white transition-all duration-200">
            Send Message
          </Button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export { ContactForm };
