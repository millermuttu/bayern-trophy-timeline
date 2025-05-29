
import { TrophyCard } from "./TrophyCard";

interface Trophy {
  year: number;
  competition: string;
  type: 'bundesliga' | 'champions-league';
}

interface TrophySectionProps {
  title: string;
  trophies: Trophy[];
  type: 'bundesliga' | 'champions-league';
}

export const TrophySection = ({ title, trophies, type }: TrophySectionProps) => {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
          type === 'champions-league' 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' 
            : 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800'
        }`}>
          {title}
        </h2>
        <div className={`w-24 h-1 mx-auto rounded-full ${
          type === 'champions-league' 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
            : 'bg-gradient-to-r from-red-500 to-red-700'
        }`} />
        <p className="text-gray-600 mt-4 text-lg">
          {trophies.length} {trophies.length === 1 ? 'Trophy' : 'Trophies'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {trophies.map((trophy, index) => (
          <div 
            key={`${trophy.year}-${trophy.type}`}
            className="animate-in fade-in duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <TrophyCard 
              year={trophy.year}
              competition={trophy.competition}
              type={trophy.type}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
