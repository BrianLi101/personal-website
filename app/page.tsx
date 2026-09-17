"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { beliefs, companies, type BeliefId, type Company } from "@/data/portfolio";

const industries = ["All", ...Array.from(new Set(companies.map((company) => company.industry)))];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function BrandMark({ name }: { name: string }) {
  const words = name.trim().split(/\s+/);
  const initials = words.length > 1
    ? words.slice(0, 2).map((word) => word[0]).join("")
    : name.slice(0, 2);
  return <span className="brand-mark" aria-hidden="true">{initials.toUpperCase()}</span>;
}

export default function Home() {
  const [industry, setIndustry] = useState("All");
  const [beliefFilter, setBeliefFilter] = useState<BeliefId | "All">("All");
  const [query, setQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleCompanies = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return companies.filter((company) => {
      const matchesIndustry = industry === "All" || company.industry === industry;
      const matchesBelief = beliefFilter === "All" || company.beliefs.includes(beliefFilter);
      const beliefNames = company.beliefs
        .map((id) => {
          const belief = beliefs.find((item) => item.id === id);
          return `${belief?.motto ?? ""} ${belief?.opinion ?? ""}`;
        })
        .join(" ");
      const matchesQuery = !normalized || `${company.name} ${company.description} ${company.industry} ${beliefNames}`.toLowerCase().includes(normalized);
      return matchesIndustry && matchesBelief && matchesQuery;
    });
  }, [beliefFilter, industry, query]);

  const activeBelief = beliefFilter === "All"
    ? undefined
    : beliefs.find((belief) => belief.id === beliefFilter);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCompany(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = selectedCompany ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedCompany]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Brian Li, home">Brian Li<span className="wordmark-dot">.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
          <a href="#beliefs" onClick={closeMenu}>Beliefs</a>
          <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="#about" onClick={closeMenu}>About</a>
        </nav>
        <span className="header-note">Early, curious, long-term.</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Angel investor</p>
          <h1>I back founders who have the will to force a better version of the future into existence.</h1>
          <p className="hero-copy">
            On the slight chance I can help them along their journey.
          </p>
          <a className="text-link" href="#portfolio">Explore the portfolio <Arrow /></a>
        </div>
        <div className="hero-aside">
          <p>“The best investments begin as a point of view about how the world should work.”</p>
          <span>— My approach</span>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><i /></div>
      </section>

      <section className="belief-strip" id="beliefs" aria-label="Investment beliefs">
        <div className="strip-label">Explore by<br />belief</div>
        <div className="belief-strip-scroll">
          {beliefs.map((belief) => (
            <a
              href="#portfolio"
              key={belief.id}
              className={beliefFilter === belief.id ? "active" : ""}
              onClick={() => { setBeliefFilter(belief.id); setIndustry("All"); }}
            >
              <span className="belief-index">{belief.number}</span>
              <strong>{belief.motto}</strong>
              {(() => {
                const count = companies.filter((company) => company.beliefs.includes(belief.id)).length;
                return <small>{count} {count === 1 ? "company" : "companies"}</small>;
              })()}
            </a>
          ))}
        </div>
        <a className="strip-arrow" href="#portfolio" aria-label="View all companies" onClick={() => setBeliefFilter("All")}><Arrow /></a>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-shell">
          <div className="portfolio-heading">
            <div>
              <p className="section-kicker">Selected investments</p>
              <h2>The portfolio.</h2>
              <p className="portfolio-meta">{companies.length} companies <span>·</span> 2026 — present</p>
            </div>
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search companies or beliefs" aria-label="Search portfolio" />
            </label>
          </div>

          <div className="filter-row" role="group" aria-label="Filter by industry">
            {beliefFilter !== "All" && (
              <button className="active" onClick={() => setBeliefFilter("All")}>
                Belief: {activeBelief?.motto} ×
              </button>
            )}
            {industries.map((item) => (
              <button key={item} onClick={() => setIndustry(item)} className={industry === item ? "active" : ""}>{item}</button>
            ))}
          </div>

          {activeBelief?.opinion && (
            <div className="belief-opinion">
              <span>Belief {activeBelief.number}</span>
              <h3>{activeBelief.motto}</h3>
              <p>{activeBelief.opinion}</p>
            </div>
          )}

          <div className="company-grid">
            {visibleCompanies.map((company) => (
              <button className="company-card" key={company.id} onClick={() => setSelectedCompany(company)}>
                <div className={`card-visual visual-${company.accent}${company.image ? " has-image" : ""}`}>
                  {company.image && (
                    <Image
                      className="company-card-image"
                      src={company.image}
                      alt=""
                      fill
                      sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      style={{ objectFit: company.imageFit ?? "cover", objectPosition: company.imagePosition ?? "center" }}
                    />
                  )}
                  <span className="industry-pill">{company.industry}</span>
                  {company.draft && <span className="draft-pill">Draft record</span>}
                  {!company.image && <><div className="orb orb-one" /><div className="orb orb-two" /></>}
                  <span className="open-icon"><Arrow diagonal /></span>
                </div>
                <div className="card-body">
                  <div className="company-name"><BrandMark name={company.name} /><h3>{company.name}</h3></div>
                  <p>{company.description}</p>
                  <div className="belief-tags">
                    {company.beliefs.map((id) => <span key={id}>{beliefs.find((belief) => belief.id === id)?.motto}</span>)}
                  </div>
                  <div className="card-footer"><span>Invested {company.year}</span><i /> <span>{company.stage}</span></div>
                </div>
              </button>
            ))}
          </div>

          {visibleCompanies.length === 0 && (
            <div className="empty-state"><h3>No companies found.</h3><p>Try another industry or clear your search.</p><button onClick={() => { setQuery(""); setIndustry("All"); setBeliefFilter("All"); }}>Reset filters</button></div>
          )}
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-statement">
          <p className="section-kicker">How I invest</p>
          <h2>Conviction is built in the details.</h2>
          <p>I invest my own capital, stay close to the work, and try to be useful before a company’s story is obvious. The common thread is a founder with an earned insight and the agency to build around it.</p>
        </div>
        <div className="principles">
          <article><span>01</span><div><h3>Non-consensus, not contrarian</h3><p>A different view only matters if it is grounded in a truer understanding of the customer, technology, or market.</p></div></article>
          <article><span>02</span><div><h3>People before patterns</h3><p>Markets are legible. Exceptional founders are not. I care about the lived experience behind the insight.</p></div></article>
          <article><span>03</span><div><h3>Long arcs, early chapters</h3><p>I am drawn to important work that compounds over years—and happiest getting involved near the beginning.</p></div></article>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">Brian Li<span className="wordmark-dot">.</span></a>
        <p>Angel investments and long-term beliefs.</p>
        <span>© 2026 Brian Li</span>
      </footer>

      {selectedCompany && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedCompany(null); }}>
          <aside className="company-modal" role="dialog" aria-modal="true" aria-labelledby="company-modal-title">
            <button className="modal-close" onClick={() => setSelectedCompany(null)} aria-label="Close company details">×</button>
            <div className={`modal-visual visual-${selectedCompany.accent}${selectedCompany.image ? " has-image" : ""}`}>
              {selectedCompany.image && (
                <Image
                  className="company-card-image"
                  src={selectedCompany.image}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 100vw, 680px"
                  style={{ objectFit: selectedCompany.imageFit ?? "cover", objectPosition: selectedCompany.imagePosition ?? "center" }}
                />
              )}
              <span className="industry-pill">{selectedCompany.industry}</span>
              {!selectedCompany.image && <><div className="orb orb-one" /><div className="orb orb-two" /></>}
            </div>
            <div className="modal-content">
              <div className="company-name"><BrandMark name={selectedCompany.name} /><h2 id="company-modal-title">{selectedCompany.name}</h2></div>
              <p className="modal-description">{selectedCompany.description}</p>
              <div className="modal-tags">{selectedCompany.beliefs.map((id) => <span key={id}>{beliefs.find((belief) => belief.id === id)?.motto}</span>)}</div>
              {selectedCompany.thesis && <div className="thesis-block"><span>Investment thesis</span><p>{selectedCompany.thesis}</p></div>}
              {selectedCompany.founderInsight && <div className="thesis-block"><span>Founder insight</span><p>{selectedCompany.founderInsight}</p></div>}
              {selectedCompany.website && (
                <a className="company-website" href={selectedCompany.website} target="_blank" rel="noreferrer">
                  Visit company <Arrow diagonal />
                </a>
              )}
              {selectedCompany.draft && <div className="modal-note">This is a draft record. Replace it with a company from the portfolio data file.</div>}
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
