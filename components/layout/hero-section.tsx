import Image from "next/image";
import AppDownloadButtons from "../ui/app-download-buttons";
import Section from "../ui/section";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSsction() {
  return (
    <Section className="pt-36 md:pt-44 lg:pt-56">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white opacity-0 animate-fade-in">
            Banking Made <span className="text-savvy-accent">Effortless.</span>
          </h1>
          <p className="text-gray-300 text-lg opacity-0 animate-fade-in-delay-1">
            The modern banking app that lets you open an account, save
            automatically, invest ethically, and manage money securely – all
            from your phone.
          </p>
          <AppDownloadButtons className="opacity-0 animate-fade-in-delay-2" />
          <div className="flex items-center gap-3 opacity-0 animate-fade-in-delay-3">
            <div className="flex -space-x-3">
              {[...Array(3)].map((_, i) => (
                // <div>
                <Image
                  key={i}
                  src={`/users/user${i + 1}.png`}
                  alt={`User ${i + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 object-cover"
                />
                // </div>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              <span className="text-white font-semibold">5+</span> users already
              trust us
            </p>
          </div>
          <Button
            variant="link"
            // onClick={scrollToFeatures}
            className="flex items-center text-primary transition-colors gap-2 group"
          >
            <span>Explore Features</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="relative flex justify-center">
          <div className="relative z-10 opacity-0 animate-fade-in-delay-2">
            {/* <MobileAppPreview /> */}
            <div>
              <Image
                src="/hero.png"
                alt="Mobile App Preview"
                width={350}
                height={800}
              />
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-savvy-accent/20 blur-3xl"></div>
        </div>
      </div>
    </Section>
  );
}
