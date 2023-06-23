import React from "react";
import Header from "@/components/header/header";
import Suggestion from "@/components/suggestion/suggestion";
import "../styles/globals.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="">
        <Header />
        <Suggestion />
      </div>
    </div>
  );
};

export default HomePage;
