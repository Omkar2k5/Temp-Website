import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ExecutiveCommittee from './pages/ExecutiveCommittee';
import Members from './pages/Members';
import Activities from './pages/Activities';
import BrideGroom from './pages/BrideGroom';
import Contact from './pages/Contact';
import Census from './pages/Census';
import CommunityNews from './pages/CommunityNews';
import NewsChannel from './pages/NewsChannel';
import GovernmentResolutions from './pages/GovernmentResolutions';
import Feedback from './pages/Feedback';
import Donation from './pages/Donation';
import IncomeExpenditure from './pages/IncomeExpenditure';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="executive-committee" element={<ExecutiveCommittee />} />
          <Route path="members" element={<Members />} />
          <Route path="activities" element={<Activities />} />
          <Route path="bride-groom" element={<BrideGroom />} />
          <Route path="contact" element={<Contact />} />
          <Route path="census" element={<Census />} />
          <Route path="community-news" element={<CommunityNews />} />
          <Route path="news-channel" element={<NewsChannel />} />
          <Route path="government-resolutions" element={<GovernmentResolutions />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="donation" element={<Donation />} />
          <Route path="income-expenditure" element={<IncomeExpenditure />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;