import React from "react";

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-follio-navy">

      {/* Hero Section */}

    <section className="py-24 px-8 text-center max-w-4xl mx-auto">
    <h1 className="text-5xl font-bold leading-tight mb-6">
        <span className="text-follio-blue">Create Stunning</span>{" "}
        <span className="text-follio-teal">Digital Portfolios</span>{" "}
        <span className="text-follio-blue">Effortlessly</span>
    </h1>
    <p className="text-lg text-gray-700 mb-10">
        Follio helps individuals and businesses build beautiful, customizable portfolios in minutes.
        <br className="hidden sm:block" />
        No coding. Just content. Let AI do the rest.
    </p>
    <Button
    size="lg"
    className="px-8 py-6 text-white text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition"
    style={{
        backgroundImage: "linear-gradient(to right, #34D0F2, #3EF2A9)",
        backgroundSize: "200% auto",
        backgroundPosition: "left center",
    }}
    >
    <RocketIcon className="mr-2" /> Build Your Portfolio
    </Button>
    </section>      

    {/* Features */}
      <section id="features" className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Feature title="AI-Driven" description="Let Follio’s AI transform your content into a polished digital presence." />
          <Feature title="Drag-and-Drop Simplicity" description="No code, no stress. Upload, link, and launch." />
          <Feature title="Branded Customization" description="Use templates, tweak styles, and show off your personality." />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-follio-purple">Why Follio?</h2>
        <p className="text-gray-700 text-lg">
          We believe your digital presence should be effortless and striking. Follio removes the noise and delivers beautiful, AI-powered portfolios that truly represent you.
        </p>
      </section>




    {/* HOW IT WORKS SECTION */}
    <section className="py-24 px-6 bg-white max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">How Follio Works</h2>
    <div className="grid md:grid-cols-3 gap-12">
        <Step icon="📝" title="Upload Your Content" desc="Share your resume, LinkedIn, blog, or images. No formatting needed." />
        <Step icon="⚙️" title="Let Follio Handle Design" desc="AI organizes your content and applies a stunning, responsive layout." />
        <Step icon="🚀" title="Publish in Minutes" desc="Launch a professional portfolio with your brand, instantly." />
    </div>
    </section>

    {/* DEMO PLACEHOLDER */}
    {/* <section className="py-16 bg-gray-50 text-center">
    <h2 className="text-2xl font-semibold mb-6">See Follio in Action (Coming Soon)</h2>
    <img
        src="/demo-placeholder.gif"
        alt="Follio demo animation"
        className="mx-auto rounded-xl shadow-lg w-full max-w-3xl"
    />
    <p className="text-gray-500 text-sm mt-4">Live product demo coming soon. Stay tuned.</p>
    </section> */}

    {/* CTA BANNER */}
    
    <section className="bg-white text-center py-16 px-6 mt-20 rounded-xl max-w-5xl mx-auto shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-follio-navy">Ready to build your digital presence?</h2>
      <p className="text-follio-navy text-lg mb-6">
        Start your Follio in minutes — it’s free and beautiful.
      </p>
    <button
      className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-[#34D0F2] to-[#3EF2A9] text-white font-semibold text-base shadow-md hover:opacity-90 transition"
    >
      Get Started Now
    </button>
    </section>


      {/* Footer */}
      <footer className="py-12 px-8 bg-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Follio. All rights reserved.
      </footer>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all border-t-4 border-follio-blue">
      <h3 className="text-xl font-semibold mb-2 text-follio-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Step({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="text-5xl">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}