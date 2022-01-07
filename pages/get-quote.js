import ContactUsSection from "../components/section/contactus";
import GetQuoteSection from "../components/section/getQuote";
import Squares from "../components/squares";
import FooterNote from "../components/footerNote";
import {ChevronDoubleDownIcon} from '@heroicons/react/solid';

import {useState, Fragment, useRef} from 'react'
import {Dialog, Transition} from '@headlessui/react'

function ConfirmationDialog({isConfirmed, setConfirmation}) {
    return (
        <>
            <Transition appear show={isConfirmed} as={Fragment}>
                <Dialog
                    as="div"
                    className="z-50 fixed inset-0 overflow-y-auto"
                    onClose={() => setConfirmation(false)}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Dialog.Overlay
                                className="fixed inset-0 backdrop-filter backdrop-blur-sm bg-opacity-40 bg-black"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true">
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div
                                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white border shadow-xl rounded-md">

                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium font-lemon leading-6 text-gray-900">
                                    Submitted
                                </Dialog.Title>

                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Your request has been submitted,
                                        our team will reach you soon with the appropriate information.
                                    </p>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        type="button"
                                        className="button-accent"
                                        onClick={() => setConfirmation(false)}>
                                        Got it, thanks!
                                    </button>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default function GetQuotePage() {
    let [isConfirmed, setConfirmation] = useState(false);
    const quotationForm = useRef();

    return (
        <>
            {/* <!-- HOME --> */}
            <div id="home" className="block device-width min-h-screen bg-secondary">

                {/* <!-- HEADING --> */}
                <div className="sm:pt-16 flex w-full flex-col min-h-screen items-center lg:items-start justify-center">
                    <div className="max-w-2xl mx-auto">
                        <p
                            className="text-primary mx-12 text-sm sm:text-xl xl:text-2xl font-medium sm:font-bold text-center animate-slideup">
                            Allow us to provide the digital service you deserve</p>
                        <p
                            className="text-accent mx-12 text-2xl sm:text-4xl lg:text-5xl text-center font-lemon font-black animate-slideup">
                            Get Quotation Now</p>
                    </div>
                </div>

                {/* SCROLL DOWN */}
                <div className="w-full mb-4 absolute z-40 bottom-0 grid justify-items-center text-white lg:grid">
                    <ChevronDoubleDownIcon onClick={() => quotationForm.current.scrollIntoView()}
                                           className="animate-pulse h-16 w-16 p-4 fill-current cursor-pointer"/>
                </div>

                <Squares/>
            </div>

            <GetQuoteSection reference={quotationForm} setConfirmation={setConfirmation}/>
            <ContactUsSection/>
            <FooterNote/>

            <ConfirmationDialog isConfirmed={isConfirmed} setConfirmation={setConfirmation}/>
        </>
    );
}