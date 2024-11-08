import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { ContentResults } from '../components/ContentResults';
import { useGenerator } from '../hooks/useGenerator';
import { Brain, Sparkles } from 'lucide-react';

export function RiddlePage() {
  const {
    topic,
    content,
    loading,
    error,
    setTopic,
    handleGenerate
  } = useGenerator('riddles');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4 flex items-center justify-center">
          <Brain className="w-8 h-8 mr-2" />
          AI Riddle Generator
          <Sparkles className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Generate clever and challenging riddles on any topic using AI
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
        <GeneratorForm
          topic={topic}
          loading={loading}
          error={error}
          onTopicChange={setTopic}
          onGenerate={handleGenerate}
          placeholder="E.g., time, weather, or animals"
        />
        <ContentResults 
          content={content}
          onRegenerate={handleGenerate}
        />
      </div>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Ultimate AI Riddle Generator: Create Engaging Brain Teasers Instantly
        </h2>
        <p className="text-gray-600 mb-6">
          Welcome to the most advanced AI Riddle Generator available online. Our sophisticated AI
          technology creates clever, challenging riddles that engage minds and spark curiosity.
          Perfect for educators, game creators, and anyone who loves brain teasers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Our AI Riddle Generator?
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Instant AI-powered riddle creation</li>
          <li>Adjustable difficulty levels</li>
          <li>Topic-specific riddles</li>
          <li>Educational and entertaining</li>
          <li>Free AI Riddle Generator with no registration</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Professional Uses for AI-Generated Riddles
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Educational activities and worksheets</li>
          <li>Team building exercises</li>
          <li>Party games and entertainment</li>
          <li>Content creation and social media</li>
          <li>Escape room design</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How Our AI Riddle Generator Works
        </h2>
        <p className="text-gray-600 mb-6">
          Our AI Riddle Generator uses advanced algorithms to create engaging riddles by:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Analyzing object properties and characteristics</li>
          <li>Creating clever misdirection</li>
          <li>Balancing difficulty and solvability</li>
          <li>Incorporating wordplay and metaphors</li>
          <li>Ensuring logical solutions</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tips for Using AI-Generated Riddles
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Choose specific topics for focused riddles</li>
          <li>Consider your audience's skill level</li>
          <li>Use riddles as learning tools</li>
          <li>Combine with other activities</li>
          <li>Test riddles before using them</li>
        </ul>

        <div className="bg-emerald-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-3">
            Start Creating Riddles with AI Today
          </h3>
          <p className="text-emerald-800">
            Join thousands of educators and content creators who use our AI Riddle Generator
            to create engaging, challenging content. Whether you're teaching, entertaining,
            or just love puzzles, our AI Riddle Generator is here to help you create
            clever brain teasers instantly.
          </p>
        </div>
      </div>
    </div>
  );
}