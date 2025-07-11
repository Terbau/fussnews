import { useState } from "react";
import { Home, Calendar, Trophy, Users, Target, Zap } from "lucide-react";

const FussNews = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const gameOfTheDay = {
    title: "Backpass",
    description:
      "Det ryktes om at keeperen er den beste spilleren på banen. Gjør det til din fordel ved å bruke backpass-teknikken. Dette kan lure motstanderen og gi deg en fordel i spillet.",
    difficulty: "Intermediate",
    icon: <Target className="w-6 h-6" />,
  };

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
          <div className="flex items-center mb-4">
            {gameOfTheDay.icon}
            <h2 className="text-2xl font-bold text-gray-800 ml-3">
              Dagens strategi
            </h2>
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            {gameOfTheDay.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            {gameOfTheDay.description}
          </p>
          <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {gameOfTheDay.difficulty}
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {currentPage === "home" ? <HomePage /> : <UpdatesPage />}
    </div>
  );
};

export default FussNews;
