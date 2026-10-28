
import "./TestChampionship.css";
import { Link } from "react-router-dom";

const editions = [
  {
    cycle: "2019–2021",
    winner: "New Zealand",
    winnerFlag: "https://flagcdn.com/w160/nz.png",
    runnerUp: "India",
    runnerUpFlag: "https://flagcdn.com/w160/in.png",
    result: "New Zealand won by 8 wickets",
    finalVenue: "The Rose Bowl, Southampton",
  },
  {
    cycle: "2021–2023",
    winner: "Australia",
    winnerFlag: "https://flagcdn.com/w160/au.png",
    runnerUp: "India",
    runnerUpFlag: "https://flagcdn.com/w160/in.png",
    result: "Australia won by 209 runs",
    finalVenue: "The Oval, London",
  },
  {
    cycle: "2023–2025",
    winner: "South Africa",
    winnerFlag: "https://flagcdn.com/w160/za.png",
    runnerUp: "Australia",
    runnerUpFlag: "https://flagcdn.com/w160/au.png",
    result: "South Africa won by 5 wickets",
    finalVenue: "Lord's, London",
  },
];

const records = [
  {
    label: "First WTC Champions",
    value: "New Zealand",
    detail: "2019–2021 cycle",
  },
  {
    label: "2021–2023 Champions",
    value: "Australia",
    detail: "Defeated India in the final",
  },
  {
    label: "2023–2025 Champions",
    value: "South Africa",
    detail: "Defeated Australia in the final",
  },
];

export default function TestChampionship() {
  return (
    <div className="wtc-page">
      <header className="wtc-header">
        <Link to="/" className="wtc-back">
          ← Back to Home
        </Link>

        <p className="wtc-eyebrow">ICC WORLD TEST CHAMPIONSHIP</p>
        <h1>
          THE <span>ULTIMATE</span>
          <br />
          TEST CHAMPIONSHIP
        </h1>
        <p className="wtc-intro">
          Explore the history of Test cricket's championship cycles,
          legendary finals and the teams that reached the summit.
        </p>
      </header>

      <main>
        <section className="wtc-section">
          <div className="wtc-section-heading">
            <p>CHAMPIONS THROUGH THE CYCLES</p>
            <h2>WTC Final History</h2>
          </div>

          <div className="wtc-editions">
            {editions.map((edition) => (
              <article className="wtc-card" key={edition.cycle}>
                <div className="wtc-cycle">
                  <span>WORLD TEST CHAMPIONSHIP</span>
                  <strong>{edition.cycle}</strong>
                </div>

                <div className="wtc-final-teams">
                  <div className="wtc-team">
                    <img
                      src={edition.winnerFlag}
                      alt={`${edition.winner} flag`}
                      loading="lazy"
                    />
                    <h3>{edition.winner}</h3>
                    <span>CHAMPIONS</span>
                  </div>

                  <span className="wtc-vs">VS</span>

                  <div className="wtc-team">
                    <img
                      src={edition.runnerUpFlag}
                      alt={`${edition.runnerUp} flag`}
                      loading="lazy"
                    />
                    <h3>{edition.runnerUp}</h3>
                    <span>RUNNER-UP</span>
                  </div>
                </div>

                <div className="wtc-result">
                  <strong>{edition.result}</strong>
                  <p>{edition.finalVenue}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wtc-section">
          <div className="wtc-section-heading">
            <p>CHAMPIONSHIP MILESTONES</p>
            <h2>WTC Records & Highlights</h2>
          </div>

          <div className="wtc-record-grid">
            {records.map((record) => (
              <article className="wtc-record-card" key={record.label}>
                <span>{record.label}</span>
                <h3>{record.value}</h3>
                <p>{record.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <p className="wtc-note">
          Historical information is presented by championship cycle. Verify
          statistics and future editions before publishing.
        </p>
      </main>

      <footer className="wtc-footer">
        <Link to="/">🏏 CRICKET INFO</Link>
        <span>Celebrating the legacy of Test cricket.</span>
      </footer>
    </div>
  );
}
