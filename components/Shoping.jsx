import React, { useState } from "react";

// Mock Formation Data
const formations = [
  {
    id: 1,
    category: "University",
    name: "Front-end & Back-end Development",
    companyName: "Sonatrach",
    field: "Computer Science",
    describtion:
      "Learn basics of app development and create your first project.",
    location: "Setif",
    price: 5000,
    duration: 12,
    places: 15,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    category: "Hotel",
    name: "Hotel Management Training",
    companyName: "Hilton",
    field: "Hospitality",
    describtion: "Train in a real hotel with professionals.",
    location: "Algiers",
    price: 4000,
    duration: 10,
    places: 10,
    image: "https://via.placeholder.com/100",
  },
  // Add more formations as needed...
];

// ShopeModelCard Component
const ShopeModelCard = ({ formation }) => {
  const isHotel = formation.category.toLowerCase() === "hotel";
  const isUniversity = formation.category.toLowerCase() === "university";

  const color = isUniversity ? "green" : isHotel ? "blue" : "black";

  return (
    <div
      style={{
        border: `2px solid ${color}`,
        borderRadius: 10,
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
        padding: 16,
        margin: 10,
        background: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong style={{ fontSize: 12, color }}>{formation.category}</strong>
        <span style={{ color, fontSize: 12 }}>{formation.price} DA</span>
      </div>
      <h4 style={{ fontSize: 14 }}>{formation.name}</h4>
      <p style={{ fontSize: 12 }}>{formation.describtion}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 12, color: "gray" }}>
          By {formation.companyName}
        </div>
        <button
          style={{
            background: color,
            color: "white",
            border: "none",
            borderRadius: 12,
            padding: "4px 12px",
            fontSize: 10,
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};




const ShopePage = () => {
  const [products ,setProducts] = useState(false);
  const tabs = [
    "All",
    "Industry",
    "Universities",
    "Hotels",
    "Ecole",
    "Restaurant",
  ];
  const [selectedTab, setSelectedTab] = useState(0);

  const renderTabContent = () => {
    if(!products){
      return; 
    }
      
    switch (tabs[selectedTab]) {
      case "All":
        return products.map((f) => (
          <ShopeModelCard key={f.id} formation={f} />
        ));
      case "Hotels":
        return formations
          .filter((f) => f.category.toLowerCase() === "hotel")
          .map((f) => <ShopeModelCard key={f.id} formation={f} />);
      case "Universities":
        return formations
          .filter((f) => f.category.toLowerCase() === "university")
          .map((f) => <ShopeModelCard key={f.id} formation={f} />);
      default:
        return <p style={{ textAlign: "center" }}>No data for this category</p>;
    }
  };

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* Tab Bar */}
      <div style={{ display: "flex", overflowX: "auto", marginBottom: 20 }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            style={{
              padding: "8px 16px",
              marginRight: 10,
              background: selectedTab === index ? "blue" : "transparent",
              color: selectedTab === index ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: 20,
              fontWeight: selectedTab === index ? "bold" : "normal",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ShopePage;
