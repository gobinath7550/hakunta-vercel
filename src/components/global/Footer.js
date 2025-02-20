import {
    XTwitter,
    Facebook,
    Instagram,
    Call,
    Email,
    LinkedIn,
    MainLogo,
} from "./Svg";

export default function Footer() {
    return (
        <footer className="bg-[#233888]">
            <div className="max-w-7xl m-auto p-6 py-12">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div>
                            <a
                                href="/"
                                className="flex items-center justify-start bg-white p-3 rounded-lg shadow-xl w-fit gap-2"
                            >
                                <span className="w-20">
                                    <MainLogo className={"w-[4.7rem]"} />
                                </span>
                                <span className="text-[#093876] text-[1rem] font-bold uppercase tracking-[0.2rem]">
                                    {"Hakunta"}
                                </span>
                            </a>
                        </div>
                        <div className="max-w-md md:pr-16 text-md text-gray-200">
                            {
                                "Enhance productivity and efficiency with cutting-edge intelligence solutions for your business operations"
                            }
                        </div>
                        <div className="flex space-x-2">
                            <a
                                href=""
                                target="_blank"
                                className="text-gray-200 hover:text-gray-200 border-[1px] border-[#7e7e7e] hover:border-white transition-all p-2 rounded-lg"
                            >
                                <span className="sr-only">{"Linkedin"}</span>
                                <LinkedIn className="fill-white h-6 w-6" />
                            </a>
                            <a
                                href=""
                                target="_blank"
                                className="text-gray-200 hover:text-gray-200 border-[1px] border-[#7e7e7e] hover:border-white transition-all p-2 rounded-lg"
                            >
                                <span className="sr-only">{"X"}</span>
                                <XTwitter className="fill-white h-6 w-6" />
                            </a>
                            <a
                                href=""
                                target="_blank"
                                className="text-gray-200 hover:text-gray-200 border-[1px] border-[#7e7e7e] hover:border-white transition-all p-2 rounded-lg"
                            >
                                <span className="sr-only">{"Facebook"}</span>
                                <Facebook className="fill-white h-6 w-6" />
                            </a>
                            <a
                                href=""
                                target="_blank"
                                className="text-gray-200 hover:text-gray-200 border-[1px] border-[#7e7e7e] hover:border-white transition-all p-2 rounded-lg"
                            >
                                <span className="sr-only">{"Instagram"}</span>
                                <Instagram className="fill-white h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 grid md:grid-cols-2 md:gap-8 xl:col-span-2 xl:mt-0">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-md font-semibold leading-6 text-white">
                                    {"Company"}
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a
                                            href="/about-us"
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            {"About Us"}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/careers"
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            {"Careers"}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/contactus"
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            {"Contact Us"}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-md font-semibold leading-6 text-white">
                                    {"Resources"}
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a
                                            href="/blogs"
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            {"Blogs"}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/terms"
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            {"Terms of Service"}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/privacy"
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            {"Privacy Policy"}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-md font-semibold leading-6 text-white">
                                    {"Contact"}
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="flex gap-2">
                                        <Email className="fill-none stroke-white h-6 w-6" />
                                        <a
                                            href="/predictiveanalysis"
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            {"contact@hakunta.com"}
                                        </a>
                                    </li>
                                    <li className="flex gap-2 ml-1">
                                        <Call className="fill-white stroke-white h-5 w-5" />
                                        <a
                                            href="/customerexperience"
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            {"+91 9878987890"}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                    <div className="text-md text-center text-white">
                        {"Copyright © 2024"}
                        <a rel="noopener" href="/">
                            {" Hakunta Consultancy Services Pvt. Ltd."}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
