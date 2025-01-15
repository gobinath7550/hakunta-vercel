"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

export default function WhoWeAre() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <html lang="en">
            <head>
                <title>{"Hakunta - About Us"}</title>
                <meta
                    name="description"
                    content="Leading IT solutions: E-Commerce, ERP, SAP, Business Automation & Data Analytics to streamline operations & drive business growth."
                />
                <meta
                    name="keywords"
                    content="Hakunta, Hakunta Info, Hakunta Info Tech, Hakunta Info Tech Private, Hakunta Info Tech Pvt Ltd, Hakunta Info Tech Private Limited, Hakunta Information Technology, Hakunta IT solutions, Information Technology"
                />
                <meta name="author" content="Hakunta Info Tech Pvt. Ltd." />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Hakunta - Careers" />
                <meta
                    property="og:description"
                    content="Leading IT solutions: E-Commerce, ERP, SAP, Business Automation & Data Analytics to streamline operations & drive business growth."
                />
                <meta property="og:image" content="/images/main-logo.png" />
                <meta property="og:url" content="https://hakunta.com/careers" />
            </head>
            <body className={`antialiased bg-white`}>
                <Header />
                <main className="relative overflow-hidden">
                    <div className="max-w-7xl m-auto bg-[#233888] border-b-2 border-[#e5e6e3]">
                        <div className="p-6 mb-12 lg:mb-0 lg:px-8 lg:flex gap-6 lg:gap-8">
                            <div className="min-w-64 invisible"> </div>
                            <div>
                                <h1 className="font-bold text-[1.8rem] lg:text-[2.2rem] text-white">
                                    {"About Us"}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl m-auto">
                        <div className="p-6 lg:px-8 text-[#233888] lg:flex gap-6 lg:gap-8">
                            <div
                                className="min-w-64 relative -top-[4.5rem] bg-[#233888] shadow-lg p-4 border-2 flex items-center justify-center"
                                data-aos="fade-out"
                            >
                                <Image
                                    src="/images/about-us.webp"
                                    alt="G"
                                    width={500}
                                    height={500}
                                    className="w-full h-full"
                                    priority
                                />
                            </div>
                            <div
                                className="max-lg:-mt-10"
                                data-aos="slide-left"
                            >
                                <h2 className="text-[1.2rem] mb-2">
                                    {"Who We Are?"}
                                </h2>
                                <p className="text-gray-600 text-md tracking-wide leading-8">
                                    {
                                        "Welcome to Hakunta, where innovation meets excellence in Information Technology. We are a dynamic startup committed to transforming businesses through cutting-edge solutions in E-Commerce, ERP, SAP, Business Automation, and Data Analytics. Our journey began with a vision to empower businesses with tools and technologies that drive growth, efficiency, and digital transformation. Backed by a team of passionate tech experts, we strive to deliver tailored solutions that exceed expectations."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <Image
                            src="/images/boys-promise.jpg"
                            alt="G"
                            width={1200}
                            height={1200}
                            className="w-full h-full"
                            priority
                        />
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
