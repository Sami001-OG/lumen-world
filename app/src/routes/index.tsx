import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import "./lumen.css";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://sami001-og.github.io/lumen-world/" }],
    meta: [
      { title: "Lumen World | Make room for wonder" },
      {
        name: "description",
        content:
          "An independent digital studio exploring spatial design, material, and the spaces between the visible and the imagined.",
      },
    ],
  }),
  component: Index,
});

const DISCIPLINES = [
  "Spatial interfaces",
  "Brand systems",
  "Motion design",
  "Web experiences",
  "Product strategy",
  "Interactive prototypes",
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Give ideas a place to live.",
    body: "Interfaces become environments. Information gains rhythm, distance, and a point of view instead of a pile of boxes.",
  },
  {
    n: "02",
    title: "Every detail has a weight.",
    body: "Light, texture, movement, and typography work together so the whole experience feels considered, never decorated.",
  },
  {
    n: "03",
    title: "Less noise. More dimension.",
    body: "We remove what does not earn its place, then add depth where it helps people understand and remember.",
  },
];

const CAPABILITIES = [
  {
    tag: "Spatial design",
    title: "Digital spaces with depth",
    body: "Layered layouts, light, and parallax that guide attention and make complex ideas feel navigable.",
    items: ["Interface architecture", "3D & depth systems", "Art direction"],
  },
  {
    tag: "Brand & identity",
    title: "Identities that feel built",
    body: "Type, color, and motion rules that hold together across every screen, surface, and campaign.",
    items: ["Visual identity", "Design systems", "Guidelines"],
  },
  {
    tag: "Build",
    title: "Crafted, fast, accessible",
    body: "Production-grade front ends with performance, accessibility, and detail treated as part of the design.",
    items: ["Websites & web apps", "Prototyping", "Launch support"],
  },
];

const STEPS = [
  { n: "01", title: "Listen", body: "We start with the question behind the brief: who it is for and what it should make them feel." },
  { n: "02", title: "Sketch", body: "Rapid explorations in form, type, and light until one direction clearly wants to exist." },
  { n: "03", title: "Build", body: "We craft it for real, in the browser, so motion and interaction are designed with the product." },
  { n: "04", title: "Refine", body: "Polish, test, and tune every transition until the details disappear into the experience." },
];

