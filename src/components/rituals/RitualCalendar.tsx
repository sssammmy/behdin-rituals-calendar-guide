
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
import { convertToZoroastrianDate, formatZoroastrianDate, ZoroastrianDate } from "@/utils/zoroastrianCalendar";

const formSchema = z.object({
  passingDate: z.date({
    required_error: "Please select a date of passing.",
  }),
  passingTime: z.string().min(1, "Please enter the time of passing."),
  location: z.string().min(3, "Please enter a valid location."),
});

type FormValues = z.infer<typeof formSchema>;

interface CeremonyWithZoroastrianDate {
  name: string;
  description: string;
  date: Date;
  ritual: string;
  zoroastrianDate: ZoroastrianDate;
}

const RitualCalendar = () => {
  const [calendarData, setCalendarData] = useState<null | Array<CeremonyWithZoroastrianDate>>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      passingTime: "12:00",
      location: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Enhanced ceremony calculations with Zoroastrian calendar integration
    const ceremonies = [
      {
        name: "Sachkar Ceremony",
        description: "Initial ritual performed shortly after passing",
        date: data.passingDate,
        ritual: "Prayers: Sarosh Baj, Patet Ravaan, Kardeh Avesta"
      },
      {
        name: "Chaarrome",
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
        name: "Siroozeh",
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

    // Add Zoroastrian calendar information to each ceremony
    const ceremoniesWithZoroastrian = ceremonies.map(ceremony => ({
      ...ceremony,
      zoroastrianDate: convertToZoroastrianDate(ceremony.date)
    }));

    setCalendarData(ceremoniesWithZoroastrian);
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
            This tool considers traditional Zoroastrian ceremonies, their timing, and includes Fasli calendar dates.
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
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-serif text-xl text-zoroastrian-blue font-semibold">{ceremony.name}</h4>
                        <p className="text-gray-600 mb-2">{ceremony.description}</p>
                        <p className="text-sm text-zoroastrian-terracotta mb-3">{ceremony.ritual}</p>
                        <div className="bg-zoroastrian-light p-3 rounded-md">
                          <p className="text-sm font-medium text-zoroastrian-blue mb-1">Zoroastrian Calendar:</p>
                          <p className="text-sm text-gray-700">{formatZoroastrianDate(ceremony.zoroastrianDate)}</p>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-4 text-right">
                        <div className="inline-block bg-zoroastrian-light px-4 py-3 rounded-md text-center">
                          <div className="text-sm text-gray-600">Gregorian Date</div>
                          <div className="font-medium">{format(ceremony.date, "MMMM d, yyyy")}</div>
                          <div className="text-xs text-gray-500 mt-1">{format(ceremony.date, "EEEE")}</div>
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
            
            <div className="mt-8 bg-zoroastrian-light p-6 rounded-lg">
              <h4 className="text-lg font-medium text-zoroastrian-blue mb-3">About the Zoroastrian Calendar</h4>
              <p className="text-sm text-gray-700 mb-2">
                The Fasli calendar shown above aligns with the Gregorian calendar and accounts for leap years. 
                The Zoroastrian year (Z.E. - Zoroastrian Era) begins on Nowruz (March 21st) and consists of 
                12 months of 30 days each, plus 5-6 Gatha days at the end of the year.
              </p>
              <p className="text-xs text-gray-600">
                * Calendar calculations include proper leap year adjustments for accurate ceremonial timing.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RitualCalendar;
