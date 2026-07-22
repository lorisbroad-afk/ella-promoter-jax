import { useEffect, useRef, useState, type ReactNode } from "react";

const mascot = "/images/ella-mascot.png";
const heroArena = "/images/hero-arena.png";
const fpsArt = "/images/gallery-fps.png";
const battleRoyaleArt = "/images/gallery-battle-royale.png";
const rgbSetupArt = "/images/gallery-rgb-setup.png";
const basketballArt = "/images/gallery-basketball.png";
const cityHeistArt = "/images/gallery-city-heist.png";
const fantasyHorrorArt = "/images/gallery-fantasy-horror.png";
const stockSetupOne =
  "https://images.pexels.com/photos/9072394/pexels-photo-9072394.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const stockSetupTwo =
  "https://images.pexels.com/photos/33050959/pexels-photo-33050959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const particleDots = [
  { left: "6%", top: "16%", size: 9, delay: "0s", duration: "12s" },
  { left: "12%", top: "28%", size: 5, delay: "1s", duration: "14s" },
  { left: "20%", top: "12%", size: 7, delay: "2s", duration: "11s" },
  { left: "24%", top: "42%", size: 10, delay: "0.5s", duration: "13s" },
  { left: "33%", top: "22%", size: 6, delay: "1.5s", duration: "15s" },
  { left: "42%", top: "10%", size: 7, delay: "3s", duration: "10s" },
  { left: "48%", top: "30%", size: 5, delay: "1.8s", duration: "12s" },
  { left: "56%", top: "18%", size: 10, delay: "0.2s", duration: "16s" },
  { left: "60%", top: "38%", size: 7, delay: "2.2s", duration: "14s" },
  { left: "68%", top: "14%", size: 6, delay: "1.1s", duration: "13s" },
  { left: "74%", top: "26%", size: 9, delay: "0.7s", duration: "12s" },
  { left: "82%", top: "18%", size: 5, delay: "2.5s", duration: "11s" },
  { left: "88%", top: "34%", size: 11, delay: "3.2s", duration: "17s" },
  { left: "91%", top: "20%", size: 7, delay: "0.9s", duration: "13s" },
  { left: "16%", top: "68%", size: 8, delay: "1.4s", duration: "15s" },
  { left: "36%", top: "72%", size: 5, delay: "2.1s", duration: "14s" },
  { left: "58%", top: "70%", size: 9, delay: "0.4s", duration: "12s" },
  { left: "78%", top: "74%", size: 6, delay: "1.7s", duration: "13s" },
];

const platforms = [
  { name: "Twitch", symbol: "TW", sub: "Live discovery campaigns" },
  { name: "Kick", symbol: "KK", sub: "Audience growth acceleration" },
  { name: "YouTube", symbol: "YT", sub: "Video reach and visibility" },
  { name: "Discord", symbol: "DC", sub: "Community building systems" },
  { name: "TikTok", symbol: "TT", sub: "Short-form conversion loops" },
  { name: "Facebook", symbol: "FB", sub: "Reach expansion and retargeting" },
  { name: "Fiverr", symbol: "FV", sub: "Trusted freelance marketplace" },
  { name: "Upwork", symbol: "UW", sub: "Professional client delivery" },
];

const services = [
  {
    title: "Twitch Promotion",
    desc: "Precision promotion campaigns designed to increase discoverability, attract aligned viewers, and improve stream momentum.",
    deliverable: "Discovery strategy + traffic channels",
    image: heroArena,
  },
  {
    title: "Kick Promotion",
    desc: "Fast-moving Kick growth support with outreach angles, launch campaigns, and cross-platform attention loops.",
    deliverable: "Kick visibility and community activation",
    image: battleRoyaleArt,
  },
  {
    title: "YouTube Growth",
    desc: "Audience-building systems for shorts, clips, thumbnails, titles, and content positioning built around creator goals.",
    deliverable: "Content growth roadmap",
    image: rgbSetupArt,
  },
  {
    title: "Discord Community Building",
    desc: "Turn passive viewers into active superfans through onboarding flows, structure, engagement rituals, and moderation strategy.",
    deliverable: "Server structure + engagement loop",
    image: stockSetupOne,
  },
  {
    title: "Stream Branding",
    desc: "Create a standout creator identity with a premium visual system, messaging, palette, logo direction, and brand presence.",
    deliverable: "Brand language + positioning",
    image: mascot,
  },
  {
    title: "Twitch Graphics",
    desc: "Custom profile banners, panels, thumbnail styles, offline screens, and channel graphics built to look elite and consistent.",
    deliverable: "Channel visuals pack",
    image: rgbSetupArt,
  },
  {
    title: "Stream Overlays",
    desc: "HUD-inspired overlays, alerts, scenes, and transitions that elevate your broadcasts without cluttering the experience.",
    deliverable: "Overlay and alert kit",
    image: heroArena,
  },
  {
    title: "Custom Streamer Websites",
    desc: "AAA-quality websites for streamers, clans, communities, and creators who need a premium digital home beyond social media.",
    deliverable: "Full custom web build",
    image: stockSetupTwo,
  },
  {
    title: "Personal Portfolio Websites",
    desc: "Professional creator portfolios that showcase achievements, clips, sponsorship value, and your unique brand identity.",
    deliverable: "Portfolio funnel experience",
    image: cityHeistArt,
  },
  {
    title: "Landing Pages",
    desc: "Conversion-focused pages for offers, launches, events, or campaigns with clean CTAs and strong visual storytelling.",
    deliverable: "Single-page conversion site",
    image: fpsArt,
  },
  {
    title: "Gaming Brand Identity",
    desc: "Naming support, aesthetic systems, campaign direction, and premium presentation for creators building long-term brands.",
    deliverable: "Identity design framework",
    image: fantasyHorrorArt,
  },
  {
    title: "SEO Optimization",
    desc: "Search-ready structure, metadata, content hierarchy, and keyword placement for websites and creator discoverability.",
    deliverable: "Technical + on-page SEO pass",
    image: basketballArt,
  },
  {
    title: "Live Stream Marketing",
    desc: "Integrated multi-platform promotion plans that drive attention before, during, and after each stream or event.",
    deliverable: "Launch and retention campaign",
    image: battleRoyaleArt,
  },
];

