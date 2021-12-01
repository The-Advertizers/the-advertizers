import Link from "next/link";

export default function GetQuoteBanner() {

    return (
        <>
            <div className="bg-black">
                <div className="container mx-auto flex flex-col items-center justify-center h-full" style={{ minHeight: 300 + 'px' }}>
                    <div>
                        <h1 className="text-primary px-2 text-xl sm:text-2xl md:text-4xl font-medium sm:font-bold mb-8">All these
                            services, just few clicks away</h1>
                    </div>
                    <Link href="/get-quote" >
                        <div className="cursor-pointer bg-accent hover:bg-accent-lighter font-semibold py-2 px-4 rounded-md">
                            Request a Quotation
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}