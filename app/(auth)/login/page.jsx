"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"; // Import the CSS file for Toastify
const SignIn = () => {
  const router = useRouter(); // Initialize the router for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       const response = await axios.post(
         "http://localhost:5000/api/users/login",
         {
           email,
           password,
         }
       );

       const user = response.data.user;
       const userType = user?.servicetype?.toLowerCase();

       if (userType) {
         localStorage.setItem("token", response.data.accessToken);
           // Navigate based on user type
         if (userType === "generateur") {
           router.push("/Dashindus");
         } else if (userType === "recycling-center") {
            router.push("/dashRecycle");
         } else if (userType === "industrial") {
           router.push("/dashindustrial");
         }
       }
     } catch (error) {
       Toastify({
         text: error.response?.data.message || "Login failed",
         duration: 3000,  
         gravity: "top",
         position: "center",
         stopOnFocus: true,
         style: {
           background: "linear-gradient(to right, #FF0000, #FF0000)",
         },
       }).showToast();
       console.log(error.response?.data.message || "Login failed");
     }
   };
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Log In </h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Log In
          </button>

          <div className="flex mt-4 gap-5 ">
            {" "}
            <h2>Doen't have an account</h2>
            <Link href="/signup">
              <p className="text-[#1E5128]">Sign up</p>
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
  button: {
    padding: "10px",
    background: "#1E5128",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default SignIn;