const STUDIES = [
  { code: "LW.01", title: "Aperture", note: "A light study in glass and depth", cls: "lw-art-a" },
  { code: "LW.02", title: "Tidal field", note: "Motion as a material for data", cls: "lw-art-b" },
  { code: "LW.03", title: "Quiet orbit", note: "A calm system for a busy product", cls: "lw-art-c" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    root.classList.add("lw-js");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Brand() {
  return (
    <a className="lw-brand" href="#top" aria-label="Lumen World home">
      <span className="lw-mark" aria-hidden="true">
        <i />
        <i />
      </span>
      <span className="lw-brand-text">
        Lumen <b>World</b>
      </span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const root = useReveal();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <div className="lw" ref={root} id="top">
      <header className={scrolled || menuOpen ? "lw-nav is-solid" : "lw-nav"}>
        <div className="lw-wrap lw-nav-in">
          <Brand />
          <nav className={menuOpen ? "lw-links is-open" : "lw-links"} aria-label="Main navigation">
            <a href="#approach" onClick={close}>Approach</a>
            <a href="#capabilities" onClick={close}>Capabilities</a>
            <a href="#process" onClick={close}>Process</a>
            <a href="#studies" onClick={close}>Studies</a>
            <a className="lw-btn lw-btn-sm lw-nav-cta" href="#contact" onClick={close}>Start a project</a>
          </nav>
          <button
            className="lw-burger"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="lw-hero">
          <div className="lw-hero-bg" aria-hidden="true">
            <div className="lw-grid" />
            <div className="lw-glow lw-glow-a" />
            <div className="lw-glow lw-glow-b" />
          </div>
          <div className="lw-wrap lw-hero-in">
            <div className="lw-hero-copy">
              <p className="lw-pill" data-reveal>
                <span className="lw-dot" /> Independent digital studio
              </p>
              <h1 data-reveal style={{ ["--d" as string]: "80ms" }}>
                Make room for <em>wonder.</em>
              </h1>
              <p className="lw-sub" data-reveal style={{ ["--d" as string]: "160ms" }}>
                We design and build digital spaces with the patience of an object maker and the curiosity of a world
                builder: spatial, material, and unmistakably considered.
              </p>
              <div className="lw-cta" data-reveal style={{ ["--d" as string]: "240ms" }}>
                <a className="lw-btn" href="#contact">
                  Start a project <span aria-hidden="true">→</span>
                </a>
                <a className="lw-btn lw-btn-ghost" href="#approach">
                  Our approach
                </a>
              </div>
            </div>

            <div className="lw-stage" aria-hidden="true">
              <div className="lw-ring lw-ring-1" />
              <div className="lw-ring lw-ring-2" />
              <div className="lw-ring lw-ring-3" />
              <div className="lw-orbit lw-orbit-1"><i /></div>
              <div className="lw-orbit lw-orbit-2"><i /></div>
              <div className="lw-orb" />
              <span className="lw-stage-label lw-stage-tl">LW / 001</span>
              <span className="lw-stage-label lw-stage-br">Light · Matter · Space</span>
            </div>
          </div>
          <a className="lw-scroll" href="#approach" aria-label="Scroll to approach">
            <span>Scroll</span>
            <i />
          </a>
        </section>

        <section className="lw-marquee" aria-label="Disciplines">
          <div className="lw-marquee-track">
            {[0, 1].map((k) => (
              <ul key={k} aria-hidden={k === 1}>
                {DISCIPLINES.map((d) => (
                  <li key={d + k}>{d}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section id="approach" className="lw-section">
          <div className="lw-wrap lw-split">
            <div className="lw-sticky" data-reveal>
              <p className="lw-eyebrow">Our point of view</p>
              <h2>
                Find the feeling.
                <br />
                <em>Then give it form.</em>
              </h2>
              <p className="lw-lede">
                Design is a way of seeing. We shape digital spaces that people remember, because every layer was
                chosen on purpose.
              </p>
            </div>
            <ol className="lw-principles">
              {PRINCIPLES.map((p, i) => (
                <li key={p.n} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                  <span className="lw-num">{p.n}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="capabilities" className="lw-section lw-section-alt">
          <div className="lw-wrap">
            <div className="lw-head" data-reveal>
              <p className="lw-eyebrow">Capabilities</p>
              <h2>
                Everything a digital world <em>needs.</em>
              </h2>
            </div>
            <div className="lw-cards">
              {CAPABILITIES.map((c, i) => (
                <article className="lw-card" key={c.title} data-reveal style={{ ["--d" as string]: `${i * 100}ms` }}>
                  <span className="lw-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <ul>
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="lw-section">
          <div className="lw-wrap">
            <div className="lw-head" data-reveal>
              <p className="lw-eyebrow">Process</p>
              <h2>
                From first question to <em>finished world.</em>
              </h2>
            </div>
            <ol className="lw-steps">
              {STEPS.map((s, i) => (
                <li key={s.n} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                  <span className="lw-step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="studies" className="lw-section lw-section-alt">
          <div className="lw-wrap">
            <div className="lw-head" data-reveal>
              <p className="lw-eyebrow">Studies</p>
              <h2>
                Explorations in <em>light and form.</em>
              </h2>
            </div>
            <div className="lw-studies">
              {STUDIES.map((s, i) => (
                <figure className="lw-study" key={s.code} data-reveal style={{ ["--d" as string]: `${i * 100}ms` }}>
                  <div className={`lw-art ${s.cls}`} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <figcaption>
                    <span className="lw-code">{s.code}</span>
                    <strong>{s.title}</strong>
                    <small>{s.note}</small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="lw-contact">
          <div className="lw-contact-bg" aria-hidden="true">
            <div className="lw-ring lw-ring-1" />
            <div className="lw-ring lw-ring-2" />
            <div className="lw-glow lw-glow-a" />
          </div>
          <div className="lw-wrap lw-contact-in" data-reveal>
            <p className="lw-eyebrow">The next form is yours</p>
            <h2>
              Have something
              <br />
              <em>worth exploring?</em>
            </h2>
            <p className="lw-lede">
              Bring the early sketch, the strange question, or the idea that does not fit a template.
            </p>
            <a className="lw-btn lw-btn-lg" href="mailto:studio@lumen.world">
              studio@lumen.world <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="lw-footer">
        <div className="lw-wrap lw-footer-in">
          <Brand />
          <p>Independent by nature. Curious by design.</p>
          <nav aria-label="Footer">
            <a href="#approach">Approach</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#process">Process</a>
            <a href="mailto:studio@lumen.world">Contact</a>
          </nav>
        </div>
        <div className="lw-wrap lw-legal">
          <span>© {new Date().getFullYear()} Lumen World</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
