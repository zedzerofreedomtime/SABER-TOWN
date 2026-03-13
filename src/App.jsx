import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/home/Home";

import CityPage from "./pages/city/CityPage";
import BasicRules from "./pages/city/BasicRules";
import CityRules from "./pages/city/CityRules";
import ActivityRules from "./pages/city/ActivityRules";

import MedicalPage from "./pages/medical/MedicalPage";
import MedicalRegulations from "./pages/medical/MedicalRegulations";
import MedicalDuty from "./pages/medical/MedicalDuty";
import MedicalBlacklist from "./pages/medical/MedicalBlacklist";
import MedicalPrices from "./pages/medical/MedicalPrices";

import PolicePage from "./pages/police/PolicePage";
import PoliceBasic from "./pages/police/PoliceBasic";
import PoliceOperations from "./pages/police/PoliceOperations";
import PoliceWarrants from "./pages/police/PoliceWarrants";
import PoliceRanks from "./pages/police/PoliceRanks";
import PoliceFines from "./pages/police/PoliceFines";

import CouncilPage from "./pages/council/CouncilPage";
import CouncilRules from "./pages/council/CouncilRules";
import GangRules from "./pages/council/GangRules";
import CouncilFees from "./pages/council/CouncilFees";
import StoryRules from "./pages/council/StoryRules";
import ContractRules from "./pages/council/ContractRules";

export default function App() {
  return (
    <div className="min-h-screen bg-[#02060a] text-white">
      <div className="grid-overlay fixed inset-0 pointer-events-none opacity-40"></div>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/city" element={<CityPage />} />
          <Route path="/city/basic-rules" element={<BasicRules />} />
          <Route path="/city/city-rules" element={<CityRules />} />
          <Route path="/city/activity-rules" element={<ActivityRules />} />

          <Route path="/medical" element={<MedicalPage />} />
          <Route path="/medical/regulations" element={<MedicalRegulations />} />
          <Route path="/medical/duty" element={<MedicalDuty />} />
          <Route path="/medical/blacklist" element={<MedicalBlacklist />} />
          <Route path="/medical/prices" element={<MedicalPrices />} />

          <Route path="/police" element={<PolicePage />} />
          <Route path="/police/basic" element={<PoliceBasic />} />
          <Route path="/police/operations" element={<PoliceOperations />} />
          <Route path="/police/warrants" element={<PoliceWarrants />} />
          <Route path="/police/ranks" element={<PoliceRanks />} />
          <Route path="/police/fines" element={<PoliceFines />} />

          <Route path="/council" element={<CouncilPage />} />
          <Route path="/council/rules" element={<CouncilRules />} />
          <Route path="/council/gang" element={<GangRules />} />
          <Route path="/council/fees" element={<CouncilFees />} />
          <Route path="/council/story" element={<StoryRules />} />
          <Route path="/council/contracts" element={<ContractRules />} />
        </Routes>
      </main>
    </div>
  );
}