
import { Trophy } from "lucide-react";

interface TrophyCardProps {
  year: number;
  competition: string;
  type: 'bundesliga' | 'champions-league';
}

export const TrophyCard = ({ year, competition, type }: TrophyCardProps) => {
  const isChampionsLeague = type === 'champions-league';
  
  return (
    <div className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
      isChampionsLeague 
        ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900' 
        : 'bg-gradient-to-br from-red-600 via-red-700 to-red-800'
    }`}>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      <div className="relative p-6 text-white">
        <div className="flex items-center justify-between mb-3">
          <Trophy className={`w-8 h-8 ${isChampionsLeague ? 'text-yellow-300' : 'text-yellow-400'} drop-shadow-lg`} />
          <span className="text-2xl font-bold opacity-90">{year}</span>
        </div>
        <h3 className="text-lg font-semibold leading-tight">
          {competition}
        </h3>
        <div className="mt-3 text-sm opacity-80">
          {isChampionsLeague ? 'European Champions' : 'German Champions'}
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${
        isChampionsLeague 
          ? 'bg-gradient-to-r from-yellow-300 to-yellow-500' 
          : 'bg-gradient-to-r from-yellow-400 to-yellow-600'
      }`} />
    </div>
  );
};
