
import { useState } from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import WorldCup from "./WorldCup";
import T20WorldCup from "./T20WorldCup";
import TestChampionship from "./TestChampionship";
import ChampionsTrophy from "./ChampionsTrophy";

const tournaments = [
  {
    title: "ODI WORLD CUP",
    format: "50 OVERS",
    start: "1975",
    winner: "Australia",
    titles: "6 TITLES",
    icon: "🏆",
    path: "/odi-world-cup",
  },
  {
    title: "T20 WORLD CUP",
    format: "T20 INTERNATIONAL",
    start: "2007",
    winner: "India",
    titles: "3 TITLES",
    icon: "⚡",
    path: "/t20-world-cup",
  },
  {
    title: "WORLD TEST CHAMPIONSHIP",
    format: "TEST CRICKET",
    start: "2019",
    winner: "South Africa",
    titles: "CURRENT CHAMPIONS",
    icon: "🛡️",
    path: "/test-championship",
  },
  {
    title: "CHAMPIONS TROPHY",
    format: "50 OVERS",
    start: "1998",
    winner: "India",
    titles: "3 TITLES",
    icon: "🏅",
    path: "/champions-trophy",
  },
];

const records = [
  { label: "Most ODI Runs", name: "Sachin Tendulkar", value: "18,426" },
  { label: "Most Test Runs", name: "Sachin Tendulkar", value: "15,921" },
  { label: "Most ODI Wickets", name: "Muttiah Muralitharan", value: "534" },
  { label: "Most Test Wickets", name: "Muttiah Muralitharan", value: "800" },
  { label: "Most T20I Runs", name: "Babar Azam", value: "4,596" },
  { label: "Most T20I Wickets", name: "Rashid Khan", value: "197" },
  { label: "Highest Test Score", name: "Brian Lara", value: "400*" },
  { label: "Highest ODI Score", name: "Rohit Sharma", value: "264" },
  {
    label: "First ODI Double Centurion",
    name: "Sachin Tendulkar",
    value: "200*",
  },
  { label: "Most ODI Centuries", name: "Virat Kohli", value: "55" },
  { label: "Most Test Centuries", name: "Sachin Tendulkar", value: "51" },
  {
    label: "Most T20I Centuries",
    name: "Rohit Sharma / Glenn Maxwell",
    value: "5 each",
  },
  {
    label: "Most International Centuries",
    name: "Sachin Tendulkar",
    value: "100",
  },
];

const archives = [
  { title: "ODI World Cup", years: "1975 – Present", icon: "🏆" },
  { title: "T20 World Cup", years: "2007 – Present", icon: "⚡" },
  {
    title: "World Test Championship",
    years: "2019 – Present",
    icon: "🛡️",
  },
  { title: "Champions Trophy", years: "1998 – Present", icon: "🏅" },
];

const archivePaths = {
  "ODI World Cup": "/odi-world-cup",
  "T20 World Cup": "/t20-world-cup",
  "World Test Championship": "/test-championship",
  "Champions Trophy": "/champions-trophy",
};

