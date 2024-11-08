import React from 'react';
import { Wand2, Loader2, AlertCircle } from 'lucide-react';

interface GeneratorFormProps {
  topic: string;
  loading: boolean;
  error?: string;
  onTopicChange: (value: string) => void;
  onGenerate: () => void;
  placeholder?: string;
}

export function GeneratorForm({
  topic,
  loading,
  error,
  onTopicChange,
  onGenerate,
  placeholder = "E.g., computers, programming, or technology"
}: GeneratorFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter a topic
        </label>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          rows={3}
          placeholder={placeholder}
          value={topic}
          onChange={(e) => onTopicChange(e.target.value)}
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 rounded-lg flex items-center space-x-2 text-red-800">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <button
        onClick={onGenerate}
        disabled={loading || !topic}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Wand2 className="w-5 h-5" />
        )}
        <span>Generate</span>
      </button>
    </div>
  );
}