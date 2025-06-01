import React from "react";
import JobCard from "@/components/JobCard";

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

      <section className="max-w-3xl mx-auto space-y-8">
        <JobCard
          title="Software Engineer Intern Full Stack"
          location="Remote · Full-Time"
          description="Help us build beautiful, performant web interfaces for creators and startups around the world."
          applyUrl="https://join.com/companies/follionet/14256571?utm_medium=social_sharing&utm_source=copy_link"
        />
        <JobCard
          title="Product Manager Intern"
          location="Remote · Full-Time"
          description="Craft intuitive, elegant user experiences and collaborate closely with our product and engineering team."
          applyUrl="https://join.com/companies/follionet/14259362?utm_medium=social_sharing&utm_source=copy_link"
        />
      </section>
    </main>
  );
}
