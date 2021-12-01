export default function ServiceSection() {
    return (
        <>
            <div id="services" className="device-width min-h-screen bg-primary">
                {/* Heading */}
                <div className="bg-header-services">
                    <div className="h-auto w-full scrolling-shadow backdrop-filter backdrop-blur-sm">
                        <div className="pt-20"></div>
                        <div className="relative w-full slide-down pt-16">
                            <h1 className="absolute top-0 bottom-0 left-0 right-0 z-0 mx-auto text-4xl sm:text-5xl text-accent font-lemon font-normal text-center my-1 overflow-hidden"
                            >Our Services</h1>
                            <h1
                                className="absolute top-0 bottom-0 left-0 right-0 z-10 mx-auto text-4xl sm:text-5xl text-secondary font-lemon font-normal text-center scrolling-shadow-text">
                                Our Services</h1>
                        </div>
                        <div>
                            <p className="text-center container mx-auto mt-4">We provide with our best efforts</p>
                        </div>
                        <div className="pb-20"></div>
                    </div>
                </div>
                <div className="container mx-auto w-full md:px-16 py-16">
                    <div id="services-grid" className="flex flex-wrap justify-center"></div>
                    {/* SERVICE ELEMENTS WILL BE LOADED HERE */}
                </div>
            </div>
        </>
    );
}