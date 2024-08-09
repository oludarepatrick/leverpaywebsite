import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RiskPolicy from "./pages/RiskPolicy";
import Deactivation from "./pages/Deactivation";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="risk-policy" element={<RiskPolicy />} />
          <Route path="account-deactivation" element={<Deactivation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
