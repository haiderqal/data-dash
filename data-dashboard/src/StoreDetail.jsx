// StoreDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

function StoreDetail({ stores }) {
  const { id } = useParams();
  const store = stores.find((s) => s.id === parseInt(id));

  if (!store) {
    return (
      <div className="container">
        <h2>Store not found</h2>
        <Link to="/">← Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{store.name}</h2>
      <p><strong>Type:</strong> {store.store_type}</p>
      <p><strong>Location:</strong> Coming soon...</p>
      <p><strong>Hours:</strong> 10AM - 8PM</p>
      <p><strong>Popular Services:</strong> Phone upgrades, billing help</p>
      <Link to="/">← Back to Dashboard</Link>
    </div>
  );
}

export default StoreDetail;
