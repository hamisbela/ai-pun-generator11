import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { ContentResults } from '../components/ContentResults';
import { useGenerator } from '../hooks/useGenerator';
import { Quote, Sparkles } from 'lucide-react';

export function EpigramPage() {
  const {
    topic,
    content,
    loading,
    error,
    setTopic,
    handleGenerate
  } = useGenerator('epigrams');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4 flex items-center justify-center">
          <Quote className="w-8 h-8 mr-2" />
          AI Epigram Generator
          <Sparkles className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Create witty and profound short sayings with AI
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
        <GeneratorForm
          topic={topic}
          loading={loading}
          error={error}
          onTopicChange={setTopic}
          onGenerate={handleGenerate}
          placeholder="E.g., life, wisdom, or human nature"
        />
        <ContentResults 
          content={content}
          onRegenerate={handleGenerate}
        />
      </div>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Ultimate AI Epigram Generator: Create Memorable Sayings Instantly
        </h2>
        <p className="text-gray-600 mb-6">
          Welcome to the most sophisticated AI Epigram Generator available online. Our advanced AI
          technology creates concise, memorable epigrams that combine wit and wisdom. Perfect for
          writers, speakers, and anyone looking to express profound thoughts in elegant ways.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Our AI Epigram Generator?
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Instant AI-powered epigram creation</li>
          <li>Profound insights and observations</li>
          <li>Multiple styles and tones</li>
          <li>Perfect for quotes and citations</li>
          <li>Free AI Epigram Generator with no registration</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Professional Uses for AI-Generated Epigrams
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Speeches and presentations</li>
          <li>Writing and literature</li>
          <li>Social media content</li>
          <li>Motivational materials</li>
          <li>Educational resources</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How Our AI Epigram Generator Works
        </h2>
        <p className="text-gray-600 mb-6">
          Our AI Epigram Generator uses advanced language processing to create meaningful epigrams by:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Analyzing universal truths</li>
          <li>Creating clever paradoxes</li>
          <li>Balancing wit and wisdom</li>
          <li>Crafting memorable phrases</li>
          <li>Ensuring concise expression</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tips for Using AI-Generated Epigrams
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Choose meaningful topics</li>
          <li>Consider your audience</li>
          <li>Use in appropriate contexts</li>
          <li>Combine with other content</li>
          <li>Share on social media</li>
        </ul>

        <div className="bg-emerald-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-3">
            Start Creating Epigrams with AI Today
          </h3>
          <p className="text-emerald-800">
            Join thousands of writers and speakers who use our AI Epigram Generator to
            create memorable, insightful content. Whether you're writing, speaking, or
            sharing wisdom, our AI Epigram Generator is here to help you create
            profound sayings instantly.
          </p>
        </div>
      </div>
    </div>
  );
}