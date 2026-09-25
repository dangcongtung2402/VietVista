import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IntroVideo from '../components/welcome/IntroVideo';
import LanguageScreen from '../components/welcome/LanguageScreen';
import '../styles/welcome.css';

export default function WelcomePage() {
  const [introState, setIntroState] = useState('loading'); // loading, playing, transitioning, completed
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already set a preference
    const savedLang = localStorage.getItem('vietvista_ui_language');
    if (savedLang) {
      // If preference exists, skip onboarding
      navigate('/home', { replace: true });
    } else {
      setIntroState('playing');
    }
  }, [navigate]);

  const handleIntroComplete = () => {
    setIntroState('transitioning');
    setTimeout(() => {
      setIntroState('completed');
    }, 1000); // 1s crossfade transition
  };

  if (introState === 'loading') return null;

  return (
    <div className="welcome-page-container">
      {introState !== 'completed' && (
        <div className={`intro-layer ${introState === 'transitioning' ? 'fade-out' : ''}`}>
          <IntroVideo onComplete={handleIntroComplete} />
        </div>
      )}
      
      {(introState === 'transitioning' || introState === 'completed') && (
        <div className={`language-layer ${introState === 'transitioning' ? 'fade-in' : 'visible'}`}>
          <LanguageScreen />
        </div>
      )}
    </div>
  );
}
