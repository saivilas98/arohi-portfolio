export const profile = {
  name: "Arohi Shukla",
  role: "Social Media Manager",
  location: "India",
  tagline: "I make brands sound less like brands.",
  email: "hello@arohishukla.com",
  linkedin: "https://linkedin.com/in/arohishukla",
  instagram: "https://instagram.com/arohishukla",
  resumeUrl: "/Arohi-Shukla-Resume.pdf",
};

export const about = {
  eyebrow: "About",
  heading: "Content that belongs in the feed, not interrupts it.",
  paragraphs: [
    "I've spent the last five years helping brands stop sounding like brands. That usually means less polish and more personality — the kind of voice that survives a scroll instead of getting skipped past.",
    "My job sits at the intersection of strategy and instinct: knowing why a hook works, and knowing when to break the rules anyway. I've built that muscle across skincare, grooming, and home care — categories that couldn't be more different, but both live or die by the same question: would someone actually stop for this?",
    "What excites me most isn't the campaign that looks good in a deck. It's the comment section that gets weird, the giveaway that snowballs past what the budget expected, the ad that outperforms because it didn't try so hard.",
  ],
};

export type ExperienceEntry = {
  org: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    org: "Adigo India",
    role: "Content & Social Strategy",
    period: "Beauty, Grooming & Personal Care",
    summary:
      "Built the brand's voice from scratch in a category split between clinical and aspirational — and made skincare feel like something you'd actually enjoy showing up for.",
    points: [
      "Led organic and paid social direction across Instagram, leaning into humor and relatability over polish",
      "Wrote and produced a pop-culture testimonial series for a beard oil launch, casting Dumbledore, Santa, and Khal Drogo as brand ambassadors",
      "Ran always-on meme and giveaway content that pulled in both male and female audiences to a gendered category",
    ],
  },
  {
    org: "Stanfresh India",
    role: "Content & Social Strategy",
    period: "Home Care",
    summary:
      "Took on a low-interest, habit-driven category and gave it a reason to be noticed — thumb-stopping content with copy built for the scroll, not the shelf.",
    points: [
      "Directed A+ content and product storytelling across the detergent and home-cleaning range",
      "Wrote scroll-first social captions and ad copy focused on clarity over cleverness",
      "Designed interactive carousel and giveaway formats that positioned the brand as part of the household, not just a product in it",
    ],
  },
];

export type CaseStudy = {
  id: string;
  brand: string;
  category: string;
  title: string;
  challenge: string;
  approach: string[];
  execution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "adigo",
    brand: "Adigo India",
    category: "Beauty, Grooming & Personal Care",
    title: "Making skincare fun again",
    challenge:
      "Skincare content tends to live in one of two lanes — clinical and hard to get into, or aspirational and hard to follow through on. Adigo needed a third lane: approachable enough to build a real audience from zero.",
    approach: [
      "Relatability over perfection, in every asset",
      "Light, humorous hooks built to earn the first two seconds of attention",
      "A simple, visually clear tone across every ad, post, and caption",
    ],
    execution:
      "Reframed skincare from 'a routine you should follow' to 'something that fits your day anyway.' For a beard oil launch, I wrote a testimonial series voiced by pop-culture icons — Dumbledore, Hagrid, Khal Drogo, Thor, and Santa — each line tuned to the character's personality while reinforcing Adigo's core value of positive masculinity. On the paid side, a straightforward product photoshoot ad consistently outperformed more stylised variants in A/B testing.",
    outcome:
      "The brand's page became a place people wanted to visit, not scroll past — memes performed as well as ads, and the audience skewed both male and female in a category that's usually one or the other.",
    metrics: [
      { label: "Giveaway views", value: "47.6K" },
      { label: "Giveaway comments", value: "196" },
      { label: "Ad performance", value: "Top A/B" },
    ],
  },
  {
    id: "stanfresh",
    brand: "Stanfresh India",
    category: "Home Care",
    title: "Interrupting the autopilot aisle",
    challenge:
      "Home care is a low-interest category — people restock on habit, not emotion. The brief wasn't to make detergent exciting; it was to earn a thumb-stop in a feed full of things people actively don't think about.",
    approach: [
      "Relatable, everyday scenarios instead of product-first messaging",
      "Clean, human copy — short captions, clear CTAs, zero corporate voice",
      "A+ content built for scanners: bold benefit statements, proof, one job per module",
    ],
    execution:
      "Every post was given a single job to do. Review-led social proof ('Approved by 2,000+ homes') built trust without overselling. A seasonal combo ad and a kitchen-themed guessing-game giveaway kept the account active between launches. On Amazon, A+ content modules were rebuilt around a two-second read: benefit first, proof second, instructions last — no clutter competing for attention.",
    outcome:
      "The account moved from a shelf-facing product feed to a household presence — content people engaged with the same way they would a lifestyle brand, not a cleaning one.",
    metrics: [
      { label: "Homes reviewed", value: "2,000+" },
      { label: "Corporate jargon used", value: "Zero" },
      { label: "Content system", value: "Modular" },
    ],
  },
];

export const skills = [
  "Brand Voice & Tone",
  "Content Strategy",
  "Social Copywriting",
  "Paid Social Campaigns",
  "A/B Testing",
  "Amazon A+ Content",
  "Community Management",
  "Giveaway & UGC Campaigns",
  "Meme & Trend Marketing",
  "Cross-Category Brand Building",
  "Analytics-Led Iteration",
  "Cross-Functional Collaboration",
];

export type Achievement = {
  title: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    title: "47.6K views, one giveaway",
    detail:
      "A festive 'Sanskari Icebreakers' giveaway for Adigo pulled in 196 comments and an outsized share of new followers from a single post.",
  },
  {
    title: "The ad that won by not trying",
    detail:
      "A simple product photoshoot outperformed every other creative variant in A/B testing — proof that clarity beats polish more often than decks admit.",
  },
  {
    title: "Positive masculinity, at scale",
    detail:
      "A five-character pop-culture testimonial series for a beard oil launch became one of Adigo's most-shared social formats.",
  },
  {
    title: "2,000+ homes, one trust line",
    detail:
      "Turned real customer reviews into a single social-proof asset that became a recurring anchor across Stanfresh's paid and organic content.",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
