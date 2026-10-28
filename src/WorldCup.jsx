
import "./WorldCup.css";

const worldCupEditions = [
  {
    year: 1975,
    winner: "West Indies",
    winnerFlag: "https://flagcdn.com/w160/jm.png",
    runnerUp: "Australia",
    runnerUpFlag: "https://flagcdn.com/w160/au.png",
    winnerScore: "291/8 (60 overs)",
    runnerUpScore: "274 all out (58.4 overs)",
    result: "West Indies won by 17 runs",
    captain: "Clive Lloyd",
    playerOfTournament: "Not awarded",
    topRuns: "Glenn Turner — 333 runs",
    topWickets: "Gary Gilmour & Bernard Julien — 11 wickets each",
  },
  {
    year: 1979,
    winner: "West Indies",
    winnerFlag: "https://flagcdn.com/w160/jm.png",
    runnerUp: "England",
    runnerUpFlag: "https://flagcdn.com/w160/gb-eng.png",
    winnerScore: "286/9 (60 overs)",
    runnerUpScore: "194 all out (51 overs)",
    result: "West Indies won by 92 runs",
    captain: "Clive Lloyd",
    playerOfTournament: "Not awarded",
    topRuns: "Gordon Greenidge — 253 runs",
    topWickets: "Mike Hendrick — 10 wickets",
  },
  {
    year: 1983,
    winner: "India",
    winnerFlag: "https://flagcdn.com/w160/in.png",
    runnerUp: "West Indies",
    runnerUpFlag: "https://flagcdn.com/w160/jm.png",
    winnerScore: "183 all out (54.4 overs)",
    runnerUpScore: "140 all out (52 overs)",
    result: "India won by 43 runs",
    captain: "Kapil Dev",
    playerOfTournament: "Not awarded",
    topRuns: "David Gower — 384 runs",
    topWickets: "Roger Binny — 18 wickets",
  },
  {
    year: 1987,
    winner: "Australia",
    winnerFlag: "https://flagcdn.com/w160/au.png",
    runnerUp: "England",
    runnerUpFlag: "https://flagcdn.com/w160/gb-eng.png",
    winnerScore: "253/5 (50 overs)",
    runnerUpScore: "246/8 (50 overs)",
    result: "Australia won by 7 runs",
    captain: "Allan Border",
    playerOfTournament: "Not awarded",
    topRuns: "Graham Gooch — 471 runs",
    topWickets: "Craig McDermott — 18 wickets",
  },
  {
    year: 1992,
    winner: "Pakistan",
    winnerFlag: "https://flagcdn.com/w160/pk.png",
    runnerUp: "England",
    runnerUpFlag: "https://flagcdn.com/w160/gb-eng.png",
    winnerScore: "249/6 (50 overs)",
    runnerUpScore: "227 all out (49.2 overs)",
    result: "Pakistan won by 22 runs",
    captain: "Imran Khan",
    playerOfTournament: "Martin Crowe",
    topRuns: "Martin Crowe — 456 runs",
    topWickets: "Wasim Akram — 18 wickets",
  },
  {
    year: 1996,
    winner: "Sri Lanka",
    winnerFlag: "https://flagcdn.com/w160/lk.png",
    runnerUp: "Australia",
    runnerUpFlag: "https://flagcdn.com/w160/au.png",
    winnerScore: "245/3 (46.2 overs)",
    runnerUpScore: "241/7 (50 overs)",
    result: "Sri Lanka won by 7 wickets",
    captain: "Arjuna Ranatunga",
    playerOfTournament: "Not formally awarded",
    topRuns: "Sachin Tendulkar — 523 runs",
    topWickets: "Anil Kumble — 15 wickets",
  },
  {
    year: 1999,
    winner: "Australia",
    winnerFlag: "https://flagcdn.com/w160/au.png",
    runnerUp: "Pakistan",
    runnerUpFlag: "https://flagcdn.com/w160/pk.png",
    winnerScore: "133/2 (20.1 overs)",
    runnerUpScore: "132 all out (39 overs)",
    result: "Australia won by 8 wickets",
    captain: "Steve Waugh",
    playerOfTournament: "Lance Klusener",
    topRuns: "Rahul Dravid — 461 runs",
    topWickets: "Geoff Allott & Shane Warne — 20 wickets each",
  },
  {
    year: 2003,
    winner: "Australia",
    winnerFlag: "https://flagcdn.com/w160/au.png",
    runnerUp: "India",
    runnerUpFlag: "https://flagcdn.com/w160/in.png",
    winnerScore: "359/2 (50 overs)",
    runnerUpScore: "234 all out (39.2 overs)",
    result: "Australia won by 125 runs",
    captain: "Ricky Ponting",
    playerOfTournament: "Sachin Tendulkar",
    topRuns: "Sachin Tendulkar — 673 runs",
    topWickets: "Chaminda Vaas — 23 wickets",
  },
  {
    year: 2007,
    winner: "Australia",
    winnerFlag: "https://flagcdn.com/w160/au.png",
    runnerUp: "Sri Lanka",
    runnerUpFlag: "https://flagcdn.com/w160/lk.png",
    winnerScore: "281/4 (38 overs, revised target)",
    runnerUpScore: "215/8 (36 overs)",
    result: "Australia won by 53 runs (D/L method)",
    captain: "Ricky Ponting",
    playerOfTournament: "Glenn McGrath",
    topRuns: "Matthew Hayden — 659 runs",
    topWickets: "Glenn McGrath — 26 wickets",
  },
  {
    year: 2011,
    winner: "India",
    winnerFlag: "https://flagcdn.com/w160/in.png",
    runnerUp: "Sri Lanka",
    runnerUpFlag: "https://flagcdn.com/w160/lk.png",
    winnerScore: "277/4 (48.2 overs)",
    runnerUpScore: "274/6 (50 overs)",
    result: "India won by 6 wickets",
    captain: "MS Dhoni",
    playerOfTournament: "Yuvraj Singh",
    topRuns: "Tillakaratne Dilshan — 500 runs",
    topWickets: "Zaheer Khan & Shahid Afridi — 21 wickets each",
  },
  {
    year: 2015,
    winner: "Australia",
    winnerFlag: "https://flagcdn.com/w160/au.png",
    runnerUp: "New Zealand",
    runnerUpFlag: "https://flagcdn.com/w160/nz.png",
    winnerScore: "186/3 (33.1 overs)",
    runnerUpScore: "183 all out (45 overs)",
    result: "Australia won by 7 wickets",
    captain: "Michael Clarke",
    playerOfTournament: "Not separately awarded",
    topRuns: "Martin Guptill — 547 runs",
    topWickets: "Mitchell Starc & Trent Boult — 22 wickets each",
  },
  {
    year: 2019,
    winner: "England",
    winnerFlag: "https://flagcdn.com/w160/gb-eng.png",
    runnerUp: "New Zealand",
    runnerUpFlag: "https://flagcdn.com/w160/nz.png",
    winnerScore: "241 all out (50 overs)",
    runnerUpScore: "241/8 (50 overs)",
    result: "England won the Super Over boundary-count rule",
    captain: "Eoin Morgan",
    playerOfTournament: "Kane Williamson",
    topRuns: "Rohit Sharma — 648 runs",
    topWickets: "Mitchell Starc — 27 wickets",
  },
  {
    year: 2023,
    winner: "Australia",
    winnerFlag: "https://flagcdn.com/w160/au.png",
    runnerUp: "India",
    runnerUpFlag: "https://flagcdn.com/w160/in.png",
    winnerScore: "241/4 (43 overs)",
    runnerUpScore: "240 all out (50 overs)",
    result: "Australia won by 6 wickets",
    captain: "Pat Cummins",
    playerOfTournament: "Virat Kohli",
    topRuns: "Virat Kohli — 765 runs",
    topWickets: "Mohammed Shami — 24 wickets",
  },
  {
    year: 2027,
    upcoming: true,
  },
];

