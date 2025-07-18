import { useState } from "react";
import { Home, Calendar, Trophy, Target, ChevronLeft } from "lucide-react";

const FussNews = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const gameOfTheDay = {
    title: "ADHD-Stratten",
    description:
      "Som forsvarspiller er det viktig å være uforutsigbar. Det er ikke å legge skjul på at flere i twoday har en viss form for ADHD, og ved å kontinuerlig dra spaken frem og tilbake, kan du skape forvirring hos motstanderen. Dette kan åpne opp for angrepsmuligheter og gi deg en fordel i spillet.",
    difficulty: "Beginner",
    icon: <Target className="w-6 h-6" />,
    date: "2025-07-14",
  };

  const tips = [
    {
      id: 0,
      title: "Backpass",
      description:
        "Det ryktes om at keeperen er den beste spilleren på banen. Gjør det til din fordel ved å bruke backpass-teknikken. Dette kan lure motstanderen og gi deg en fordel i spillet.",
      difficulty: "Intermediate",
      icon: <Target className="w-6 h-6" />,
      date: "2025-07-11",
    },
    // {
    //   id: 1,
    //   title: "Defensiv mur",
    //   description: "Bygg en solid defensiv mur med dine defensive spillere. Hold dem parallelle og beveg dem som en enhet for å blokkere motstanderens angrep effektivt.",
    //   difficulty: "Beginner",
    //   date: "2025-07-13",
    //   icon: <Target className="w-6 h-6" />
    // },
    // {
    //   id: 2,
    //   title: "Pinpoint passing",
    //   description: "Øv på presise korte pasninger mellom midtbane og angrep. Timing er alt - vent til motstanderens forsvarere er ute av posisjon før du slår pasningen.",
    //   difficulty: "Advanced",
    //   date: "2025-07-12",
    //   icon: <Target className="w-6 h-6" />
    // },
    // {
    //   id: 3,
    //   title: "Keeper kontroll",
    //   description: "Lær å kontrollere ballen med keeperen din. Bruk veggen til å stoppe ballen og sett opp angrep fra baklinjen med presise pasninger til midtbanen.",
    //   difficulty: "Intermediate",
    //   date: "2025-07-11",
    //   icon: <Target className="w-6 h-6" />
    // },
    // {
    //   id: 4,
    //   title: "Fake shot teknikk",
    //   description: "Lur motstanderens keeper med fake shots. Gjør bevegelser som om du skal skyte, men hold ballen og vent på en bedre mulighet eller pass til en medspiller.",
    //   difficulty: "Advanced",
    //   date: "2025-07-10",
    //   icon: <Target className="w-6 h-6" />
    // },
    // {
    //   id: 5,
    //   title: "Sidespin magi",
    //   description: "Mester sidespinnet for å få ballen til å krølle rundt motstanderens forsvarere. Dette krever øvelse, men kan være avgjørende i tette situasjoner.",
    //   difficulty: "Expert",
    //   date: "2025-07-09",
    //   icon: <Target className="w-6 h-6" />
    // }
  ];

  const updates = [
    {
      id: 1,
      title: "Upset fant plass i Vy vs Brregofantene",
      summary: "Regionale kvalifiseringer avsluttet med overraskende oppsett",
      date: "2025-07-10",
      category: "Tournament",
      details:
        "Rett etter lunsj fant en voldsomt spennende kamp sted mellom Vy og Brregofantene. Begge lag viste imponerende ferdigheter, men det var Vy som til slutt trakk det lengste strået. Dette ved å hyre inn den danske drenge Kasper, en særdeles god speller.",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "UDI tok uventet grep mot Satsedir",
      summary: "Nervepirrende kamp endte i overbevisende stil for UDI",
      date: "2025-07-08",
      category: "Tournament",
      details:
        "Tidlig på ettermiddagen møttes Satsedir og UDI i en kamp som mange trodde Satsedir skulle dominere. Men det var UDI som tok initiativet fra første ball. Med lynraske vendinger og aggressivt press sjokkerte de motstanderen. Midtbanespilleren Farhad ble kampens store profil med flere avgjørende blokker og et nydelig langskudd. Satsedir kom aldri helt inn i rytmen og måtte til slutt se seg slått.",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Brregofantene utklasset Satsedir i energisk oppgjør",
      summary: "Brreg med full kontroll fra start til slutt",
      date: "2025-07-04",
      category: "Tournament",
      details:
        "Satsedir fikk det tøft da de møtte et toppet Brregofantene-lag som ikke lot seg stanse. Allerede etter få minutter satte Brreg presset, og det var tydelig at de hadde gjort hjemmeleksa si. Midtbanemotoren Lasse styrte tempoet, og spissen Emil leverte to mål med kirurgisk presisjon. Satsedir forsøkte å svare, men støtte gang på gang på et defensivt murverk. Det endte med klar seier til Brregofantene – og et kraftig varsko til resten av feltet.",
      icon: <Trophy className="w-5 h-5" />,
    },
  ];

  const Header = () => (
    <header className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-green-600 rounded-full"></div>
            </div>
            <h1 className="text-2xl font-bold">FussNews</h1>
          </div>
          <nav className="flex space-x-6">
            <button
              onClick={() => setCurrentPage("home")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                currentPage === "home"
                  ? "bg-white text-green-700 font-semibold"
                  : "hover:bg-green-600"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => setCurrentPage("updates")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                currentPage === "updates"
                  ? "bg-white text-green-700 font-semibold"
                  : "hover:bg-green-600"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Updates</span>
            </button>
            <button
              onClick={() => setCurrentPage("tips")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                currentPage === "tips"
                  ? "bg-white text-green-700 font-semibold"
                  : "hover:bg-green-600"
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Tips</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">FussNews</h1>
          <p className="text-xl opacity-90">
            Your Ultimate Foosball News Source
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Dagens strategi */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {gameOfTheDay.icon}
              <h2 className="text-2xl font-bold text-gray-800 ml-3">
                Dagens strategi
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage("tips")}
              className="text-green-600 hover:text-green-700 font-medium text-sm underline"
            >
              Se tidligere tips
            </button>
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            {gameOfTheDay.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            {gameOfTheDay.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {gameOfTheDay.difficulty}
            </div>
            <div className="text-sm text-gray-500">{gameOfTheDay.date}</div>
          </div>
        </div>

        {/* Updates Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-green-600" />
            Latest Updates
          </h2>
          <div className="space-y-4">
            {updates.slice(0, 3).map((update) => (
              <div
                key={update.id}
                className="border-l-4 border-green-200 pl-6 py-3 hover:border-green-400 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {update.icon}
                    <h3 className="font-semibold text-gray-800">
                      {update.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <p className="text-gray-600">{update.summary}</p>
                <div className="mt-2">
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {update.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentPage("updates")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              View All Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const UpdatesPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Latest Updates
          </h1>
          <p className="text-xl text-gray-600">
            Stay informed with the latest foosball news and developments
          </p>
        </div>

        <div className="space-y-8">
          {updates.map((update) => (
            <article
              key={update.id}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {update.icon}
                  <h2 className="text-2xl font-bold text-gray-800">
                    {update.title}
                  </h2>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">{update.date}</div>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-1">
                    {update.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {update.details}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Want to stay updated?
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest foosball news delivered straight to your inbox
            </p>
            <div className="flex justify-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TipsPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <button
            onClick={() => setCurrentPage("home")}
            className="flex items-center text-green-600 hover:text-green-700 mb-4 font-medium"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Tilbake til forsiden
          </button>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tidligere tips
          </h1>
          <p className="text-xl text-gray-600">
            Utforsk våre tidligere daglige strategier og tips
          </p>
        </div>

        {/* Today's tip */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-green-500">
          <div className="flex items-center mb-4">
            {gameOfTheDay.icon}
            <h2 className="text-2xl font-bold text-gray-800 ml-3">
              Dagens strategi
            </h2>
            <span className="ml-auto bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              I dag
            </span>
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            {gameOfTheDay.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            {gameOfTheDay.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {gameOfTheDay.difficulty}
            </div>
            <div className="text-sm text-gray-500">{gameOfTheDay.date}</div>
          </div>
        </div>

        {/* Yesterday's tips */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Target className="w-6 h-6 mr-3 text-green-600" />
            Tidligere tips
          </h2>

          {tips.map((tip) => (
            <article
              key={tip.id}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-gray-300 hover:border-green-400 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {tip.icon}
                  <h3 className="text-xl font-bold text-gray-800">
                    {tip.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">{tip.date}</div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-1 ${
                      tip.difficulty === "Beginner"
                        ? "bg-blue-100 text-blue-800"
                        : tip.difficulty === "Intermediate"
                        ? "bg-yellow-100 text-yellow-800"
                        : tip.difficulty === "Advanced"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {tip.difficulty}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {tip.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Har du et tips du vil dele?
            </h3>
            <p className="text-gray-600 mb-6">
              Send oss dine beste foosball-strategier og tips
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Send inn tips
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {currentPage === "home" && <HomePage />}
      {currentPage === "updates" && <UpdatesPage />}
      {currentPage === "tips" && <TipsPage />}
    </div>
  );
};

export default FussNews;
