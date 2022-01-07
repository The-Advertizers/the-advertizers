import Link from "next/link";

export default function FooterNote() {
    return (
        <>
            <div className="bg-secondary flex w-full px-4 py-1 flex-wrap overflow-hidden">
                <p className="text-primary text-right w-full slide-up menu-item font-light">
                    <Link href={'/'}>
                        <span className="text-accent font-lemon font-normal">
                            The Advertizers
                        </span>
                    </Link> © {new Date().getFullYear()} All Rights Reserved
                </p>
            </div>
        </>
    );
}