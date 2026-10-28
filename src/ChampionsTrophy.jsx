
import "./ChampionsTrophy.css";
import { Link } from "react-router-dom";

const editions = [
  {
    year: "1998",
    winner: "South Africa",
    winnerFlag: "https://flagcdn.com/w160/za.png",
    runnerUp: "West Indies",
    runnerUpFlag: "https://flagcdn.com/w160/jm.png",
    result: "South Africa won by 4 wickets",
    venue: "Dhaka, Bangladesh",
  },
  {
    year: "2000",
    winner: "New Zealand",
    winnerFlag: "https://flagcdn.com/w160/nz.png",
    runnerUp: "India",
    runnerUpFlag: "https://flagcdn.com/w160/in.png",
    result: "New Zealand won by 4 wickets",
    venue: "Nairobi, Kenya",
  },
  {
    year: "2002",
    winner: "India & Sri Lanka",
    winnerFlag: "https://flagcdn.com/w160/in.png",
    runnerUp: "Shared Final",
    runnerUpFlag: "https://flagcdn.com/w160/lk.png",
    result: "Final abandoned due to rain",
    venue: "Colombo, Sri Lanka",
  },
  {
    year: "2004",
    winner: "West Indies",
    winnerFlag: "https://flagcdn.com/w160/jm.png",
    runnerUp: "England",
    runnerUpFlag: "https://flagcdn.com/w160/gb-eng.png",
    result: "West Indies won by 2 wickets",
    venue: "The Oval, London",
  },
  {
    year: "2006",
    winner: "Australia",
    winnerFlag: "https://flagcdn.com/w160/au.png",
    runnerUp: "West Indies",
    runnerUpFlag: "https://flagcdn.com/w160/jm.png",
    result: "Australia won by 8 wickets",
    venue: "Mumbai, India",
  },
  {
    year: "2009",
    winner: "Australia",
    winnerFlag: "https://flagcdn.com/w160/au.png",
    runnerUp: "New Zealand",
    runnerUpFlag: "https://flagcdn.com/w160/nz.png",
    result: "Australia won by 6 wickets",
    venue: "Centurion, South Africa",
  },
  {
    year: "2013",
    winner: "India",
    winnerFlag: "https://flagcdn.com/w160/in.png",
    runnerUp: "England",
    runnerUpFlag: "https://flagcdn.com/w160/gb-eng.png",
    result: "India won by 5 runs",
    venue: "Birmingham, England",
  },
  {
    year: "2017",
    winner: "Pakistan",
    winnerFlag: "https://flagcdn.com/w160/pk.png",
    runnerUp: "India",
    runnerUpFlag: "https://flagcdn.com/w160/in.png",
    result: "Pakistan won by 180 runs",
    venue: "The Oval, London",
  },
  {
    year: "2025",
    winner: "India",
    winnerFlag: "https://flagcdn.com/w160/in.png",
    runnerUp: "New Zealand",
    runnerUpFlag: "https://flagcdn.com/w160/nz.png",
    result: "India won by 4 wickets",
    venue: "Dubai, UAE",
  },
];

const records = [
  {
    label: "Most Titles",
    value: "India",
    detail: "3 championships, including the shared 2002 title",
  },
  {
    label: "Most Successful Consecutive Defences",
    value: "Australia",
    detail: "Champions in 2006 and 2009",
  },
  {
    label: "Latest Champions",
    value: "India",
    detail: "2025 edition",
  },
];

export default function ChampionsTrophy() {
  return (
    <div className="ct-page">
      <header className="ct-header">
        <Link to="/" className="ct-back">
          ← Back to Home
        </Link>

        <p className="ct-eyebrow">ICC MEN'S CHAMPIONS TROPHY</p>

        <h1>
          THE BATTLE
          <br />
          FOR <span>GLORY.</span>
        </h1>

        <p className="ct-intro">
          Discover the history of the Champions Trophy, from its
          beginnings in 1998 to the modern era of elite ODI cricket.
        </p>

        <div className="ct-hero-stats">
          <div>
            <strong>1998</strong>
            <span>INAUGURAL EDITION</span>
          </div>
          <div>
            <strong>9</strong>
            <span>EDITIONS</span>
          </div>
          <div>
            <strong>2025</strong>
            <span>LATEST EDITION</span>
          </div>
        </div>
      </header>

      <main>
        <section className="ct-section">
          <div className="ct-section-heading">
            <p>CHAMPIONS THROUGH TIME</p>
            <h2>Edition History</h2>
            <span>
              Explore the winners and runners-up of every completed edition.
            </span>
          </div>

          <div className="ct-editions">
            {editions.map((edition) => (
              <article className="ct-card" key={edition.year}>
                <div className="ct-card-top">
                  <span>CHAMPIONS TROPHY</span>
                  <strong>{edition.year}</strong>
                </div>

                <div className="ct-teams">
                  <div className="ct-team">
                    <img
                      src={edition.winnerFlag}
                      alt={`${edition.winner} flag`}
                      loading="lazy"
                    />
                    <h3>{edition.winner}</h3>
                    <span>CHAMPION</span>
                  </div>

                  <span className="ct-vs">VS</span>

                  <div className="ct-team">
                    <img
                      src={edition.runnerUpFlag}
                      alt={`${edition.runnerUp} flag`}
                      loading="lazy"
                    />
                    <h3>{edition.runnerUp}</h3>
                    <span>FINALIST</span>
                  </div>
                </div>

                <div className="ct-result">
                  <strong>{edition.result}</strong>
                  <p>{edition.venue}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ct-section">
          <div className="ct-section-heading">
            <p>RECORDS & MILESTONES</p>
            <h2>Champions Trophy Facts</h2>
          </div>

          <div className="ct-record-grid">
            {records.map((record) => (
              <article className="ct-record-card" key={record.label}>
                <span>{record.label}</span>
                <h3>{record.value}</h3>
                <p>{record.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <p className="ct-note">
          Historical results are provided for reference. Team flags,
          historical details and statistics should be verified before
          publication. West Indies is a regional cricket team and should
          not be represented by Jamaica's national flag.
        </p>
      </main>

      <footer className="ct-footer">
        <Link to="/">🏏 CRICKET INFO</Link>
        <span>Celebrating the history of ODI cricket.</span>
      </footer>
    </div>
  );
}
