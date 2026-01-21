import React from "react";
import { Routes, Route } from "react-router-dom";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import App from "../App";
import Positions from "./Positions";
const Dashboard = () => {
  return (
    <div>
      <div>
        <WatchList />
        <div>
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<App />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
