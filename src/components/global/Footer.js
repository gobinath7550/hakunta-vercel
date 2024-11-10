import {
    XTwitter,
    LinkArrow,
    Youtube,
    Facebook,
    Instagram,
    Call,
    Email,
    LinkedIn,
} from "./Svg";

export default function Footer() {
    return (
        <footer className="bg-gradiant-5">
            <div className="max-w-7xl m-auto p-6 lg:p-16 lg:px-20 text-[#9a9a9a]">
                <h4 className="tracking-wider font-thin text-sm text-[#b3f602]">
                    {"Social"}
                </h4>
                <h3 className="font-bold tracking-wider text-2xl text-white">
                    {"Follow Along for Exciting Updates and More!"}
                </h3>
                <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 items-center justify-between gap-6 mt-6">
                    <a
                        href="#"
                        className="flex items-center justify-start gap-4 text-sm font-bold tracking-wider group border-[1px] border-[#2a2a2a] transition-all hover:border-[#b3f602] p-4 rounded-lg"
                    >
                        <span>
                            <LinkedIn
                                className={
                                    "w-6 h-6 sm:w-10 sm:h-10 fill-[#9a9a9a] group-hover:fill-white"
                                }
                            />
                        </span>
                        <span className="text-[#2a2a2a] group-hover:text-white transition-all">
                            {"LinkedIn"}
                        </span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center justify-start gap-4 text-sm font-bold tracking-wider group border-[1px] border-[#2a2a2a] transition-all hover:border-[#b3f602] p-4 rounded-lg"
                    >
                        <span>
                            <XTwitter
                                className={
                                    "w-5 h-5 sm:w-9 sm:h-9 fill-[#9a9a9a] group-hover:fill-white"
                                }
                            />
                        </span>
                        <span className="text-[#2a2a2a] group-hover:text-white transition-all">
                            {"X"}
                        </span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center justify-start gap-4 text-sm font-bold tracking-wider group border-[1px] border-[#2a2a2a] transition-all hover:border-[#b3f602] p-4 rounded-lg"
                    >
                        <span>
                            <Youtube
                                className={
                                    "w-6 h-6 sm:w-10 sm:h-10 fill-[#9a9a9a] group-hover:fill-white"
                                }
                            />
                        </span>
                        <span className="text-[#2a2a2a] group-hover:text-white transition-all">
                            {"YouTube"}
                        </span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center justify-start gap-4 text-sm font-bold tracking-wider group border-[1px] border-[#2a2a2a] transition-all hover:border-[#b3f602] p-4 rounded-lg"
                    >
                        <span>
                            <Facebook
                                className={
                                    "w-6 h-6 sm:w-10 sm:h-10 fill-[#9a9a9a] group-hover:fill-white"
                                }
                            />
                        </span>
                        <span className="text-[#2a2a2a] group-hover:text-white transition-all">
                            {"Facebook"}
                        </span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center justify-start gap-4 text-sm font-bold tracking-wider group border-[1px] border-[#2a2a2a] transition-all hover:border-[#b3f602] p-4 rounded-lg"
                    >
                        <span>
                            <Instagram
                                className={
                                    "w-6 h-6 sm:w-10 sm:h-10 fill-[#9a9a9a] group-hover:fill-white"
                                }
                            />
                        </span>
                        <span className="text-[#2a2a2a] group-hover:text-white transition-all">
                            {"Instagram"}
                        </span>
                    </a>
                </ul>
            </div>
            <div className="border-t-[1px] border-[#505050]">
                <div className="max-w-7xl m-auto p-6 lg:p-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 tracking-wide leading-none">
                    <div>
                        <h4 className="font-bold text-md relative after:content-[''] after:absolute after:bg-[#77b03b] after:w-1/6 after:-bottom-2 after:h-1 after:left-0 after:ml-[1px]">
                            {"Company"}
                        </h4>
                        <nav className="flex flex-col text-sm mt-7 gap-1 text-[#9a9a9a]">
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"About Us"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Careers"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Blogs"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Research"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Products"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h4 className="font-bold text-md relative after:content-[''] after:absolute after:bg-[#77b03b] after:w-1/6 after:-bottom-2 after:h-1 after:left-0 after:ml-[1px]">
                            {"Services"}
                        </h4>
                        <nav className="flex flex-col text-sm mt-7 gap-1 text-[#9a9a9a]">
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"E-Commerce Applications"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Standalone Applications"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"ERP Applications"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"CRM Applications"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Salesforce Support"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"SAP Support"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Consulting"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h4 className="font-bold text-md relative after:content-[''] after:absolute after:bg-[#77b03b] after:w-1/6 after:-bottom-2 after:h-1 after:left-0 after:ml-[1px]">
                            {"Support"}
                        </h4>
                        <nav className="flex flex-col text-sm mt-7 gap-1 text-[#9a9a9a]">
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Terms of Use"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Privacy Statement"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Cookie Policy"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:left-0 flex gap-2 items-center justify-center group"
                            >
                                <span>{"Site Map"}</span>
                                <span className="invisible group-hover:visible">
                                    <LinkArrow
                                        className={
                                            "fill-white w-[0.8rem] h-[0.8rem]"
                                        }
                                    />
                                </span>
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h4 className="font-bold text-md relative after:content-[''] after:absolute after:bg-[#77b03b] after:w-1/6 after:-bottom-2 after:h-1 after:left-0 after:ml-[1px]">
                            {"Contact"}
                        </h4>
                        <nav className="flex flex-col text-sm mt-7 gap-2 text-[#9a9a9a]">
                            <a
                                href="#"
                                className="flex gap-2 items-center justify-start"
                            >
                                <span className="p-[1px]">
                                    <Call
                                        className={"fill-[#9a9a9a] w-4 h-4"}
                                    />
                                </span>
                                <span className="leading-none transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:-bottom-1 after:h-[1px] after:left-0">
                                    {"+91 768 989 8990"}
                                </span>
                            </a>
                            <a
                                href="#"
                                className="flex gap-2 items-center justify-start"
                            >
                                <span className="p-[1px]">
                                    <Call
                                        className={"fill-[#9a9a9a] w-4 h-4"}
                                    />
                                </span>
                                <span className="leading-none transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:-bottom-1 after:h-[1px] after:left-0">
                                    {"+91 768 989 8991"}
                                </span>
                            </a>
                            <a
                                href="#"
                                className="flex gap-2 items-center justify-start"
                            >
                                <span>
                                    <Email
                                        className={
                                            "fill-none stroke-[#9a9a9a] w-4 h-4"
                                        }
                                    />
                                </span>
                                <span className="leading-none transition-all w-fit after:transition-all hover:text-white relative after:content-[''] after:absolute after:bg-white after:w-0 hover:after:w-full after:-bottom-1 after:h-[1px] after:left-0">
                                    {"sales@hakunta.com"}
                                </span>
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h4 className="font-bold text-md relative after:content-[''] after:absolute after:bg-[#77b03b] after:w-1/6 after:-bottom-2 after:h-1 after:left-0 after:ml-[1px]">
                            {"Newsletter"}
                        </h4>
                        <div className="mt-7">
                            <form
                                method="post"
                                action="/newsletter/subscribe"
                                className="flex flex-col gap-3"
                            >
                                <input
                                    type="email"
                                    name="user_gmail"
                                    placeholder="E-Mail"
                                    className="bg-transparent text-xs border-[1px] p-3 w-full outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#77b03b] w-1/2 p-2  text-xs text-black font-bold hover:shadow-sm hover:shadow-[#ffffff] transition-all"
                                >
                                    {"Subscribe"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl m-auto text-center text-xs p-6 text-[#9a9a9a] tracking-wider">
                <span>{"©2024 Hakunta Info Tech Private Limited"}</span>
            </div>
        </footer>
    );
}
