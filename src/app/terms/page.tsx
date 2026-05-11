import Footer from "@/components/landing/Footer";

const sections = [
  {
    title: "Acceptance of terms",
    content:
      "By accessing or using any Fitbinary product or service — including fitbinary.com, FitCloud, FitStock, and any associated APIs — you agree to be bound by these Terms of Service. If you do not agree, do not use the services. If you are using Fitbinary on behalf of a business entity, you represent that you have authority to bind that entity to these terms.",
  },
  {
    title: "Accounts and registration",
    content:
      "To use Fitbinary products, you must create an account and provide accurate, complete information. You are responsible for maintaining the security of your account credentials. Fitbinary is not liable for any loss or damage resulting from unauthorized access to your account. You must promptly notify us at support@fitbinary.com if you suspect unauthorized use of your account.\n\nYou must be at least 18 years of age to create a Fitbinary account. By creating an account, you confirm that you meet this requirement.",
  },
  {
    title: "Permitted use",
    content:
      "Fitbinary grants you a limited, non-exclusive, non-transferable, revocable license to use the services for your internal business operations, subject to these terms.\n\nYou may not: (a) sublicense, resell, or distribute Fitbinary services without written permission; (b) use the services to build a competing product; (c) reverse-engineer, decompile, or disassemble any part of the platform; (d) use the services in violation of applicable law; (e) attempt to gain unauthorized access to any system or data; or (f) interfere with the availability or performance of the services.",
  },
  {
    title: "Subscriptions and billing",
    content:
      "Fitbinary services are offered on a subscription basis. Pricing and billing terms are specified during account setup and may be updated from time to time with advance notice.\n\nSubscriptions are billed in advance on a monthly or annual cycle as selected. By providing billing information, you authorize Fitbinary to charge your payment method for all applicable fees.\n\nFailed payments may result in service suspension. Fitbinary will notify you of failed payments and provide a reasonable opportunity to update your payment method before suspending access.\n\nAll fees are non-refundable except where required by applicable law or as explicitly stated in our refund policy.",
  },
  {
    title: "Cancellation",
    content:
      "You may cancel your Fitbinary subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period. Your account and data will remain accessible until the end of the period.\n\nFitbinary may terminate or suspend your account immediately if you violate these terms, engage in fraudulent activity, or if required by law. In such cases, you will be notified where legally permissible.",
  },
  {
    title: "Your data",
    content:
      "You retain all ownership of the data you input into Fitbinary products, including member records, inventory data, and business information. Fitbinary processes this data on your behalf as a data processor, not a data controller.\n\nFitbinary will not access your data except to provide the services, troubleshoot issues at your request, or as required by law. We will not use your customer data for advertising, profiling, or any purpose outside of providing the Fitbinary services.\n\nUpon account cancellation, you may export your data before the account closes. After the 90-day retention period following cancellation, your data will be deleted from our systems.",
  },
  {
    title: "Intellectual property",
    content:
      "All intellectual property in the Fitbinary platform — including software, design, trademarks, and documentation — belongs to Fitbinary Inc. or its licensors. These terms do not grant you any rights to Fitbinary's intellectual property beyond the limited license to use the services.\n\nYou grant Fitbinary a limited license to host, store, and process your data solely to provide the services. You represent that you have all rights necessary to provide this data to Fitbinary.",
  },
  {
    title: "Confidentiality",
    content:
      "Each party agrees to keep the other's confidential information (including pricing, technical details, and business data) confidential and not to disclose it to third parties without written consent. This obligation does not apply to information that is publicly known, independently developed, or required to be disclosed by law.",
  },
  {
    title: "Uptime and service levels",
    content:
      "Fitbinary targets 99.9% monthly uptime for core services. Scheduled maintenance windows are communicated in advance where possible. Fitbinary is not liable for service interruptions caused by factors outside its reasonable control, including internet outages, force majeure events, or third-party service failures.\n\nService level commitments, if any, are specified in your subscription plan or a separate service level agreement.",
  },
  {
    title: "Limitation of liability",
    content:
      "To the maximum extent permitted by applicable law, Fitbinary's total liability to you for any claim arising from or related to these terms or the services shall not exceed the total fees you paid to Fitbinary in the 12 months preceding the claim.\n\nFitbinary shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of revenue, data, goodwill, or business interruption — even if advised of the possibility of such damages.\n\nSome jurisdictions do not allow the exclusion of certain warranties or the limitation of liability, so some of the above limitations may not apply to you.",
  },
  {
    title: "Disclaimer of warranties",
    content:
      'The Fitbinary services are provided "as is" and "as available" without warranty of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. Fitbinary does not warrant that the services will be error-free, uninterrupted, or free of harmful components.',
  },
  {
    title: "Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless Fitbinary Inc., its officers, directors, employees, and agents from any claims, liabilities, damages, and expenses (including reasonable attorneys' fees) arising from your use of the services, violation of these terms, or infringement of any third-party rights.",
  },
  {
    title: "Governing law and disputes",
    content:
      "These terms are governed by the laws of Nepal. Any dispute arising from or related to these terms shall first be attempted to be resolved through good-faith negotiation. If the dispute cannot be resolved informally, it shall be submitted to binding arbitration in Kathmandu, Nepal, in accordance with applicable arbitration rules.\n\nNothing in this section prevents either party from seeking injunctive or other equitable relief from a court of competent jurisdiction.",
  },
  {
    title: "Changes to terms",
    content:
      "Fitbinary may update these Terms of Service from time to time. We will provide at least 14 days' notice of material changes via email or a prominent notice in the platform. Continued use of the services after the effective date of changes constitutes acceptance of the updated terms.\n\nIf you do not agree to the updated terms, you must stop using the services and may cancel your account before the effective date.",
  },
  {
    title: "General provisions",
    content:
      "These terms, together with our Privacy Policy and any subscription agreements, constitute the entire agreement between you and Fitbinary regarding the services. If any provision of these terms is found unenforceable, the remaining provisions remain in full force and effect.\n\nFitbinary's failure to enforce any right or provision of these terms does not constitute a waiver of that right or provision. You may not assign your rights under these terms without Fitbinary's written consent. Fitbinary may assign its rights without restriction.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about these Terms of Service, please contact us:\n\nFitbinary Inc.\nKathmandu, Nepal\nhello@fitbinary.com",
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Header */}
      <section className="bg-zinc-950 pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
              Legal
            </span>
          </div>
          <h1 className="text-[2.5rem] font-black tracking-tight leading-[1.05] text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-zinc-500 text-[14px]">
            Last updated: May 11, 2026 &nbsp;·&nbsp; Effective: May 11, 2026
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-600 text-[16px] leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of
            Fitbinary Inc.'s products and services, including fitbinary.com,
            FitCloud, FitStock, and all associated APIs and applications
            (collectively, the "Services"). Please read these Terms carefully
            before using the Services.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section, i) => (
            <div key={section.title}>
              <h2 className="text-[1.25rem] font-black text-zinc-900 tracking-tight mb-4 pb-4 border-b border-zinc-100">
                {i + 1}. {section.title}
              </h2>
              <p className="text-[14px] text-zinc-500 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
