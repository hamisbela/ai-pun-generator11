import React from 'react';
import { Users, Heart, Code2 } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Learn more about the team behind the Group Name Generator
        </p>
      </div>

      <div className="space-y-12">
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We're passionate about helping people and organizations find the perfect names
            for their groups. Our AI-powered platform combines creativity with technology
            to generate unique, meaningful, and memorable names for any purpose.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Why Choose Us</h2>
          </div>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              Advanced AI Technology: Our generator uses cutting-edge AI to create contextually relevant names
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              Specialized Categories: From K-pop to D&D, we offer targeted name generation for various needs
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              User-Friendly Interface: Simple, intuitive design for the best user experience
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              Free to Use: Access our powerful name generator without any cost
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <Code2 className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Technology</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We leverage advanced natural language processing and machine learning
            algorithms to understand context and generate appropriate names. Our system
            continuously learns and improves from user interactions to provide better
            suggestions over time.
          </p>
        </section>
      </div>
    </div>
  );
}