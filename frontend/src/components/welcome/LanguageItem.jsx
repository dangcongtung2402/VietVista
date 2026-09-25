export default function LanguageItem({ lang, isSelected, onSelect, index }) {
  const animationDelay = `${index * 50}ms`;

  return (
    <div 
      className={`language-item ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
      style={{ animationDelay }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      aria-pressed={isSelected}
    >
      <div className="lang-info-left">
        <img 
          src={`https://flagcdn.com/w80/${lang.countryCode}.png`} 
          alt={`${lang.name} flag`} 
          className="lang-flag-img"
          loading="lazy"
        />
        <div className="lang-text-group">
          <span className="lang-native">{lang.nativeName}</span>
          <span className="lang-english">{lang.name}</span>
        </div>
      </div>
      {isSelected && (
        <div className="lang-check-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#165443"/>
            <path d="M7 12L10.5 15.5L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
}
