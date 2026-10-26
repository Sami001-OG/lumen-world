import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import "./lumen.css";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://lumen-world.higgsfield.app/" }],
    meta: [
      { title: "Lumen World | Make room for wonder" },
      { name: "description", content: "An independent digital studio exploring spatial design, material, and the spaces between the visible and the imagined." },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <main className="lumen-site">
      <header className="lumen-nav">
        <a className="lumen-brand" href="#top" aria-label="Lumen World home">
          <span className="lumen-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>LUMEN <b>WORLD</b></span>
        </a>
        <nav className={menuOpen ? "lumen-links is-open" : "lumen-links"} aria-label="Main navigation">
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#specimen" onClick={() => setMenuOpen(false)}>Specimen</a>
          <a className="lumen-nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <span aria-hidden="true">↗</span></a>
        </nav>
        <button className="lumen-menu" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </header>

      <div id="top" className="lumen-journey">
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
        <div className="lumen-hero-note" aria-hidden="true">
          <span className="lumen-coordinate">LW / 001</span>
          <span className="lumen-hero-rule" />
          <span className="lumen-coordinate">A WORLD IN PROGRESS</span>
        </div>
      </div>

      <section id="approach" className="lumen-approach">
        <div className="lumen-section-index"><span>01</span><span>Our point of view</span></div>
        <div className="lumen-approach-copy">
          <p className="lumen-small-label">DESIGN IS A WAY OF SEEING</p>
          <h2>Find the feeling.<br /><em>Then give it form.</em></h2>
          <p className="lumen-lede">We shape digital spaces with the patience of an object maker and the curiosity of a world builder.</p>
          <a className="lumen-arrow-link" href="#specimen">See how we think <span aria-hidden="true">↗</span></a>
        </div>
        <div className="lumen-material-study" aria-label="Layered glass material study">
          <div className="lumen-orbit lumen-orbit-a" />
          <div className="lumen-orbit lumen-orbit-b" />
          <div className="lumen-glass-core"><span /></div>
          <div className="lumen-material-caption"><span>FIG. 01</span><span>LIGHT / MATTER / SPACE</span></div>
        </div>
      </section>

      <section id="specimen" className="lumen-specimen">
        <div className="lumen-specimen-heading">
          <p className="lumen-small-label">A WORKING PHILOSOPHY</p>
          <h2>Less noise.<br />More <em>dimension.</em></h2>
        </div>
        <div className="lumen-specimen-grid">
          <article className="lumen-specimen-feature">
            <span className="lumen-specimen-glyph" aria-hidden="true">◌</span>
            <p className="lumen-mono">01 / SPATIAL THINKING</p>
            <h3>Give ideas a place to live.</h3>
            <p>Interfaces become environments. Information gains rhythm, distance, and a point of view.</p>
          </article>
          <article className="lumen-specimen-note">
            <span className="lumen-note-line" />
            <p className="lumen-mono">02 / MATERIAL INTELLIGENCE</p>
            <h3>Every detail has a weight.</h3>
            <p>Light, texture, movement, and typography work together to make a digital experience feel considered.</p>
            <div className="lumen-note-index"><span>FIELD STUDY</span><strong>LW.02</strong></div>
          </article>
        </div>
      </section>

      <section id="contact" className="lumen-contact">
        <div className="lumen-contact-orbit" aria-hidden="true"><span /><span /><span /></div>
        <div className="lumen-contact-copy">
          <p className="lumen-small-label">THE NEXT FORM IS YOURS</p>
          <h2>Have something<br /><em>worth exploring?</em></h2>
          <p>Bring the early sketch, the strange question, or the idea that does not fit a template.</p>
          <a className="lumen-contact-link" href="mailto:studio@lumen.world"><span>Start a project</span><span aria-hidden="true">↗</span></a>
        </div>
        <span className="lumen-contact-code">LW / OPEN CHANNEL</span>
      </section>

      <footer className="lumen-footer">
        <a className="lumen-brand" href="#top" aria-label="Lumen World, back to top">
          <span className="lumen-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>LUMEN <b>WORLD</b></span>
        </a>
        <p>Independent by nature. Curious by design.</p>
        <a className="lumen-back-top" href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
