import React, { useState, useEffect } from 'react';
import { PageType } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getPageFromHash = (): PageType => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['services', 'projects', 'about', 'contact'].includes(hash)) {
      return hash as PageType;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#171717] flex flex-col font-sans selection:bg-[#ffbd20] selection:text-[#171717]">
      {/* Sticky Header with Navigation across multi-pages */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Dynamic Page View */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Floating Scroll to Top Option */}
      <ScrollToTop />
    </div>
  );
}
