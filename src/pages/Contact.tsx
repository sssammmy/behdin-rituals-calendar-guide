import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent",
      description: "Thank you for contacting Behdin Rituals. We will respond shortly.",
    });
    
    console.log(values);
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-zoroastrian-light py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-zoroastrian-blue mb-6">
                Contact Us
              </h1>
              <p className="text-gray-700 text-lg">
                Have questions or suggestions? We're here to help.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-gray-700 mb-6">
                    We welcome your questions, suggestions, and feedback. Please use the contact form 
                    or reach out to us directly using the information below.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-zoroastrian-blue mb-2">Email</h3>
                      <a href="mailto:sssammmy@gmail.com" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition">
                        sssammmy@gmail.com
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-xl font-medium text-zoroastrian-blue mb-2">Submit Resources</h3>
                      <p className="text-gray-700 mb-2">
                        Know of services or resources that should be included in our directory? 
                        Please share them with us.
                      </p>
                      <a 
                        href="mailto:sssammmy@gmail.com" 
                        className="text-zoroastrian-blue hover:text-zoroastrian-gold transition"
                      >
                        sssammmy@gmail.com
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-xl font-medium text-zoroastrian-blue mb-2">Connect With Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition">
                          <svg 
                            className="w-6 h-6" 
                            fill="currentColor" 
                            viewBox="0 0 24 24" 
                            aria-hidden="true"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                        </a>
                        <a href="#" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition">
                          <svg 
                            className="w-6 h-6" 
                            fill="currentColor" 
                            viewBox="0 0 24 24" 
                            aria-hidden="true"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="font-serif text-2xl font-semibold text-zoroastrian-blue mb-6">
                      Send a Message
                    </h3>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="Subject of your message" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Your message here..." 
                                  className="min-h-[150px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-zoroastrian-blue hover:bg-zoroastrian-blue/90 text-white"
                        >
                          Send Message
                        </Button>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
