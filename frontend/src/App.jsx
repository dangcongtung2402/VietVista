import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import DestinationPage from './pages/DestinationPage';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import TripPage from './pages/TripPage';
import MapPage from './pages/MapPage';
import POIDetailPage from './pages/POIDetailPage';
import ImmersiveExplorePage from './pages/ImmersiveExplorePage';
import CameraGuidePage from './pages/CameraGuidePage';
import LiveTripPage from './pages/LiveTripPage';
import AdaptiveReplanPage from './pages/AdaptiveReplanPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/onboarding/destination" element={<DestinationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/trips/current" element={<TripPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/poi/:id" element={<POIDetailPage />} />
        <Route path="/poi/:id/explore" element={<ImmersiveExplorePage />} />
        <Route path="/camera" element={<CameraGuidePage />} />
        <Route path="/trips/:tripId/live" element={<LiveTripPage />} />
        <Route path="/trips/:tripId/replan" element={<AdaptiveReplanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
