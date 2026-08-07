/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import AutopilotPage from './pages/AutopilotPage';
import DocsPage from './pages/DocsPage';
import AboutPage from './pages/AboutPage';
import ArduinoLibraryDocsPage from './pages/ArduinoLibraryDocsPage';

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"                     element={<LandingPage />} />
        <Route path="/autopilot"            element={<AutopilotPage />} />
        <Route path="/docs"                 element={<DocsPage />} />
        <Route path="/docs/arduino-library" element={<ArduinoLibraryDocsPage />} />
        <Route path="/about"                element={<AboutPage />} />
      </Routes>
    </div>
  );
}
