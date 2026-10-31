import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Building2,
  Cpu,
  FlaskConical,
  Globe2,
  GraduationCap,
  Lightbulb,
  Menu,
  Microscope,
  Network,
  Orbit,
  Sparkles,
  Trophy,
  UsersRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import campusImage from "@/assets/fxec-campus.jpg";
import labImage from "@/assets/fxec-learning.jpg";

const programs = [
  { name: "Computer Science & Engineering", icon: Cpu, no: "01" },
  { name: "Electronics & Communication", icon: Network, no: "02" },
  { name: "Electrical & Electronics", icon: Orbit, no: "03" },
  { name: "Mechanical Engineering", icon: Building2, no: "04" },
  { name: "Information Technology", icon: Globe2, no: "05" },
  { name: "Artificial Intelligence & Data Science", icon: Sparkles, no: "06" },
];

const reasons = [
  { icon: Cpu, title: "Industry-ready learning", text: "Industry-supported courses, workshops, internships and professional training connect learning to real work." },
  { icon: Lightbulb, title: "Ideas into innovation", text: "Research opportunities and creative spaces help turn curiosity into prototypes and solutions." },
  { icon: BookOpen, title: "Flexible education", text: "Choice-based learning, professional electives and interdisciplinary pathways make room to explore." },
  { icon: Globe2, title: "A wider perspective", text: "International collaborations, student mobility and language programmes open new horizons." },
];

