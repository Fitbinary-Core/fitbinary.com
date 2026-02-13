"use client";

import React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

const FooterColumn = ({ title, links }: { title: string, links: { name: string, href: string }[] }) => (
    <div className="flex flex-col gap-4">
        <h4 className="text-[14px] font-bold text-gray-900 uppercase tracking-widest">{title}</h4>
        <ul className="flex flex-col gap-3">
            {links.map((link) => (
                <li key={link.name}>
                    <Link href={link.href} className="text-[14px] font-medium text-gray-500 hover:text-red-600 transition-colors">
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export const Footer = () => {
    return (
        <footer className="bg-zinc-50 pt-32 pb-20 border-t border-gray-100 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-32">
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10">
                                <img
                                    src="/fitbinary.png"
                                    alt="Fitbinary Logo"
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                            <span className="text-xl font-black tracking-tighter">Fitbinary</span>
                        </div>
                        <p className="text-gray-500 text-sm font-medium leading-[1.8] pr-4">
                            The modern infrastructure for the global fitness industry. Empowering gyms with the technology they need to lead.
                        </p>
                    </div>
                    <FooterColumn
                        title="Products"
                        links={[
                            { name: "FitCloud", href: "/fitcloud" },
                            { name: "FitStock", href: "/fitstock" },
                            { name: "Accounts", href: "/accounts" },
                            { name: "Mobile App", href: "#" }
                        ]}
                    />
                    <FooterColumn
                        title="Solutions"
                        links={[
                            { name: "Enterprise", href: "#" },
                            { name: "Franchise Management", href: "#" },
                            { name: "Boutique Studios", href: "#" },
                            { name: "Inventory Forecasting", href: "#" }
                        ]}
                    />
                    <FooterColumn
                        title="Resources"
                        links={[
                            { name: "Documentation", href: "#" },
                            { name: "System Status", href: "#" },
                            { name: "Success Stories", href: "#" },
                            { name: "Community Hub", href: "#" }
                        ]}
                    />
                    <FooterColumn
                        title="Company"
                        links={[
                            { name: "About Us", href: "/about" },
                            { name: "Careers", href: "#" },
                            { name: "Contact", href: "#" },
                            { name: "Privacy Policy", href: "#" }
                        ]}
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-200 pt-12">
                    <div className="flex items-center gap-8">
                        <span className="text-[12px] font-bold text-gray-400">© 2026 Fitbinary Inc.</span>
                        <div className="flex items-center gap-4">
                            <div className="w-5 h-5 bg-gray-200 rounded-lg" />
                            <div className="w-5 h-5 bg-gray-200 rounded-lg" />
                            <div className="w-5 h-5 bg-gray-200 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-gray-400" />
                            <span className="text-[12px] font-bold text-gray-900">English (United States)</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
