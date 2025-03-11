import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4v16m-8-8h16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">
            UnemployedCS
          </span>
        </div>
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-8"
        >
          <Link
            href="/"
            className="text-sm text-white hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/mentors"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Mentors
          </Link>
          <Link
            href="/resources"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/jobs"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Jobs
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Button
            size="sm"
            className="bg-white text-black hover:bg-gray-200 rounded-full px-4"
          >
            Sign up
          </Button>
        </div>
      </header>

      <main>
        {/* Main Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            WELCOME TO
            <br />
            <span className="text-5xl md:text-6xl font-extrabold tracking-tight">
              UnemployedCS
              <br />
              Students
            </span>
          </h1>
          <p className="text-gray-400 mb-10 max-w-md mx-auto text-lg">
            Land the tech job you deserve.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg font-medium rounded-md transition-transform hover:scale-105">
            Get Started
          </Button>
        </section>

        {/* Features Section */}
        <section className="bg-zinc-900 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold mb-3 tracking-wide">
                OUR FEATURES
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                Tools, mentorship, and resources specifically designed to help
                CS students land their first tech job.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              {[
                "Mentorship sessions",
                "Resume building",
                "Interview prep",
                "Job placement",
              ].map((alt, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden h-48">
                  <img
                    src={`/api/placeholder/300/200?text=${encodeURIComponent(
                      alt
                    )}`}
                    alt={alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Mentors Section */}
            <section className="flex flex-col md:flex-row gap-12 mb-32 items-center">
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-32 bg-gray-700 rounded-lg absolute -top-4 -left-4 z-0"></div>
                  <div className="w-24 h-32 bg-gray-600 rounded-lg absolute -top-2 -left-2 z-10"></div>
                  <div className="w-24 h-32 bg-white/10 backdrop-blur-sm rounded-lg relative z-20 border border-white/20"></div>
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-bold mb-4">
                  Mentors That Make a Difference
                </h3>
                <p className="text-gray-400 mb-6 text-lg">
                  Connect with industry professionals who understand the
                  challenges of breaking into tech and can provide personalized
                  guidance for your career journey.
                </p>
                <Button className="bg-green-500 hover:bg-green-600 px-6 py-2 text-md transition-colors">
                  Connect Now
                </Button>
              </div>
            </section>

            {/* Courses Section */}
            <section className="mb-32">
              <div className="flex items-center gap-4 mb-4 justify-center">
                <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
                  C
                </div>
                <h3 className="text-3xl font-bold">Expert-Led Courses</h3>
              </div>
              <p className="text-gray-400 mb-6 text-lg max-w-2xl mx-auto text-center">
                Access specialized technical courses designed to fill knowledge
                gaps and teach the practical skills employers are looking for.
              </p>
              <div className="bg-zinc-800 h-48 w-full rounded-lg border border-zinc-700 shadow-lg"></div>
            </section>

            {/* Resume Builder Section */}
            <section className="flex flex-col md:flex-row gap-12 mb-32 items-center">
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-zinc-800 h-32 rounded-md border border-zinc-700 shadow-md"></div>
                  <div className="bg-zinc-800 h-32 rounded-md border border-zinc-700 shadow-md"></div>
                  <div className="bg-zinc-800 h-32 rounded-md border border-zinc-700 shadow-md"></div>
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-bold mb-4">
                  Build a Resume That Gets You Hired
                </h3>
                <p className="text-gray-400 mb-6 text-lg">
                  Our ATS-optimized resume templates are designed for tech roles
                  and have helped hundreds of CS graduates secure interviews at
                  top companies.
                </p>
                <Button className="bg-green-500 hover:bg-green-600 px-6 py-2 text-md transition-colors">
                  Create Resume
                </Button>
              </div>
            </section>

            {/* Apply Section */}
            <section className="mb-32">
              <h3 className="text-3xl font-bold mb-4 text-center">
                Streamlined Apply Process
              </h3>
              <p className="text-gray-400 mb-6 text-lg max-w-2xl mx-auto text-center">
                Apply to entry-level positions with a single click and get
                prioritized access to roles at companies looking for fresh CS
                talent.
              </p>
              <div className="bg-zinc-800 h-48 w-full rounded-lg border border-zinc-700 shadow-lg"></div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-16">
                Start Landing Jobs With Us!
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden transform transition-transform hover:scale-105">
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Basic</h3>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-4xl font-bold mb-1">$1</p>
                    <p className="text-sm text-gray-400 mb-6">per month</p>
                    <ul className="text-gray-300 space-y-3 mb-6">
                      {[
                        "Resume templates",
                        "Job listings",
                        "Community access",
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-500 hover:bg-green-600 rounded-md py-2 transition-colors">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden relative transform transition-transform hover:scale-105">
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    Popular
                  </Badge>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Standard</h3>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-4xl font-bold mb-1">$10</p>
                    <p className="text-sm text-gray-400 mb-6">per month</p>
                    <ul className="text-gray-300 space-y-3 mb-6">
                      {[
                        "All Basic features",
                        "Resume reviews",
                        "Access to courses",
                        "Monthly mentor call",
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-500 hover:bg-green-600 rounded-md py-2 transition-colors">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden transform transition-transform hover:scale-105">
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">Professional</h3>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-4xl font-bold mb-1">$50</p>
                    <p className="text-sm text-gray-400 mb-6">per month</p>
                    <ul className="text-gray-300 space-y-3 mb-6">
                      {[
                        "All Standard features",
                        "Weekly mentor calls",
                        "Mock interviews",
                        "Prioritized job referrals",
                        "1-on-1 career coaching",
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-500 hover:bg-green-600 rounded-md py-2 transition-colors">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} UnemployedCS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