const recentWinners = [
  {
    tournament: "ODI WORLD CUP",
    year: "2023",
    country: "Australia",
    flag: "https://flagcdn.com/w160/au.png",
    runnerUp: "India",
    alt: "Australia flag",
  },
  {
    tournament: "T20 WORLD CUP",
    year: "2026",
    country: "India",
    flag: "https://flagcdn.com/w160/in.png",
    runnerUp: "Verify runner-up",
    alt: "India flag",
  },
  {
    tournament: "WORLD TEST CHAMPIONSHIP",
    year: "2025",
    country: "South Africa",
    flag: "https://flagcdn.com/w160/za.png",
    runnerUp: "Australia",
    alt: "South Africa flag",
  },
  {
    tournament: "CHAMPIONS TROPHY",
    year: "2025",
    country: "India",
    flag: "https://flagcdn.com/w160/in.png",
    runnerUp: "New Zealand",
    alt: "India flag",
  },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

function Home() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [search, setSearch] = useState("");

  const filteredRecords = records.filter((record) => {
    const matchesSearch =
      record.label.toLowerCase().includes(search.toLowerCase()) ||
      record.name.toLowerCase().includes(search.toLowerCase());

    const isBattingRecord =
      record.label.includes("Runs") ||
      record.label.includes("Score") ||
      record.label.includes("Centuries") ||
      record.label.includes("Centurion");

    const isBowlingRecord = record.label.includes("Wickets");

    const matchesTab =
      activeTab === "ALL" ||
      (activeTab === "BATTING" && isBattingRecord) ||
      (activeTab === "BOWLING" && isBowlingRecord);

    return matchesSearch && matchesTab;
  });

  return (
    <div className="app">
      <header className="topbar">
        <Link className="brand" to="/">
          <span className="brand-icon">🏏</span>
          <span>
            CRICKET<span className="brand-accent">INFO</span>
            <small>MEN'S WORLD CUP HISTORY</small>
          </span>
        </Link>

        <nav className="nav-links">
          <a href="#tournaments">TOURNAMENTS</a>
          <a href="#winners">WINNERS</a>
          <a href="#records">RECORDS</a>
          <a href="#history">HISTORY</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <span className="hero-label">
              <span className="green-dot" /> THE HOME OF CRICKET HISTORY
            </span>

            <h1>
              EVERY ERA.
              <br />
              EVERY <span>RECORD.</span>
              <br />
              ONE GAME.
            </h1>

            <p>
              Explore the history of men's international cricket, legendary
              performances, World Cup champions and records that define the
              game.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#tournaments">
                EXPLORE TOURNAMENTS <span>→</span>
              </a>
              <a className="secondary-button" href="#records">
                VIEW RECORDS
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>1975</strong>
                <span>FIRST MEN'S ODI WC</span>
              </div>
              <div>
                <strong>3</strong>
                <span>INTERNATIONAL FORMATS</span>
              </div>
              <div>
                <strong>100+</strong>
                <span>YEARS OF TEST HISTORY</span>
              </div>
            </div>
          </div>

          <div className="hero-art" aria-label="Cricket illustration">
            <div className="art-circle"></div>
            <div className="art-ball">🏏</div>
            <div className="art-caption">
              <span>THE SPIRIT OF CRICKET</span>
              <strong>HISTORY IN EVERY INNING.</strong>
            </div>
          </div>
        </section>

        <section className="cricbuzz-link">
          <a
            href="https://www.cricbuzz.com/cricket-match/live-scores"
            target="_blank"
            rel="noopener noreferrer"
          >
            🏏 View Live Cricket Scores on Cricbuzz <span>↗</span>
          </a>
        </section>

        <section className="content-section" id="tournaments">
          <SectionTitle
            eyebrow="THE BIG FOUR"
            title="Legends Are Made Here"
            subtitle="Explore the major ICC men's international tournaments."
          />

          <div className="tournament-grid">
            {tournaments.map((tournament) => {
              const cardContent = (
                <>
                  <div className="card-top">
                    <span className="trophy-icon">{tournament.icon}</span>
                    <span className="format-tag">{tournament.format}</span>
                  </div>

                  <p className="card-year">EST. {tournament.start}</p>
                  <h3>{tournament.title}</h3>
                  <div className="card-divider"></div>
                  <span className="small-label">WINNER / MOST TITLES</span>
                  <strong className="winner-name">{tournament.winner}</strong>
                  <span className="title-count">{tournament.titles}</span>

                  <span className="card-open-hint">
                    Explore Tournament History →
                  </span>
                </>
              );

              return (
                <Link
                  className="tournament-card"
                  to={tournament.path}
                  key={tournament.title}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>

          <p className="data-note">
            Tournament title counts and current champions should be verified
            before publishing.
          </p>
        </section>

        <section className="content-section winners-section" id="winners">
          <SectionTitle
            eyebrow="CHAMPIONS THROUGH TIME"
            title="Recent Tournament Winners"
            subtitle="The latest completed editions of the men's ICC tournaments."
          />

          <div className="winner-grid">
            {recentWinners.map((winner) => (
              <article
                className="winner-card"
                key={`${winner.tournament}-${winner.year}`}
              >
                <span>
                  {winner.tournament} · {winner.year}
                </span>

                <img
                  className="winner-flag"
                  src={winner.flag}
                  alt={winner.alt}
                  loading="lazy"
                />

                <h3>{winner.country}</h3>
                <p>Champions</p>
                <small>Runner-up: {winner.runnerUp}</small>
              </article>
            ))}
          </div>

          <p className="data-note">
            Verify the latest edition winners and runner-up details before
            publishing.
          </p>
        </section>

        <section className="content-section records-section" id="records">
          <SectionTitle
            eyebrow="NUMBERS THAT MATTER"
            title="All-Time International Records"
            subtitle="Explore the greatest batting and bowling achievements."
          />

          <div className="record-controls">
            <div className="record-tabs">
              {["ALL", "BATTING", "BOWLING"].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "tab active" : "tab"}
                  onClick={() => setActiveTab(tab)}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>

            <input
              type="search"
              placeholder="Search records..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search cricket records"
            />
          </div>

          <div className="record-grid">
            {filteredRecords.map((record) => (
              <article className="record-card" key={record.label}>
                <span>{record.label}</span>
                <strong>{record.value}</strong>
                <p>{record.name}</p>
              </article>
            ))}

            {filteredRecords.length === 0 && (
              <p className="no-results">No matching records found.</p>
            )}
          </div>

          <p className="data-note">
            Record statistics can change. Verify current figures against
            authoritative cricket statistics before publishing.
          </p>
        </section>

        <section className="content-section archive-section" id="history">
          <SectionTitle
            eyebrow="FROM THE ARCHIVES"
            title="Explore World Cup History"
            subtitle="Choose a tournament to explore its editions year by year."
          />

          <div className="archive-grid">
            {archives.map((archive) => (
              <Link
                className="archive-card"
                to={archivePaths[archive.title]}
                key={archive.title}
              >
                <span className="archive-icon">{archive.icon}</span>
                <div>
                  <h3>{archive.title}</h3>
                  <p>{archive.years}</p>
                </div>
                <span className="archive-arrow">↗</span>
              </Link>
            ))}
          </div>

          <p className="archive-note">
            Explore ODI World Cup, T20 World Cup, World Test Championship
            and Champions Trophy history.
          </p>
        </section>
      </main>

      <footer className="footer">
        <Link className="brand footer-brand" to="/">
          <span className="brand-icon">🏏</span>
          <span>
            CRICKET<span className="brand-accent">INFO</span>
            <small>MEN'S WORLD CUP HISTORY</small>
          </span>
        </Link>

        <p>Celebrating the records, rivalries and history of men's cricket.</p>
        <span>© {new Date().getFullYear()} Cricket Info</span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/odi-world-cup" element={<WorldCup />} />
        <Route path="/t20-world-cup" element={<T20WorldCup />} />
        <Route
          path="/test-championship"
          element={<TestChampionship />}
        />
        <Route
          path="/champions-trophy"
          element={<ChampionsTrophy />}
        />
      </Routes>
    </BrowserRouter>
  );
}
