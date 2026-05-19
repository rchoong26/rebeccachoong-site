import type { ReactNode } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Contact", href: "#contact" }
];

const workCards = [
  {
    title: "Microbiome & Probiotics",
    text: "Consumer health, functional beverages, active probiotics, skin microbiome concepts and wellness product positioning."
  },
  {
    title: "Bio-Ecosystem Agriculture",
    text: "Bio-organic fertilizers, soil microbiome solutions, poultry waste conversion and sustainable agriculture transformation."
  },
  {
    title: "AI Strategy & Digital Systems",
    text: "AI-powered proposal development, sales training systems, agent onboarding, content systems and digital product infrastructure."
  },
  {
    title: "Brand & Commercialization",
    text: "Investor decks, go-to-market strategy, premium brand positioning, market education and product ecosystem development."
  }
];

const ecosystem = [
  {
    title: "Rafael Probiotics",
    text: "A next-generation probiotic lifestyle brand focused on active microbiome wellness, daily health rituals and consumer education."
  },
  {
    title: "OMSA / BEST Bio-Ecosystem Technology",
    text: "Multi-strain active microbial technology for agriculture, waste conversion, environmental management and biological transformation."
  },
  {
    title: "Bio-Organic Fertilizer Market Entry",
    text: "Strategic commercialization support for sustainable agriculture projects, including proposal development, product positioning and investor communication."
  },
  {
    title: "High Value Team / AI Training System",
    text: "A future-ready training and business ecosystem combining wellness products, AI tools, agent empowerment and repeatable sales systems."
  }
];

const approach = [
  {
    number: "01",
    title: "Clarify",
    text: "Identify the real market problem, technology advantage and strategic opportunity."
  },
  {
    number: "02",
    title: "Position",
    text: "Turn science and product features into a strong, credible and emotionally clear market narrative."
  },
  {
    number: "03",
    title: "Package",
    text: "Build investor decks, websites, proposals, sales materials and brand systems that people can understand and trust."
  },
  {
    number: "04",
    title: "Scale",
    text: "Create repeatable systems for teams, agents, customers and partners to grow with clarity and consistency."
  }
];

