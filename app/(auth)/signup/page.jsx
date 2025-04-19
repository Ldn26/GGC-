"use client";
import Link from "next/link";
import React, { useState } from "react";
import Toastify from "toastify-js";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+ routing
// import { useRouter } from "next/router";
import "toastify-js/src/toastify.css"; // Import the CSS file for Toastify
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    servicetype: "",
    phonenumber: "",
    tradenumber: "",
    countryCode: "+213", 
    confirmPassword: "",
  });

  const router  = useRouter();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  



const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    Toastify({
      text: "Passwords do not match",
      duration: 3000,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #FF0000, #FF0000)",
      },
    }).showToast();
    return;
  }
  const phone = formData.phonenumber.replace(/\D/g, ""); // Keep only digits

  const body = {
    name: formData.name, // company name
    email: formData.email,
    password: formData.password,
    servicetype: formData.servicetype, // Added servicetype field
    phonenumber: Number(phone),
    tradenumber: Number(formData.tradenumber),
  };

  console.log(body);
  try {
    const res = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Signup failed");
    }

    console.log("Success:", data);

Toastify({

      text: "Account created successfully",
      duration: 3000,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      // green
      style: {
        background: "linear-gradient(to right, #4caf50, #4caf50)",
      },
    }).showToast();



    // Redirect based on service type
    const servicetype = data?.user?.servicetype;
    console.log("service types ")
    console.log(servicetype);
          router.push("/login");
    



  } catch (error) {
    console.error("Error:", error);
    console.log(error.message);
    console.log(body);
    Toastify({
      text: error.message,
      duration: 1000,
      // newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #FF0000, #FF0000)",
      },
      // onClick: function () {},
    }).showToast();
  }
};


  
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Sign Up</h2>

        <form style={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="accountType">Account Type</label>
          <select
            id="servicetype"
            required
            value={formData.accountType}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="waste-generator">Waste Generator</option>
            <option value="recycling-center">Recycling Center</option>
            <option value="industrial">Industrial</option>
          </select>

          <input
            id="name"
            type="text"
            placeholder="Company Name"
            required
            value={formData.companyName}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            id="tradenumber"
            type="text"
            placeholder="Trade Register Number"
            required
            value={formData.tradenumber}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <div style={styles.phoneGroup}>
            <label htmlFor="phone">Phone Number</label>
            <div style={styles.phoneWrapper}>
              <select
                id="countryCode"
                required
                value={formData.countryCode}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="+213">+213 🇩🇿 Algeria</option>
                <option value="+1">+1 🇨🇦 Canada</option>
                <option value="+33">+33 🇫🇷 France</option>
                <option value="+20">+20 🇪🇬 Egypt</option>
                <option value="+91">+91 🇮🇳 India</option>
                <option value="+44">+44 🇬🇧 UK</option>
                <option value="+49">+49 🇩🇪 Germany</option>
                <option value="+86">+86 🇨🇳 China</option>
                <option value="+81">+81 🇯🇵 Japan</option>
                <option value="+966">+966 🇸🇦 Saudi Arabia</option>
              </select>
              <input
                id="phonenumber"
                type="tel"
                placeholder="Phone number"
                required
                value={formData.phonenumber}
                onChange={handleChange}
                style={styles.inputFlex}
              />
            </div>
          </div>

          <input
            id="password"
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Create Account
          </button>

          <div className="flex mt-4 gap-5 ">
            {" "}
            <h2>Already have an account</h2>
            <Link href="/login">
              <p className="text-[#1E5128]">Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    background: "#eaf7ea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 88px)",
    margin: 0,
  },
  container: {
    background: "white",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0, 128, 0, 0.2)",
    width: "550px",
  },
  heading: {
    textAlign: "center",
    color: "#2e7d32",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #a5d6a7",
    borderRadius: "6px",
  },
  inputFlex: {
    padding: "10px",
    border: "1px solid #a5d6a7",
    borderRadius: "6px",
    flexGrow: 1,
  },
  select: {
    padding: "10px",
    border: "1px solid #a5d6a7",
    borderRadius: "6px",
    width: "100px",
    minWidth: "80px",
    flexShrink: 0,
  },
  phoneGroup: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0",
  },
  phoneWrapper: {
    display: "flex",
    gap: "8px",
  },
  button: {
    padding: "10px",
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default SignUp;
