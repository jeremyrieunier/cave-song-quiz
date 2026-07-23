import { useState, useMemo } from "react";

// ——— Category banks: caveman plot summaries, no lyrics ———
const CATEGORIES = [
  {
    id: "90s",
    name: "The 90s",
    emoji: "📼",
    difficulty: "Easy",
    diffLevel: 1,
    blurb: "Big decade. Big songs. Even mammoth know these.",
    songs: [
      {
        summary:
          "Five women have rules. Man want woman? Man must befriend woman friends first. Women say what they really really want. Never explain what it is. Mystery word. Nobody know meaning. Not then. Not now.",
        answer: "Wannabe — Spice Girls",
        decoys: ["No Scrubs — TLC", "Girls Just Want to Have Fun — Cyndi Lauper", "Independent Women — Destiny's Child"],
      },
      {
        summary:
          "Big water log hit ice mountain. Log sink. Man sink with log. Woman survive. Woman say heart keep going anyway. Heart float. Somehow. Flute very loud.",
        answer: "My Heart Will Go On — Céline Dion",
        decoys: ["I Will Always Love You — Whitney Houston", "Un-Break My Heart — Toni Braxton", "Everything I Do — Bryan Adams"],
      },
      {
        summary:
          "Man mumble. Nobody understand single word. Everybody feel understood anyway. Crowd in gym destroy gym. Whole generation adopt song. Man hate this.",
        answer: "Smells Like Teen Spirit — Nirvana",
        decoys: ["Creep — Radiohead", "Basket Case — Green Day", "Even Flow — Pearl Jam"],
      },
      {
        summary:
          "Woman claim she is plastic doll. Plastic life very fantastic. Man invite doll to party. Real doll-maker tribe very angry. Send lawyers. Lawyers lose.",
        answer: "Barbie Girl — Aqua",
        decoys: ["Blue (Da Ba Dee) — Eiffel 65", "Wannabe — Spice Girls", "...Baby One More Time — Britney Spears"],
      },
      {
        summary:
          "Man say someone will save him. Man call that someone his wonderwall. Man never explain what wonderwall is. Nobody know. Man with one guitar at every fire gathering play this forever anyway.",
        answer: "Wonderwall — Oasis",
        decoys: ["Yellow — Coldplay", "Iris — Goo Goo Dolls", "Champagne Supernova — Oasis"],
      },
      {
        summary:
          "Woman ask big question about life after love. Woman voice turn robot mid-question. First robot voice ever heard. Every singer copy for next thirty winters.",
        answer: "Believe — Cher",
        decoys: ["Ray of Light — Madonna", "Vogue — Madonna", "Genie in a Bottle — Christina Aguilera"],
      },
      {
        summary:
          "Song tell story of woman who betray boyfriend moment he leave for army. Very dark story. Nobody notice. Everybody too busy doing arm dance. Arm dance conquer whole planet.",
        answer: "Macarena — Los del Río",
        decoys: ["Mambo No. 5 — Lou Bega", "La Bamba — Los Lobos", "Livin' la Vida Loca — Ricky Martin"],
      },
      {
        summary:
          "Woman very angry about war. Woman sing about noise inside head. Dead-walker mentioned many many time. Each time longer. Guitar very loud. Anger justified.",
        answer: "Zombie — The Cranberries",
        decoys: ["Losing My Religion — R.E.M.", "Glycerine — Bush", "Black Hole Sun — Soundgarden"],
      },
    ],
  },
  {
    id: "rap",
    name: "US Rap",
    emoji: "🎤",
    difficulty: "Medium",
    diffLevel: 2,
    blurb: "Shells, feuds, and men very confident.",
    songs: [
      {
        summary:
          "Man have shop. Shop not sell candy. 'Candy' mean other thing. Man invite woman to taste 'lollipop.' Also not real lollipop. Man very confident. Whole song one metaphor. Metaphor not subtle.",
        answer: "Candy Shop — 50 Cent",
        decoys: ["Lollipop — Lil Wayne", "In Da Club — 50 Cent", "Hot in Herre — Nelly"],
      },
      {
        summary:
          "Man love famous rapper. Man send many letters. No reply. Man get angry. Man drive over bridge with girlfriend in back. Rapper finally reply. Too late. Mail too slow. Everybody lose.",
        answer: "Stan — Eminem",
        decoys: ["The Real Slim Shady — Eminem", "Cleanin' Out My Closet — Eminem", "Dance with the Devil — Immortal Technique"],
      },
      {
        summary:
          "Man walk through valley. Valley full of shadow and danger. Man reflect on hard tribe life. Man twenty-three winters old. Man not sure he see twenty-four. Choir sing sad behind him.",
        answer: "Gangsta's Paradise — Coolio",
        decoys: ["Changes — 2Pac", "Crossroads — Bone Thugs-N-Harmony", "Dear Mama — 2Pac"],
      },
      {
        summary:
          "Man was very poor. Teachers say man will fail. Man now very rich. Man list every shiny thing he own now. Whole song is list. Man dedicate song to the doubters. Everything good now, baby.",
        answer: "Juicy — The Notorious B.I.G.",
        decoys: ["C.R.E.A.M. — Wu-Tang Clan", "Started from the Bottom — Drake", "Hypnotize — The Notorious B.I.G."],
      },
      {
        summary:
          "Man get one chance. Only one. Hands wet. Legs weak. Food from mother somehow on clothing. Man very nervous before word battle. Man must grab moment or moment gone forever.",
        answer: "Lose Yourself — Eminem",
        decoys: ["Till I Collapse — Eminem", "Can't Hold Us — Macklemore", "Remember the Name — Fort Minor"],
      },
      {
        summary:
          "Man apologize to grandmother of his child. Apologize very hard. Very sincere. Trillion percent sincere. Man never meant to make her daughter cry. Grandmother not accept. Song still banger.",
        answer: "Ms. Jackson — OutKast",
        decoys: ["Hey Ya! — OutKast", "Dilemma — Nelly", "Family Affair — Mary J. Blige"],
      },
      {
        summary:
          "Man celebrate birthday of shorty in cave of dancing. Man hold fancy drink. Man clarify he not here for love. Only party. Clarification important to man.",
        answer: "In Da Club — 50 Cent",
        decoys: ["Get Low — Lil Jon", "Yeah! — Usher", "Drop It Like It's Hot — Snoop Dogg"],
      },
      {
        summary:
          "Man's talking-stone used to light up late at night. Light mean one thing only. Stone light no more. Woman go outside now. Man very concerned about outside. Man dance like sad uncle at wedding.",
        answer: "Hotline Bling — Drake",
        decoys: ["In My Feelings — Drake", "Sorry — Justin Bieber", "Passionfruit — Drake"],
      },
    ],
  },
  {
    id: "comedy",
    name: "Comedy Songs",
    emoji: "🤡",
    difficulty: "Medium",
    diffLevel: 2,
    blurb: "Songs made for laughing. SNL tribe, Weird Al tribe, others.",
    songs: [
      {
        summary:
          "Two men have gift problem for special night. Shells not enough. Men have idea. Step one: get box. Step two: put man part in box. Step three: she open box. That is whole plan. Men very proud. It is crime.",
        answer: "Dick in a Box — The Lonely Island",
        decoys: ["Motherlover — The Lonely Island", "Business Time — Flight of the Conchords", "Jizz in My Pants — The Lonely Island"],
      },
      {
        summary:
          "Man win contest. Prize: ride big water log. Man cannot believe it. Man tell everybody. Man tell fish. Man wear soft royal robe. Man remind land people they on land. Land bad. Log good. Man changed forever.",
        answer: "I'm on a Boat — The Lonely Island",
        decoys: ["Come Sail Away — Styx", "Jack Sparrow — The Lonely Island", "Sailing — Christopher Cross"],
      },
      {
        summary:
          "Three men make party song. Invite famous fourth singer. Fourth man not sing about party. Fourth man sing about pirate. Then big fish movie. Then every other movie. Three men give up. Fourth man too famous to stop.",
        answer: "Jack Sparrow — The Lonely Island",
        decoys: ["I'm on a Boat — The Lonely Island", "Like a Boss — The Lonely Island", "Shy Ronnie — The Lonely Island"],
      },
      {
        summary:
          "Man redo famous valley-of-shadow rap song. Now about very plain farm folk. Man churn butter. Man raise barn. Man have no electric fire. Man celebrate like it is very old year. Original rapper very angry.",
        answer: "Amish Paradise — Weird Al Yankovic",
        decoys: ["White & Nerdy — Weird Al Yankovic", "Eat It — Weird Al Yankovic", "Gangsta's Paradise — Coolio"],
      },
      {
        summary:
          "Man rap about being very smart and very uncool. Man edit knowledge scrolls online. Man fluent in robot talk and elf talk. Man want join gangster tribe badly. Tribe look at man. Tribe say no.",
        answer: "White & Nerdy — Weird Al Yankovic",
        decoys: ["Amish Paradise — Weird Al Yankovic", "The Saga Begins — Weird Al Yankovic", "Because I Got High — Afroman"],
      },
      {
        summary:
          "Two men meet demon on road. Demon demand best song in world or eat souls. Men play best song in world. Demon defeated. Important: this song NOT that song. This only tribute. Best song forgotten forever.",
        answer: "Tribute — Tenacious D",
        decoys: ["Beelzeboss — Tenacious D", "The Devil Went Down to Georgia — Charlie Daniels Band", "Bohemian Rhapsody — Queen"],
      },
      {
        summary:
          "Man tell woman it is time for love. It is Wednesday. Wednesday is the scheduled night. Man wear special work socks for occasion. Very romantic. Whole event two minutes. Man consider this success.",
        answer: "Business Time — Flight of the Conchords",
        decoys: ["The Most Beautiful Girl (In the Room) — Flight of the Conchords", "Dick in a Box — The Lonely Island", "Inner City Pressure — Flight of the Conchords"],
      },
      {
        summary:
          "Two men rap very hard about very soft Sunday. Men buy cupcakes. Men use map website to find movie cave. Men watch wizard-lion movie. Hardest song ever made about nicest afternoon ever had.",
        answer: "Lazy Sunday — The Lonely Island",
        decoys: ["Threw It on the Ground — The Lonely Island", "I Just Had Sex — The Lonely Island", "White & Nerdy — Weird Al Yankovic"],
      },
    ],
  },
  {
    id: "eurovision",
    name: "Eurovision",
    emoji: "🇪🇺",
    difficulty: "Hard",
    diffLevel: 3,
    blurb: "Europe gather once a year. Chaos. Points. Politics. Bread.",
    songs: [
      {
        summary:
          "Monster tribe from cold north land make very loud rock. Masks. Wings unfold. Fire everywhere. Europe scared at first. Then Europe give most points ever seen. Monsters win whole thing.",
        answer: "Hard Rock Hallelujah — Lordi",
        decoys: ["Euphoria — Loreen", "Rise Like a Phoenix — Conchita Wurst", "Zitti e Buoni — Måneskin"],
      },
      {
        summary:
          "Six grandmothers from small village sing together. Grandmothers bake actual bread on stage. Oven real. Bread real. Song say party is for everybody. Grandmothers almost win whole contest.",
        answer: "Party for Everybody — Buranovskiye Babushki",
        decoys: ["Toy — Netta", "Dancing Lasha Tumbai — Verka Serduchka", "My Number One — Helena Paparizou"],
      },
      {
        summary:
          "Woman dance barefoot in fog storm. Snow fall wrong direction. Woman feel feeling too big for body. Feeling has fancy name. Europe agree feeling very big. Sweden win easily.",
        answer: "Euphoria — Loreen",
        decoys: ["Heroes — Måns Zelmerlöw", "Fuego — Eleni Foureira", "Only Teardrops — Emmelie de Forest"],
      },
      {
        summary:
          "Woman compare falling in love to famous battle where short French war chief finally lose. Woman surrender like chief surrender. Four Swedes then become biggest music tribe in history of ever.",
        answer: "Waterloo — ABBA",
        decoys: ["Ding-a-dong — Teach-In", "Save Your Kisses for Me — Brotherhood of Man", "Making Your Mind Up — Bucks Fizz"],
      },
      {
        summary:
          "Woman make chicken noise. Real chicken noise. Woman announce she is not your toy. Stupid boy informed of this. More chicken noise. Looping magic box used. Israel win.",
        answer: "Toy — Netta",
        decoys: ["Fuego — Eleni Foureira", "Party for Everybody — Buranovskiye Babushki", "Think About Things — Daði Freyr"],
      },
      {
        summary:
          "Person in shiny silver hat sing words that mean nothing. Or maybe secret meaning that make big neighbor country angry. Nobody sure. Accordion involved. Almost win whole contest.",
        answer: "Dancing Lasha Tumbai — Verka Serduchka",
        decoys: ["Toy — Netta", "Epic — Sandra Kim", "Hard Rock Hallelujah — Lordi"],
      },
      {
        summary:
          "Man sing about western tribe philosophy and naked ape inside all of us. To be safe, actual giant gorilla appear on stage. Gorilla dance with man. Staging very literal. Italy proud.",
        answer: "Occidentali's Karma — Francesco Gabbani",
        decoys: ["Grande Amore — Il Volo", "Soldi — Mahmood", "Zitti e Buoni — Måneskin"],
      },
      {
        summary:
          "Young man with fiddle sing about woman who hurt him years ago. Man call whole thing fairytale. Man jump-dance while playing fiddle. Impossible. Man break all-time point record. Norway celebrate.",
        answer: "Fairytale — Alexander Rybak",
        decoys: ["Hold Me Now — Johnny Logan", "Molitva — Marija Šerifović", "Arcade — Duncan Laurence"],
      },
    ],
  },
];

