import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { JokesPage } from './pages/JokesPage';
import { WordplayPage } from './pages/WordplayPage';
import { RiddlePage } from './pages/RiddlePage';
import { EpigramPage } from './pages/EpigramPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jokes" element={<JokesPage />} />
            <Route path="/wordplay" element={<WordplayPage />} />
            <Route path="/riddles" element={<RiddlePage />} />
            <Route path="/epigrams" element={<EpigramPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}