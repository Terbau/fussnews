import { useState } from "react";
import { Home, Calendar, Trophy, Target, ChevronLeft } from "lucide-react";

const FussNews = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const allTips = [
    {
      id: 0,
      title: "Frontpass",
      description:
        "Lenge har forsvaret dominert banen. Den tiden er slutt. Nå er det angrepet som står for målene, og det viktigste er å få ballen kontrollert frem til spissen. Har du en Pelé fra Pakistan på laget, eksploderer sjansene for en seier astronomisk.",
      difficulty: "Intermediate",
      icon: <Target className="w-6 h-6" />,
      date: "2025-07-16",
    },
    {
      id: 1,
      title: "Winkelskudd",
      description:
        'Ingenting er vanskeligere enn å ta et hardt skudd som kommer fra en ekkel vinkel, også kalt winkelskudd. Spinn spaken i valgfritt tempo, men treff ballen litt på kanten slik at den får en skrå retning. Avansert versjon av denne teknikken kalles "Skjalgs teknikk". Dette innebærer å skyte ballen mens du tar et lite hopp bakover, slik at ballen blir dratt med i bevegelsen.',
      difficulty: "Advanced",
      icon: <Target className="w-6 h-6" />,
      date: "2025-07-15",
    },
    {
      id: 2,
      title: "ADHD-Stratten",
      description:
        "Som forsvarspiller er det viktig å være uforutsigbar. Det er ikke å legge skjul på at flere i twoday har en viss form for ADHD, og ved å kontinuerlig dra spaken frem og tilbake, kan du skape forvirring hos motstanderen. Dette kan åpne opp for angrepsmuligheter og gi deg en fordel i spillet.",
      difficulty: "Beginner",
      icon: <Target className="w-6 h-6" />,
      date: "2025-07-14",
    },
    {
      id: 3,
      title: "Backpass",
      description:
        "Det ryktes om at keeperen er den beste spilleren på banen. Gjør det til din fordel ved å bruke backpass-teknikken. Dette kan lure motstanderen og gi deg en fordel i spillet.",
      difficulty: "Intermediate",
      icon: <Target className="w-6 h-6" />,
      date: "2025-07-11",
    },
    {
      id: 4,
      title: "Backshots",
      description:
        "Det er fredag, og hva er ikke bedre enn å avslutte uka med noen backshots? Nå som alle har blitt nokså gode, er det de rare strategiene som gjelder. Fyk ballen bakover og håp på det beste.",
      difficulty: "Beginner",
      icon: <Target className="w-6 h-6" />,
      date: "2025-07-18",
    },
    {
      id: 5,
      title: "360-noscope",
      description: "Ta en skjalg, ha det gøy. Skyt og snurr.",
      difficulty: "Advanced",
      icon: <Target className="w-6 h-6" />,
      date: "2025-07-21",
    },
    {
      id: 5,
      title: "Wallride",
      description: "Nye strategien er å slå til ballen så hardt man bare kan. Få den til å sprette overalt, og før ballen langs veggen for å styre den kontrollert mot motstanderens mål.",
      difficulty: "Advanced",
      icon: <Target className="w-6 h-6" />,
      date: "2025-07-22",
    },
    {
      id: 5,
      title: "Hang-af",
      description: "I dag er alle litt hang, og med det handler det om å henge med. Gi litt faen i å dra den spaken frem og tilbake. Fyr løs og håp på det beste. Det er tross alt onsdag...",
      difficulty: "Advanced",
      icon: <Target className="w-6 h-6" />,
      date: "2025-07-23",
    },
  ];

  const today = new Date().toISOString().split("T")[0];

  // Filter tips for future dates out
  const tips = allTips
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .filter((tip) => tip.date <= today);

  // find todays tip based on the current date
  const todaysTip = tips.find((tip) => tip.date === today);

  const updates = [
    {
      id: 1,
      title: "Upset fant plass i Vy vs Brregofantene",
      summary: "Regionale kvalifiseringer avsluttet med overraskende oppsett",
      date: "2024-07-10",
      category: "Tournament",
      details:
        "Rett etter lunsj fant en voldsomt spennende kamp sted mellom Vy og Brregofantene. Begge lag viste imponerende ferdigheter, men det var Vy som til slutt trakk det lengste strået. Dette ved å hyre inn den danske drenge Kasper, en særdeles god speller.",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "UDI tok uventet grep mot Satsedir",
      summary: "Nervepirrende kamp endte i overbevisende stil for UDI",
      date: "2024-07-08",
      category: "Tournament",
      details:
        "Tidlig på ettermiddagen møttes Satsedir og UDI i en kamp som mange trodde Satsedir skulle dominere. Men det var UDI som tok initiativet fra første ball. Med lynraske vendinger og aggressivt press sjokkerte de motstanderen. Midtbanespilleren Farhad ble kampens store profil med flere avgjørende blokker og et nydelig langskudd. Satsedir kom aldri helt inn i rytmen og måtte til slutt se seg slått.",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Brregofantene utklasset Satsedir i energisk oppgjør",
      summary: "Brreg med full kontroll fra start til slutt",
      date: "2024-07-04",
      category: "Tournament",
      details:
        "Satsedir fikk det tøft da de møtte et toppet Brregofantene-lag som ikke lot seg stanse. Allerede etter få minutter satte Brreg presset, og det var tydelig at de hadde gjort hjemmeleksa si. Midtbanemotoren Lasse styrte tempoet, og spissen Emil leverte to mål med kirurgisk presisjon. Satsedir forsøkte å svare, men støtte gang på gang på et defensivt murverk. Det endte med klar seier til Brregofantene – og et kraftig varsko til resten av feltet.",
      icon: <Trophy className="w-5 h-5" />,
    },
  ];

  const Header = () => (
    <header className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-green-600 rounded-full"></div>
            </div>
            <h1 className="text-2xl font-bold">FussNews</h1>
          </div>
          <nav className="flex space-x-2 sm:space-x-6 w-full sm:w-auto justify-center sm:justify-end">
            <button
              onClick={() => setCurrentPage("home")}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                currentPage === "home"
                  ? "bg-white text-green-700 font-semibold"
                  : "hover:bg-green-600"
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
            <button
              onClick={() => setCurrentPage("updates")}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                currentPage === "updates"
                  ? "bg-white text-green-700 font-semibold"
                  : "hover:bg-green-600"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Updates</span>
            </button>
            <button
              onClick={() => setCurrentPage("tips")}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                currentPage === "tips"
                  ? "bg-white text-green-700 font-semibold"
                  : "hover:bg-green-600"
              }`}
            >
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Tips</span>
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
              {todaysTip?.icon}
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
            {todaysTip?.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            {todaysTip?.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {todaysTip?.difficulty}
            </div>
            <div className="text-sm text-gray-500">{todaysTip?.date}</div>
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
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Latest Updates
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Stay informed with the latest foosball news and developments
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {updates.map((update) => (
            <article
              key={update.id}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-green-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  {update.icon}
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {update.title}
                  </h2>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-sm text-gray-500">{update.date}</div>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-1">
                    {update.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {update.details}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Want to stay updated?
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest foosball news delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-64"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto">
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
            {todaysTip?.icon}
            <h2 className="text-2xl font-bold text-gray-800 ml-3">
              Dagens strategi
            </h2>
            <span className="ml-auto bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              I dag
            </span>
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            {todaysTip?.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            {todaysTip?.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {todaysTip?.difficulty}
            </div>
            <div className="text-sm text-gray-500">{todaysTip?.date}</div>
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
