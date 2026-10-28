
import "./T20WorldCup.css";

const editions = [
  {
    year: 2007,
    winner: "India",
    winnerFlag: "https://flagcdn.com/w160/in.png",
    runnerUp: "Pakistan",
    runnerUpFlag: "https://flagcdn.com/w160/pk.png",
    winnerScore: "157/5 (20 overs)",
    runnerUpScore: "152 all out (19.4 overs)",
    result: "India won by 5 runs",
    captain: "MS Dhoni",
    player: "Shahid Afridi",
    runs: "Matthew Hayden — 265 runs",
    wickets: "Umar Gul — 13 wickets",
  },
  {
    year: 2009,
    winner: "Pakistan",
    winnerFlag: "https://flagcdn.com/w160/pk.png",
    runnerUp: "Sri Lanka",
    runnerUpFlag: "https://flagcdn.com/w160/lk.png",
    winnerScore: "139/2 (18.4 overs)",
    runnerUpScore: "138/6 (20 overs)",
    result: "Pakistan won by 8 wickets",
    captain: "Younis Khan",
    player: "Tillakaratne Dilshan",
    runs: "Tillakaratne Dilshan — 317 runs",
    wickets: "Umar Gul — 13 wickets",
  },
  {
    year: 2010,
    winner: "England",
    winnerFlag: "https://flagcdn.com/w160/gb-eng.png",
    runnerUp: "Australia",
    runnerUpFlag: "https://flagcdn.com/w160/au.png",
    winnerScore: "148/3 (17 overs)",
    runnerUpScore: "147/6 (20 overs)",
    result: "England won by 7 wickets",
    captain: "Paul Collingwood",
    player: "Kevin Pietersen",
    runs: "Mahela Jayawardene — 302 runs",
    wickets: "Dirk Nannes — 14 wickets",
  },
  {
    year: 2012,
    winner: "West Indies",
    winnerFlag:"https://flagcdn.com/w160/jm.png",
    runnerUp: "Sri Lanka",
    runnerUpFlag: "https://flagcdn.com/w160/lk.png",
    winnerScore: "137/6 (20 overs)",
    runnerUpScore: "101 all out (18.4 overs)",
    result: "West Indies won by 36 runs",
    captain: "Daren Sammy",
    player: "Shane Watson",
    runs: "Shane Watson — 249 runs",
    wickets: "Ajantha Mendis — 15 wickets",
  },
  {
    year: 2014,
    winner: "Sri Lanka",
    winnerFlag: "https://flagcdn.com/w160/lk.png",
    runnerUp: "India",
    runnerUpFlag: "https://flagcdn.com/w160/in.png",
    winnerScore: "134/4 (17.5 overs)",
    runnerUpScore: "130/4 (20 overs)",
    result: "Sri Lanka won by 6 wickets",
    captain: "Lasith Malinga",
    player: "Virat Kohli",
    runs: "Virat Kohli — 319 runs",
    wickets: "Imran Tahir & Ahsan Malik — 12 each",
  },
  {
    year: 2016,
    winner: "West Indies",
    winnerFlag:"https://flagcdn.com/w160/jm.png",
    runnerUp: "England",
    runnerUpFlag: "https://flagcdn.com/w160/gb-eng.png",
    winnerScore: "161/6 (19.4 overs)",
    runnerUpScore: "155/9 (20 overs)",
    result: "West Indies won by 4 wickets",
    captain: "Daren Sammy",
    player: "Virat Kohli",
    runs: "Tamim Iqbal — 295 runs",
    wickets: "Mohammad Nabi — 12 wickets",
  },
  {
    year: 2021,
    winner: "Australia",
    winnerFlag: "https://flagcdn.com/w160/au.png",
    runnerUp: "New Zealand",
    runnerUpFlag: "https://flagcdn.com/w160/nz.png",
    winnerScore: "173/2 (18.5 overs)",
    runnerUpScore: "172/4 (20 overs)",
    result: "Australia won by 8 wickets",
    captain: "Aaron Finch",
    player: "David Warner",
    runs: "Babar Azam — 303 runs",
    wickets: "Wanindu Hasaranga — 16 wickets",
  },
  {
    year: 2022,
    winner: "England",
    winnerFlag: "https://flagcdn.com/w160/gb-eng.png",
    runnerUp: "Pakistan",
    runnerUpFlag: "https://flagcdn.com/w160/pk.png",
    winnerScore: "138/5 (19 overs)",
    runnerUpScore: "137/8 (20 overs)",
    result: "England won by 5 wickets",
    captain: "Jos Buttler",
    player: "Sam Curran",
    runs: "Virat Kohli — 296 runs",
    wickets: "Wanindu Hasaranga — 15 wickets",
  },
  {
    year: 2024,
    winner: "India",
    winnerFlag: "https://flagcdn.com/w160/in.png",
    runnerUp: "South Africa",
    runnerUpFlag: "https://flagcdn.com/w160/za.png",
    winnerScore: "176/7 (20 overs)",
    runnerUpScore: "169/8 (20 overs)",
    result: "India won by 7 runs",
    captain: "Rohit Sharma",
    player: "Jasprit Bumrah",
    runs: "Rahmanullah Gurbaz — 281 runs",
    wickets: "Fazalhaq Farooqi & Arshdeep Singh — 17 each",
  },
  {
    year: 2026,
    winner: "India",
    winnerFlag: "https://flagcdn.com/w160/in.png",
    runnerUp: "New Zealand",
    runnerUpFlag: "https://flagcdn.com/w160/nz.png",
    winnerScore: "255/5 (20 overs)",
    runnerUpScore: "159 all out (19 overs)",
    result: "India won by 96 runs",
    captain: "Suryakumar Yadav",
    player: "Sanju Samson",
    runs: "Sahibzada Farhan — 383 runs",
    wickets: "Jasprit Bumrah & Varun Chakaravarthy — 14 each",
  },
];

