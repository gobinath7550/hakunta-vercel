import Image from "next/image";
import { useState } from "react";
import { MainLogo, Search, LinkArrow, MobileMenu, Close } from "./Svg";

export default function Header() {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    const handleOpenMobileMenuButtonClick = () => {
        setIsOpenMobileMenu((prevState) => !prevState);
        setTimeout(() => {
            setIsOpened((prevState) => !prevState);
        }, 100);
    };

    return (
        <header className="sticky z-50 top-0 bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl m-auto">
                <a href="/" className="flex items-center justify-center gap-2">
                    <span className="w-20">
                        <MainLogo className={"w-[4.7rem]"} />
                    </span>
                    <span className="text-[#093876] text-[1rem] font-bold uppercase tracking-[0.2rem]">
                        {"Hakunta"}
                    </span>
                </a>
                <div className="hidden lg:flex items-center justify-center gap-10">
                    <nav className="text-[#093876] text-[0.8rem] font-semibold tracking-widest flex items-center justify-center gap-3">
                        <a href="/who-we-are">
                            <div className="flex items-center justify-center border-2 border-transparent hover:bg-[#093876] p-2 px-4 rounded-full hover:text-white transition-all hover:shadow-md hover:border-2 hover:border-[#77b03b]">
                                <span>{"Who we are"}</span>
                            </div>
                        </a>
                        <a href="/services">
                            <div className="flex items-center justify-center border-2 border-transparent hover:bg-[#093876] p-2 px-4 rounded-full hover:text-white transition-all hover:shadow-md hover:border-2 hover:border-[#77b03b]">
                                <span>{"Services"}</span>
                            </div>
                        </a>
                        <a href="/products">
                            <div className="flex items-center justify-center border-2 border-transparent hover:bg-[#093876] p-2 px-4 rounded-full hover:text-white transition-all hover:shadow-md hover:border-2 hover:border-[#77b03b]">
                                <span>{"Products"}</span>
                            </div>
                        </a>
                        <a href="/careers">
                            <div className="flex items-center justify-center border-2 border-transparent hover:bg-[#093876] p-2 px-4 rounded-full hover:text-white transition-all hover:shadow-md hover:border-2 hover:border-[#77b03b]">
                                <span>{"Careers"}</span>
                            </div>
                        </a>
                        <a href="/contact-us">
                            <div className="flex items-center justify-center border-2 border-transparent hover:bg-[#093876] p-2 px-4 rounded-full hover:text-white transition-all hover:shadow-md hover:border-2 hover:border-[#77b03b]">
                                <span>{"Contact Us"}</span>
                            </div>
                        </a>
                    </nav>
                </div>
                <div className="flex items-center justify-center lg:hidden">
                    <button onClick={() => handleOpenMobileMenuButtonClick()}>
                        {isOpened ? (
                            <Close
                                className={"w-10 h-10 p-1 stroke-[#093876]"}
                            />
                        ) : (
                            <MobileMenu
                                className={"w-10 h-10 stroke-[#093876]"}
                            />
                        )}
                    </button>
                </div>
                <div
                    className={`grid grid-cols-2 lg:hidden absolute top-0 right-0 w-full overflow-hidden shadow-xl mt-[4.55rem] ${
                        isOpenMobileMenu ? "max-h-[500px]" : "max-h-0"
                    } transition-all duration-500 ease-in-out bg-[#093876]`}
                >
                    <nav className="relative text-[#60dd8e] uppercase text-[0.7rem] font-semibold tracking-widest flex flex-col items-start justify-center gap-4 w-full p-6">
                        <a
                            href="/who-we-are"
                            className="flex gap-2 items-start justify-start border-b-[1px] border-[#60dd8e]"
                        >
                            <span>{"Who we are"}</span>
                            <span>
                                <LinkArrow
                                    className={
                                        "fill-[#60dd8e] w-[0.8rem] h-[0.8rem]"
                                    }
                                />
                            </span>
                        </a>
                        <a
                            href="#"
                            className="flex gap-2 items-start justify-start border-b-[1px] border-[#60dd8e]"
                        >
                            <span>{"Services"}</span>
                            <span>
                                <LinkArrow
                                    className={
                                        "fill-[#60dd8e] w-[0.8rem] h-[0.8rem]"
                                    }
                                />
                            </span>
                        </a>
                        <a
                            href="/products"
                            className="flex gap-2 items-start justify-start border-b-[1px] border-[#60dd8e]"
                        >
                            <span>{"Products"}</span>
                            <span>
                                <LinkArrow
                                    className={
                                        "fill-[#60dd8e] w-[0.8rem] h-[0.8rem]"
                                    }
                                />
                            </span>
                        </a>
                        <a
                            href="/careers"
                            className="flex gap-2 items-start justify-start border-b-[1px] border-[#60dd8e]"
                        >
                            <span>{"Careers"}</span>
                            <span>
                                <LinkArrow
                                    className={
                                        "fill-[#60dd8e] w-[0.8rem] h-[0.8rem]"
                                    }
                                />
                            </span>
                        </a>
                        <a
                            href="/contact-us"
                            className="flex gap-2 items-start justify-start border-b-[1px] border-[#60dd8e]"
                        >
                            <span>{"Contact Us"}</span>
                            <span>
                                <LinkArrow
                                    className={
                                        "fill-[#60dd8e] w-[0.8rem] h-[0.8rem]"
                                    }
                                />
                            </span>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
