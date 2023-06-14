import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row ">
      <h1 className="flex flex-row font-bold">Header</h1>
      <ul className="flex">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
