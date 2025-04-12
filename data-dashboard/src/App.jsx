// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import Chart from "./chart";
import StoreDetail from "./StoreDetail";
import "./App.css";

function Dashboard({ stores, searchQuery, setSearchQuery, filterType, setFilterType }) {
  const filteredStores = stores.filter((store) => {
    return (
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === "" || store.store_type === filterType)
    );
  });

  const totalStores = stores.length;
  const storeTypes = [...new Set(stores.map((s) => s.store_type))];

  return (
    <div className="container">
      <h1>📱 Cellphone Stores Dashboard</h1>

      {/* Summary Stats */}
      <div className="stats">
        <p>Total Stores: {totalStores}</p>
        <p>Types of Stores: {storeTypes.length}</p>
        <p>Currently Displayed: {filteredStores.length}</p>
      </div>

      {/* Search & Filter */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by store name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All Types</option>
          {storeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Charts */}
      <Chart stores={stores} />

      {/* Store List */}
      <ul>
        {filteredStores.map((store) => (
          <li key={store.id}>
            <Link to={`/store/${store.id}`}>
              <p>{store.name}</p>
              <p>Type: {store.store_type}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [stores, setStores] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const fakeData = [
      { id: 1, name: "T-Mobile Store", store_type: "Carrier" },
      { id: 2, name: "AT&T Store", store_type: "Carrier" },
      { id: 3, name: "Verizon Store", store_type: "Carrier" },
      { id: 4, name: "Metro by T-Mobile", store_type: "Authorized Retailer" },
      { id: 5, name: "Boost Mobile", store_type: "Authorized Retailer" },
      { id: 6, name: "Cricket Wireless", store_type: "Authorized Retailer" },
      { id: 7, name: "Apple Store", store_type: "Manufacturer" },
      { id: 8, name: "Samsung Experience", store_type: "Manufacturer" },
      { id: 9, name: "Best Buy Mobile", store_type: "Retail Chain" },
      { id: 10, name: "Walmart Mobile", store_type: "Retail Chain" }
    ];
    setStores(fakeData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              stores={stores}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterType={filterType}
              setFilterType={setFilterType}
            />
          }
        />
        <Route path="/store/:id" element={<StoreDetail stores={stores} />} />
      </Routes>
    </Router>
  );
}

export default App;
