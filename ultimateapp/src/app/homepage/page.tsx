// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-dark-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-dark-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 min-h-[70vh] flex items-center">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Launch your CS career</span>
                  <span className="block text-primary-500">
                    even without a job
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Connect with mentors, access resources, build your resume, and
                  find job opportunities tailored for CS graduates.
                </p>
                <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/auth/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/mentors"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-dark-700 hover:bg-dark-600 md:py-4 md:text-lg md:px-10"
                    >
                      Browse mentors
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-dark-900 flex items-center justify-center p-8">
          <div className="relative h-64 w-full sm:h-72 md:h-96 lg:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-dark-900 rounded-xl"></div>
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="text-6xl font-bold text-white opacity-30">
                &lt;/&gt;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              How we help CS students
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
              Everything you need to kickstart your career in tech
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1: Mentorship */}
              <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 hover:border-primary-500 transition-all hover:shadow-lg hover:shadow-primary-900/20">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">
                  Connect with Mentors
                </h3>
                <p className="mt-2 text-gray-300">
                  Get guidance from industry professionals who've been in your
                  shoes. Schedule 1:1 sessions and get practical advice.
                </p>
                <div className="mt-4">
                  <Link
                    href="/mentors"
                    className="text-primary-400 hover:text-primary-300 flex items-center"
                  >
                    Find a mentor
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Feature 2: Resume Builder */}
              <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 hover:border-primary-500 transition-all hover:shadow-lg hover:shadow-primary-900/20">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                <h3 className="text-xl font-medium text-white">
                  Resume Builder
                </h3>
                <p className="mt-2 text-gray-300">
                  Create an ATS-optimized resume tailored for tech companies.
                  Get templates designed for CS roles.
                </p>
                <div className="mt-4">
                  <Link
                    href="/resume-maker"
                    className="text-primary-400 hover:text-primary-300 flex items-center"
                  >
                    Build your resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Feature 3: Job Board */}
              <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 hover:border-primary-500 transition-all hover:shadow-lg hover:shadow-primary-900/20">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">
                  Job Opportunities
                </h3>
                <p className="mt-2 text-gray-300">
                  Discover entry-level and junior developer roles curated for CS
                  graduates with limited experience.
                </p>
                <div className="mt-4">
                  <Link
                    href="/jobs"
                    className="text-primary-400 hover:text-primary-300 flex items-center"
                  >
                    Browse jobs
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
