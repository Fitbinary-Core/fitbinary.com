export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fitbinary",
    url: "https://fitbinary.com",
    logo: "https://fitbinary.com/logo.png",
    description:
      "Business operations suite for gyms and retail. FitCloud manages gym memberships, billing, and multi-branch operations. FitStock manages inventory, stock transfers, and analytics.",
    sameAs: [
      "https://twitter.com/fitbinary",
      "https://linkedin.com/company/fitbinary",
    ],
    hasPart: [
      {
        "@type": "SoftwareApplication",
        name: "FitCloud",
        url: "https://fitcloud.fitbinary.com",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "All-in-one gym management platform for memberships, billing, attendance, and multi-branch operations.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "FitStock",
        url: "https://fitstock.fitbinary.com",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Smart inventory management for products, purchase orders, inter-branch transfers, and real-time analytics.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
