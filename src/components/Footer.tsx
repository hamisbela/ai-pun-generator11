import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const links = [
    { path: '/', label: 'AI Pun Generator' },
    { path: '/jokes', label: 'AI Jokes Generator' },
    { path: '/wordplay', label: 'AI Wordplay Generator' },
    { path: '/riddles', label: 'AI Riddle Generator' },
    { path: '/epigrams', label: 'AI Epigram Generator' },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-emerald-600 mb-4">
              AI Pun Generator
            </h3>
            <p className="text-gray-600">
              Create hilarious puns and wordplay instantly using AI.
            </p>
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-600 hover:text-emerald-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} AI Pun Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}