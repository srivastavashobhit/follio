// src/app/careers/page.tsx
import React from "react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-follio-navy px-6 py-24">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Join the Follio Team</h1>
        <p className="text-gray-600 text-lg mb-12">
          We’re building the future of digital portfolios. If you’re excited about design,
          AI, and making tech accessible, we’d love to hear from you.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        {/* Job Postings */}
        <div className="space-y-8">
          {/* Example Job */}
          <div className="p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold">Frontend Engineer</h2>
            <p className="text-gray-700 mb-4">Remote · Full-Time</p>
            <p className="text-gray-600 mb-4">
              Help us build beautiful, performant web interfaces for creators and startups around the world.
            </p>
            <a
              href="mailto:jobs@follio.net?subject=Application: Frontend Engineer"
              className="inline-block text-sm font-medium text-white bg-follio-blue hover:bg-follio-teal transition px-4 py-2 rounded-md"
            >
              Apply Now
            </a>
          </div>

          {/* Add more job blocks here */}
        </div>
      </section>
    </main>
  );
}
