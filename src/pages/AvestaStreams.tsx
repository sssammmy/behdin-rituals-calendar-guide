import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const AvestaStreams = () => {
  const baseUrl = "https://onedrive.live.com/download?cid=5F3C6ADD5B53F3F6&resid=5F3C6ADD5B53F3F6%21";
  
  const streams = [
    { name: "Pish-Goftar (Introduction)", url: `${baseUrl}18732&authkey=!AHVnfekNWIZN8ps` },
    { name: "Sroush-vaj", url: `${baseUrl}18733&authkey=!AHVnfekNWIZN8ps` },
    { name: "Koshti-Bastan", url: `${baseUrl}18734&authkey=!AHVnfekNWIZN8ps` },
    { name: "Gah-e-Havan", url: `${baseUrl}18735&authkey=!AHVnfekNWIZN8ps` },
    { name: "Gah-e-Rapithwan", url: `${baseUrl}18736&authkey=!AHVnfekNWIZN8ps` },
    { name: "Gah-e-Oziran", url: `${baseUrl}18737&authkey=!AHVnfekNWIZN8ps` },
    { name: "Gah-e-Aywisruthrem", url: `${baseUrl}18738&authkey=!AHVnfekNWIZN8ps` },
    { name: "Gah-e-Oshihan", url: `${baseUrl}18739&authkey=!AHVnfekNWIZN8ps` },
    { name: "Khorshid Niyayesh", url: `${baseUrl}18740&authkey=!AHVnfekNWIZN8ps` },
    { name: "Mehr Niyayesh", url: `${baseUrl}18741&authkey=!AHVnfekNWIZN8ps` },
    { name: "Mah Niyayesh", url: `${baseUrl}18742&authkey=!AHVnfekNWIZN8ps` },
    { name: "Atash Niyayesh", url: `${baseUrl}18743&authkey=!AHVnfekNWIZN8ps` },
    { name: "Abzour", url: `${baseUrl}18744&authkey=!AHVnfekNWIZN8ps` },
    { name: "Ormazd Yasht", url: `${baseUrl}18745&authkey=!AHVnfekNWIZN8ps` },
    { name: "Ardibehesht Yasht", url: `${baseUrl}18746&authkey=!AHVnfekNWIZN8ps` },
    { name: "Soroush Yasht-e-Shab", url: `${baseUrl}18747&authkey=!AHVnfekNWIZN8ps` },
    { name: "Haftan Yasht", url: `${baseUrl}18748&authkey=!AHVnfekNWIZN8ps` },
    { name: "Verahram Yasht", url: `${baseUrl}18749&authkey=!AHVnfekNWIZN8ps` },
    { name: "Pish-Goftar-e-Yazeshn-Khani", url: `${baseUrl}18750&authkey=!AHVnfekNWIZN8ps` },
    { name: "Afringan-e-Dahman", url: `${baseUrl}18751&authkey=!AHVnfekNWIZN8ps` },
    { name: "Karde-e-Soroush", url: `${baseUrl}18752&authkey=!AHVnfekNWIZN8ps` },
    { name: "Hamazour-e-Dahman", url: `${baseUrl}18753&authkey=!AHVnfekNWIZN8ps` }
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