const allTimeRecords = [
  {
    title: "Most Career Runs",
    name: "Virat Kohli",
    value: "1,292 runs",
  },
  {
    title: "Most Career Wickets",
    name: "Shakib Al Hasan",
    value: "50 wickets",
  },
  {
    title: "Most T20 World Cup Centuries",
    name: "Chris Gayle",
    value: "2 centuries",
  },
];

function T20WorldCup() {
  return (
    <main className="t20-page">
      <header className="t20-header">
        <a href="/" className="t20-back">
          ← Back to Home
        </a>
        <p className="t20-eyebrow">MEN'S CRICKET</p>
        <h1>ICC Men's T20 World Cup</h1>
        <p>
          Fast cricket, unforgettable finals and the stars who made history.
        </p>
      </header>

      <section className="t20-editions">
        {editions.map((edition) => (
          <article className="t20-edition-card" key={edition.year}>
            <h2>{edition.year}</h2>

            <div className="t20-final-teams">
              <div className="t20-team">
                <img
                  src={edition.winnerFlag}
                  alt={`${edition.winner} flag or team emblem`}
                />
                <h3>{edition.winner}</h3>
                <strong>{edition.winnerScore}</strong>
                <span>Champion</span>
              </div>

              <span className="t20-versus">VS</span>

              <div className="t20-team">
                <img
                  src={edition.runnerUpFlag}
                  alt={`${edition.runnerUp} flag`}
                />
                <h3>{edition.runnerUp}</h3>
                <strong>{edition.runnerUpScore}</strong>
                <span>Runner-up</span>
              </div>
            </div>

            <p className="t20-result">{edition.result}</p>

            <div className="t20-details">
              <p>
                <strong>Winning Captain:</strong> {edition.captain}
              </p>
              <p>
                <strong>Player of the Tournament:</strong> {edition.player}
              </p>
              <p>
                <strong>Highest Run Scorer:</strong> {edition.runs}
              </p>
              <p>
                <strong>Highest Wicket Taker:</strong> {edition.wickets}
              </p>
            </div>
          </article>
        ))}

        <article className="t20-edition-card t20-upcoming">
          <span className="t20-upcoming-tag">Upcoming</span>
          <h2>2028</h2>
          <h3>ICC Men's T20 World Cup</h3>
          <p>
            Winner, runner-up, final score and tournament statistics will be
            added after the tournament is completed.
          </p>
        </article>
      </section>

      <section className="t20-records">
        <p className="t20-eyebrow">ALL-TIME LEADERS</p>
        <h2>T20 World Cup Records</h2>

        <div className="t20-record-grid">
          {allTimeRecords.map((record) => (
            <article className="t20-record-card" key={record.title}>
              <h3>{record.title}</h3>
              <p>{record.name}</p>
              <strong>{record.value}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default T20WorldCup;