const allTimeRecords = [
  {
    title: "Most World Cup Runs",
    name: "Sachin Tendulkar",
    stat: "2,278 runs",
  },
  {
    title: "Most World Cup Wickets",
    name: "Glenn McGrath",
    stat: "71 wickets",
  },
  {
    title: "Most World Cup Centuries",
    name: "Rohit Sharma",
    stat: "7 centuries",
  },
];

function WorldCup() {
  return (
    <main className="world-cup-page">
      <header className="world-cup-header">
        <a className="back-link" href="/">
          ← Back to Home
        </a>
        <p className="eyebrow">MEN'S CRICKET</p>
        <h1>ICC Men's ODI World Cup</h1>
        <p>
          Every edition from 1975 to 2027 — champions, finals and tournament
          records.
        </p>
      </header>

      <section className="world-cup-editions">
        {worldCupEditions.map((edition) => (
          <article className="edition-card" key={edition.year}>
            <div className="edition-year">
              <h2>{edition.year}</h2>
              {edition.upcoming && <span className="upcoming-tag">Upcoming</span>}
            </div>

            {edition.upcoming ? (
              <div className="upcoming-content">
                <h3>2027 ODI World Cup</h3>
                <p>
                  Scheduled to be hosted in South Africa, Zimbabwe and Namibia.
                </p>
                <p>Winner, runner-up, final score and tournament records: Not available yet.</p>
              </div>
            ) : (
              <>
                <div className="final-teams">
                  <div className="final-team">
                    <img src={edition.winnerFlag} alt={`${edition.winner} flag`} />
                    <h3>{edition.winner}</h3>
                    <strong>{edition.winnerScore}</strong>
                    <span>Winner</span>
                  </div>

                  <div className="versus">VS</div>

                  <div className="final-team">
                    <img
                      src={edition.runnerUpFlag}
                      alt={`${edition.runnerUp} flag`}
                    />
                    <h3>{edition.runnerUp}</h3>
                    <strong>{edition.runnerUpScore}</strong>
                    <span>Runner-up</span>
                  </div>
                </div>

                <p className="match-result">{edition.result}</p>

                <div className="edition-details">
                  <p>
                    <strong>Winning Captain:</strong> {edition.captain}
                  </p>
                  <p>
                    <strong>Player of the Tournament:</strong>{" "}
                    {edition.playerOfTournament}
                  </p>
                  <p>
                    <strong>Highest Run Scorer:</strong> {edition.topRuns}
                  </p>
                  <p>
                    <strong>Highest Wicket Taker:</strong> {edition.topWickets}
                  </p>
                </div>
              </>
            )}
          </article>
        ))}
      </section>

      <section className="all-time-records">
        <p className="eyebrow">ALL-TIME LEADERS</p>
        <h2>ODI World Cup Records</h2>

        <div className="record-grid">
          {allTimeRecords.map((record) => (
            <article className="record-card" key={record.title}>
              <h3>{record.title}</h3>
              <p className="record-name">{record.name}</p>
              <strong>{record.stat}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default WorldCup;
