import { TrophySection } from "@/components/TrophySection";
import { bundesligaTrophies, championsLeagueTrophies } from "@/data/trophies";
import { Trophy, Star, Crown } from "lucide-react";

const Index = () => {
  const totalTrophies = bundesligaTrophies.length + championsLeagueTrophies.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Crown className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                FC Bayern Munich
              </h1>
              <Crown className="w-12 h-12 text-yellow-400" />
            </div>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              A Legacy of Excellence • Trophy Collection • 1950 - Present
            </p>
            
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {totalTrophies}
                </div>
                <div className="text-sm md:text-base text-gray-300 uppercase tracking-wide">
                  Total Trophies
                </div>
              </div>
              <div className="w-px h-16 bg-white/30" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {bundesligaTrophies.length}
                </div>
                <div className="text-sm md:text-base text-gray-300 uppercase tracking-wide">
                  Bundesliga Titles
                </div>
              </div>
              <div className="w-px h-16 bg-white/30" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {championsLeagueTrophies.length}
                </div>
                <div className="text-sm md:text-base text-gray-300 uppercase tracking-wide">
                  European Cups
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
              <Trophy className="w-8 h-8 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Star className="w-8 h-8 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Champions League Section */}
        <TrophySection 
          title="Champions League & European Cup"
          trophies={championsLeagueTrophies}
          type="champions-league"
        />

        {/* Bundesliga Section */}
        <TrophySection 
          title="Bundesliga Championships"
          trophies={bundesligaTrophies}
          type="bundesliga"
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold">Mia San Mia</span>
            <Trophy className="w-6 h-6 text-yellow-400" />
          </div>
          <p className="text-gray-400">
            FC Bayern Munich Trophy Collection • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
