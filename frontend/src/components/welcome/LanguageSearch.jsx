export default function LanguageSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="language-search-container">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          className="search-input"
          placeholder="Search language..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search language"
        />
        {searchQuery && (
          <button 
            className="clear-search-btn"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
