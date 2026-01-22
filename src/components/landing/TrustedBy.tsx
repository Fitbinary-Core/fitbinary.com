"use client";

import React from "react";

const partners = ["IRONCORE", "NEOFLOW", "VERTEX", "AQUAFIT", "TITAN"];

export const TrustedBy = () => {
    return (
        <section className="pb-32 px-6">
            <div className="max-w-7xl mx-auto border-t border-gray-100 pt-16">
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-12 text-center lg:text-left">
                    Trusted by the world's most innovative gyms
                </p>
                <div className="flex flex-wrap justify-between items-center gap-12 grayscale opacity-50 contrast-125">
                    {partners.map(name => (
                        <span key={name} className="text-2xl font-black italic tracking-tighter text-gray-900">{name}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};
