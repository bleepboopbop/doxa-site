import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { EASE } from "@/lib/site";

const Line = ({ children, delay = 0, className = "" }) => (
    <span className={`block overflow-hidden ${className}`}>
        <motion.span
            className="block will-change-transform"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay, ease: EASE }}
        >
            {children}
        </motion.span>
    </span>
);

const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
});

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
    const yMark = useTransform(scrollYProgress, [0, 1], [0, -90]);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
        stiffness: 50,
        damping: 18,
    });
    const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), {
        stiffness: 50,
        damping: 18,
    });

    const onMouseMove = (e) => {
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
    };

    return (
        <section
            id="top"
            ref={ref}
            onMouseMove={onMouseMove}
            className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pt-32"
        >
            <motion.div
                aria-hidden="true"
                style={{ y: yGlow }}
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute -top-40 left-1/2 h-[60vh] w-[90vw] -translate-x-1/2 rounded-full bg-wine/25 blur-[140px]" />
                <div className="absolute -bottom-[20%] -right-[10%] h-[50vh] w-[50vw] rounded-full bg-wine-deep/40 blur-[120px]" />
            </motion.div>

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden"
            >
                <motion.span
                    style={{
                        y: yMark,
                        rotateX,
                        rotateY,
                        transformPerspective: 900,
                    }}
                    className="text-stroke-wine -mt-8 block select-none pr-[2vw] font-display text-[42vw] font-semibold leading-none md:text-[32vw]"
                >
                    D
                </motion.span>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-6xl">
                <motion.div
                    {...fadeUp(0.1)}
                    className="mb-8 flex items-center gap-3"
                >
                    <img
                        src="/doxa-mark.jpg"
                        alt="Doxa Marketing logo"
                        data-testid="hero-logo-img"
                        className="h-12 w-12 rounded-xl object-cover ring-1 ring-wine/40 md:h-14 md:w-14"
                    />
                    <span className="h-px w-10 bg-wine-bright/60" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-bone/70">
                        Digital Marketing &amp; Design
                    </span>
                </motion.div>

                <h1 className="font-display font-semibold uppercase leading-[0.88] tracking-tight">
                    <Line delay={0.15} className="text-[clamp(2.6rem,12.5vw,10.5rem)]">
                        Doxa
                    </Line>
                    <Line delay={0.3} className="text-[clamp(2.6rem,12.5vw,10.5rem)]">
                        Marketing
                    </Line>
                </h1>

                <Line delay={0.55} className="mt-6">
                    <span className="font-display text-[clamp(1.6rem,4vw,3rem)] leading-snug text-bone/90">
                        Everything is{" "}
                        <em className="font-serifit italic text-wine-bright">
                            possible.
                        </em>
                    </span>
                </Line>

                <motion.p
                    {...fadeUp(0.7)}
                    className="mt-6 max-w-md text-sm leading-relaxed text-bone/60 md:text-base"
                >
                    Logos, flyers, ads and everything in between — we
                    design the work that makes your business impossible to
                    ignore.
                </motion.p>

                <motion.div
                    {...fadeUp(0.85)}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <a
                        href="#contact"
                        data-testid="hero-get-in-touch-btn"
                        className="group inline-flex items-center gap-3 rounded-full bg-wine px-7 py-4 text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:bg-wine-bright"
                    >
                        Get in touch
                        <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                    </a>
                    <a
                        href="#services"
                        data-testid="hero-services-link"
                        className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-bone/80 transition-colors hover:border-wine-bright hover:text-wine-bright"
                    >
                        See what we do
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </motion.div>
            </div>

            <motion.a
                href="#contact"
                data-testid="hero-spin-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, ease: EASE }}
                className="absolute bottom-8 right-8 z-10 hidden h-32 w-32 place-items-center md:grid"
            >
                <svg
                    viewBox="0 0 100 100"
                    className="animate-spin-slow absolute inset-0 h-full w-full"
                >
                    <defs>
                        <path
                            id="badge-circle"
                            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                        />
                    </defs>
                    <text
                        className="fill-bone/50 font-sans"
                        style={{ fontSize: "8px", letterSpacing: "0.22em" }}
                    >
                        <textPath href="#badge-circle">
                            EVERYTHING IS POSSIBLE · DOXA MARKETING ·
                        </textPath>
                    </text>
                </svg>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-wine/40 bg-wine/20">
                    <ArrowDown className="h-5 w-5 text-wine-bright" />
                </span>
            </motion.a>
        </section>
    );
};
