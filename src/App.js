import { useEffect, Component } from "react";
import Lenis from "lenis";
import "@/App.css";
import "@/index.css";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="grid min-h-screen place-items-center bg-ink px-6 text-center">
                    <div>
                        <p className="font-display text-2xl text-bone">
                            Something went wrong.
                        </p>
                        <button
                            data-testid="error-reload-button"
                            onClick={() => window.location.reload()}
                            className="mt-6 rounded-full bg-wine px-6 py-3 text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:bg-wine-bright"
                        >
                            Reload
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default function App() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
        const lenis = new Lenis({ anchors: true, lerp: 0.09 });
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, []);

    return (
        <ErrorBoundary>
            <div className="relative min-h-screen bg-ink text-bone">
                <Nav />
                <main>
                    <Hero />
                    <Marquee />
                    <Services />
                    <Pricing />
                    <Portfolio />
                    <Contact />
                </main>
                <Footer />
                <div className="grain" aria-hidden="true" />
            </div>
        </ErrorBoundary>
    );
}
