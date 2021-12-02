export default function GetQuoteSection({ setConfirmation }) {
    return (
        <>
            <div id="quotation"
                className="relative device-width min-h-screen flex flex-col items-center justify-center bg-black sm:bg-transparent">
                <div className="fixed w-full h-screen top-0 left-0 overflow-hidden filter blur-sm opacity-30"
                    style={{ zIndex: -1 }}>
                    <img src={"/img/bg.png"} className="w-full h-full object-cover object-center" />
                </div>

                <div className="container mx-auto py-16 sm:py-32 flex flex-col items-center h-full z-20">

                    <div
                        className="max-w-3xl sm:px-8 overflow-hidden rounded-md shadow-lg self-center justify-self-center bg-black">
                        <div className="w-full h-full">

                            <div className="p-8 pb-10">
                                <div className="slide-down mb-8">
                                    <h1 className="text-primary text-center text-2xl sm:text-3xl md:text-5xl font-bold">Lets do
                                        <span className="text-accent"> great work</span> together.
                                    </h1>
                                </div>

                                <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    <div>
                                        <label for="name" className="text-primary">Name</label>
                                        <input id="name" name="Name" className="form-input" />
                                    </div>
                                    <div>
                                        <label for="email" className="text-primary">Email</label>
                                        <input id="email" name="Email" type="email" className="form-input" />
                                    </div>
                                    <div>
                                        <label for="tel" className="text-primary">Phone Number</label>
                                        <input id="tel" name="Phone" type="tel" className="form-input" />
                                    </div>
                                    <div>
                                        <label for="comp-name" className="text-primary">Company Name</label>
                                        <input id="comp-name" name="Company Name" className="form-input" />
                                    </div>
                                    <div>
                                        <label for="comp-website" className="text-primary">Company website</label>
                                        <input id="comp-website" name="Company Website" className="form-input" />
                                    </div>
                                    <div>
                                        <label for="services" className="text-primary">Service</label>
                                        <select id="services" name="Service" className="form-input">
                                            {[
                                                "Social Media Marketing",
                                                "Search Engine Marketing",
                                                "Content Writing",
                                                "Video Advertisement",
                                                "Graphic Design",
                                                "Web Development",
                                                "Product Photography"
                                            ].map((value, i) => <option>{value}</option>)}
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label for="comments" className="text-primary">Comments</label>
                                        <textarea id="comments" name="Comments" className="form-input"></textarea>
                                    </div>
                                    <button type="submit" onClick={() => setConfirmation(true)}
                                        className="button-accent px-16 mt-4 self-end sm:col-span-2">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}