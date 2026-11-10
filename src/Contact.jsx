import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { EASE, CONTACT, WA_DEFAULT } from "@/lib/site";

const ROWS = [
    {
        id: "whatsapp",
        label: "WhatsApp — tap to chat",
        value: CONTACT.whatsappDisplay,
        href: WA_DEFAULT,
        icon: MessageCircle,
        testid: "contact-whatsapp-link",
        enabled: true,
    },
    {
        id: "email",
        label: "Email — send a brief",
        value: CONTACT.email,
        href: `mailto:${CONTACT.email}?subject=Design%20enquiry`,
        icon: Mail,
        testid: "contact-email-link",
        enabled: true,
    },
];

export const Contact = () => (
    <section
        id="contact"
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
                    Contact
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                    Let&rsquo;s make it happen.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/60 md:text-base">
                    Pick a line below — every button says exactly what it does.
                </p>
            </motion.div>

            <div className="grid gap-4">
                {ROWS.map((row, i) => {
                    const inner = (
                        <>
                            <div className="min-w-0">
                                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-bone/50">
                                    {row.label}
                                </p>
                                <p className="mt-2 break-all font-display text-xl md:text-3xl">
                                    {row.value}
                                </p>
                            </div>
                            <div className="flex shrink-0 items-center gap-3">
                                {row.chip && (
                                    <span className="rounded-full border border-dashed border-wine/50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/60">
                                        {row.chip}
                                    </span>
                                )}
                                <span
                                    className={`grid h-12 w-12 place-items-center rounded-full border transition-colors duration-300 ${
                                        row.enabled
                                            ? "border-bone/20 text-bone/70 group-hover:border-bone group-hover:bg-bone group-hover:text-wine"
                                            : "border-bone/10 text-bone/35"
                                    }`}
                                >
                                    {row.enabled ? (
                                        <ArrowUpRight className="h-5 w-5" />
                                    ) : (
                                        <row.icon className="h-5 w-5" />
                                    )}
                                </span>
                            </div>
                        </>
                    );
                    const classes = `flex items-center justify-between gap-4 rounded-2xl border p-6 text-left transition-colors duration-300 md:p-8 ${
                        row.enabled
                            ? "group border-bone/10 bg-bone/[0.03] hover:border-wine hover:bg-wine"
                            : "border-bone/10 bg-bone/[0.02] opacity-70"
                    }`;
                    return (
                        <motion.div
                            key={row.id}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                        >
                            {row.enabled ? (
                                <a
                                    href={row.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={row.testid}
                                    className={classes}
                                >
                                    {inner}
                                </a>
                            ) : (
                                <div data-testid={row.testid} className={classes}>
                                    {inner}
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);
