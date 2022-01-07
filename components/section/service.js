import services from '../../data/services';
import DynamicHeroIcon from '../../lib/dynamicHeroIcon/dynamic_hero_icon';

function Service({title, desc, icon, iconType}, i) {
    return (
        <div key={i}
             className="card flex flex-col items-center p-4 slide-up my-6 mx-4 bg-secondary animate-slideup_fadein w-80">
            <div className="h-12 w-12 text-accent mb-4">
                <DynamicHeroIcon className="stroke-1" icon={icon} outline={iconType === 'outline'}/>
            </div>
            <h6 className="text-primary font-semibold text-lg text-center mb-4">
                {title}
            </h6>
            <p className="text-primary overflow-hidden">
                {desc}
            </p>
        </div>
    );
}

export default function ServiceSection({reference}) {
    return (
        <>
            <div ref={reference} className="device-width min-h-screen bg-primary">
                {/* Heading */}
                <div className="bg-header-services">
                    <div className="h-auto w-full scrolling-shadow backdrop-filter backdrop-blur-sm">
                        <div className="pt-20"/>
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
                        <div className="pb-20"/>
                    </div>
                </div>
                <div className="container mx-auto w-full md:px-16 py-16">
                    <div className="flex flex-wrap justify-center">
                        {services.map(Service)}
                    </div>
                </div>
            </div>
        </>
    );
}