const shortCourses = ["Data Analytics & Machine Learning", "Cyber Physical Systems", "Industrial Automation", "Building Information Modelling", "Industrial Power Systems", "VLSI & FPGA Design"];
const honours = ["Artificial Intelligence & Data", "Business Intelligence", "Internet of Things", "Cyber Security", "Big Data", "Additive Manufacturing"];
const accreditations = ["AICTE Approved", "Anna University Affiliated", "NBA Accredited", "UGC Recognised", "ISO 9001:2015 Certified", "DST-FIST Supported", "MoE Innovation Council · 4 Star", "AICTE-CII Platinum Rating"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Francis Xavier Engineering College | Engineering Your Future" },
      { name: "description", content: "Discover programmes, research, campus life and admissions at Francis Xavier Engineering College, an autonomous institution in Tirunelveli." },
      { property: "og:title", content: "Francis Xavier Engineering College | Engineering Your Future" },
      { property: "og:description", content: "Quality education, innovation and industry exposure at Francis Xavier Engineering College, Tirunelveli." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("revealed"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden">
      <div className="bg-primary py-2 text-primary-foreground">
        <div className="page-wrap flex items-center justify-between gap-4 text-xs font-medium sm:text-sm">
          <span>Autonomous Institution · Tirunelveli, Tamil Nadu</span>
          <a href="tel:+914622502283" className="hidden items-center gap-2 sm:flex">Admissions helpline <span aria-hidden="true">+91 462 2502283</span></a>
          <a href="https://francisxavier.ac.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 sm:hidden">Official site <ArrowUpRight size={13} /></a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="page-wrap flex h-[76px] items-center justify-between gap-6">
          <a href="#home" aria-label="Francis Xavier Engineering College home" className="flex shrink-0 items-center gap-3" onClick={closeMenu}>
            <span className="flex size-11 items-center justify-center rounded-sm bg-primary text-primary-foreground"><span className="font-serif text-xl font-bold">F</span></span>
            <span className="leading-tight"><span className="block text-sm font-bold text-foreground sm:text-base">FRANCIS XAVIER</span><span className="mt-1 block text-[9px] font-semibold uppercase text-muted-foreground sm:text-[10px]">Engineering College · Tirunelveli</span></span>
          </a>
          <nav aria-label="Main navigation" className={`${menuOpen ? "absolute inset-x-0 top-full flex flex-col border-b border-border bg-background px-6 py-4 shadow-md" : "hidden"} gap-1 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            {[["About", "about"], ["Programmes", "programmes"], ["Research", "research"], ["Campus", "campus"], ["Contact", "contact"]].map(([label, href]) => <a key={href} href={`#${href}`} onClick={closeMenu} className="nav-link rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground">{label}</a>)}
            <Button asChild size="default" className="mt-2 md:ml-1 md:mt-0"><a href="#admissions">Apply now <ArrowRight size={15} /></a></Button>
          </nav>
          <Button type="button" variant="outline" size="icon" className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
      </header>

      <section id="home" className="relative isolate min-h-[600px] overflow-hidden bg-primary md:min-h-[650px]">
        <img src={campusImage} alt="Engineering students collaborating on a project at a modern college campus" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover object-center" />
        <div className="hero-cover absolute inset-0 -z-10" />
        <div className="page-wrap grid min-h-[600px] items-center py-16 md:min-h-[650px] md:grid-cols-[1.15fr_0.85fr] md:py-20">
          <div className="max-w-3xl text-primary-foreground">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase sm:text-sm"><span className="h-px w-9 bg-primary-foreground/70" />Established 2000 <span className="text-primary-foreground/60">·</span> Autonomous Institution</p>
            <h1 className="display-serif max-w-3xl text-5xl leading-[1.04] sm:text-6xl md:text-7xl">Engineering your future.<br /><span className="text-primary-foreground/75">Inspiring tomorrow.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-primary-foreground/85 sm:text-lg sm:leading-8">A place to think boldly, learn by doing and build the skills to make a difference.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="secondary"><a href="https://software-project-neon.vercel.app/">Explore College <ArrowRight /></a></Button>
              <a href="#admissions" className="inline-flex min-h-11 items-center gap-2 px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-80">Start your journey <ArrowUpRight size={17} /></a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-primary-foreground/25 pt-5 text-xs font-medium text-primary-foreground/80 sm:text-sm"><span>Tirunelveli, Tamil Nadu</span><span>25+ years of excellence</span></div>
          </div>
          <a href="#about" className="mt-10 hidden w-fit items-center gap-3 self-end justify-self-end pb-7 text-sm font-medium text-primary-foreground/85 md:flex">Discover FXEC <span className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/45"><ArrowDown size={16} /></span></a>
        </div>
      </section>

      <section aria-label="FXEC at a glance" className="border-b border-border bg-background">
        <div className="page-wrap grid grid-cols-2 divide-x divide-y divide-border py-3 md:grid-cols-5 md:divide-y-0">
          {[["25+", "Years of excellence"], ["8", "UG programmes"], ["7", "PG programmes"], ["612+", "Industry partners"], ["210+", "Active MoUs"]].map(([number, label]) => <div key={label} className="px-4 py-5 text-center first:pl-2 last:pr-2 md:px-5"><div className="stat-number text-3xl font-semibold text-primary sm:text-4xl">{number}</div><div className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{label}</div></div>)}
        </div>
      </section>

      <section id="about" className="scroll-mt-24 py-20 sm:py-28">
        <div className="page-wrap grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="reveal"><p className="mb-4 text-xs font-semibold uppercase text-primary sm:text-sm">A place to find your direction</p><h2 className="display-serif text-4xl leading-tight text-foreground sm:text-5xl">Where knowledge<br />meets opportunity.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Francis Xavier Engineering College is an autonomous institution established in 2000 in Tirunelveli. Learner-centred education, innovation, research and industry-oriented learning shape every step of the student journey.</p><p className="mt-4 max-w-lg leading-7 text-muted-foreground">Students learn, experiment and collaborate—growing into confident professionals ready to create what comes next.</p><div className="mt-8 flex items-center gap-3 border-t border-border pt-5"><Award className="text-primary" size={25} /><span className="text-sm font-semibold text-foreground">25+ years of educational excellence</span></div></div>
          <div className="reveal relative"><img src={labImage} alt="Students building and testing a robotics project in an engineering laboratory" width={1280} height={1024} loading="lazy" className="aspect-[1.3/1] w-full object-cover" /><div className="absolute -bottom-6 left-0 flex items-center gap-3 bg-primary px-6 py-4 text-primary-foreground sm:left-6"><GraduationCap size={26} /><span className="text-sm font-semibold">Learn by doing. Lead with purpose.</span></div></div>
        </div>
      </section>

      <section className="bg-soft-blue py-20 sm:py-24">
        <div className="page-wrap"><div className="reveal mb-12 max-w-2xl"><p className="mb-4 text-xs font-semibold uppercase text-primary sm:text-sm">The FXEC difference</p><h2 className="display-serif text-4xl text-foreground sm:text-5xl">More than a degree.</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">Education goes beyond the classroom. Find your strengths, build practical skills and get ready for the world ahead.</p></div><div className="grid gap-x-10 md:grid-cols-2">{reasons.map(({ icon: Icon, title, text }, index) => <article key={title} className="reveal flex gap-5 border-t border-line-blue py-7" style={{ transitionDelay: `${index * 70}ms` }}><span className="mt-1 flex size-11 shrink-0 items-center justify-center bg-background text-primary"><Icon size={21} /></span><div><h3 className="font-semibold text-foreground">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{text}</p></div></article>)}</div></div>
      </section>

      <section id="programmes" className="scroll-mt-24 py-20 sm:py-28">
        <div className="page-wrap"><div className="reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-semibold uppercase text-primary sm:text-sm">Find your starting point</p><h2 className="display-serif text-4xl text-foreground sm:text-5xl">Choose your path.</h2><p className="mt-4 max-w-xl leading-7 text-muted-foreground">Explore the fields shaping today's technology and tomorrow's opportunities.</p></div><span className="text-sm text-muted-foreground">Undergraduate programmes</span></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{programs.map(({ name, icon: Icon, no }, index) => <article key={name} className="program-card reveal flex min-h-40 flex-col justify-between border border-border p-5 sm:p-6" style={{ transitionDelay: `${index * 55}ms` }}><div className="flex items-start justify-between"><span className="flex size-10 items-center justify-center bg-soft-blue text-primary"><Icon size={19} /></span><span className="text-xs text-muted-foreground">{no}</span></div><h3 className="mt-6 max-w-xs font-semibold leading-6 text-foreground">{name}</h3></article>)}</div><div className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center"><span className="text-sm text-muted-foreground">Postgraduate pathways: M.E. · M.Tech · MBA · MCA</span><Button asChild variant="outline"><a href="https://francisxavier.ac.in" target="_blank" rel="noreferrer">View all programmes <ArrowUpRight size={16} /></a></Button></div></div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="page-wrap grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20"><div className="reveal"><p className="mb-4 text-xs font-semibold uppercase text-primary-foreground/70 sm:text-sm">Make your degree your own</p><h2 className="display-serif text-4xl leading-tight sm:text-5xl">Learn beyond<br />the curriculum.</h2><p className="mt-5 max-w-lg leading-7 text-primary-foreground/75">Build additional expertise alongside your degree with industry-oriented courses and Minor and Honours pathways.</p><a href="https://francisxavier.ac.in" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Explore learning at FXEC <ArrowUpRight size={17} /></a></div><div className="reveal grid gap-8 sm:grid-cols-2"><div className="border-t border-primary-foreground/35 pt-5"><h3 className="mb-5 text-base font-semibold">Industry courses</h3><ul className="space-y-3">{shortCourses.map((course) => <li key={course} className="flex items-start gap-2 text-sm text-primary-foreground/75"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-foreground/70" />{course}</li>)}</ul></div><div className="border-t border-primary-foreground/35 pt-5"><h3 className="mb-5 text-base font-semibold">Minor &amp; Honours</h3><ul className="space-y-3">{honours.map((course) => <li key={course} className="flex items-start gap-2 text-sm text-primary-foreground/75"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-foreground/70" />{course}</li>)}</ul></div></div></div>
      </section>

      <section id="research" className="scroll-mt-24 py-20 sm:py-28">
        <div className="page-wrap grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20"><div className="reveal order-2 grid grid-cols-2 gap-px bg-border lg:order-1"><div className="flex min-h-44 flex-col justify-between bg-background p-5 sm:p-7"><Microscope className="text-primary" size={25} /><span className="text-sm font-semibold">Research</span></div><div className="flex min-h-44 flex-col justify-between bg-background p-5 sm:p-7"><Lightbulb className="text-primary" size={25} /><span className="text-sm font-semibold">Innovation</span></div><div className="flex min-h-44 flex-col justify-between bg-background p-5 sm:p-7"><FlaskConical className="text-primary" size={25} /><span className="text-sm font-semibold">Entrepreneurship</span></div><div className="flex min-h-44 flex-col justify-between bg-background p-5 sm:p-7"><Trophy className="text-primary" size={25} /><span className="text-sm font-semibold">5 recognised research centres</span></div></div><div className="reveal order-1 lg:order-2"><p className="mb-4 text-xs font-semibold uppercase text-primary sm:text-sm">Ideas into innovation</p><h2 className="display-serif text-4xl leading-tight text-foreground sm:text-5xl">Curiosity builds<br />what comes next.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Students and faculty explore emerging technologies, build prototypes and solve challenges that matter to society and industry.</p><p className="mt-4 max-w-lg leading-7 text-muted-foreground">With five recognised research centres and a four-star Innovation Council, FXEC gives new ideas room to grow.</p><a href="https://francisxavier.ac.in" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore research <ArrowRight size={16} /></a></div></div>
      </section>

      <section className="bg-soft-blue py-20 sm:py-24">
        <div className="page-wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"><div className="reveal"><p className="mb-4 text-xs font-semibold uppercase text-primary sm:text-sm">Built around real opportunities</p><h2 className="display-serif text-4xl text-foreground sm:text-5xl">Connected to<br />the real world.</h2><p className="mt-5 max-w-lg leading-7 text-muted-foreground">Strong industry relationships help students understand what the workplace needs before they begin their careers.</p><div className="mt-8 border-t border-line-blue pt-5"><div className="text-4xl font-semibold text-primary">612+</div><div className="mt-1 text-sm text-muted-foreground">industry partners · 210+ active MoUs</div></div></div><div className="reveal grid gap-6 sm:grid-cols-2">{[{ title: "Internships", text: "Gain hands-on experience in professional environments." }, { title: "Workshops & training", text: "Learn from industry professionals and practitioners." }, { title: "Industry curriculum", text: "Explore the technologies and skills teams use today." }, { title: "Career development", text: "Build confidence, connections and career readiness." }].map((item, index) => <article key={item.title} className="border-t border-line-blue pt-5" style={{ transitionDelay: `${index * 65}ms` }}><span className="text-xs font-semibold text-primary">0{index + 1}</span><h3 className="mt-3 font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p></article>)}</div></div>
      </section>

      <section id="campus" className="scroll-mt-24 py-20 sm:py-28">
        <div className="page-wrap"><div className="reveal mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-semibold uppercase text-primary sm:text-sm">A place to learn and belong</p><h2 className="display-serif text-4xl text-foreground sm:text-5xl">Learn. Connect. Grow.</h2></div><p className="max-w-lg leading-7 text-muted-foreground">College life stretches beyond academics—with clubs, culture, sport, innovation and community.</p></div><div className="reveal relative overflow-hidden"><img src={campusImage} alt="Students sharing ideas on the green campus of an engineering college" width={1536} height={1024} loading="lazy" className="aspect-[16/8] w-full object-cover object-center" /><div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-primary/90 p-4 sm:gap-3 sm:p-6">{["Technical clubs", "Campus activities", "Sports & wellness", "Innovation culture", "Green campus"].map((label) => <span key={label} className="border border-primary-foreground/45 px-3 py-2 text-xs font-medium text-primary-foreground sm:text-sm">{label}</span>)}</div></div></div>
      </section>

      <section className="border-y border-border bg-background py-16 sm:py-20">
        <div className="page-wrap"><div className="reveal mb-8 flex items-center gap-3"><Award className="text-primary" size={22} /><h2 className="display-serif text-3xl text-foreground sm:text-4xl">Recognised for excellence.</h2></div><div className="reveal flex flex-wrap gap-2">{accreditations.map((label) => <span key={label} className="border border-border px-4 py-3 text-sm font-medium text-muted-foreground">{label}</span>)}</div></div>
      </section>

      <section className="py-20 sm:py-24"><div className="page-wrap grid gap-12 md:grid-cols-2 md:gap-20"><article className="reveal"><p className="mb-4 text-xs font-semibold uppercase text-primary sm:text-sm">Our vision</p><h2 className="display-serif text-4xl text-foreground sm:text-5xl">A future shaped<br />by purpose.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">To be a globally recognised centre of transformative education that nurtures ethical professionals and innovative problem-solvers for sustainable societal development.</p></article><article className="reveal"><p className="mb-4 text-xs font-semibold uppercase text-primary sm:text-sm">Our mission</p><h2 className="display-serif text-4xl text-foreground sm:text-5xl">What we stand for.</h2><div className="mt-6 space-y-5">{[["Quality education", "Deliver learner-centred and industry-relevant education."], ["Research & innovation", "Encourage research, entrepreneurship and creative problem-solving."], ["Ethics & leadership", "Develop responsible professionals with strong values and leadership qualities."]].map(([title, text]) => <div key={title} className="border-t border-border pt-4"><h3 className="font-semibold text-foreground">{title}</h3><p className="mt-1.5 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></article></div></section>

      <section id="admissions" className="scroll-mt-24 bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="page-wrap flex flex-col justify-between gap-8 md:flex-row md:items-center"><div className="reveal"><p className="mb-4 text-xs font-semibold uppercase text-primary-foreground/70 sm:text-sm">Your next chapter starts here</p><h2 className="display-serif max-w-2xl text-4xl leading-tight sm:text-5xl">Choose the right programme.<br />Create your own future.</h2></div><div className="reveal flex flex-wrap gap-3"><Button asChild size="lg" variant="secondary"><a href="https://francisxavier.ac.in" target="_blank" rel="noreferrer">Apply now <ArrowUpRight size={16} /></a></Button><Button asChild size="lg" variant="outline" className="border-primary-foreground/55 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#programmes">Explore programmes <ArrowRight size={16} /></a></Button></div></div>
      </section>

      <footer id="contact" className="scroll-mt-24 bg-background pt-14">
        <div className="page-wrap grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16"><div><a href="#home" className="flex items-center gap-3"><span className="flex size-10 items-center justify-center bg-primary text-primary-foreground"><span className="font-serif text-xl font-bold">F</span></span><span className="text-sm font-bold text-foreground">FRANCIS XAVIER<br /><span className="text-xs font-medium text-muted-foreground">ENGINEERING COLLEGE</span></span></a><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Engineering your future. Inspiring tomorrow. An autonomous institution in Tirunelveli since 2000.</p></div><div><h2 className="text-sm font-semibold text-foreground">Visit FXEC</h2><address className="mt-4 not-italic text-sm leading-6 text-muted-foreground">103/G2, Bypass Road, Vannarpettai,<br />Tirunelveli – 627003, Tamil Nadu.</address><a href="tel:+914622502283" className="mt-3 inline-block text-sm font-medium text-primary">+91 462 2502283</a></div><div><h2 className="text-sm font-semibold text-foreground">Explore</h2><nav aria-label="Footer navigation" className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-muted-foreground">{[["About", "about"], ["Programmes", "programmes"], ["Research", "research"], ["Campus life", "campus"], ["Admissions", "admissions"], ["Contact", "contact"]].map(([label, href]) => <a key={href} href={`#${href}`} className="nav-link">{label}</a>)}</nav><a href="https://francisxavier.ac.in" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">Official website <ArrowUpRight size={15} /></a></div></div>
        <div className="border-t border-border"><div className="page-wrap flex flex-col justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row"><span>Francis Xavier Engineering College · Tirunelveli</span><span>Established 2000 · Autonomous Institution</span></div></div>
      </footer>
    </main>
  );
}
