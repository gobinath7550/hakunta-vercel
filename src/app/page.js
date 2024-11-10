"use client";
import Image from "next/image";
import { Trust, WhatsApp, LinkedIn } from "@/components/global/Svg";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { useState, useEffect, useRef } from "react";

const MainBanner = () => {
    return (
        <>
            <div className="bg-[url(/images/bg-main-6.jpg)] bg-cover hidden lg:block bg-no-repeat">
                <div className="p-8 relative flex items-center justify-end h-[590px] max-w-7xl m-auto">
                    <div className="absolute top-12 right-16 w-2 h-[25%] bg-[#60dd8e]"></div>
                    <div className="absolute bottom-10 right-16 w-2 h-[25%] bg-[#60dd8e]"></div>
                    <div className="p-7 text-right max-w-[72%]">
                        <h2 className="text-[2.6rem] bg-gradiant-1 font-bold capitalize tracking-wide text-transparent bg-clip-text drop-shadow-md">
                            {"Reliable growth begins here"}
                        </h2>
                        <p className="mt-4 text-[#476ea0] text-[0.925rem] tracking-wide leading-8">
                            <span className="mr-1 text-[#476ea0] text-lg font-extrabold">
                                {"Hakunta"}
                            </span>
                            {
                                "specializes in delivering tailored technology solutions that drive growth and efficiency. With a focus on high-quality development practices, we empower clients across industries to harness the power of digital technology and achieve operational excellence."
                            }
                        </p>
                    </div>
                    <div className="absolute z-10 left-7 bottom-7">
                        <div className="relative before:content-[''] before:absolute before:inset-x-0 before:left-1/2 before:-translate-x-1/2 before:block before:h-10 before:w-2 before:bg-white before:-top-8  after:content-[''] after:absolute after:inset-x-0 after:left-1/2 after:-translate-x-1/2 after:block after:h-10 after:w-2 after:bg-white after:bottom-32">
                            <div className="flex flex-col gap-3 items-center justify-start p-4 px-8">
                                <span className="text-orientation-upright mb-16 uppercase font-extrabold leading-none">
                                    {"Follow US"}
                                </span>
                                <a
                                    href="#"
                                    className="flex items-center border-2 border-transparent hover:border-[#093876] justify-center p-2 transition-all bg-white rounded-full"
                                >
                                    <WhatsApp
                                        className={"fill-[#093876] w-4"}
                                    />
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center border-2 border-transparent hover:border-[#093876] justify-center p-2 transition-all bg-white rounded-full"
                                >
                                    <LinkedIn
                                        className={"fill-[#093876] w-4"}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url(/images/bg-main-6.jpg)] relative bg-cover block lg:hidden bg-no-repeat overflow-hidden">
                <div className="absolute z-0 inset-0">
                    <Image
                        src="/images/bg-main-6.jpg"
                        alt="G"
                        width={3840}
                        height={2160}
                        className="min-h-screen w-full object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 flex flex-col justify-between min-h-screen">
                    <div className="text-right p-5 mt-6 sm:mt-32">
                        <h2 className="text-[2.6rem] bg-gradiant-1 font-bold capitalize tracking-wide text-transparent bg-clip-text drop-shadow-md max-xs:leading-[3rem]">
                            {"Reliable growth begins here"}
                        </h2>
                        <p className="mt-4 mr-4 text-[#476ea0] text-[0.925rem] tracking-wide relative leading-7 max-xs:leading-6">
                            <span className="absolute z-10 bottom-0 -right-4 w-[0.4rem] h-full bg-[#60dd8e]"></span>
                            <span className="mr-1 text-[#476ea0] text-lg font-extrabold">
                                {"Hakunta"}
                            </span>
                            {
                                "specializes in delivering tailored technology solutions that drive growth and efficiency. With a focus on high-quality development practices, we empower clients across industries to harness the power of digital technology and achieve operational excellence."
                            }
                        </p>
                    </div>
                    <div className="flex gap-3 items-center justify-start p-4 pb-6 px-8">
                        <a
                            href="#"
                            className="flex items-center border-2 border-transparent hover:border-[#093876] justify-center p-2 transition-all bg-white rounded-full"
                        >
                            <WhatsApp className={"fill-[#093876] w-4"} />
                        </a>
                        <a
                            href="#"
                            className="flex items-center border-2 border-transparent hover:border-[#093876] justify-center p-2 transition-all bg-white rounded-full"
                        >
                            <LinkedIn className={"fill-[#093876] w-4"} />
                        </a>
                        <span className="uppercase font-extrabold leading-none text-white">
                            {"Follow US"}
                        </span>
                        <span className="w-[20%] border-[0.2rem]"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

const OurMission = () => {
    return (
        <>
            <div className="max-w-7xl m-auto hidden lg:block">
                <div className="grid grid-cols-2">
                    <div className="p-40 pr-20 relative">
                        <h2 className="text-2xl bg-gradiant-1 font-bold capitalize tracking-wide text-transparent bg-clip-text drop-shadow-md relative after:content-[''] after:absolute after:bg-[#77b03b] after:w-16 after:-bottom-2 after:h-1 after:left-0 after:ml-1">
                            {"Our Mission"}
                        </h2>
                        <p className="mt-10 ml-1 text-[0.925rem] leading-8 tracking-widest text-[#476ea0]">
                            {
                                "Our mission is to simplify complex technological challenges, making innovation accessible to businesses of all sizes."
                            }
                        </p>
                        <Image
                            src="/images/arrow-up.png"
                            alt="G"
                            width={120}
                            height={120}
                            className="absolute bottom-40 rotate-[20deg] right-8"
                            priority
                        />
                    </div>
                    <div className="p-10 flex items-center justify-start">
                        <div className="pt-32 pl-8 pb-8 pr-40">
                            <div className="w-fit h-fit relative before:content-[''] before:absolute before:bg-[#77b03b] before:w-full before:h-full before:-top-20 before:-right-20 before:z-0 before:opacity-50 before:rounded-2xl">
                                <Image
                                    src="/images/man-working.jpg"
                                    alt="G"
                                    width={220}
                                    height={326}
                                    className="rounded-2xl relative z-10 border-2 shadow-2xl border-[#77b03b]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl m-auto block lg:hidden">
                <div className="p-6 mt-3">
                    <h2 className="text-2xl text-center bg-gradiant-1 font-bold capitalize tracking-wide text-transparent bg-clip-text drop-shadow-md relative after:content-[''] after:absolute after:bg-[#77b03b] after:w-16 after:-bottom-2 after:h-1 after:left-1/2 after:-translate-x-1/2 after:ml-1">
                        {"Our Mission"}
                    </h2>
                    <p className="mt-6 ml-1 text-[0.925rem] text-center leading-8 tracking-widest text-[#476ea0]">
                        {
                            "Our mission is to simplify complex technological challenges, making innovation accessible to businesses of all sizes."
                        }
                    </p>
                </div>
                <div className="p-6 pr-16 mt-8 flex items-center justify-center">
                    <div className="w-fit h-fit relative before:content-[''] before:absolute before:bg-[#77b03b] before:w-full before:h-full before:-top-10 before:-right-10 before:z-0 before:opacity-50 before:rounded-2xl">
                        <Image
                            src="/images/man-working.jpg"
                            alt="G"
                            width={220}
                            height={326}
                            className="rounded-2xl relative z-10 border-2 shadow-2xl border-[#77b03b]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

const OurServices = () => {
    const scrollRef = useRef(null); // Reference to the scrollable element
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the element is scrolled from the top
            setIsScrolled(scrollRef.current.scrollLeft > 0);
        };

        const element = scrollRef.current;
        element.addEventListener("scroll", handleScroll);

        return () => {
            element.removeEventListener("scroll", handleScroll); // Cleanup on unmount
        };
    }, []);

    return (
        <div className="bg-gradiant-3 bg-no-repeat">
            <div className="max-w-7xl m-auto p-6 pt-9 lg:p-12 lg:px-20 flex flex-col justify-center relative z-10 items-start overflow-hidden">
                <h2 className="text-2xl bg-gradiant-2 font-bold capitalize tracking-wide text-transparent bg-clip-text drop-shadow-md relative after:content-[''] after:absolute after:bg-[#77b03b] after:w-16 after:-bottom-2 after:h-1 after:left-0 after:ml-1">
                    {"Driving Success Through Our Services"}
                </h2>
                {!isScrolled && (
                    <div className="hidden max-lg:block absolute z-30 right-14 bottom-40 -translate-y-1/2">
                        <div class="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}
                <div
                    ref={scrollRef}
                    className="mt-12 py-3 px-2 mb-6 mx-1 flex lg:flex-wrap items-stretch justify-between gap-10 max-lg:overflow-x-auto max-lg:w-full snap-x scrollbar"
                >
                    <div className="snap-center min-h-[326px] max-h-[326px] min-w-[220px] max-w-[220px] bg-[url('/images/e-commerce.jpg')] bg-no-repeat bg-cover rounded-2xl relative after:absolute after:inset-0  after:content-[''] after:bg-[#3b3d4a] after:mix-blend-multiply after:opacity-60 after:rounded-2xl before:absolute before:bg-gradiant-4 before:inset-0 before:rounded-2xl before:hidden hover:before:block before:opacity-60 before:transition-[background] before:duration-200 transition-all hover:-translate-y-2 hover:shadow-[0_0_0_3px_#77b03b] duration-300 shadow-2xl text-white">
                        <div className="p-5 text-wrap tracking-wider relative z-10 flex flex-col justify-between h-full overflow-hidden group">
                            <h3 className="text-lg font-bold">
                                {"E-Commerce"}
                            </h3>
                            <p className="text-xs translate-y-40 group-hover:translate-y-0 transition-transform duration-300 line-clamp-3">
                                {
                                    "Assist businesses in choosing the right platform like Shopify, Magento, WooCommerce, or custom solutions and customize it according to your brand need"
                                }
                            </p>
                        </div>
                    </div>
                    <div className="snap-center min-h-[326px] max-h-[326px] min-w-[220px] max-w-[220px] bg-[url('/images/erp.jpg')] bg-no-repeat bg-cover rounded-2xl relative after:absolute after:inset-0  after:content-[''] after:bg-[#3b3d4a] after:mix-blend-multiply after:opacity-60 after:rounded-2xl before:absolute before:bg-gradiant-4 before:inset-0 before:rounded-2xl before:hidden hover:before:block before:opacity-60 before:transition-[background] before:duration-200 transition-all hover:-translate-y-2 hover:shadow-[0_0_0_3px_#77b03b] duration-300 shadow-2xl">
                        <div className="p-5 text-wrap tracking-wider relative z-10 flex flex-col justify-between h-full overflow-hidden group text-white">
                            <h3 className="text-lg font-bold">
                                {"Enterprise Resource Planning"}
                            </h3>
                            <p className="text-xs translate-y-40 group-hover:translate-y-0 transition-transform duration-300 line-clamp-3">
                                {
                                    "Based on the needs assessment, recommend the best ERP solution (e.g., SAP, Oracle, Microsoft Dynamics 365, or industry-specific ERPs) that fits your business’s size, industry, and budget."
                                }
                            </p>
                        </div>
                    </div>
                    <div className="snap-center min-h-[326px] max-h-[326px] min-w-[220px] max-w-[220px] bg-[url('/images/crm.jpg')] bg-no-repeat bg-cover rounded-2xl relative after:absolute after:inset-0  after:content-[''] after:bg-[#3b3d4a] after:mix-blend-multiply after:opacity-60 after:rounded-2xl before:absolute before:bg-gradiant-4 before:inset-0 before:rounded-2xl before:hidden hover:before:block before:opacity-60 before:transition-[background] before:duration-200 transition-all hover:-translate-y-2 hover:shadow-[0_0_0_3px_#77b03b] duration-300 shadow-2xl">
                        <div className="p-5 text-wrap tracking-wider relative z-10 flex flex-col justify-between h-full overflow-hidden group text-white">
                            <h3 className="text-lg font-bold">
                                {"Customer Relationship Management"}
                            </h3>
                            <p className="text-xs translate-y-40 group-hover:translate-y-0 transition-transform duration-300 line-clamp-3">
                                {
                                    "Recommend the best CRM software based on your company size, industry, and unique needs. Options could include Salesforce, HubSpot, Microsoft Dynamics 365, or custom CRM solutions for niche requirements."
                                }
                            </p>
                        </div>
                    </div>
                    <div className="snap-center min-h-[326px] max-h-[326px] min-w-[220px] max-w-[220px] bg-[url('/images/bg-automation.jpg')] bg-no-repeat bg-cover rounded-2xl relative after:absolute after:inset-0  after:content-[''] after:bg-[#3b3d4a] after:mix-blend-multiply after:opacity-60 after:rounded-2xl before:absolute before:bg-gradiant-4 before:inset-0 before:rounded-2xl before:hidden hover:before:block before:opacity-60 before:transition-[background] before:duration-200 transition-all hover:-translate-y-2 hover:shadow-[0_0_0_3px_#77b03b] duration-300 shadow-2xl">
                        <div className="p-5 text-wrap tracking-wider relative z-10 flex flex-col justify-between h-full overflow-hidden group text-white">
                            <h3 className="text-lg font-bold">
                                {"Business Automation"}
                            </h3>
                            <p className="text-xs translate-y-40 group-hover:translate-y-0 transition-transform duration-300 line-clamp-3">
                                {
                                    "Set up workflows to automate approvals (such as purchase requests, expense claims, or document approvals) with built-in notifications, ensuring tasks move seamlessly through stages"
                                }
                            </p>
                        </div>
                    </div>
                    <div className="snap-center min-h-[326px] max-h-[326px] min-w-[220px] max-w-[220px] bg-[url('/images/bg-business-analytics.jpg')] bg-no-repeat bg-cover rounded-2xl relative after:absolute after:inset-0  after:content-[''] after:bg-[#3b3d4a] after:mix-blend-multiply after:opacity-60 after:rounded-2xl before:absolute before:bg-gradiant-4 before:inset-0 before:rounded-2xl before:hidden hover:before:block before:opacity-60 before:transition-[background] before:duration-200 transition-all hover:-translate-y-2 hover:shadow-[0_0_0_3px_#77b03b] duration-300 shadow-2xl">
                        <div className="p-5 text-wrap tracking-wider relative z-10 flex flex-col justify-between h-full overflow-hidden group text-white">
                            <h3 className="text-lg font-bold">
                                {"Business Analytics"}
                            </h3>
                            <p className="text-xs translate-y-40 group-hover:translate-y-0 transition-transform duration-300 line-clamp-3">
                                {
                                    "Use visualization tools like Power BI, Tableau, or Looker to create interactive dashboards that summarize historical data trends, helping stakeholders understand past performance."
                                }
                            </p>
                        </div>
                    </div>
                    <div className="snap-center min-h-[326px] max-h-[326px] min-w-[220px] max-w-[220px] bg-[url('/images/bg-data-science.jpg')] bg-no-repeat bg-cover rounded-2xl relative after:absolute after:inset-0  after:content-[''] after:bg-[#3b3d4a] after:mix-blend-multiply after:opacity-60 after:rounded-2xl before:absolute before:bg-gradiant-4 before:inset-0 before:rounded-2xl before:hidden hover:before:block before:opacity-60 before:transition-[background] before:duration-200 transition-all hover:-translate-y-2 hover:shadow-[0_0_0_3px_#77b03b] duration-300 shadow-2xl">
                        <div className="p-5 text-wrap tracking-wider relative z-10 flex flex-col justify-between h-full overflow-hidden group text-white">
                            <h3 className="text-lg font-bold">
                                {"Data and Analytics"}
                            </h3>
                            <p className="text-xs translate-y-40 group-hover:translate-y-0 transition-transform duration-300 line-clamp-3">
                                {
                                    "Establish policies and standards for data ownership, data quality, and data lifecycle management, ensuring data is consistently accurate and usable across the organization."
                                }
                            </p>
                        </div>
                    </div>
                    <div className="snap-center min-h-[326px] max-h-[326px] min-w-[220px] max-w-[220px] bg-[url('/images/bg-devops.jpg')] bg-no-repeat bg-cover rounded-2xl relative after:absolute after:inset-0  after:content-[''] after:bg-[#3b3d4a] after:mix-blend-multiply after:opacity-60 after:rounded-2xl before:absolute before:bg-gradiant-4 before:inset-0 before:rounded-2xl before:hidden hover:before:block before:opacity-60 before:transition-[background] before:duration-200 transition-all hover:-translate-y-2 hover:shadow-[0_0_0_3px_#77b03b] duration-300 shadow-2xl">
                        <div className="p-5 text-wrap tracking-wider relative z-10 flex flex-col justify-between h-full overflow-hidden group text-white">
                            <h3 className="text-lg font-bold">
                                {"Sustainability Services"}
                            </h3>
                            <p className="text-xs translate-y-40 group-hover:translate-y-0 transition-transform duration-300 line-clamp-3">
                                {
                                    "Develop a sustainability roadmap that outlines the organization’s vision, goals, and targets (such as carbon neutrality or waste reduction), aligning these with broader business objectives."
                                }
                            </p>
                        </div>
                    </div>
                    <div className="snap-center min-h-[326px] max-h-[326px] min-w-[220px] max-w-[220px] bg-[url('/images/consulting.jpg')] bg-no-repeat bg-cover rounded-2xl relative after:absolute after:inset-0  after:content-[''] after:bg-[#3b3d4a] after:mix-blend-multiply after:opacity-60 after:rounded-2xl before:absolute before:bg-gradiant-4 before:inset-0 before:rounded-2xl before:hidden hover:before:block before:opacity-60 before:transition-[background] before:duration-200 transition-all hover:-translate-y-2 hover:shadow-[0_0_0_3px_#77b03b] duration-300 shadow-2xl">
                        <div className="p-5 text-wrap tracking-wider relative z-10 flex flex-col justify-between h-full overflow-hidden group text-white">
                            <h3 className="text-lg font-bold">
                                {"Consulting"}
                            </h3>
                            <p className="text-xs translate-y-40 group-hover:translate-y-0 transition-transform duration-300 line-clamp-3">
                                {
                                    "Assess opportunities in new markets, analyze competitors, and design entry strategies to maximize market share and revenue growth."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <div className="bg-[url('/images/bg-review.jpg')] bg-no-repeat bg-cover bg-fixed relative after:absolute after:content-[''] after:inset-0 after:bg-[#161a42]/70">
            <div className="max-w-7xl m-auto flex flex-col justify-center gap-12 relative z-10 items-center">
                <h2 className="text-2xl mt-12 font-bold text-[#b3f602] capitalize tracking-wide relative after:content-[''] after:absolute after:bg-[#77b03b] after:w-16 after:-bottom-2 after:h-1 after:left-1/2 after:-translate-x-1/2 after:ml-1">
                    {"Testimonials"}
                </h2>
                <div className="lg:p-16 mb-12 lg:flex lg:items-center lg:justify-center gap-10 text-white">
                    <div className="flex items-center justify-center relative w-[260px] h-[300px]">
                        <Image
                            src="/images/bg-frame.png"
                            alt="G"
                            width={260}
                            height={300}
                            priority
                            className="absolute inset-0"
                        />
                        <div className="flex flex-col items-center text-[0.925rem] justify-center gap-3 p-8">
                            <p className="text-center italic tracking-wider leading-5">
                                {
                                    "Exceptional service! The team delivered a custom solution that perfectly fit our needs—highly recommended."
                                }
                            </p>
                            <span className="italic hidden text-black">
                                {"- Sabapathi Fine Arts"}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center relative w-[260px] h-[300px]">
                        <Image
                            src="/images/bg-frame.png"
                            alt="G"
                            width={260}
                            height={300}
                            priority
                            className="absolute inset-0"
                        />
                        <div className="flex flex-col items-center text-[0.925rem] justify-center gap-3 p-8">
                            <p className="text-center italic tracking-wider leading-5">
                                {
                                    "Fast, efficient, and reliable. They transformed our digital operations, and we couldn’t be happier."
                                }
                            </p>
                            <span className="italic hidden text-black">
                                {"- Steve Jobs"}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center relative w-[260px] h-[300px]">
                        <Image
                            src="/images/bg-frame.png"
                            alt="G"
                            width={260}
                            height={300}
                            priority
                            className="absolute inset-0"
                        />
                        <div className="flex flex-col items-center text-[0.925rem] justify-center gap-3 p-8">
                            <p className="text-center italic tracking-wider leading-5">
                                {
                                    "The best tech support we’ve experienced. They’re knowledgeable, responsive, and truly care about our success."
                                }
                            </p>
                            <span className="italic hidden text-black">
                                {"- Steve Jobs"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <>
            <Header />
            <main className="relative">
                <MainBanner />
                <OurMission />
                <OurServices />
                <div className="max-w-7xl m-auto">
                    <div className="p-6 lg:p-12 flex flex-col items-center justify-center">
                        <div className="max-w-[690px] flex flex-col items-center justify-center gap-6 text-center">
                            <Trust className="fill-[#77b03b] w-16 h-16" />
                            <h3 className="text-2xl font-bold text-[#29456b]">
                                {"We Prioritize Your Privacy"}
                            </h3>
                            <p className="text-[0.925rem] leading-6 tracking-wide text-[#476ea0]">
                                {
                                    "We hold that trust is essential in any relationship. We do not own or sell your data, nor do we rely on advertising-based business models. Our revenue solely comes from the software license fees you pay us."
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}
