import type { Metadata } from "next";
import CTA from "@/components/CTA";
import { BRAND_NAME } from "@/constants/content";
import { absoluteUrl, buildOpenGraph, buildTwitterCard } from "@/constants/seo";

export const runtime = "edge";
export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND_NAME}`,
  description:
    "This Privacy Policy explains how Lyseibug collects, uses, and protects user information.",
  alternates: { canonical: absoluteUrl("/privacy-policy") },
  openGraph: buildOpenGraph({
    title: `Privacy Policy | ${BRAND_NAME}`,
    description:
      "This Privacy Policy explains how Lyseibug collects, uses, and protects user information.",
    url: absoluteUrl("/privacy-policy"),
  }),
  twitter: buildTwitterCard({
    title: `Privacy Policy | ${BRAND_NAME}`,
    description:
      "This Privacy Policy explains how Lyseibug collects, uses, and protects user information.",
  }),
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        className="relative overflow-hidden border-b border-gray-200/60"
        style={{
          backgroundColor: "#e8f0ff",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(2,6,23,.08) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700">
              This Privacy Policy explains how our mobile application collects,
              uses, and protects user information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <p>
            <strong>Last updated:</strong> February 2026
          </p>

          <h2 className="mt-6 text-xl font-semibold text-indigo-900">Information We Collect</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We may collect personal information such as name, email address,
            and phone number when you register or use the app.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-indigo-900">Third-Party Services</h2>
          <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-600">
            <li>Google Firebase</li>
            <li>Google Sign-In</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold text-indigo-900">Use of Information</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The collected data is used to provide and improve app functionality.
          </p>

          

          <h2 className="mt-6 text-xl font-semibold text-indigo-900">Contact Us</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Email: info@lyseibug.com</p>
        </div>
      </section>

      <CTA />
    </>
  );
}
