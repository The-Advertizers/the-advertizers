export default function ContactUsSection({reference}) {
    return (
        <>
            <div ref={reference}
                 className="relative flex flex-col bg-fixed device-width min-h-screen bg-secondary h-full object-cover bg-no-repeat bg-bottom"
                 style={{backgroundImage: "url(\"/img/World_map.png\")"}}>
                <div className="pt-20"/>

                {/* <!-- Heading --> */}
                <div className="relative w-full slide-down pt-16">
                    <h1 className="absolute top-0 bottom-0 left-0 right-0 z-0 mx-auto text-4xl sm:text-5xl text-accent font-lemon font-normal text-center my-1 overflow-hidden"
                    >Contact us</h1>
                    <h1
                        className="absolute top-0 bottom-0 left-0 right-0 z-10 mx-auto text-4xl sm:text-5xl text-primary font-lemon font-normal text-center">
                        Contact us</h1>
                </div>

                {/* <!-- CONTACT --> */}
                <div
                    className="container flex-grow flex flex-col justify-center justify-items-center mx-auto w-full h-full pt-8 md:pt-16 pb-32 sm:px-8">
                    <div
                        className="bg-transparent relative border-b border-t sm:border grid grid-cols-1 gap-4 md:grid-cols-2 sm:rounded-lg py-4 md:px-4 backdrop-filter backdrop-blur-sm"
                    >

                        {/* <!-- INFO --> */}
                        <div
                            className="px-8 py-4 md:px-4 max-h-64 max-w-full h-64 fade-in flex flex-col justify-center items-center">
                            <div className="pb-12">
                                <div className="p-1 flex">
                                    <svg className="text-primary inline-block w-6 h-6 mr-2"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042
                                0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    <p className="text-primary inline-block menu"><a href="tel:+923011119520">+92
                                        3011119520</a></p>
                                </div>

                                <div className="p-1 flex">
                                    <svg className="text-primary inline-block w-6 h-6 mr-2"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                                    </svg>
                                    <p className="text-primary inline-block menu"><a
                                        href="mailto:info@theadvertizers.com">Info@theadvertizers.com</a></p>
                                </div>

                                <div className="p-1 flex">
                                    <svg className="text-primary inline-block w-6 h-6 mr-2 "
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <p className="text-primary inline-block menu"><a
                                        href="https://goo.gl/maps/iHBWukjp8qF6WNxe9">Office# 340, 6th
                                        Floor,<br/> Ashiana
                                        Shopping Center,<br/> Main Blvd, Gulberg III, Lahore.</a></p>
                                </div>
                            </div>
                            <div className="flex self-center self-content-end justify-center items-center 
                     border-t border-white pt-4">
                                <a className="w-6 h-6 mx-2 text-primary hover:text-accent"
                                   href="https://www.facebook.com/theadvertizerspk">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" role="img"
                                         viewBox="0 0 24 24">
                                        <title>Facebook icon</title>
                                        <path
                                            d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
                                    </svg>
                                </a>
                                <a className="w-6 h-6 mx-2 text-primary hover:text-accent"
                                   href="https://www.instagram.com/theadvertizers/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" role="img"
                                         viewBox="0 0 24 24">
                                        <title>Instagram icon</title>
                                        <path
                                            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                                    </svg>
                                </a>
                                <a className="w-6 h-6 mx-2 text-primary hover:text-accent"
                                   href="https://www.linkedin.com/company/theadvertizers/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" role="img"
                                         viewBox="0 0 24 24">
                                        <title>LinkedIn icon</title>
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* <!-- FORM --> */}
                        <div className="bg-primary md:absolute md:w-5/12 md:right-0 md:bottom-0
                 p-8 sm:-mx-8 md:mx-0 md:mr-8 sm:my-0 md:-my-8 pr-10 sm:rounded-lg slide-right">
                            <div className="flex flex-col self-center justify-center">
                                <label>
                                    <span>
                                        <p className="text-secondary uppercase font-light">Subject</p>
                                    </span>
                                    <input id="cu-subj" className="form-input" type="text"
                                           placeholder="Website Contact Form"/>
                                </label>
                                <label>
                                    <span>
                                        <p className="text-secondary uppercase font-light">Body</p>
                                    </span>
                                    <textarea id="cu-body" className="form-input resize-none h-32"
                                              placeholder="Type your message here!"/>
                                </label>
                                <button id="cu-send" className="button-accent px-16">
                                    <span className="mr-2">Send Email</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}