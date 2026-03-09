export const WebSiteSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Fitbinary",
        url: "https://fitbinary.com",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://fitbinary.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
        hasPart: [
            {
                "@type": "WebPage",
                name: "FitCloud",
                url: "https://fitbinary.com/fitcloud",
                description: "Gym management software for memberships, billing, and multi-branch operations.",
            },
            {
                "@type": "WebPage",
                name: "FitStock",
                url: "https://fitbinary.com/fitstock",
                description: "Inventory management for products, stock transfers, and multi-location tracking.",
            },
            {
                "@type": "WebPage",
                name: "Pricing",
                url: "https://fitbinary.com/pricing",
            },
            {
                "@type": "WebPage",
                name: "Documentation",
                url: "https://fitbinary.com/docs",
            },
            {
                "@type": "WebPage",
                name: "Contact",
                url: "https://fitbinary.com/contact",
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
