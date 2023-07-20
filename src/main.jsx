import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Header/Navbar.jsx";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import DownloadCard from "./components/DownloadApp/DownloadCard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Categories />
    <DownloadCard />
    <Cards />
    <Footer />
  </React.StrictMode>
);
