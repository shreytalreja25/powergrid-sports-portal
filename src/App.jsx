import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all pages
import DashboardPage from "./pages/DashboardPage";
import NominationPage from "./pages/NominationPage";
import EventsPage from "./pages/EventsPage";
import ResultsPage from "./pages/ResultsPage";
import GalleryPage from "./pages/GalleryPage";
import UttamAwardsPage from "./pages/UttamAwardsPage";
import SportsPolicyPage from "./pages/SportsPolicyPage";

// Import global components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar visible across all screens */}
        <Navbar />
        <main>
          {/* Define application routes */}
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/nominate" element={<NominationPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/uttam-awards" element={<UttamAwardsPage />} />
            <Route path="/policy" element={<SportsPolicyPage />} />
          </Routes>
        </main>
        {/* Footer visible across all screens */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
