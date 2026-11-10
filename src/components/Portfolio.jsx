import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { EASE, PORTFOLIO_URL } from "@/lib/site";

const WORKS = [
    {
        num: "01",
        title: "Logo making",
        category: "Branding",
        image: "/portfolio/logo-making.jpg",
    },
    {
        num: "02",
        title: "Product advertising",
        category: "Digital Advertising",
        image: "/portfolio/product-advertising.jpg",
    },
    {
        num: "03",
        title: "Presentation",
        category: "Canva Presentations",
        image: "/portfolio/presentation.jpg",
    },
];

export const Portfolio = () => (
    <section
        id="portfolio"
        className="scroll-mt-20 relative px-5 py-20 md:px-10 md:py-28"
    >
        <div className="mx-auto max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="mb-12"
            >
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-wine-bright">
                    Portfolio
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                    Recent work
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/60 md:text-base">
                    Take a look at what we&rsquo;ve made — the full portfolio
                    opens in a new tab.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                className="rounded-3xl border border-dashed border-wine/40 bg-bone/[0.02] p-6 md:p-10"
            >
                <div className="grid gap-4 sm:grid-cols-3">
                    {WORKS.map((work) => (
                        <figure
                            key={work.num}
                            data-testid={`portfolio-tile-${work.num}`}
                            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-bone/10"
                        >
                            <img
                                src={work.image}
                                alt={`${work.title} — ${work.category}`}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
                            <figcaption className="absolute inset-x-0 bottom-0 p-5">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-wine-bright">
                                    {work.category}
                                </p>
                                <p className="mt-1.5 font-display text-xl font-medium text-bone">
                                    {work.title}
                                </p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <a
                        href={PORTFOLIO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="portfolio-view-link"
                        className="group inline-flex items-center gap-3 rounded-full bg-wine px-7 py-4 text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:bg-wine-bright"
                    >
                        View portfolio
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
);
