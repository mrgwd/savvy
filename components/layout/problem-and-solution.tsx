import { ArrowRight, Check } from "lucide-react";
import Section from "../ui/section";

export default function ProblemAndSolution() {
  return (
    <Section>
      {/* <section className="container mx-auto px-4 py-24"> */}
      <div className="relative ">
        {/* Background decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-primary font-medium">
                Banking Reimagined
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Tired of Traditional Banking Hassles?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We've redesigned banking from the ground up to eliminate the
              frustrations of traditional banking.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 relative">
            {/* Traditional Banking Card */}
            <div className="bg-gradient-to-br from-[#06211A]/80 to-[#06211A] p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-red-500/20 p-3 rounded-full mr-4">
                  <svg
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-300">
                  Traditional Banking
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-500/10 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Long Waiting Times</h4>
                    <p className="text-gray-400 text-sm">
                      Hours wasted in queues and waiting for appointments
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-500/10 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Excessive Paperwork</h4>
                    <p className="text-gray-400 text-sm">
                      Endless forms and documentation requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-500/10 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4 text-red-400"
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
                    <h4 className="font-medium mb-1">Hidden Fees</h4>
                    <p className="text-gray-400 text-sm">
                      Unexpected charges buried in the fine print
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-500/10 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Outdated Technology</h4>
                    <p className="text-gray-400 text-sm">
                      Clunky interfaces and limited mobile functionality
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Savvy Banking Card */}
            <div className="bg-gradient-to-br from-primary/20 to-[#06211A] p-8 rounded-2xl border border-primary/30 shadow-xl hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Savvy Banking
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Lightning Fast Setup</h4>
                    <p className="text-gray-300 text-sm">
                      Open an account in minutes, not days or weeks
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      100% Digital Experience
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Everything you need, right from your smartphone
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Transparent Pricing</h4>
                    <p className="text-gray-300 text-sm">
                      Clear fees with no hidden surprises
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Smart Features</h4>
                    <p className="text-gray-300 text-sm">
                      AI-powered insights and automated savings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting line between cards */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-lg:rotate-90 lg:block">
              <div className="w-16 h-16 rounded-full bg-[#06211A] border-4 border-primary flex items-center justify-center shadow-lg">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </Section>
  );
}
