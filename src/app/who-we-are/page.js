"use client";

import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

export default function WhoWeAre() {
    return (
        <html lang="en">
            <head>
                <title>Hakunta - Who We Are</title>
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
                <meta property="og:title" content="Hakunta - Who We Are" />
                <meta
                    property="og:description"
                    content="Leading IT solutions: E-Commerce, ERP, SAP, Business Automation & Data Analytics to streamline operations & drive business growth."
                />
                <meta property="og:image" content="/images/main-logo.png" />
                <meta
                    property="og:url"
                    content="https://hakunta.com/who-we-are"
                />
            </head>
            <body className={`antialiased bg-white`}>
                <Header />
                <main className="relative"></main>
                <Footer />
            </body>
        </html>
    );
}
