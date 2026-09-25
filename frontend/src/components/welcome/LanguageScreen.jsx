import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TravelBackground from './TravelBackground';
import LanguageSearch from './LanguageSearch';
import LanguageCarousel from './LanguageCarousel';
import { languages } from '../../data/languages';

export default function LanguageScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLang, setSelectedLang] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedLang) {
      localStorage.setItem('vietvista_ui_language', selectedLang);
      navigate('/home');
    }
  };

  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeLangData = languages.find(l => l.code === selectedLang) || languages.find(l => l.code === 'en');

  return (
    <div className="language-screen-container">
      <TravelBackground />
      
      <div className="language-panel-wrapper">
        <div className="language-panel-inner">
          
          <div className="panel-header">
            <div className="panel-logo">
              <svg viewBox="0 0 100 30" className="logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 20 L50 10 L60 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 20 L40 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M60 10 L70 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>VIETVISTA</span>
            </div>
            <h2 className="panel-title">Choose your language</h2>
            <h3 className="panel-subtitle">Explore Vietnam. A more beautiful tomorrow.</h3>
          </div>
          
          <LanguageSearch 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
          
          <LanguageCarousel 
            languages={filteredLanguages}
            selectedLang={selectedLang}
            onSelect={setSelectedLang}
          />
          
          <div className="panel-footer">
            <button 
              className={`continue-btn ${selectedLang ? 'active' : ''}`}
              onClick={handleContinue}
              disabled={!selectedLang}
            >
              {selectedLang ? activeLangData.continueText : 'Continue'} <span>&rarr;</span>
            </button>
            <div className="settings-link">
              <span className="settings-icon">⚙️</span> Change language anytime in Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
