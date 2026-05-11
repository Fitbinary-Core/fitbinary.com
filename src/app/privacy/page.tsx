import Footer from "@/components/landing/Footer";

const sections = [
  {
    title: "Information we collect",
    content: [
      {
        sub: "Account and business information",
        text: "When you create a Fitbinary account, we collect your name, email address, business name, and billing details. This information is used to provision your account, process payments, and communicate with you about your subscription.",
      },
      {
        sub: "Member data you input",
        text: "As a Fitbinary customer, you may input data about your own members, staff, and business operations (such as member names, contact details, membership plans, and attendance records). This data belongs to you. We process it on your behalf as a data processor and do not use it for any purpose other than providing the Fitbinary services.",
      },
      {
        sub: "Usage data",
        text: "We collect information about how you use Fitbinary products, including pages visited, features used, and actions taken. This helps us improve the platform and identify issues.",
      },
      {
        sub: "Technical data",
        text: "We automatically collect certain technical information including your IP address, browser type, device type, and operating system when you access Fitbinary services.",
      },
    ],
  },
  {
    title: "How we use your information",
    content: [
      {
        sub: "Providing and improving services",
        text: "We use your information to deliver Fitbinary products, process transactions, send service-related communications, and improve platform functionality.",
      },
      {
        sub: "Customer support",
        text: "We use your account information and usage data to diagnose issues, respond to support requests, and assist you with your Fitbinary products.",
      },
      {
        sub: "Security and fraud prevention",
        text: "We analyze usage patterns and account activity to detect and prevent unauthorized access, fraud, and abuse of the Fitbinary platform.",
      },
      {
        sub: "Legal compliance",
        text: "We may use your information to comply with applicable laws, regulations, and legal processes, including responding to lawful requests from public authorities.",
      },
    ],
  },
  {
    title: "Data sharing and disclosure",
    content: [
      {
        sub: "We do not sell your data",
        text: "Fitbinary does not sell, rent, or trade your personal information or your members' data to third parties for marketing or commercial purposes.",
      },
      {
        sub: "Service providers",
        text: "We share data with trusted third-party service providers who assist in delivering Fitbinary services — such as cloud infrastructure, payment processing, and email delivery. These providers are contractually bound to protect data and use it only for the services they provide to us.",
      },
      {
        sub: "Legal requirements",
        text: "We may disclose your information when required by law, regulation, legal process, or government request, or when necessary to protect the rights and safety of Fitbinary, its customers, or the public.",
      },
      {
        sub: "Business transfers",
        text: "If Fitbinary is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email or prominent notice on our website before your data becomes subject to a different privacy policy.",
      },
    ],
  },
  {
    title: "Data retention",
    content: [
      {
        sub: "Active accounts",
        text: "We retain your account and business data for as long as your Fitbinary account is active or as needed to provide you with services.",
      },
      {
        sub: "After account closure",
        text: "After you close your account, we retain your data for up to 90 days to allow for account recovery or data export. After this period, your data is deleted from our active systems. Some data may be retained for longer periods where required by law or for legitimate business purposes such as resolving disputes and enforcing our agreements.",
      },
      {
        sub: "Your members' data",
        text: "Data you store in Fitbinary about your members is retained as long as your account is active. Upon account closure or upon your written request, we will delete this data within 30 days.",
      },
    ],
  },
  {
    title: "Your rights",
    content: [
      {
        sub: "Access and portability",
        text: "You may request a copy of the personal data we hold about you and your business at any time. We will provide this in a portable format within 30 days of your request.",
      },
      {
        sub: "Correction",
        text: "If any personal data we hold about you is inaccurate, you may request that we correct it. You can update most account information directly within the Fitbinary platform.",
      },
      {
        sub: "Deletion",
        text: "You may request that we delete your personal data. Requests for deletion of account data will be processed within 30 days, subject to any legal retention requirements.",
      },
      {
        sub: "Objection and restriction",
        text: "You may object to certain processing of your data or request that we restrict how we use it. Contact us at hello@fitbinary.com with your request and we will respond within 30 days.",
      },
    ],
  },
  {
    title: "Cookies and tracking",
    content: [
      {
        sub: "Essential cookies",
        text: "Fitbinary uses essential cookies to keep you signed in, maintain your session, and provide core platform functionality. These cannot be disabled without breaking the service.",
      },
      {
        sub: "Analytics",
        text: "We use privacy-respecting analytics to understand how our platform is used in aggregate. We do not use advertising trackers or cross-site behavioral tracking.",
      },
    ],
  },
  {
    title: "Security",
    content: [
      {
        sub: "How we protect your data",
        text: "Fitbinary uses industry-standard security measures including encryption at rest and in transit, access controls, and regular security reviews. See our Security page for full details on our security practices.",
      },
      {
        sub: "Breach notification",
        text: "In the event of a data breach that affects your personal data, we will notify you and relevant authorities as required by applicable law, typically within 72 hours of becoming aware of the breach.",
      },
    ],
  },
  {
    title: "International data transfers",
    content: [
      {
        sub: "Where we store data",
        text: "Fitbinary is headquartered in Kathmandu, Nepal. Your data may be processed and stored in Nepal and in countries where our cloud infrastructure and service providers operate. We ensure that appropriate safeguards are in place for any international transfers of personal data.",
      },
    ],
  },
  {
    title: "Children's privacy",
    content: [
      {
        sub: "Age restrictions",
        text: "Fitbinary products are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a minor, please contact us and we will delete it promptly.",
      },
    ],
  },
  {
    title: "Changes to this policy",
    content: [
      {
        sub: "Updates",
        text: "We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email or through a prominent notice in the Fitbinary platform at least 14 days before the changes take effect. Continued use of Fitbinary after the effective date constitutes acceptance of the updated policy.",
      },
    ],
  },
  {
    title: "Contact us",
    content: [
      {
        sub: "Privacy inquiries",
        text: "If you have questions, concerns, or requests related to this Privacy Policy or the handling of your personal data, please contact us at:\n\nFitbinary Inc.\nKathmandu, Nepal\nhello@fitbinary.com",
      },
    ],
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
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
            Fitbinary Inc. ("Fitbinary", "we", "us", or "our") operates
            fitbinary.com and the Fitbinary suite of products, including
            FitCloud and FitStock. This Privacy Policy explains how we collect,
            use, disclose, and protect information when you use our services. By
            using Fitbinary, you agree to the practices described in this
            policy.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-14">
          {sections.map((section, i) => (
            <div key={section.title}>
              <h2 className="text-[1.25rem] font-black text-zinc-900 tracking-tight mb-6 pb-4 border-b border-zinc-100">
                {i + 1}. {section.title}
              </h2>
              <div className="space-y-6">
                {section.content.map((item) => (
                  <div key={item.sub}>
                    <h3 className="text-[14px] font-bold text-zinc-700 mb-2">
                      {item.sub}
                    </h3>
                    <p className="text-[14px] text-zinc-500 leading-relaxed whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
