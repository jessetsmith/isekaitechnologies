"use client";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.88) el.classList.add("show");
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="selection:bg-red-500/20">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_350px_at_10%_-10%,rgba(255,255,255,.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <span className="chip">Apps · Websites · Media</span>
              <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
                Building tech that feels <span className="text-brand">other-worldly</span>—
                but ships on time.
              </h1>
              <p className="mt-5 text-zinc-300 text-lg leading-relaxed">
                Isekai Technologies designs and develops modern products: mobile and web apps, blazing-fast websites, and crafted media systems. From idea to launch, we partner with you to deliver real business results.
              </p>
              <div className="mt-7 flex gap-3">
                <a href="#contact" className="btn">Get a quote</a>
                <a href="#work" className="btn btn-ghost">See our work</a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-xs text-zinc-400">
                <div className="flex -space-x-2">
                  <img src="/logos/logo-brand.png" className="w-8 h-8 rounded-full border border-white/10" alt="" />
                  <img src="/logos/logo-brand.png" className="w-8 h-8 rounded-full border border-white/10 opacity-80" alt="" />
                  <img src="/logos/logo-brand.png" className="w-8 h-8 rounded-full border border-white/10 opacity-60" alt="" />
                </div>
                <span>Trusted by startups & nonprofits</span>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              {/* Light background behind full lockup as requested */}
              <div className="rounded-2xl p-4 md:p-6 relative bg-white border border-black/10">
                <img src="/logos/full-logo.png" alt="Isekai lockup" className="w-full aspect-square object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">What we build</h2>
            <p className="text-zinc-300 mt-3">Modular capabilities, full-stack delivery.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              {tag:"Apps", title:"Mobile & Web Applications", desc:"React/Next.js, .NET, Node, Python. Auth, APIs, data, and delightful UX.", bullets:["Design systems & component libraries","Scalable API & database architecture","CI/CD and cloud hosting"]},
              {tag:"Websites", title:"High-performing Sites", desc:"Headless CMS, SEO baked-in, analytics. Built for speed and maintainability.", bullets:["Next.js, Astro, or Wix Velo","Accessibility & Lighthouse 90+","Internationalization ready"]},
              {tag:"Media", title:"Content & Media Systems", desc:"Brand assets, motion, and automation to scale your storytelling.", bullets:["Brand & identity design","Automated pipelines & DAM","Video & interactive content"]},
              {tag:"Other Tech", title:"Integrations & R&D", desc:"From scrappy prototypes to enterprise integrations—built responsibly.", bullets:["Data migrations & ETL","eCommerce & payments","AI-assisted workflows"]},
            ].map((s, i) => (
              <article className="card p-6 reveal" key={i}>
                <div className="chip inline-block">{s.tag}</div>
                <h3 className="text-xl font-semibold mt-3">{s.title}</h3>
                <p className="text-zinc-300 mt-2">{s.desc}</p>
                <ul className="mt-3 text-sm text-zinc-400 list-disc list-inside space-y-1">
                  {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      {/* <section id="work" className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold">Selected work</h2>
              <p className="text-zinc-300 mt-3">A few recent case studies. Replace these with live projects.</p>
            </div>
            <a href="#contact" className="btn btn-ghost">Work with us</a>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {["Project A","Project B","Project C","Project D","Project E","Project F"].map((p, i) => (
              <a href="#" className="group card p-4 reveal" key={i}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900 flex items-center justify-center">
                  <img src="/logos/logo-brand.png" className="w-24 opacity-80 group-hover:opacity-100 transition" alt="" />
                </div>
                <h3 className="mt-3 font-semibold">{p}</h3>
                <p className="text-zinc-400 text-sm">Short description about the impact and stack used.</p>
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* PROCESS */}
      <section id="process" className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">A clear, reliable process</h2>
            <p className="text-zinc-300 mt-3">We keep momentum high and surprises low.</p>
          </div>
          <ol className="mt-8 grid md:grid-cols-4 gap-4">
            {["Discover","Design","Build","Launch & Grow"].map((stage, i) => (
              <li className="card p-6 reveal" key={i}>
                <div className="chip">{String(i+1).padStart(2,"0")}</div>
                <h3 className="mt-3 font-semibold">{stage}</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {i===0&&"Goals, constraints, success metrics."}
                  {i===1&&"Wireframes, UI, architecture."}
                  {i===2&&"Iterative dev, reviews, QA."}
                  {i===3&&"Deploy, monitor, improve."}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <div className="rounded-xl border border-black/10 bg-white p-4">
                <img src="/logos/full-logo.png" alt="Isekai lockup large" className="w-full max-w-md rounded" />
              </div>
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold">Rooted in craft. Obsessed with delivery.</h2>
              <p className="text-zinc-300 mt-3">
                We combine product thinking with deep engineering to ship fast without cutting corners. Expect clear communication, thoughtful design, and clean, maintainable code.
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-zinc-300">
                <li className="card p-4">Performance first</li>
                <li className="card p-4">Accessible by default</li>
                <li className="card p-4">Own your data</li>
                <li className="card p-4">Transparent pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="card p-6 md:p-8 reveal">
            <h2 className="text-3xl font-bold">Tell us about your project</h2>
            <p className="text-zinc-300 mt-2">We’ll reply within one business day.</p>
            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll be in touch.');}}>
              <input className="card p-3" type="text" placeholder="Name *" required />
              <input className="card p-3" type="email" placeholder="Email *" required />
              <input className="card p-3 md:col-span-2" type="text" placeholder="Company or organization" />
              <select className="card p-3">
                <option>Project type</option>
                <option>App</option>
                <option>Website</option>
                <option>Media</option>
                <option>Integration / Other</option>
              </select>
              <input className="card p-3" type="text" placeholder="Budget range" />
              <textarea className="card p-3 md:col-span-2" rows={5} placeholder="Tell us a bit about goals, timeline, and scope" />
              <button className="btn mt-2 md:col-span-2" type="submit">Send message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
