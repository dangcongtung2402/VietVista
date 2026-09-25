import { useNavigate } from 'react-router-dom';

export default function DestinationPage() {
  const navigate = useNavigate();

  const handleReset = () => {
    localStorage.removeItem('vietvista_ui_language');
    navigate('/');
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f5f5f5',
      color: '#333',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>Destination setup coming next</h1>
      
      <button 
        onClick={handleReset}
        style={{
          marginTop: '24px',
          padding: '12px 24px',
          backgroundColor: '#0B5D4B',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Reset Onboarding & Go Back
      </button>
    </div>
  );
}
