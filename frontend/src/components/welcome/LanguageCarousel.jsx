import LanguageItem from './LanguageItem';

export default function LanguageCarousel({ languages, selectedLang, onSelect }) {
  if (languages.length === 0) {
    return (
      <div className="language-carousel-container empty">
        <p>No language found</p>
      </div>
    );
  }

  return (
    <div className="language-carousel-container">
      <div className="language-carousel-inner">
        {languages.map((lang, index) => (
          <LanguageItem 
            key={lang.code}
            lang={lang}
            isSelected={selectedLang === lang.code}
            onSelect={() => onSelect(lang.code)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
