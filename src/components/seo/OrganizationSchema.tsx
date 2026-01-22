import React from "react";

export const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Fitbinary",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "description": "Enterprise-grade fitness and gym management platform with multi-tenant SaaS architecture.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "120"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Fitbinary Inc.",
            "url": "https://fitbinary.com",
            "logo": "https://fitbinary.com/logo.png",
            "sameAs": [
                "https://fitstock.fitbinary.com",
                "https://fitcloud.fitbinary.com",
                "https://accounts.fitbinary.com"
            ]
        },
        "relatedLink": [
            "https://fitstock.fitbinary.com",
            "https://fitcloud.fitbinary.com",
            "https://accounts.fitbinary.com"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
