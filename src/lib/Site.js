export const EASE = [0.16, 1, 0.3, 1];

export const CONTACT = {
    whatsappDisplay: "+27 64 144 0638",
    whatsappNumber: "27641440638",
    email: "shekinah.doxamarketing@gmail.com",
    websiteDisplay: "doxamarketing.com",
};

export const waLink = (message) =>
    `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
        message
    )}`;

export const WA_DEFAULT = waLink(
    "Hi Doxa Marketing! I'd like to chat about some design work."
);

export const priceWaLink = (name, price) =>
    waLink(`Hi Doxa Marketing! I'd like to choose ${name} (${price}).`);

export const PORTFOLIO_URL = "https://canva.link/1q0jowwqma58x8h";

export const PRICING = [
    {
        category: "Logo Design",
        slug: "logo-design",
        items: [
            {
                name: "Essential Logo Package",
                price: "R350",
                note: "2 initial concepts · high-res PNG & JPEG files · 1 round of revisions",
                slug: "essential-logo-package",
            },
        ],
    },
    {
        category: "Flyer Design & Printing",
        slug: "flyer-design-printing",
        items: [
            {
                name: "Flyer Design Only",
                price: "R150",
                note: "Digital & print-ready PDF",
                slug: "flyer-design-only",
            },
            {
                name: "Design + Print Coordination",
                price: "R300",
                note: "Plus actual printer cost",
                slug: "flyer-design-print-coordination",
            },
        ],
    },
    {
        category: "Digital Ad Design",
        slug: "digital-ad-design",
        items: [
            {
                name: "Single Ad Graphic",
                price: "R100",
                note: "Meta optimized",
                slug: "single-ad-graphic",
            },
            {
                name: "Ad Graphic Pack (3 Styles)",
                price: "R250",
                note: "Feeds, stories, or reels",
                slug: "ad-graphic-pack-3-styles",
            },
        ],
    },
    {
        category: "Business Card Design",
        slug: "business-card-design",
        items: [
            {
                name: "Standard Card Design",
                price: "R250",
                note: "Double-sided, 2 revisions",
                slug: "standard-card-design",
            },
            {
                name: "Design + Print Coordination",
                price: "R450",
                note: "Plus actual printer cost",
                slug: "business-card-print-coordination",
            },
        ],
    },
    {
        category: "Canva Presentations",
        slug: "canva-presentations",
        items: [
            {
                name: "Starter (1–5 Slides)",
                price: "R300",
                note: "1 revision",
                slug: "canva-starter-1-5-slides",
            },
            {
                name: "Standard (6–12 Slides)",
                price: "R650",
                note: "2 revisions",
                slug: "canva-standard-6-12-slides",
            },
            {
                name: "Add-On: Presenter Notes Integration",
                price: "+R100",
                note: "Added to any presentation package",
                slug: "canva-presenter-notes-addon",
            },
        ],
    },
    {
        category: "Revisions & Redesigns",
        slug: "revisions-redesigns",
        items: [
            {
                name: "Extra Revision Round",
                price: "R150",
                note: "Minor text, color, layout tweaks",
                slug: "extra-revision-round",
            },
            {
                name: "Major Redesign",
                price: "R450",
                note: "New concept / structural change after approval",
                slug: "major-redesign",
            },
        ],
    },
];

export const CI_PACKAGE = {
    name: "Corporate Identity Package",
    price: "R1,850",
    slug: "corporate-identity-package",
    includes: [
        "Logo design — primary, secondary & vector files",
        "Brand style guide",
        "Business card design",
        "Flyer design",
        "1 digital ad creative",
        "2 rounds of revisions across all assets",
    ],
};
