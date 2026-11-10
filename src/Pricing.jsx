import { motion } from "framer-motion";
import { Check, ArrowUpRight, MessageCircle } from "lucide-react";
import { EASE, PRICING, CI_PACKAGE, priceWaLink } from "@/lib/site";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7, delay, ease: EASE },
});

const PriceRow = ({ item }) => (
    <a
        href={priceWaLink(item.name, item.price)}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`price-choose-${item.slug}`}
        className="group flex items-center justify-between gap-4 border-t border-bone/10 py-4 transition-colors hover:border-wine-bright/50"
    >
        <div>
            <p className="text-sm font-medium text-bone/90 transition-colors group-hover:text-wine-bright md:text-base">
                {item.name}
            </p>
            <p className="mt-1 text-xs text-bone/45 md:text-[13px]">
                {item.note}
            </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
            <span className="font-display text-lg md:text-xl">{item.price}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-bone/15 text-bone/60 transition-all duration-300 group-hover:border-wine group-hover:bg-wine group-hover:text-bone">
                <MessageCircle className="h-4 w-4" />
            </span>
        </div>
    </a>
);

export const Pricing = () => (
    <section
        id="pricing"
        className="scroll-mt-20 relative px-5 py-20 md:px-10 md:py-28"
    >
        <div className="mx-auto max-w-6xl">
            <motion.div
                {...fadeUp()}
                className="mb-12"
            >
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-wine-bright">
                    Pricing
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                    Clear prices.
                    <br />
                    Human customization.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/60 md:text-base">
                    All prices are once-off design fees. Tap any item to order
                    it on WhatsApp — printing costs are billed at cost.
                </p>
            </motion.div>

            <motion.div
                {...fadeUp()}
                data-testid="pricing-featured-package"
                className="relative overflow-hidden rounded-3xl bg-wine p-8 md:p-12"
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-bone/10 blur-3xl"
                />
                <span className="inline-block rounded-full border border-bone/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-bone/90">
                    Best value
                </span>
                <h3 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-5xl">
                    {CI_PACKAGE.name}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/80 md:text-base">
                    Everything a new brand needs, built once and built properly.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {CI_PACKAGE.includes.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 text-sm text-bone/90"
                        >
                            <Check className="mt-0.5 h-4 w-4 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                    <a
                        href={priceWaLink(CI_PACKAGE.name, CI_PACKAGE.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="price-choose-corporate-identity-package"
                        className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-white"
                    >
                        Choose this package
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <span className="font-display text-4xl md:text-5xl">
                        {CI_PACKAGE.price}
                    </span>
                </div>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {PRICING.map((group, gi) => (
                    <motion.div
                        key={group.slug}
                        {...fadeUp((gi % 2) * 0.1)}
                        className="h-full rounded-2xl border border-bone/10 bg-bone/[0.03] p-6 md:p-8"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="font-display text-xl font-medium md:text-2xl">
                                {group.category}
                            </h3>
                            <span className="font-display text-sm text-bone/25">
                                {String(gi + 1).padStart(2, "0")}
                            </span>
                        </div>
                        <div className="mt-4">
                            {group.items.map((item) => (
                                <PriceRow key={item.slug} item={item} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.p
                {...fadeUp()}
                className="mt-10 text-center text-sm text-bone/55"
            >
                Need something that isn't listed?{" "}
                <a
                    href="https://wa.me/27641440638?text=Hi%20Doxa%20Marketing!%20I%20need%20something%20that%20isn't%20listed%20on%20your%20pricing."
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="pricing-custom-request-link"
                    className="font-medium text-wine-bright underline decoration-wine-bright/40 underline-offset-4 transition-colors hover:text-bone"
                >
                    Message us
                </a>{" "}
                — everything is possible.
            </motion.p>
        </div>
    </section>
);
