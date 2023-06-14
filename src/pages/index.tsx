import React from "react";
import Header from "@/components/header/header";
import "../styles/globals.css";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <p className="text-4xl font-bold mt-8">Travel Tabi</p>
      <Header />
      <h1 className="">Hello world!</h1>
    </div>
  );
};

export default HomePage;
