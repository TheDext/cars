import React, { useState } from "react";
import "./burger-menu.scss";

const BurgerMenu = ({ navigate }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`burgerMenu ${isActive ? "_active" : ""}`}
      >
        <span className="burgerMenu__line"></span>
      </div>
      {isActive && (
        <nav className="navBody">
          <ul className="navBody__list">
            {navigate.map(({ name, link }) => (
              <li key={`key_${link}`} className="navBody__li">
                <a href={link} className="navBody__link">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default BurgerMenu;
