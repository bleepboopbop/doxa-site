import { ArrowUp } from "lucide-react";

export const Footer = () => (
    <footer className="border-t border-bone/10 px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-6xl">
            <p className="font-display text-[clamp(2.6rem,9vw,8rem)] font-semibold uppercase leading-[0.9]">
                Doxa
                <br />
                Marketing
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-bone/10 pt-6">
                <p className="font-serifit text-xl italic text-bone/70 md:text-2xl">
                    Everything is possible.
                </p>
                <a
                    href="#top"
                    data-testid="footer-back-to-top-link"
                    className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-bone/60 transition-colors hover:text-wine-bright"
                >
                    Back to top
                    <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                </a>
            </div>
            <p className="mt-8 text-xs text-bone/35">
                © {new Date().getFullYear()} Doxa Marketing. All rights
                reserved.
            </p>
        </div>
    </footer>
);
