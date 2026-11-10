const ITEMS = [
    "Logos",
    "Flyers",
    "Advertising",
    "Branding",
    "Business Cards",
    "Canva Decks",
    "Corporate Identity",
];

const Row = ({ hidden = false }) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
        {ITEMS.map((item) => (
            <span key={item} className="flex items-center">
                <span className="whitespace-nowrap px-6 font-display text-2xl font-medium uppercase text-bone/90 md:px-10 md:text-4xl">
                    {item}
                </span>
                <span className="h-2 w-2 rotate-45 bg-wine-bright" />
            </span>
        ))}
    </div>
);

export const Marquee = () => (
    <section
        data-testid="services-marquee"
        className="overflow-hidden border-y border-bone/10 bg-wine-deep/40 py-5 md:py-7"
    >
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
            <Row />
            <Row hidden />
        </div>
    </section>
);