const galleryItems = [
  { title: "Mascot Identity", type: "Brand Aura", image: mascot },
  { title: "Esports Arena", type: "Hero Visual", image: heroArena },
  { title: "FPS Intensity", type: "Action Poster", image: fpsArt },
  { title: "Battle Royale Energy", type: "Momentum Scene", image: battleRoyaleArt },
  { title: "RGB Creator Setup", type: "Studio Art", image: rgbSetupArt },
  { title: "Cyber Hoops", type: "Sports Gaming", image: basketballArt },
  { title: "Neon Heist Night", type: "Open World", image: cityHeistArt },
  { title: "Fantasy Horror Realm", type: "Atmosphere", image: fantasyHorrorArt },
  { title: "Tournament Room", type: "Stock Setup", image: stockSetupOne },
  { title: "Creator Command Center", type: "Stock Setup", image: stockSetupTwo },
];

const featuredGames = [
  { title: "Call of Duty", vibe: "Aggressive FPS visibility", image: fpsArt },
  { title: "Fortnite", vibe: "High-energy battle royale funnels", image: battleRoyaleArt },
  { title: "Marvel Rivals", vibe: "Hero-driven campaign positioning", image: heroArena },
  { title: "NBA 2K25", vibe: "Competitive sports creator branding", image: basketballArt },
  { title: "NBA 2K26", vibe: "Franchise-ready showcase design", image: basketballArt },
  { title: "Apex Legends", vibe: "Squad hype and launch momentum", image: battleRoyaleArt },
  { title: "Valorant", vibe: "Precision tactical presentation", image: fpsArt },
  { title: "GTA V", vibe: "Open-world chaos and story energy", image: cityHeistArt },
  { title: "Minecraft", vibe: "Community-first creator worldbuilding", image: stockSetupTwo },
  { title: "Escape from Tarkov", vibe: "Hardcore survival audience fit", image: fpsArt },
  { title: "Elden Ring", vibe: "Epic prestige and dark fantasy tone", image: fantasyHorrorArt },
  { title: "Balatro", vibe: "Stylized indie campaign flair", image: heroArena },
  { title: "Slay the Spire", vibe: "Deck-building atmosphere and polish", image: fantasyHorrorArt },
  { title: "Silent Hill", vibe: "Horror ambience and suspense build", image: fantasyHorrorArt },
  { title: "Black Jacket", vibe: "Noir action moodboarding", image: cityHeistArt },
];

const results = [
  { label: "Followers", before: 240, after: 2850, unit: "", gain: "+1087%" },
  { label: "Average Viewers", before: 7, after: 86, unit: "", gain: "+1128%" },
  { label: "Engagement Rate", before: 3, after: 18, unit: "%", gain: "+500%" },
  { label: "Discord Members", before: 65, after: 1640, unit: "", gain: "+2423%" },
  { label: "YouTube Subscribers", before: 120, after: 2190, unit: "", gain: "+1725%" },
];

const portfolioProjects = [
  {
    title: "JAYYXXY Gaming Website",
    description:
      "A cinematic gaming website direction centered on streamer identity, hype visuals, social proof, and premium call-to-action structure.",
    stack: ["React", "Vite", "Tailwind", "Motion-ready UI"],
    href: "https://jayyxxy-gaming.vercel.app/",
    image: rgbSetupArt,
  },
  {
    title: "Oladips Promotions",
    description:
      "A bold promotional presentation focused on trust, services, and creator conversion with strong visual rhythm and clean delivery.",
    stack: ["React", "Responsive Design", "Conversion Layout", "Creator Branding"],
    href: "https://oladips-promotions-t952.vercel.app/",
    image: stockSetupOne,
  },
];

const inspirationSites = [
  {
    title: "Deematrix",
    note: "Layout quality, layered visuals, and premium section pacing.",
    href: "https://deematrix1.netlify.app/",
  },
  {
    title: "JAYYXXY Gaming",
    note: "Gaming atmosphere, creator focus, and immersive content hierarchy.",
    href: "https://jayyxxy-gaming.vercel.app/",
  },
  {
    title: "Oladips Promotions",
    note: "Promotional clarity, structured offers, and conversion signals.",
    href: "https://oladips-promotions-t952.vercel.app/",
  },
];

