import { Button } from "../ui/button";
import Section from "../ui/section";
import Image from "next/image";
export default function CardShowcase() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-primary font-medium">
                Premium Banking Card
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Savvy Card Experience
            </h2>
            <p className="text-gray-300 mb-8">
              Our premium metal card is designed for the modern banker. Enjoy
              exclusive benefits, enhanced security, and a seamless payment
              experience worldwide.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">
                    Enhanced Security
                  </h3>
                  <p className="text-gray-400">
                    Advanced fraud protection and real-time transaction alerts
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">
                    Global Acceptance
                  </h3>
                  <p className="text-gray-400">
                    Use your card anywhere in the world with zero foreign
                    transaction fees
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Cashback Rewards</h3>
                  <p className="text-gray-400">
                    Earn up to 3% cashback on all purchases automatically
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button className="bg-primary hover:bg-primary/80 text-[#06211A] font-medium h-12 px-8 rounded-full">
                Get Your Card
              </Button>
            </div>
          </div>

          <div className="order-2 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="relative group *:transform *:transition-transform *:duration-700 mx-auto max-w-sm">
              {/* Replace this Image component with your actual card image */}
              {/* 
                blur decoration
              */}
              <div className="absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
              <Image
                src="/card-back.png"
                width={600}
                height={400}
                alt="Savvy Premium Card"
                className="group-hover:-translate-y-8 -rotate-6 group-hover:-rotate-12"
              />
              <div className="absolute top-1/2 -translate-y-1/2 group-hover:-translate-y-1/3 group-hover:rotate-6">
                <Image
                  src="/card-front.png"
                  width={600}
                  height={400}
                  alt="Savvy Premium Card"
                  className=""
                />
                <div className="absolute hidden sm:block -top-6 -right-6 bg-primary text-[#06211A] rounded-full p-4 shadow-lg">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
