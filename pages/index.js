import FooterNote from "../components/footerNote";
import GrowthIllustration from "../components/growth_illustration";
import ContactUsSection from "../components/section/contactus";
import GetQuoteBanner from "../components/section/getQuoteBanner";
import ServiceSection from "../components/section/service";
import Squares from "../components/squares";

import {ChevronDoubleDownIcon} from '@heroicons/react/solid';
import {useRef, useState} from "react";
import useOnScreen from "../lib/useOnScreen";

export default function Home() {
    const homeRef = useRef(null);
    const serviceRef = useRef(null);
    const contactusRef = useRef(null);

    const visibleRef = useOnScreen([homeRef, serviceRef, contactusRef]);

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* NAVIGATION */}
            <nav id="nav"
                 className="flex items-center justify-between flex-wrap p-4 bg-secondary fixed w-full z-50 top-0">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <div onClick={() => homeRef.current.scrollIntoView()}>
                        <img id="nav-logo" className="w-auto h-10" src={"/img/logo-white.png"} alt={'logo'}/>
                    </div>
                </div>

                <div className="block md:hidden">
                    <button onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}
                            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                <div
                    className={`w-full flex-grow ${menuOpen ? '' : 'hidden'} md:flex md:items-center md:w-auto pt-6 md:pt-0 menu`}>
                    <ul className="list-reset md:flex justify-end text-center flex-1 items-center">
                        <li className="mr-3 menu-item">
                            <div
                                onClick={() => {
                                    homeRef.current.scrollIntoView();
                                    setMenuOpen(false);
                                }}
                                className={`inline-block ${visibleRef === homeRef.current ? 'active' : 'inactive'} animate-slidedown_fadein duration-1000 ease-out font-lemon no-underline py-2 mx-4`}>
                                Home
                            </div>
                        </li>
                        <li className="mr-3 menu-item">
                            <div
                                onClick={() => {
                                    serviceRef.current.scrollIntoView();
                                    setMenuOpen(false);
                                }}
                                className={`inline-block ${visibleRef === serviceRef.current ? 'active' : 'inactive'} animate-slidedown_fadein duration-700 ease-out font-lemon no-underline py-2 mx-4`}>
                                Services
                            </div>
                        </li>
                        <li className="mr-3 menu-item">
                            <div
                                onClick={() => {
                                    contactusRef.current.scrollIntoView();
                                    setMenuOpen(false);
                                }}
                                className={`inline-block ${visibleRef === contactusRef.current ? 'active' : 'inactive'} animate-slidedown_fadein duration-500 ease-out font-lemon no-underline py-2 mx-4`}>
                                Contact us
                            </div>
                        </li>
                    </ul>
                    <div className="md:hidden mt-4 mx-auto w-auto max-w-sm h-px bg-primary animate-fadein"/>
                </div>
            </nav>

            {/* HOME */}
            <div ref={homeRef} className="block relative device-width min-h-screen bg-secondary">

                {/* HEADING */}
                <div className="sm:pt-16 flex w-full flex-col min-h-screen items-center lg:items-start justify-center">
                    <div
                        className="grid lg:mx-16 xl:mx-32 lg:grid-cols-2 grid-cols-1 gap-32 lg:gap-16 place-items-center py-16">
                        <div>
                            <p
                                className="text-primary mx-12 text-xl sm:text-2xl xl:text-3xl font-bold lg:text-left text-center animate-slideup">
                                Your Business Needs</p>
                            <p
                                className="text-accent mx-12 text-2xl sm:text-4xl lg:text-5xl lg:-mr-16 lg:text-left text-center font-lemon font-black animate-slideup">
                                Digital Marketing</p>
                            <p className="text-primary mx-12 pt-4 md:text-xl lg:text-left text-center animate-slideup">Here
                                at The
                                Advertizers we have a gathering of dedicated experts to fill in your promoting needs.
                                Where
                                Professional marketers, Graphic designers and content writers are taking a shot at your
                                development. I'm happy we had the occasion to interface and make your digital goals come
                                to
                                reality.</p>
                        </div>
                        <GrowthIllustration/>
                    </div>
                </div>

                {/* SCROLL DOWN */}
                <div className="w-full mb-4 absolute z-40 bottom-0 grid justify-items-center text-white lg:grid">
                    <ChevronDoubleDownIcon
                        onClick={() => serviceRef.current.scrollIntoView()}
                        className="animate-pulse h-16 w-16 p-4 fill-current cursor-pointer"/>
                </div>

                <Squares/>
            </div>

            <ServiceSection reference={serviceRef}/>
            <GetQuoteBanner/>
            <ContactUsSection reference={contactusRef}/>
            <FooterNote/>
        </>
    );
}
