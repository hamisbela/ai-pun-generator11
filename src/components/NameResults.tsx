import React from 'react';
import { RefreshCw } from 'lucide-react';

interface NameResultsProps {
  names: string[];
  onRegenerate: () => void;
}

export function NameResults({ names, onRegenerate }: NameResultsProps) {
  if (names.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Generated Names
      </h3>
      <div className="space-y-3">
        {names.map((name, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-between"
          >
            <span className="text-indigo-900 font-medium">{name}</span>
            <button
              onClick={() => navigator.clipboard.writeText(name)}
              className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={onRegenerate}
        className="mt-4 flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Generate More
      </button>
    </div>
  );
}