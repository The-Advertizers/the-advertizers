export default function FooterNote() {
    return (
        <>
            <div className="bg-secondary flex w-full px-4 py-1 flex-wrap overflow-hidden">
                <p className="text-primary text-right w-full slide-up menu font-light">
                    <a className="text-accent font-lemon font-normal" href="#home">
                        The Advertizers
                    </a> © <span id="tx-year"/> All Rights Reserved
                </p>
            </div>
        </>
    );
}