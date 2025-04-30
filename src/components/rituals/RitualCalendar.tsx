
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, addDays } from "date-fns";
import { Calendar as CalendarIcon, MapPin } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  passingDate: z.date({
    required_error: "Please select a date of passing.",
  }),
  passingTime: z.string().min(1, "Please enter the time of passing."),
  location: z.string().min(3, "Please enter a valid location."),
});

type FormValues = z.infer<typeof formSchema>;

const RitualCalendar = () => {
  const [calendarData, setCalendarData] = useState<null | Array<{
    name: string;
    description: string;
    date: Date;
    ritual: string;
  }>>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      passingTime: "12:00",
      location: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real implementation, this would calculate sunrise/sunset times
    // based on the location and generate exact prayer times
    
    // For now, we'll create a simulated calendar
    const ceremonies = [
      {
        name: "Sachkar Ceremony",
        description: "Initial ritual performed shortly after passing",
        date: data.passingDate,
        ritual: "Prayers: Sarosh Baj, Patet Ravaan, Kardeh Avesta"
      },
      {
        name: "Chahrum",
        description: "Fourth day ceremony for the crossing of the soul",
        date: addDays(data.passingDate, 4),
        ritual: "Prayers: Afringan, Farokhshi, Satum"
      },
      {
        name: "Dahm",
        description: "Tenth day ceremony",
        date: addDays(data.passingDate, 10),
        ritual: "Prayers: Afringan, Baj, Satum"
      },
      {
        name: "Siroza",
        description: "Thirtieth day ceremony",
        date: addDays(data.passingDate, 30),
        ritual: "Prayers: Afringan, Farokhshi, Satum"
      },
      {
        name: "Salroz",
        description: "First anniversary of passing",
        date: addDays(data.passingDate, 365),
        ritual: "Prayers: Afringan, Jashan, Satum"
      },
    ];

    setCalendarData(ceremonies);
  };

  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-zoroastrian-blue mb-4">
            Prayer Calendar Calculator
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Generate a customized calendar of rituals and prayers based on the date and time of passing.
            This tool considers traditional Zoroastrian ceremonies and their timing.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-zoroastrian-blue">
              Enter Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="passingDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of Passing</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Select date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="passingTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time of Passing</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location (City)</FormLabel>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <FormControl>
                          <Input className="pl-9" placeholder="e.g. Los Angeles, California" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-zoroastrian-blue hover:bg-zoroastrian-blue/90 text-white"
                  >
                    Generate Calendar
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {calendarData && (
          <div className="mt-8">
            <h3 className="font-serif text-2xl font-semibold text-zoroastrian-blue mb-6 text-center">
              Customized Prayer Calendar
            </h3>
            <div className="grid gap-4">
              {calendarData.map((ceremony, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h4 className="font-serif text-xl text-zoroastrian-blue font-semibold">{ceremony.name}</h4>
                        <p className="text-gray-600 mb-2">{ceremony.description}</p>
                        <p className="text-sm text-zoroastrian-terracotta">{ceremony.ritual}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-4 text-right">
                        <div className="inline-block bg-zoroastrian-light px-4 py-2 rounded-md text-center">
                          <div className="text-sm text-gray-600">Date</div>
                          <div className="font-medium">{format(ceremony.date, "MMMM d, yyyy")}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" onClick={() => window.print()} className="mr-4">
                Print Calendar
              </Button>
              <Button
                className="bg-zoroastrian-gold text-zoroastrian-blue hover:bg-zoroastrian-gold/90"
                onClick={() => window.location.href = "/services"}
              >
                Find Services
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RitualCalendar;
