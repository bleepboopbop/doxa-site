import { motion } from "framer-motion";
import {
    PenTool,
    Newspaper,
    Megaphone,
    Sparkles,
    ArrowDown,
} from "lucide-react";
import { EASE } from "@/lib/site";

const SERVICES = [
    {
        num: "01",
        slug: "logos",
        icon: PenTool,
        title: "Logo Design",
        desc: "A mark people remember. Designed to look sharp on a sign, a flyer and a phone screen alike.",
        span: "lg:col-span-3",
    },
    {
        num: "02",
        slug: "flyers",
        icon: Newspaper,
        title: "Flyer Design & Printing",
        desc: "Flyers that get read, not recycled. Print-ready files — or we handle the printing for you.",
        span: "lg:col-span-3",
    },
    {
        num: "03",
        slug: "advertising",
        icon: Megaphone,
        title: "Digital Advertising",
        desc: "Ad graphics built for feeds, stories and reels — sized right and made to be clicked.",
        span: "lg:col-span-3",
    },
    {
        num: "04",
        slug: "other-work",
        icon: Sparkles,
        title: "Other Design & Marketing Work",
        desc: "Business cards, Canva presentations, corporate identity — if it carries your brand, we design it.",
        span: "sm:col-span-2 lg:col-span-3",
    },
];

export const Services = () => (
    <section
        id="services"
        className="scroll-mt-20 relative px-5 py-20 md:px-10 md:py-28"
    >
        <div className="mx-auto max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="mb-12 flex flex-wrap items-center justify-between gap-6"
            >
                <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-wine-bright">
                        Services
                    </p>
                    <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                        What we do
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/60 md:text-base">
                        All the design and marketing work your business needs,
                        outsourced to one team.
                    </p>
                </div>
                <a
                    href="#pricing"
                    data-testid="services-pricing-link"
                    className="group inline-flex items-center gap-2 rounded-full border border-bone/20 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-bone/80 transition-colors hover:border-wine-bright hover:text-wine-bright"
                >
                    See our pricing
                    <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
                {SERVICES.map((service, i) => (
                    <motion.article
                        key={service.slug}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: EASE }}
                        data-testid={`service-card-${service.slug}`}
                        className={`group relative h-full overflow-hidden rounded-2xl border border-bone/10 bg-bone/[0.03] p-6 transition-colors duration-300 hover:border-wine/50 hover:bg-wine/[0.06] md:p-8 ${service.span}`}
                    >
                        <div className="flex items-start justify-between">
                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-wine/15 text-wine-bright transition-colors duration-300 group-hover:bg-wine group-hover:text-bone">
                                <service.icon className="h-5 w-5" />
                            </span>
                            <span className="font-display text-sm text-bone/25">
                                {service.num}
                            </span>
                        </div>
                        <h3 className="mt-6 font-display text-xl font-medium md:text-2xl">
                            {service.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-bone/55">
                            {service.desc}
                        </p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);
