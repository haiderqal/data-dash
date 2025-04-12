// Chart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

// 🎨 Colors for pie slices
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

function Chart() {
  // 📊 Dataset 1: For BarChart
// Dataset for Bar Chart
const barData = [
    { type: "Carrier", count: 6 },
    { type: "Authorized Retailer", count: 4 },
    { type: "Retail Chain", count: 3 },
    { type: "Manufacturer", count: 2 } // ✅ Now included
  ];
  
  // 🥧 Dataset 2: For PieChart (e.g., store sales tiers)
// Dataset for Bar Chart
const pieData = [
    { type: "Carrier", value: 6000000 },
    { type: "Authorized Retailer", value: 4000000 },
    { type: "Retail Chain", value: 3000000 },
    { type: "Manufacturer", value: 2000000 }
  ];
  
  

//   const pieData = [
//     { tier: "High Sales", value: 5 },
//     { tier: "Moderate Sales", value: 3 },
//     { tier: "Low Sales", value: 2 },
//     { type: "Manufacturer", count: 2 } //
//   ];

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem", marginBottom: "2rem" }}>
      {/* Bar Chart: Store Types */}
      <div style={{ width: 400, height: 300 }}>
        <h3>Store Count by Type</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart: Store Sales Tiers */}
      {/* Pie Chart: Store Type Distribution */}
<div style={{ width: 400, height: 300 }}>
  <h3>Store Sales By Millions</h3>
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="type"
        outerRadius={100}
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>

    </div>
  );
}

export default Chart;