const testimonials = [
  {
    name: "KairoVFX",
    flag: "🇺🇸",
    role: "Twitch Creator",
    quote:
      "The branding felt major-league. My stream went from looking random to looking like a real creator business with structure behind it.",
  },
  {
    name: "NovaReign",
    flag: "🇬🇧",
    role: "Kick Streamer",
    quote:
      "Fast communication, clear ideas, and a premium look. The community setup and growth strategy gave me direction I was missing.",
  },
  {
    name: "RexCourt",
    flag: "🇨🇦",
    role: "2K Content Creator",
    quote:
      "The visuals, website, and promotion plan all connected together. It felt custom, polished, and built around my audience instead of generic advice.",
  },
];

const strengths = [
  "Professional experience across creator promotion and conversion-focused design.",
  "Premium branding that makes streamers look established, not amateur.",
  "Custom websites tailored to streamers, portfolios, agencies, and gaming brands.",
  "Community growth systems that move followers into active fan spaces.",
  "Fast communication and structured delivery from first inquiry to launch.",
  "Ongoing support for updates, optimization, scaling, and future campaigns.",
];

const pricing = [
  {
    name: "Starter",
    price: "Custom Quote",
    tag: "Best for new creators",
    features: ["Platform audit", "Growth recommendations", "1 focused service", "Light support"],
  },
  {
    name: "Growth",
    price: "Custom Quote",
    tag: "Momentum package",
    features: ["Promotion setup", "Discord guidance", "Brand tune-up", "Campaign plan"],
  },
  {
    name: "Premium",
    price: "Custom Quote",
    tag: "Popular choice",
    featured: true,
    features: ["Multi-platform strategy", "Custom assets", "Website planning", "Priority revisions"],
  },
  {
    name: "Elite",
    price: "Custom Quote",
    tag: "High-performance creators",
    features: ["Full creator ecosystem", "Launch support", "Advanced brand direction", "Priority communication"],
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    tag: "Teams and agency scale",
    features: ["Multiple funnels", "Admin-ready planning", "Analytics setup", "Long-term growth ops"],
  },
];

const faqs = [
  {
    q: "How does Twitch promotion work?",
    a: "Promotion is tailored to your channel goals and audience. It can include visibility campaigns, community funnels, cross-platform support, branding improvements, and content positioning to help more ideal viewers discover your streams.",
  },
  {
    q: "Do you build custom streamer websites?",
    a: "Yes. Custom streamer websites are one of the signature offers. They are built to help creators look premium, centralize their brand, showcase links and sponsors, and convert attention into real opportunities.",
  },
  {
    q: "Which streaming platforms do you support?",
    a: "Twitch, Kick, YouTube, Discord, TikTok, Facebook, and broader creator ecosystems. The strategy can be focused on one platform or designed as a connected multi-platform growth system.",
  },
  {
    q: "Can you help new streamers?",
    a: "Absolutely. New creators often benefit the most from building a clear identity, launch plan, and community structure early instead of trying to fix it later.",
  },
  {
    q: "How long do projects take?",
    a: "Smaller strategy or branding tasks can move quickly, while custom websites and premium creator systems take longer depending on scope. Timelines are confirmed after reviewing your goals and deliverables.",
  },
  {
    q: "How do we get started?",
    a: "Use the contact form, Fiverr, Upwork, or Discord link. Share your platform, current goals, and the service you need, and the next best step can be mapped out from there.",
  },
];

const backendReady = [
  "Supabase-ready contact form wiring",
  "Quote request intake and tracking",
  "Admin dashboard module planning",
  "Client inquiry search and filtering",
  "Analytics cards and campaign insights",
  "CSV export for leads and project data",
  "Reply-by-email workflow support",
  "Expandable creator CRM foundation",
];

const socials = [
  { label: "Fiverr", href: "https://www.fiverr.com/users/ella_promo_jax" },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01ef7c641cb5b3f365?mp_source=share",
  },
  { label: "TikTok", href: "https://www.tiktok.com/@ella_promo_jax" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61555478619901",
  },
  { label: "Discord", href: "https://discord.gg/dHCRFjEF" },
  { label: "Email", href: "mailto:ellamonaninabelinda@gmail.com" },
];

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let started = false;

    const animate = (startTime: number) => {
      const step = (time: number) => {
        const progress = Math.min((time - startTime) / 1600, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(end * eased);
        if (progress < 1) frame = window.requestAnimationFrame(step);
      };
      frame = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            animate(performance.now());
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [end]);

  return (
    <span ref={ref}>
      {Math.round(value).toLocaleString()}
      {suffix}
    </span>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{copy}</p>
    </div>
  );
}

function LinkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const styles = {
    primary:
      "bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300 text-slate-950 shadow-[0_0_32px_rgba(0,191,255,0.32)] hover:shadow-[0_0_44px_rgba(255,215,0,0.24)]",
    secondary:
      "border border-white/14 bg-white/5 text-white hover:border-sky-300/40 hover:bg-white/10",
    ghost:
      "border border-sky-300/22 bg-sky-300/10 text-sky-100 hover:border-amber-300/40 hover:bg-amber-300/10",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`shine-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] transition-all duration-300 sm:text-sm ${styles[variant]}`}
    >
      <span>{children}</span>
      <span aria-hidden>↗</span>
    </a>
  );
}

