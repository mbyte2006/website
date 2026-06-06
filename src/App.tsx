/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import DocsPage from './pages/DocsPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/"      element={<LandingPage />} />
        <Route path="/docs"  element={<DocsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
