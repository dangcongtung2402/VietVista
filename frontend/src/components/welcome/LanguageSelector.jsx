import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', label: 'Continue in English', title: 'Choose your language', subtitle: 'VietVista detected your preferred language.\nYou can change this anytime.' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', label: '日本語で続ける', title: '言語を選択', subtitle: '優先言語が検出されました。\nいつでも変更できます。' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', label: 'Tiếp tục bằng Tiếng Việt', title: 'Chọn ngôn ngữ của bạn', subtitle: 'VietVista đã phát hiện ngôn ngữ ưu tiên của bạn.\nBạn có thể thay đổi bất cứ lúc nào.' }
];

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState('en');
  const navigate = useNavigate();

  useEffect(() => {
    // Detect preferred language
    const browserLang = navigator.language || navigator.languages[0];
    const prefix = browserLang.substring(0, 2).toLowerCase();
    
    let defaultLang = 'en';
    if (prefix === 'vi') defaultLang = 'vi';
    else if (prefix === 'ja') defaultLang = 'ja';
    
    // Check if user has already set a language
    const savedLang = localStorage.getItem('vietvista_ui_language');
    if (savedLang && languages.some(l => l.code === savedLang)) {
      setSelectedLang(savedLang);
    } else {
      setSelectedLang(defaultLang);
      localStorage.setItem('vietvista_ui_language', defaultLang);
    }
  }, []);

  const handleSelect = (code) => {
    setSelectedLang(code);
    localStorage.setItem('vietvista_ui_language', code);
  };

  const handleContinue = () => {
    navigate('/onboarding/destination');
  };

  const currentLangData = languages.find(l => l.code === selectedLang) || languages[0];

  return (
    <div className="language-selector-container">
      <div className="language-panel">
        <h2>{currentLangData.title}</h2>
        <p style={{ whiteSpace: 'pre-line' }}>{currentLangData.subtitle}</p>

        <div className="language-list">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-btn ${selectedLang === lang.code ? 'selected' : ''}`}
              onClick={() => handleSelect(lang.code)}
              aria-label={`Select ${lang.name}`}
            >
              <span>{lang.flag} {lang.name}</span>
              {selectedLang === lang.code && <span>✓</span>}
            </button>
          ))}
        </div>

        <button className="more-languages-btn">
          More languages
        </button>

        <button 
          className="continue-btn"
          onClick={handleContinue}
        >
          {currentLangData.label} <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
