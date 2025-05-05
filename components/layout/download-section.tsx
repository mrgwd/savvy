import { CircleCheck } from "lucide-react";
import AppDownloadButtons from "../ui/app-download-buttons";
import Section from "../ui/section";
import MobileAppPreview from "../ui/mobile-app-mockup";
import appImage from "@/public/app.png";
import Image from "next/image";
export default function DownloadSection() {
  return (
    <Section className="text-center">
      <div className="relative h-80 overflow-hidden w-min mx-auto">
        <div className="absolute inset-0 z-50 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="relative w-[240px] h-[800px]">
          <Image
            src={appImage}
            alt="Mobile App Preview"
            // fill
            height={800}
            width={240}
            className="rounded-xl shadow-lg object-cover"
          />
          {/* <MobileAppPreview /> */}
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Ready to Experience Smarter Banking?
        </h2>
        <p className="text-gray-300 mb-8">
          Download now and open your account in minutes, no paperwork or branch
          visits needed.
        </p>
        <AppDownloadButtons className="justify-center" />
        {/* 
        <div className="mt-12 glass-card rounded-xl p-8 max-w-lg mx-auto">
          <CircleCheck className="w-12 h-12 text-savvy-accent mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-gray-300 text-sm">
            Try Savvy with complete confidence. If you're not satisfied with our
            service within the first 30 days, we'll refund any fees you've paid.
          </p>
        </div> */}
      </div>
    </Section>
  );
}