const footerLinks = ["Email", "WhatsApp", "LinkedIn", "Facebook", "TikTok"];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-champagne">
      <span className="h-px w-12 bg-champagne" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-navy-950 text-ivory">
      <div className="fixed inset-0 pointer-events-none opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(216,185,106,0.09),transparent_26%),radial-gradient(circle_at_86%_10%,rgba(79,133,151,0.14),transparent_28%),linear-gradient(135deg,#06111F_0%,#071827_54%,#040A12_100%)]" />
        <div className="microbe-field" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy-950/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="font-serif text-xl text-ivory">
            Rebecca Choong
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/[0.72] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-champagne">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-champagne/50 px-4 py-2 text-sm font-medium text-champagne transition hover:bg-champagne hover:text-navy-950"
          >
            Connect
          </a>
        </nav>
      </header>

      <section id="home" className="relative min-h-screen pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-full bg-[url('/rebecca-hero.png')] bg-[length:auto_92%] bg-[position:right_bottom] bg-no-repeat opacity-75 md:opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#06111F_0%,rgba(6,17,31,0.94)_38%,rgba(6,17,31,0.54)_66%,rgba(6,17,31,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,17,31,0)_68%,#06111F_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-3xl animate-rise">
            <SectionLabel>Strategic bio ecosystem builder</SectionLabel>
            <h1 className="font-serif text-5xl leading-[0.95] text-white md:text-7xl lg:text-8xl">
              Rebecca Choong
              <span className="mt-5 block text-3xl leading-tight text-champagne md:text-5xl">
                Microbiome & Bio-Ecosystem Strategist
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/[0.84] md:text-2xl">
              Building high-value bio solutions through microbiome technology, AI systems and market strategy.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.68] md:text-lg">
              I help transform complex biotech, microbiome and wellness innovations into clear market positioning,
              investor-ready narratives, brand systems and commercial strategies.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="btn-primary" href="#work">
                Explore My Work
              </a>
              <a className="btn-secondary" href="#contact">
                Connect With Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 py-24 md:py-32">
        <div className="network-panel absolute inset-x-5 inset-y-10 rounded-[2rem] opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionLabel>Positioning</SectionLabel>
            <h2 className="section-title">Where Microbiome Science Meets Market Strategy</h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-white/[0.72]">
            <p>
              The future of health, agriculture and environmental solutions will be shaped by living systems - from gut
              microbiomes to soil ecosystems, from active probiotics to bio-organic transformation.
            </p>
            <p>
              My work focuses on turning these complex biological innovations into clear, credible and commercially
              viable market stories.
            </p>
            <p>
              I bridge science, business strategy, branding, AI systems and field execution - helping products,
              technologies and ecosystems become easier to understand, trust and adopt.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel>Work territories</SectionLabel>
          <h2 className="section-title max-w-3xl">What I Work On</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {workCards.map((card, index) => (
              <article key={card.title} className="premium-card group">
                <p className="mb-6 text-sm font-semibold tracking-[0.24em] text-champagne/80">0{index + 1}</p>
                <h3 className="text-2xl font-semibold leading-tight text-white">{card.title}</h3>
                <p className="mt-4 leading-7 text-white/[0.66]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="relative border-y border-white/10 bg-white/[0.025] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel>Featured ecosystem</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <h2 className="section-title">Featured Ecosystem</h2>
            <div className="ecosystem-grid">
              {ecosystem.map((item) => (
                <article key={item.title} className="ecosystem-node">
                  <span className="node-dot" />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/[0.64]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel>Method</SectionLabel>
          <h2 className="section-title max-w-4xl">From Complex Science to Clear Commercial Direction</h2>
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {approach.map((step) => (
              <article key={step.number} className="step-card">
                <p className="font-serif text-5xl text-champagne">{step.number}</p>
                <h3 className="mt-8 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/[0.64]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative border-y border-white/10 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionLabel>About Rebecca</SectionLabel>
            <h2 className="section-title">About Rebecca</h2>
            <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-champagne/20 bg-white/[0.03] p-3 shadow-panel">
              <img
                src="/rebecca-portrait.jpg"
                alt="Portrait of Rebecca Choong"
                className="aspect-[4/5] w-full rounded-[1rem] object-cover object-top"
              />
            </div>
          </div>
          <div className="editorial-copy">
            <p>
              Rebecca Choong is a strategist, marketer and ecosystem builder focused on microbiome-based innovation,
              wellness entrepreneurship and AI-powered business systems.
            </p>
            <p>
              With years of experience in high-performance sales, team building, brand strategy and commercial
              communication, she now works at the intersection of biotechnology, agriculture, wellness and digital
              transformation.
            </p>
            <p>
              Her strength lies in translating complex ideas into clear positioning, compelling business narratives and
              practical systems that help people understand, believe and take action.
            </p>
            <p>
              Rebecca's work is guided by one mission: to build high-value ecosystems that bring health, growth and
              meaningful transformation to people, communities and businesses.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <SectionLabel>Next move</SectionLabel>
          <h2 className="section-title mx-auto max-w-4xl">Let's Build the Next High-Value Bio Ecosystem</h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Whether you are developing a microbiome product, bio-agriculture solution, wellness brand or AI-powered
            training system, the right strategy can turn complexity into clarity - and clarity into growth.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left md:grid-cols-2">
            <a
              className="premium-card block p-7"
              href="https://wa.me/60132826886"
              target="_blank"
              rel="noreferrer"
            >
              <span className="btn-primary">WhatsApp Rebecca</span>
              <p className="mt-5 text-sm leading-6 text-white/[0.68]">
                For collaborations, consulting, microbiome strategy, product inquiries, and partnership discussions.
              </p>
            </a>
            <a className="premium-card block p-7" href="mailto:rebecca.rcmarketing@gmail.com">
              <span className="btn-secondary">Email Rebecca</span>
              <p className="mt-5 text-sm leading-6 text-white/[0.68]">
                For formal proposals, documents, and business correspondence.
              </p>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-5 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl text-white">Rebecca Choong</p>
            <p className="mt-2 text-champagne">Microbiome & Bio-Ecosystem Strategist</p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/[0.58]">
              Building high-value bio solutions through microbiome technology, AI systems and market strategy.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/[0.64]">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-champagne">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs leading-6 text-white/[0.42]">
          <p>Operated by RCRM MARKETING</p>
          <p>SSM Registration No.: 202503208617 (PG0574775-D)</p>
          <p>Location: Selangor, Malaysia</p>
          <p>
            Email:{" "}
            <a href="mailto:rebecca.rcmarketing@gmail.com" className="transition hover:text-champagne">
              rebecca.rcmarketing@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
