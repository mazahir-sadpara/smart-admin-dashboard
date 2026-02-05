// src/components/FeatureCard.jsx
import React from "react";

const FeatureCard = ({ feature, role }) => {
  const bgClass = role === "admin" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800";

  return (
    <div className={`p-6 rounded-xl shadow-lg text-center font-medium ${bgClass}`}>
      {feature}
    </div>
  );
};

export default FeatureCard;
