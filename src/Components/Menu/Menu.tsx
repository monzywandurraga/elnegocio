"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import "./Menu.css";
import { FaBars } from "react-icons/fa";

interface MenuProps {
  title: string;
}

const Menu: React.FC<MenuProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  console.log("activo", activeIndex);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (
    index: number,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    setActiveIndex(index);
  };

  return (
    <div className="menu-container">
      <div className="menu">
        <h1 className="title">{title}</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <ul className={isOpen ? "menu-items active" : "menu-items"}>
          <li className={activeIndex === 0 ? "selected" : ""}>
            <a
              className={`menu-link ${activeIndex === 0 ? "active" : ""}`}
              href="/"
              onClick={(event) => handleItemClick(0, event)} // Pasa el evento como argumento
            >
              Home
            </a>
          </li>
          <li className={activeIndex === 1 ? "selected" : ""}>
            <a
              className={`menu-link ${activeIndex === 1 ? "active" : ""}`}
              href="/quienes-somos"
              onClick={(event) => handleItemClick(1, event)} // Pasa el evento como argumento
            >
              Quiénes somos
            </a>
          </li>
          <li className={activeIndex === 2 ? "selected" : ""}>
            <a
              className={`menu-link ${activeIndex === 2 ? "active" : ""}`}
              href="/nuestros-columnistas"
              onClick={(event) => handleItemClick(2, event)} // Pasa el evento como argumento
            >
              Nuestros Columnistas
            </a>
          </li>
          <li className={activeIndex === 3 ? "selected" : ""}>
            <a
              className={`menu-link ${activeIndex === 3 ? "active" : ""}`}
              href="/contactanos"
              onClick={(event) => handleItemClick(3, event)} // Pasa el evento como argumento
            >
              Contáctanos
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
