import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { ContentResults } from '../components/ContentResults';
import { useGenerator } from '../hooks/useGenerator';
import { Type, Sparkles } from 'lucide-react';

export function WordplayPage() {
  const {
    topic,
    content,
    loading,
    error,
    setTopic,
    handleGenerate
  } = useGenerator('wordplay');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4 flex items-center justify-center">
          <Type className="w-8 h-8 mr-2" />
          AI Wordplay Generator
          <Sparkles className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Create clever linguistic twists and plays on words using AI
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
        <GeneratorForm
          topic={topic}
          loading={loading}
          error={error}
          onTopicChange={setTopic}
          onGenerate={handleGenerate}
          placeholder="E.g., music, books, or nature"
        />
        <ContentResults 
          content={content}
          onRegenerate={handleGenerate}
        />
      </div>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Ultimate AI Wordplay Generator: Create Clever Language Play Instantly
        </h2>
        <p className="text-gray-600 mb-6">
          Welcome to the most sophisticated AI Wordplay Generator available online. Our advanced AI
          technology creates clever, engaging wordplay that adds wit and creativity to your content.
          Perfect for writers, content creators, and language enthusiasts looking to enhance their
          work with intelligent linguistic twists.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Our AI Wordplay Generator?
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Instant AI-powered wordplay creation</li>
          <li>Multiple linguistic techniques and styles</li>
          <li>Creative and original language combinations</li>
          <li>Perfect for content creation and writing</li>
          <li>Free AI Wordplay Generator with no registration</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Types of AI-Generated Wordplay
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Clever double entendres</li>
          <li>Creative homophones</li>
          <li>Engaging spoonerisms</li>
          <li>Witty malapropisms</li>
          <li>Innovative portmanteaus</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Professional Uses for AI Wordplay
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Creative writing and poetry</li>
          <li>Marketing and advertising copy</li>
          <li>Social media content</li>
          <li>Educational materials</li>
          <li>Brand naming and slogans</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How Our AI Wordplay Generator Works
        </h2>
        <p className="text-gray-600 mb-6">
          Our AI Wordplay Generator uses advanced linguistic analysis to create clever wordplay by:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Analyzing word relationships and meanings</li>
          <li>Understanding language patterns</li>
          <li>Identifying sound similarities</li>
          <li>Creating unexpected connections</li>
          <li>Generating creative combinations</li>
        </ul>

        <div className="bg-emerald-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-3">
            Start Creating Wordplay with AI Today
          </h3>
          <p className="text-emerald-800">
            Join thousands of writers and content creators who use our AI Wordplay Generator
            to create engaging, clever content. Whether you're a professional writer or
            just love playing with language, our AI Wordplay Generator is here to help
            you create brilliant linguistic twists instantly.
          </p>
        </div>
      </div>
    </div>
  );
}