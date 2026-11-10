const LOGO_URL = "/doxa-mark.jpg";

const LINKS = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Portfolio", href: "#portfolio" },
];

export const Nav = () => (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-10">
            <a
                href="#top"
                data-testid="nav-home-link"
                className="flex items-center gap-3"
            >
                <img
                    src={LOGO_URL}
                    alt="Doxa Marketing logo"
                    data-testid="nav-logo-img"
                    className="h-10 w-10 rounded-lg object-cover ring-1 ring-wine/40"
                />
                <span className="font-display text-lg font-semibold uppercase tracking-wide">
                    Doxa
                </span>
                <span className="hidden text-[10px] font-medium uppercase tracking-[0.3em] text-bone/50 sm:block">
                    Marketing
                </span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
                {LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        data-testid={`nav-${link.label.toLowerCase()}-link`}
                        className="text-sm font-medium text-bone/70 transition-colors hover:text-wine-bright"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
            <a
                href="#contact"
                data-testid="nav-get-in-touch-btn"
                className="rounded-full bg-wine px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-bone transition-colors hover:bg-wine-bright md:text-sm"
            >
                Get in touch
            </a>
        </div>
    </header>
);
