import React from 'react';
import { RefreshCw } from 'lucide-react';

interface ContentResultsProps {
  content: string[];
  onRegenerate: () => void;
}

export function ContentResults({ content, onRegenerate }: ContentResultsProps) {
  if (content.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Generated Content
      </h3>
      <div className="space-y-3">
        {content.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg flex items-center justify-between"
          >
            <span className="text-emerald-900 font-medium">{item}</span>
            <button
              onClick={() => navigator.clipboard.writeText(item)}
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={onRegenerate}
        className="mt-4 flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Generate More
      </button>
    </div>
  );
}