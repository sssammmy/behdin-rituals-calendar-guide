import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const AvestaStreams = () => {
  const streams = [
    { name: "Ashem Vohoo", url: "https://www.mehrmazdayasnan.com/Data/MP3/Avesta_Mobed_Firozgari/Ashem_Voho.mp3" },
    { name: "Yata Ahoo", url: "https://www.mehrmazdayasnan.com/Data/MP3/Avesta_Mobed_Firozgari/Yataaho.mp3" },
    { name: "Soroosh Vaj", url: "https://www.mehrmazdayasnan.com/Data/MP3/Avesta_Mobed_Firozgari/Sroush_vaj.mp3" },
    { name: "Koshti", url: "https://www.mehrmazdayasnan.com/Data/MP3/Avesta_Mobed_Firozgari/Koshti_Bastan.mp3" },
    { name: "Gahe Havan", url: "https://www.mehrmazdayasnan.com/Data/MP3/Avesta_Mobed_Firozgari/Gah_e_Havan.mp3" },
    { name: "Afaringan", url: "https://www.mehrmazdayasnan.com/Data/MP3/Avesta_Mobed_Firozgari/Afringan_e_Dahman.mp3" },
    { name: "Karde-e-Soroosh", url: "https://www.mehrmazdayasnan.com/Data/MP3/Avesta_Mobed_Firozgari/Karde_e_Soroush.mp3" },
    { name: "Tandorosti", url: "https://www.mehrmazdayasnan.com/Data/MP3/Avesta_Mobed_Firozgari/Tandorsti.mp3" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Avesta Streams
            </h1>
            <p className="text-lg text-muted-foreground">
              Listen to sacred Zoroastrian prayers and recitations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {streams.map((stream, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{stream.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <audio controls className="w-full">
                      <source src={stream.url} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <a
                      href={stream.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zoroastrian-blue hover:text-zoroastrian-blue/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Open in new tab
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AvestaStreams;