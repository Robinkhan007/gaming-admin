import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./common-components/header";
import GameTab from "./game-admin";
// Import other components for routes
import RechargeRequest from "./recharge-request";
import RechargeApproval from "./recharge-approval";
import WithdrawalRequest from "./withrawal-request";
import WithdrawalApproval from "./withrawal-approval";
import Setting from "./setting";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/game-list" element={<GameTab />} />
        <Route path="/recharge-request" element={<RechargeRequest />} />
        <Route path="/recharge-approval" element={<RechargeApproval />} />
        <Route path="/withdrawal-request" element={<WithdrawalRequest />} />
        <Route path="/withdrawal-approval" element={<WithdrawalApproval />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default App;
