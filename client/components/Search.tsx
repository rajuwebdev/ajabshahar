import { useState, useEffect } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  title: string;
  category: 'SULTANTS' | 'SONGS' | 'POEMS' | 'REFLECTIONS' | 'FILMS' | 'OTHER';
  color: string;
}

const mockResults: SearchResult[] = [
  { title: 'Farid', category: 'SULTANTS', color: 'text-rose-500' },
  { title: 'Maula Maula', category: 'SONGS', color: 'text-blue-500' },
  { title: 'Maula Maula', category: 'POEMS', color: 'text-green-500' },
  { title: 'Had Hisol Taye', category: 'POEMS', color: 'text-green-500' },
  { title: 'Maula Maula', category: 'REFLECTIONS', color: 'text-purple-500' },
  { title: 'Had Hisol Taye', category: 'REFLECTIONS', color: 'text-purple-500' },
  { title: 'Maula Maula', category: 'FILMS', color: 'text-orange-500' },
  { title: 'Had Hisol Taye', category: 'FILMS', color: 'text-orange-500' },
  { title: 'Maula Maula', category: 'OTHER', color: 'text-gray-500' },
];

export function Search({ isOpen, onClose }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = mockResults.filter(result =>
        result.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-start justify-center pt-16 sm:pt-20 px-4">
      {/* Search Container */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center px-4 py-3 border-b">
          <SearchIcon size={20} className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 ml-3"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Results */}
        {filteredResults.length > 0 && (
          <div className="max-h-96 overflow-y-auto">
            {Object.entries(
              filteredResults.reduce((acc, result) => {
                if (!acc[result.category]) {
                  acc[result.category] = [];
                }
                acc[result.category].push(result);
                return acc;
              }, {} as Record<string, SearchResult[]>)
            ).map(([category, results]) => (
              <div key={category} className="py-2">
                <div className={cn(
                  "px-4 py-2 text-xs font-semibold uppercase tracking-wider",
                  results[0].color
                )}>
                  {category}
                </div>
                {results.map((result, index) => (
                  <button
                    key={`${category}-${index}`}
                    className="w-full text-left px-6 py-2 hover:bg-gray-50 text-sm text-gray-700"
                    onClick={() => {
                      // Handle result selection
                      onClose();
                    }}
                  >
                    {result.title}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {searchTerm.trim() && filteredResults.length === 0 && (
          <div className="px-4 py-8 text-center text-gray-500">
            No results found for "{searchTerm}"
          </div>
        )}

        {/* Empty State */}
        {!searchTerm.trim() && (
          <div className="px-4 py-8 text-center text-gray-400">
            Start typing to search...
          </div>
        )}
      </div>
    </div>
  );
}
