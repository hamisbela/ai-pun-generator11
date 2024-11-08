import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { ContentResults } from '../components/ContentResults';
import { useGenerator } from '../hooks/useGenerator';
import { Laugh, Sparkles } from 'lucide-react';

export function JokesPage() {
  const {
    topic,
    content,
    loading,
    error,
    setTopic,
    handleGenerate
  } = useGenerator('jokes');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4 flex items-center justify-center">
          <Laugh className="w-8 h-8 mr-2" />
          AI Jokes Generator
          <Sparkles className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Create hilarious jokes on any topic using AI
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
        <GeneratorForm
          topic={topic}
          loading={loading}
          error={error}
          onTopicChange={setTopic}
          onGenerate={handleGenerate}
          placeholder="E.g., technology, food, or sports"
        />
        <ContentResults 
          content={content}
          onRegenerate={handleGenerate}
        />
      </div>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Ultimate AI Jokes Generator: Create Hilarious Content Instantly
        </h2>
        <p className="text-gray-600 mb-6">
          Welcome to the most advanced AI Jokes Generator available online. Our cutting-edge AI technology
          creates original, hilarious jokes that will have your audience laughing every time. Whether you're
          a comedian, content creator, or just love making people laugh, our AI Jokes Generator is your
          perfect tool for instant humor creation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Our AI Jokes Generator?
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Instant AI-powered joke creation for any topic or theme</li>
          <li>Original, creative humor that's always fresh and unique</li>
          <li>Family-friendly content options available</li>
          <li>Perfect for social media and content creation</li>
          <li>Free AI Jokes Generator with no registration required</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How Our AI Jokes Generator Works
        </h2>
        <p className="text-gray-600 mb-6">
          Our AI Jokes Generator uses advanced natural language processing to understand:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Humor patterns and timing</li>
          <li>Context and relevance</li>
          <li>Cultural references</li>
          <li>Audience preferences</li>
          <li>Comedy structures</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Professional Uses for AI-Generated Jokes
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Content creation and social media</li>
          <li>Public speaking and presentations</li>
          <li>Marketing and advertising campaigns</li>
          <li>Entertainment and comedy writing</li>
          <li>Educational materials and engagement</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Features of Our AI Jokes Generator
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Topic-specific joke generation</li>
          <li>Multiple joke styles and formats</li>
          <li>Clean, family-friendly options</li>
          <li>Easy sharing and copying</li>
          <li>Instant results</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tips for Better AI-Generated Jokes
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Choose specific topics for more focused jokes</li>
          <li>Consider your audience's preferences</li>
          <li>Test different topics and styles</li>
          <li>Use trending topics for relevance</li>
          <li>Keep it appropriate for your platform</li>
        </ul>

        <div className="bg-emerald-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-3">
            Start Creating Jokes with AI Today
          </h3>
          <p className="text-emerald-800">
            Join thousands of content creators who use our AI Jokes Generator to create
            engaging, humorous content. Whether you're a professional comedian or just
            looking to add some laughs to your content, our AI Jokes Generator is here
            to help you create hilarious jokes instantly.
          </p>
        </div>
      </div>
    </div>
  );
}