import React, { useEffect, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function StockPage() {
  const tabs = ["In Stock", "On Delivery", "Sold", "In Production"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/selling");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        console.log("data")
        console.log(data)
      } else {
      }
    } catch (error) {
      showToast("Error fetching products", "red");
    }
  };




  const showToast = (text, color) => {
    Toastify({
      text,
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: color,
        borderRadius: "10px",
      },
    }).showToast();
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      {!showForm ? (
        <>
          {/* Tabs + Add Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", gap: 60 }}>
              {tabs.map((tab, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  style={{
                    fontWeight: selectedIndex === index ? "bold" : "normal",
                    color: selectedIndex === index ? "blue" : "black",
                    cursor: "pointer",
                  }}
                >
                  {tab}
                </span>
              ))}
            </div>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: 25,
                width: 150,
                height: 30,
                fontWeight: "bold",
                fontSize: 15.5,
              }}
              onClick={() => setShowForm(true)}
            >
              Add +
            </button>
          </div>

          {/* Grid Items */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
            }}
          >
            {products.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: 20,
                  borderRadius: 15,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                }}
              >
                <h3 style={{ marginBottom: 8 }}>{item.product}</h3>
                <p style={{ fontStyle: "italic", color: "#666" }}>
                  - {item.category}
                </p>
                <p>
                  <strong>Count:</strong> {item.quantity}
                </p>
                <p>
                  <strong>Volume:</strong> {item.unit} kg
                </p>
                <p>
                  <strong>Price:</strong> {item.price} DA
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <AddOfferForm onBack={() => setShowForm(false)} showToast={showToast} />
      )}
    </div>
  );
}

function AddOfferForm({ onBack, showToast }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async () => {
    const token = localStorage.getItem("token")  
    console.log(token)
    try {
      const response = await fetch("http://localhost:5000/api/selling", {
        method: "POST",
        headers: { "Content-Type": "application/json"  ,
          Authorization: `Bearer ${token}`   
         },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        showToast("Offer submitted successfully!", "green");
        onBack(); // go back to stock view
      } else {
        showToast("Failed to submit offer", "red");
      }
    } catch (error) {
      showToast("Error submitting offer", "red");
    }
  };

  return (
    <div
      style={{
        maxWidth: 550,
        margin: "auto",
        border: "1px solid green",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <h3 style={{ textAlign: "center" }}>Add New Offer</h3>
      <InputField
        label="Product name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <InputField
        label="Product description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <InputField
        label="Quantity"
        name="quantity"
        value={form.quantity}
        onChange={handleChange}
      />
      <InputField
        label="Product price"
        name="price"
        value={form.price}
        onChange={handleChange}
      />
      <StyledButton text="Submit" onClick={handleSubmit} />
      <div style={{ marginTop: 15, textAlign: "center" }}>
        <button
          onClick={onBack}
          style={{
            color: "blue",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          ← Back to stock
        </button>
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div style={{ marginBottom: 15 }}>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        style={{
          display: "block",
          width: "100%",
          padding: 10,
          marginTop: 5,
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

function StyledButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        height: 40,
        backgroundColor: "green",
        color: "white",
        borderRadius: 20,
        fontWeight: "bold",
        fontSize: 16,
        border: "none",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}
