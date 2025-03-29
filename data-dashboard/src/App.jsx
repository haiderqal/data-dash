import React, { useEffect, useState } from "react";

function App() {
  const [stores, setStores] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  // Using fake store data since there is no direct public cellphone store API
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

  const filteredStores = stores.filter((store) => {
    return (
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === "" || store.store_type === filterType)
    );
  });

  const totalStores = stores.length;
  const storeTypes = [...new Set(stores.map((s) => s.store_type))];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">📱 Cellphone Stores Dashboard</h1>

      {/* Summary Stats */}
      <div className="mb-4">
        <p>Total Stores: {totalStores}</p>
        <p>Types of Stores: {storeTypes.length}</p>
        <p>Currently Displayed: {filteredStores.length}</p>
      </div>

      {/* Search & Filter */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search by store name..."
          className="border p-2 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          {storeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Store List */}
      <ul>
        {filteredStores.slice(0, 10).map((store) => (
          <li
            key={store.id}
            className="border p-3 mb-2 rounded shadow-sm hover:bg-gray-100"
          >
            <p className="font-semibold">{store.name}</p>
            <p>Type: {store.store_type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
