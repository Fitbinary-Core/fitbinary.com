import { Metadata } from "next";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us – Fitbinary",
    description: "Get in touch with the Fitbinary team to learn more about our business operations suite for gyms and retail.",
    alternates: {
        canonical: "https://fitbinary.com/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                            Get in touch
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight mb-8">
                            Let's talk about <br />
                            <span className="text-blue-600">your business.</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">
                            Have questions about FitCloud or FitStock? Need a custom enterprise plan? Our team is here to help you modernize your operations.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 text-blue-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Sales</h3>
                                    <p className="text-gray-600 font-medium">sales@fitbinary.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center shrink-0 text-red-600">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Customer Support</h3>
                                    <p className="text-gray-600 font-medium">support@fitbinary.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 text-gray-900">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Headquarters</h3>
                                    <p className="text-gray-600 font-medium">101 Fitness Avenue<br />San Francisco, CA 94105</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50 p-10 lg:p-14 rounded-[40px] border border-gray-100 shadow-2xl shadow-gray-200/50">
                        <h2 className="text-2xl font-black text-gray-900 mb-8">Send us a message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Work Email</label>
                                <input
                                    type="email"
                                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium"
                                    placeholder="john@gym.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Company / Gym Name</label>
                                <input
                                    type="text"
                                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium"
                                    placeholder="Powerhouse Fitness"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">How can we help?</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium resize-none"
                                    placeholder="Tell us about your operational needs..."
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-blue-600/20 mt-4"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