function Watermark({ side = "right", scale = "h-64 md:h-96" }: { side?: "left" | "right"; scale?: string }) {
  return (
    <img
      src={mascot}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 opacity-[0.08] blur-[2px] mix-blend-screen lg:block ${scale} ${
        side === "right" ? "-right-12" : "-left-12"
      }`}
    />
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block space-y-3 text-sm font-medium text-slate-100">
      <span className="text-xs uppercase tracking-[0.18em] text-slate-300">{label}</span>
      {children}
    </label>
  );
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    const updateMouse = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div className="cursor-glow" />

      <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-[3px] bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300 shadow-[0_0_30px_rgba(0,191,255,0.8)] transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/12 bg-white/5 p-1.5 shadow-[0_0_28px_rgba(0,191,255,0.18)]">
              <img src={mascot} alt="Ella Promoter Jax mascot" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="heading-font text-sm font-black uppercase tracking-[0.28em] text-white">ELLA PROMOTER JAX</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-sky-200/75">Grow • Engage • Dominate</p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 xl:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#games" className="transition hover:text-white">Games</a>
            <a href="#results" className="transition hover:text-white">Results</a>
            <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <LinkButton href="#contact" variant="ghost">
            Book a Free Strategy Call
          </LinkButton>
        </div>
      </header>

      <main>
        <section id="top" className="relative isolate min-h-screen overflow-hidden pt-28">
          <img src={heroArena} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="mesh-overlay absolute inset-0 opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,191,255,0.16),_transparent_30%),linear-gradient(180deg,rgba(5,7,11,0.2),rgba(5,7,11,0.88)_82%)]" />
          <img
            src={mascot}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-[70rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.1] blur-sm md:block"
          />

          {particleDots.map((dot, index) => (
            <span
              key={`${dot.left}-${dot.top}-${index}`}
              className="drift absolute rounded-full bg-gradient-to-br from-sky-300 to-amber-200 blur-[1px]"
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.size,
                height: dot.size,
                animationDelay: dot.delay,
                animationDuration: dot.duration,
                boxShadow: "0 0 16px rgba(0,191,255,0.35)",
              }}
            />
          ))}

          <div className="absolute -left-24 top-36 h-64 w-64 rounded-full bg-sky-500/18 blur-[140px]" />
          <div className="absolute -right-16 top-52 h-72 w-72 rounded-full bg-amber-400/10 blur-[140px]" />
          <div className="absolute bottom-0 left-1/2 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-sky-400/16 blur-[150px]" />

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-8 text-center sm:px-6 lg:px-8">
            <span className="eyebrow">The Ultimate Stream Growth & Creator Branding Agency</span>
            <h1 className="mt-7 max-w-5xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-7xl">
              Helping Streamers Grow Faster, Build Stronger Communities, and Create <span className="blue-gold-text">Unforgettable Brands</span>.
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg">
              Professional Twitch Promotion, Kick Growth, YouTube Marketing, Discord Community Building, and Premium Streamer Website Development—all in one place.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <LinkButton href="https://www.fiverr.com/users/ella_promo_jax">Hire Me on Fiverr</LinkButton>
              <LinkButton href="https://www.upwork.com/freelancers/~01ef7c641cb5b3f365?mp_source=share" variant="secondary">
                Hire Me on Upwork
              </LinkButton>
              <LinkButton href="https://discord.gg/dHCRFjEF" variant="secondary">
                Join My Discord
              </LinkButton>
              <LinkButton href="#portfolio" variant="ghost">
                View My Portfolio
              </LinkButton>
            </div>

            <div className="relative mt-12 w-full max-w-5xl">
              <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/15 blur-[120px]" />
              <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/20 bg-white/5 blur-[2px]" />
              <div className="relative mx-auto flex max-w-xl justify-center">
                <div className="pulse-glow floaty relative rounded-[2rem] border border-white/12 bg-white/5 p-3 shadow-[0_0_45px_rgba(0,191,255,0.18)] backdrop-blur-sm">
                  <div className="hud-corner top-left" />
                  <div className="hud-corner bottom-right" />
                  <img
                    src={mascot}
                    alt="ELLA PROMOTER JAX mascot logo"
                    className="relative z-10 h-[26rem] w-full max-w-[26rem] rounded-[1.5rem] object-cover md:h-[30rem]"
                  />
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="glass-panel card-tilt rounded-3xl p-5 text-left text-sm">
                  <p className="heading-font text-sm font-bold uppercase tracking-[0.2em] text-sky-200">Stream Growth Specialist</p>
                  <p className="mt-3 text-slate-300">Multi-platform growth for Twitch, Kick, YouTube, TikTok, and live creator funnels.</p>
                </div>
                <div className="glass-panel card-tilt rounded-3xl p-5 text-left text-sm">
                  <p className="heading-font text-sm font-bold uppercase tracking-[0.2em] text-amber-200">Community Builder</p>
                  <p className="mt-3 text-slate-300">Discord structure, fan retention, launch rhythm, and creator-owned engagement systems.</p>
                </div>
                <div className="glass-panel card-tilt rounded-3xl p-5 text-left text-sm">
                  <p className="heading-font text-sm font-bold uppercase tracking-[0.2em] text-sky-200">Premium Website Developer</p>
                  <p className="mt-3 text-slate-300">Custom streamer websites, landing pages, and gaming portfolios built for trust and conversion.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.18em] text-slate-300">
              {[
                "Twitch Promotion Expert",
                "Kick Growth Specialist",
                "Discord Community Builder",
                "Streamer Website Developer",
                "Creator Branding Agency",
              ].map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="section-shell px-6 py-8 md:px-8">
            <Watermark side="left" scale="h-56 md:h-80" />
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Trusted Platforms</span>
                <h2 className="mt-4 text-2xl font-black text-white md:text-4xl">Built for the platforms creators live on.</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-300">
                Every funnel, campaign, landing page, and brand system is designed to feel native to the creator economy while still looking world-class.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  data-reveal
                  className="reveal glow-card card-tilt rounded-3xl p-4 text-center"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-gradient-to-br from-sky-400/18 to-amber-300/12 text-sm font-black tracking-[0.2em] text-white shadow-[0_0_30px_rgba(0,191,255,0.2)]">
                    {platform.symbol}
                  </div>
                  <p className="mt-4 heading-font text-sm font-bold uppercase tracking-[0.18em] text-white">{platform.name}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-400">{platform.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Core Services"
            title="Growth systems, creator branding, and premium gaming website builds."
            copy="Every service is designed to help streamers look elite, attract the right audience, and convert visibility into a stronger brand presence."
          />
          <Watermark side="right" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                data-reveal
                className="reveal glow-card card-tilt overflow-hidden rounded-[1.75rem]"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <div className="preview-surface relative h-56">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-sky-300/25 bg-slate-950/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-100">
                    Premium Illustration
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="heading-font text-lg font-black text-white">{service.title}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-300">{service.deliverable}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-200">
                      Learn More
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-300">{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="section-shell px-6 py-8 md:px-8 lg:px-10">
            <Watermark side="left" scale="h-72 md:h-[26rem]" />
            <SectionIntro
              eyebrow="Visual Universe"
              title="An image-heavy creator gallery built to feel like a premium AAA gaming launch."
              copy="From neon setup scenes to battle-ready action art, every part of the experience stays cinematic, branded, and visually alive."
            />
            <div className="grid auto-rows-[240px] gap-5 md:grid-cols-2 xl:grid-cols-4">
              {galleryItems.map((item, index) => {
                const tall = index % 5 === 0 || index % 5 === 3;
                const wide = index % 4 === 1;
                return (
                  <div
                    key={item.title}
                    data-reveal
                    className={`reveal glow-card group relative overflow-hidden rounded-[1.75rem] ${
                      tall ? "md:row-span-2" : ""
                    } ${wide ? "xl:col-span-2" : ""}`}
                    style={{ transitionDelay: `${index * 35}ms` }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                      {item.type}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="heading-font text-lg font-black text-white">{item.title}</p>
                        <p className="mt-2 text-sm text-slate-300">Blue and gold cinematic direction</p>
                      </div>
                      <div className="hidden rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-amber-200 md:block">
                        Gallery
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="games" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Featured Games"
            title="Promotion concepts tailored to the games your audience already obsesses over."
            copy="These game tiles show the creative directions, aesthetics, and audience hooks that can be adapted into campaigns, websites, and creator brand assets."
          />
          <Watermark side="right" scale="h-56 md:h-[24rem]" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredGames.map((game, index) => (
              <article
                key={game.title}
                data-reveal
                className="reveal glow-card card-tilt overflow-hidden rounded-[1.75rem]"
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                <div className="preview-surface h-64">
                  <img src={game.image} alt={game.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-sky-300/20 bg-slate-950/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-100">
                    Featured Artwork
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="heading-font text-xl font-black text-white">{game.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-300">{game.vibe}</p>
                    </div>
                    <div className="rounded-2xl border border-amber-200/20 bg-amber-300/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-200">
                      Campaign Ready
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 border-t border-white/8 bg-slate-950/40 p-5 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-sky-200">Gameplay Preview Placeholder</p>
                    <p className="mt-2 text-sm text-slate-400">Optional short-form gameplay teasers, stream clips, or launch trailers can live here.</p>
                  </div>
                  <div className="rounded-full border border-white/12 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    Neon Border • Hover Lift
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="results" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="section-shell px-6 py-8 md:px-8 lg:px-10">
            <Watermark side="left" scale="h-72 md:h-[28rem]" />
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div data-reveal className="reveal">
                <span className="eyebrow">Promotion Results</span>
                <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">Before vs after growth storytelling that instantly communicates value.</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                  These sample metrics are <span className="font-semibold text-white">illustrative examples</span> of what a premium before-and-after presentation can look like when showcasing campaign outcomes.
                </p>

                <div className="mt-8 browser-shot p-4">
                  <div className="flex items-center gap-2 border-b border-white/8 px-2 pb-4">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <div className="ml-3 rounded-full border border-white/8 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                      Growth Command View
                    </div>
                  </div>
                  <div className="grid gap-4 pt-4 md:grid-cols-2">
                    <div className="overflow-hidden rounded-3xl border border-white/10">
                      <img src={heroArena} alt="Growth command preview" className="h-64 w-full object-cover" />
                    </div>
                    <div className="space-y-4">
                      <div className="glow-card rounded-3xl p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-sky-200">Campaign Layer</p>
                        <p className="mt-3 text-sm text-slate-300">Promotion, brand identity, website presence, and Discord funneling working together instead of as disconnected tasks.</p>
                      </div>
                      <div className="glow-card rounded-3xl p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-amber-200">Conversion Layer</p>
                        <p className="mt-3 text-sm text-slate-300">Every audience touchpoint nudges a casual viewer toward fan, client, or returning community member status.</p>
                      </div>
                      <div className="glow-card rounded-3xl p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-sky-200">Retention Layer</p>
                        <p className="mt-3 text-sm text-slate-300">Community design and creator positioning help momentum last longer than a single stream spike.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                {results.map((result, index) => {
                  const percentage = Math.max((result.after / Math.max(result.before, 1)) * 16, 22);
                  return (
                    <div
                      key={result.label}
                      data-reveal
                      className="reveal glow-card rounded-[1.6rem] p-5"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="heading-font text-sm font-bold uppercase tracking-[0.2em] text-white">{result.label}</p>
                          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">Illustrative sample metric</p>
                        </div>
                        <div className="rounded-full border border-amber-200/20 bg-amber-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
                          {result.gain}
                        </div>
                      </div>

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Before</p>
                          <p className="mt-2 text-3xl font-black text-white">
                            <Counter end={result.before} suffix={result.unit} />
                          </p>
                        </div>
                        <div className="rounded-3xl border border-sky-300/18 bg-sky-300/10 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-sky-100">After</p>
                          <p className="mt-2 text-3xl font-black text-white">
                            <Counter end={result.after} suffix={result.unit} />
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate-400">
                          <span>Momentum Change</span>
                          <span>Before vs After</span>
                        </div>
                        <div className="metric-bar h-3">
                          <span style={{ width: `${Math.min(percentage, 100)}%` }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Streamer Website Portfolio"
            title="Premium creator website concepts and live references that elevate your entire brand."
            copy="This section is designed to show how ELLA PROMOTER JAX can move beyond promotion into a complete creator brand ecosystem with world-class web presentation."
          />
          <Watermark side="right" scale="h-72 md:h-[26rem]" />
          <div className="grid gap-8 xl:grid-cols-2">
            {portfolioProjects.map((project, index) => (
              <article
                key={project.title}
                data-reveal
                className="reveal glow-card overflow-hidden rounded-[2rem] p-5 md:p-6"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="browser-shot overflow-hidden">
                  <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <div className="ml-3 flex-1 rounded-full border border-white/8 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                      Live Website Preview
                    </div>
                  </div>
                  <div className="grid gap-4 p-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="preview-surface h-80 overflow-hidden rounded-[1.4rem]">
                      <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-slate-950/60 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-sky-100">
                        Large website screenshot area
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="badge-dot" />
                          <p className="text-xs uppercase tracking-[0.18em] text-sky-100">Hero + CTA Layout</p>
                        </div>
                        <div className="grid gap-2">
                          <div className="h-3 rounded-full bg-white/10" />
                          <div className="h-3 w-4/5 rounded-full bg-white/10" />
                          <div className="h-24 rounded-2xl bg-gradient-to-br from-sky-300/15 to-amber-300/12" />
                        </div>
                      </div>
                      <div className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="badge-dot" />
                          <p className="text-xs uppercase tracking-[0.18em] text-amber-100">Services + Social Proof</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-20 rounded-2xl bg-white/10" />
                          <div className="h-20 rounded-2xl bg-white/10" />
                          <div className="col-span-2 h-14 rounded-2xl bg-gradient-to-r from-sky-300/10 to-amber-300/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="heading-font text-2xl font-black text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <LinkButton href={project.href}>View Live Website</LinkButton>
                    <LinkButton href="#contact" variant="secondary">
                      Request Similar Build
                    </LinkButton>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 section-shell px-6 py-8 md:px-8">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Design Inspiration</span>
                <h3 className="mt-4 text-2xl font-black text-white md:text-4xl">Reference sites that inspired the level of polish.</h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-300">
                These are presented as inspiration references for layout quality, gaming atmosphere, and visual pacing—not as owned projects.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {inspirationSites.map((site, index) => (
                <div
                  key={site.title}
                  data-reveal
                  className="reveal glow-card rounded-[1.6rem] p-5"
                  style={{ transitionDelay: `${index * 45}ms` }}
                >
                  <p className="heading-font text-lg font-black text-white">{site.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{site.note}</p>
                  <div className="mt-5">
                    <LinkButton href={site.href} variant="ghost">
                      Open Inspiration Site
                    </LinkButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="section-shell px-6 py-8 md:px-8">
              <Watermark side="left" scale="h-56 md:h-[22rem]" />
              <span className="eyebrow">Client Testimonials</span>
              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">Trust signals that make outreach easier.</h2>
              <div className="mt-8 grid gap-5">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    data-reveal
                    className="reveal glow-card rounded-[1.6rem] p-5"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-sky-300/18 to-amber-300/12 text-lg font-black text-white">
                        {testimonial.name.slice(0, 2)}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="heading-font text-sm font-bold uppercase tracking-[0.18em] text-white">{testimonial.name}</p>
                          <span className="text-lg">{testimonial.flag}</span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                            {testimonial.role}
                          </span>
                        </div>
                        <div className="mt-3 text-amber-300">★★★★★</div>
                        <p className="mt-3 text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-shell px-6 py-8 md:px-8">
              <Watermark side="right" scale="h-56 md:h-[22rem]" />
              <span className="eyebrow">Why Choose ELLA PROMOTER JAX</span>
              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">A creator growth partner built for trust, polish, and results.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {strengths.map((item, index) => (
                  <div
                    key={item}
                    data-reveal
                    className="reveal glow-card rounded-[1.5rem] p-5"
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-sky-200">
                      ✦
                    </div>
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Pricing"
            title="Flexible packages for streamers at every level of growth."
            copy="Pricing is intentionally left as a custom quote placeholder so each creator can get a package aligned with goals, scope, and platform priorities."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {pricing.map((plan, index) => (
              <div
                key={plan.name}
                data-reveal
                className={`reveal glow-card card-tilt rounded-[1.8rem] p-6 ${plan.featured ? "ring-1 ring-amber-300/40" : ""}`}
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="heading-font text-xl font-black text-white">{plan.name}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-sky-100">{plan.tag}</p>
                  </div>
                  {plan.featured && (
                    <span className="rounded-full border border-amber-200/18 bg-amber-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-200">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-6 text-3xl font-black text-white">{plan.price}</p>
                <div className="soft-divider my-6" />
                <ul className="space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="badge-dot mt-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-3">
                  <LinkButton href="#contact">Order</LinkButton>
                  <LinkButton href="#contact" variant="secondary">
                    Compare
                  </LinkButton>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="section-shell px-6 py-8 md:px-8">
              <Watermark side="left" scale="h-64 md:h-[24rem]" />
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">Clear answers for streamers ready to move.</h2>
              <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.q}
                    data-reveal
                    className="reveal glow-card rounded-[1.6rem] p-5"
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    <summary className="cursor-pointer list-none pr-8 text-left heading-font text-sm font-bold uppercase tracking-[0.16em] text-white">
                      {faq.q}
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="section-shell overflow-hidden px-6 py-8 md:px-8">
              <div className="grid gap-6">
                <span className="eyebrow">Book a Free Strategy Call</span>
                <h2 className="text-3xl font-black text-white md:text-4xl">Give potential clients a premium next step, not just a page to browse.</h2>
                <p className="text-sm leading-7 text-slate-300">
                  Even if you route strategy calls through Fiverr, Upwork, Discord, or the contact form, presenting a consultation CTA instantly makes the agency feel more established and conversion-focused.
                </p>
                <div className="flex flex-wrap gap-3">
                  <LinkButton href="#contact">Book via Contact Form</LinkButton>
                  <LinkButton href="https://www.fiverr.com/users/ella_promo_jax" variant="secondary">
                    Book via Fiverr
                  </LinkButton>
                </div>
                <div className="browser-shot mt-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-300/8 via-transparent to-amber-300/8" />
                  <img src={mascot} alt="Strategy call mascot visual" className="mx-auto h-[26rem] object-contain p-6 floaty-slow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="section-shell px-6 py-8 md:px-8 lg:px-10">
            <Watermark side="right" scale="h-72 md:h-[28rem]" />
            <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
              <div data-reveal className="reveal">
                <span className="eyebrow">Backend Ready</span>
                <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">Prepared for Supabase integration and a future admin workflow.</h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                  The frontend is structured so the contact form, quote request flow, admin dashboard, inquiry tracking, analytics, search, export, and email reply workflows can be connected later without redesigning the experience.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {backendReady.map((item, index) => (
                    <div
                      key={item}
                      data-reveal
                      className="reveal glow-card rounded-[1.4rem] p-4"
                      style={{ transitionDelay: `${index * 35}ms` }}
                    >
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div data-reveal className="reveal browser-shot p-4">
                <div className="flex items-center gap-2 border-b border-white/8 px-2 pb-4">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <div className="ml-3 rounded-full border border-white/8 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                    Admin Dashboard Preview
                  </div>
                </div>
                <div className="grid gap-4 pt-4">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {["Inquiries", "Open Quotes", "Closed Deals"].map((metric, index) => (
                      <div key={metric} className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{metric}</p>
                        <p className="mt-3 text-3xl font-black text-white">{[42, 17, 9][index]}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-xs uppercase tracking-[0.18em] text-sky-100">Inquiry Tracking</p>
                        <span className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-200">
                          Live-ready
                        </span>
                      </div>
                      <div className="space-y-3">
                        {["Twitch redesign lead", "Kick growth request", "Discord build inquiry"].map((row) => (
                          <div key={row} className="rounded-2xl border border-white/8 bg-slate-950/40 p-3 text-sm text-slate-300">
                            {row}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-amber-100">Analytics Snapshot</p>
                      <div className="mt-4 space-y-4">
                        {[72, 58, 86].map((bar, index) => (
                          <div key={bar + index}>
                            <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate-400">
                              <span>{["Response Rate", "Quote Conversion", "Repeat Clients"][index]}</span>
                              <span>{bar}%</span>
                            </div>
                            <div className="metric-bar h-3">
                              <span style={{ width: `${bar}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[1fr_0.9fr]">
            <div className="section-shell px-6 py-8 md:px-8">
              <Watermark side="left" scale="h-72 md:h-[28rem]" />
              <span className="eyebrow">Contact Form</span>
              <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">Start your next growth move.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                This frontend is ready for future Supabase form handling, inquiry tracking, admin replies, and creator CRM workflows.
              </p>

              <form className="mt-8 grid gap-5 md:grid-cols-2">
                <Field label="Full Name">
                  <input className="form-input" placeholder="Your full name" />
                </Field>
                <Field label="Email">
                  <input type="email" className="form-input" placeholder="you@example.com" />
                </Field>
                <Field label="Streaming Platform">
                  <select className="form-input" defaultValue="">
                    <option value="" disabled>
                      Select a platform
                    </option>
                    <option>Twitch</option>
                    <option>Kick</option>
                    <option>YouTube</option>
                    <option>TikTok</option>
                    <option>Facebook</option>
                    <option>Multi-platform</option>
                  </select>
                </Field>
                <Field label="Twitch Channel">
                  <input className="form-input" placeholder="twitch.tv/yourchannel" />
                </Field>
                <Field label="Service Needed">
                  <select className="form-input" defaultValue="">
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option>Twitch Promotion</option>
                    <option>Kick Promotion</option>
                    <option>YouTube Growth</option>
                    <option>Discord Community Building</option>
                    <option>Stream Branding</option>
                    <option>Custom Streamer Website</option>
                    <option>Portfolio Website</option>
                    <option>Landing Page</option>
                  </select>
                </Field>
                <Field label="Budget">
                  <select className="form-input" defaultValue="">
                    <option value="" disabled>
                      Estimated budget
                    </option>
                    <option>$50 - $150</option>
                    <option>$150 - $500</option>
                    <option>$500 - $1,500</option>
                    <option>$1,500+</option>
                  </select>
                </Field>
                <Field label="Discord Username">
                  <input className="form-input" placeholder="username#1234 or @username" />
                </Field>
                <Field label="Preferred Timeline">
                  <input className="form-input" placeholder="ASAP, this week, this month..." />
                </Field>
                <div className="md:col-span-2">
                  <Field label="Message">
                    <textarea className="form-input min-h-40" placeholder="Tell me about your channel, current goals, and what you want to improve." />
                  </Field>
                </div>
                <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 rounded-[1.6rem] border border-white/8 bg-white/5 p-5">
                  <p className="max-w-2xl text-sm leading-7 text-slate-300">
                    Submission is presented as a frontend-ready experience for now. Supabase form storage, admin tracking, email replies, and analytics can be connected next.
                  </p>
                  <button
                    type="button"
                    className="shine-button rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-950 shadow-[0_0_40px_rgba(0,191,255,0.34)] transition hover:scale-[1.02]"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>

            <div className="grid gap-8">
              <div className="section-shell overflow-hidden px-6 py-8 md:px-8">
                <span className="eyebrow">Official Profiles</span>
                <h3 className="mt-5 text-2xl font-black text-white md:text-4xl">Meet clients where they already trust you.</h3>
                <div className="mt-8 grid gap-4">
                  {socials.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      data-reveal
                      className="reveal glow-card flex items-center justify-between rounded-[1.4rem] p-4 transition hover:translate-x-1"
                      style={{ transitionDelay: `${index * 40}ms` }}
                    >
                      <div>
                        <p className="heading-font text-sm font-bold uppercase tracking-[0.18em] text-white">{social.label}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">Official channel</p>
                      </div>
                      <span className="text-xl text-sky-200">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="section-shell overflow-hidden">
                <img src={stockSetupTwo} alt="Premium creator setup" className="h-72 w-full object-cover" />
                <div className="border-t border-white/8 p-6">
                  <p className="heading-font text-xl font-black text-white">Conversion-Focused Creator Studio</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Promotion, community, branding, and web design all live under one premium identity so potential clients instantly understand the value of working with ELLA PROMOTER JAX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/8 bg-slate-950/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5">
              <img src={mascot} alt="Ella Promoter Jax logo" className="h-full w-full rounded-xl object-cover" />
            </div>
            <div>
              <p className="heading-font text-sm font-black uppercase tracking-[0.25em] text-white">ELLA PROMOTER JAX</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">Grow • Engage • Dominate</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            <a href="#services" className="rounded-full border border-white/8 bg-white/5 px-4 py-2 hover:text-white">
              Services
            </a>
            <a href="#portfolio" className="rounded-full border border-white/8 bg-white/5 px-4 py-2 hover:text-white">
              Portfolio
            </a>
            <a href="#pricing" className="rounded-full border border-white/8 bg-white/5 px-4 py-2 hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="rounded-full border border-white/8 bg-white/5 px-4 py-2 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