const GRUNTS_RIGHT = ["UGH! Big brain!", "Rock solid!", "Tribe proud!", "Fire discovered!", "Mammoth-size correct!"];
const GRUNTS_WRONG = ["Ugh. Wrong cave.", "No. Sad drum.", "Tribe disappointed.", "That not the song. That other song.", "Wall win again."];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ROUND_SIZE = 8;

function Bones({ level }) {
  return <span>{"🦴".repeat(level)}{"·".repeat(3 - level)}</span>;
}

export default function CavemanBlindTest() {
  const [screen, setScreen] = useState("categories"); // categories | play | end
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [grunt, setGrunt] = useState("");

  const startGame = (cat) => {
    const qs = shuffle(cat.songs).slice(0, ROUND_SIZE).map((q) => ({
      ...q,
      options: shuffle([q.answer, ...q.decoys]),
    }));
    setCategory(cat);
    setQuestions(qs);
    setIdx(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setPicked(null);
    setGrunt("");
    setScreen("play");
  };

  const q = questions[idx];

  const choose = (opt) => {
    if (picked) return;
    setPicked(opt);
    if (opt === q.answer) {
      setScore((s) => s + 1);
      setStreak((s) => {
        const ns = s + 1;
        setBestStreak((b) => Math.max(b, ns));
        return ns;
      });
      setGrunt(GRUNTS_RIGHT[Math.floor(Math.random() * GRUNTS_RIGHT.length)]);
    } else {
      setStreak(0);
      setGrunt(GRUNTS_WRONG[Math.floor(Math.random() * GRUNTS_WRONG.length)]);
    }
  };

  const next = () => {
    if (idx + 1 >= questions.length) {
      setScreen("end");
    } else {
      setIdx(idx + 1);
      setPicked(null);
      setGrunt("");
    }
  };

  const verdict = useMemo(() => {
    const r = score / (questions.length || 1);
    if (r === 1) return "PERFECT. You elder of music cave.";
    if (r >= 0.75) return "Strong ear. Tribe sing your name.";
    if (r >= 0.5) return "Half right. Half wrong. Like fire in rain.";
    if (r > 0) return "Ears need more mammoth practice.";
    return "You hear music before? Ever?";
  }, [score, questions.length]);

  const S = {
    root: {
      minHeight: "100vh",
      background:
        "radial-gradient(ellipse 120% 80% at 50% -10%, #4a3728 0%, #2b2018 45%, #1a130d 100%)",
      color: "#e8dcc4",
      fontFamily: "Georgia, 'Times New Roman', serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 16px 40px",
      boxSizing: "border-box",
    },
    handprint: { fontSize: 13, letterSpacing: "0.35em", color: "#c98d4b", marginBottom: 6 },
    title: {
      fontFamily: "Impact, 'Arial Black', sans-serif",
      fontSize: "clamp(34px, 9vw, 56px)",
      lineHeight: 1,
      color: "#e8dcc4",
      textShadow: "3px 3px 0 #8a3b1e",
      margin: "0 0 4px",
      textAlign: "center",
      textTransform: "uppercase",
    },
    tagline: { color: "#a68c67", fontStyle: "italic", fontSize: 15, textAlign: "center", margin: 0 },
    catCard: {
      display: "block",
      width: "100%",
      textAlign: "left",
      background: "linear-gradient(160deg, #57432f 0%, #453425 60%, #3a2b1e 100%)",
      border: "2px solid #6e563a",
      borderRadius: "16px 24px 14px 26px",
      boxShadow: "inset 0 2px 10px rgba(0,0,0,0.4), 0 5px 14px rgba(0,0,0,0.5)",
      padding: "16px 18px",
      marginBottom: 14,
      cursor: "pointer",
      color: "#e8dcc4",
      fontFamily: "Georgia, serif",
    },
    catName: {
      fontFamily: "Impact, 'Arial Black', sans-serif",
      fontSize: 24,
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      margin: 0,
    },
    catMeta: { fontSize: 13, color: "#c98d4b", textTransform: "uppercase", letterSpacing: "0.12em", margin: "4px 0" },
    catBlurb: { fontSize: 14, fontStyle: "italic", color: "#bda98a", margin: 0 },
    tablet: {
      background: "linear-gradient(160deg, #57432f 0%, #453425 60%, #3a2b1e 100%)",
      border: "2px solid #6e563a",
      borderRadius: "18px 26px 16px 30px",
      boxShadow: "inset 0 2px 12px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.6)",
      padding: "24px 20px",
      maxWidth: 480,
      width: "100%",
      margin: "18px 0",
      boxSizing: "border-box",
    },
    summary: { fontSize: 19, lineHeight: 1.55, color: "#f0e6cf", margin: 0 },
    option: (state) => ({
      display: "block",
      width: "100%",
      textAlign: "left",
      padding: "14px 16px",
      marginBottom: 10,
      fontSize: 16,
      fontFamily: "Georgia, serif",
      borderRadius: "12px 18px 12px 20px",
      cursor: picked ? "default" : "pointer",
      border: "2px solid",
      background: state === "correct" ? "#3f5a2e" : state === "wrong" ? "#5a2a22" : "#3a2c1e",
      borderColor: state === "correct" ? "#8fbf5a" : state === "wrong" ? "#c96a4b" : "#6e563a",
      color: state === "faded" ? "#a68c67" : state === "idle" ? "#e8dcc4" : "#fff",
      opacity: state === "faded" ? 0.45 : 1,
      boxSizing: "border-box",
    }),
    bigBtn: {
      fontFamily: "Impact, 'Arial Black', sans-serif",
      fontSize: 22,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      background: "#8a3b1e",
      color: "#f0e6cf",
      border: "3px solid #c98d4b",
      borderRadius: "14px 22px 14px 24px",
      padding: "14px 34px",
      cursor: "pointer",
      boxShadow: "0 6px 0 #5a2712",
      marginTop: 8,
    },
    smallBtn: {
      fontFamily: "Georgia, serif",
      fontSize: 14,
      background: "transparent",
      color: "#a68c67",
      border: "1px solid #6e563a",
      borderRadius: 10,
      padding: "8px 16px",
      cursor: "pointer",
      marginTop: 14,
    },
    hud: {
      display: "flex",
      gap: 16,
      fontSize: 13,
      color: "#c98d4b",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      marginTop: 4,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    grunt: {
      fontFamily: "Impact, 'Arial Black', sans-serif",
      fontSize: 22,
      color: picked === q?.answer ? "#a8d47a" : "#e2836a",
      textTransform: "uppercase",
      margin: "6px 0 2px",
      textAlign: "center",
      minHeight: 28,
    },
  };

  return (
    <div style={S.root}>
      <div style={S.handprint}>🖐️ 𖤍 🖐️</div>
      <h1 style={S.title}>Cave Song Quiz</h1>
      <p style={S.tagline}>Caveman tell song story. You guess song. Simple. Like rock.</p>

      {screen === "categories" && (
        <div style={{ width: "100%", maxWidth: 480, marginTop: 22 }}>
          {CATEGORIES.map((cat) => (
            <button key={cat.id} style={S.catCard} onClick={() => startGame(cat)}>
              <p style={S.catName}>{cat.emoji} {cat.name}</p>
              <p style={S.catMeta}>
                Difficulty: {cat.difficulty} <Bones level={cat.diffLevel} />
              </p>
              <p style={S.catBlurb}>{cat.blurb}</p>
            </button>
          ))}
        </div>
      )}

      {screen === "play" && q && (
        <>
          <div style={S.hud}>
            <span>{category.emoji} {category.name}</span>
            <span>Song {idx + 1}/{questions.length}</span>
            <span>Score {score}</span>
            <span>Streak {streak}🔥</span>
          </div>

          <div style={S.tablet}>
            <p style={S.summary}>“{q.summary}”</p>
          </div>

          <div style={{ width: "100%", maxWidth: 480 }}>
            {q.options.map((opt) => {
              let state = "idle";
              if (picked) {
                if (opt === q.answer) state = "correct";
                else if (opt === picked) state = "wrong";
                else state = "faded";
              }
              return (
                <button key={opt} style={S.option(state)} onClick={() => choose(opt)}>
                  {opt}
                </button>
              );
            })}
          </div>

          <div style={S.grunt}>{grunt}</div>

          {picked && (
            <button style={S.bigBtn} onClick={next}>
              {idx + 1 >= questions.length ? "See Verdict" : "Next Song"}
            </button>
          )}
        </>
      )}

      {screen === "end" && (
        <>
          <div style={S.tablet}>
            <p style={{ ...S.summary, textAlign: "center" }}>
              Hunt over. {category.emoji}
              <br />
              <span style={{ fontSize: 44, fontFamily: "Impact, sans-serif", color: "#c98d4b" }}>
                {score}/{questions.length}
              </span>
              <br />
              Best streak: {bestStreak}🔥
              <br />
              <br />
              <em>{verdict}</em>
            </p>
          </div>
          <button style={S.bigBtn} onClick={() => startGame(category)}>
            Hunt Again
          </button>
          <button style={S.smallBtn} onClick={() => setScreen("categories")}>
            ← Choose other cave
          </button>
        </>
      )}
    </div>
  );
}