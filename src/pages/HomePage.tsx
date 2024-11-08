import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { ContentResults } from '../components/ContentResults';
import { useGenerator } from '../hooks/useGenerator';
import { Sparkles, Lightbulb } from 'lucide-react';

export function HomePage() {
  const {
    topic,
    content,
    loading,
    error,
    setTopic,
    handleGenerate
  } = useGenerator('puns');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4 flex items-center justify-center">
          <Lightbulb className="w-8 h-8 mr-2" />
          AI Pun Generator
          <Sparkles className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Generate clever and witty puns instantly using AI
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
        <GeneratorForm
          topic={topic}
          loading={loading}
          error={error}
          onTopicChange={setTopic}
          onGenerate={handleGenerate}
          placeholder="E.g., cats, coffee, or programming"
        />
        <ContentResults 
          content={content}
          onRegenerate={handleGenerate}
        />
      </div>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Ultimate AI Pun Generator: Create Clever Wordplay Instantly
        </h2>
        <p className="text-gray-600 mb-6">
          Welcome to the most advanced AI Pun Generator available online. Our cutting-edge AI technology
          creates clever, witty, and engaging puns on any topic. Whether you're a content creator,
          social media manager, or just love wordplay, our AI Pun Generator is your go-to tool for
          instant pun creation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Our AI Pun Generator?
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Instant AI-powered pun generation for any topic</li>
          <li>Advanced natural language processing for clever wordplay</li>
          <li>Multiple pun styles and variations</li>
          <li>User-friendly interface for quick pun creation</li>
          <li>Free AI Pun Generator with no registration required</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Professional Uses for AI-Generated Puns
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Social media content creation</li>
          <li>Marketing and advertising campaigns</li>
          <li>Educational materials and presentations</li>
          <li>Entertainment and comedy writing</li>
          <li>Ice breakers and team building activities</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How Our AI Pun Generator Works
        </h2>
        <p className="text-gray-600 mb-6">
          Our AI Pun Generator leverages advanced machine learning algorithms and natural language
          processing to understand:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Word relationships and meanings</li>
          <li>Context and relevance</li>
          <li>Linguistic patterns</li>
          <li>Cultural references</li>
          <li>Humor mechanics</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Features of Our AI Pun Generator
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Topic-specific pun generation</li>
          <li>Multiple pun variations</li>
          <li>Family-friendly content</li>
          <li>Easy sharing and copying</li>
          <li>Instant results</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tips for Better Puns
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Choose specific topics for more focused puns</li>
          <li>Experiment with different subjects</li>
          <li>Consider word associations</li>
          <li>Think about multiple meanings</li>
          <li>Use descriptive topics</li>
        </ul>

        <div className="bg-emerald-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-3">
            Start Creating Puns with AI Today
          </h3>
          <p className="text-emerald-800">
            Join thousands of content creators who use our AI Pun Generator to create
            engaging, witty content. Whether you're a professional writer or just love
            wordplay, our AI Pun Generator is here to help you create clever puns
            instantly.
          </p>
        </div>
      </div>
    </div>
  );
}