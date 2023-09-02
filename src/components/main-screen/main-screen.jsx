import React from "react";
import "./main-screen.scss";
import mainscreenBg from "../../assets/img/mainscreen.jpg";
import UseMatchMedia from "../../core/hooks/useMatchMedia";
import BurgerMenu from "../burger-menu/burger-menu";

const navListPartOne = [
  {
    link: "contacts",
    name: "Контакты",
  },
  {
    link: "about",
    name: "О нас",
  },
];
const navListPartTwo = [
  {
    link: "search",
    name: "Поиск",
  },
  {
    link: "comments",
    name: "Отзывы",
  },
];

const MainScreen = () => {
  const { isMobile } = UseMatchMedia();

  return (
    <div className="main-screen">
      <div className="main-screen__bg">
        <img src={mainscreenBg} alt="" />
      </div>
      <div className="main-screen__container _container">
        <div className="main-screen__body">
          <div className="main-screen__top top-main-screen">
            <div className="top-main-screen__row">
              {isMobile ? (
                <>
                  <BurgerMenu
                    navigate={[...navListPartOne, ...navListPartTwo]}
                  />
                  <div className="top-main-screen__logo logo">
                    <div className="logo-top">trading</div>
                    <div className="logo-bottom">car</div>
                  </div>
                </>
              ) : (
                <>
                  <nav className="top-main-screen__nav nav-main-screen">
                    <ul className="nav-main-screen__list">
                      {navListPartOne.map(({ link, name }) => (
                        <li key={`key_${link}`} className="nav-main-screen__li">
                          <a to={link} className="nav-main-screen__link">
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="top-main-screen__logo logo">
                    <div className="logo-top">trading</div>
                    <div className="logo-bottom">car</div>
                  </div>
                  <nav className="top-main-screen__nav nav-main-screen">
                    <ul className="nav-main-screen__list">
                      {navListPartTwo.map(({ link, name }) => (
                        <li key={`key_${link}`} className="nav-main-screen__li">
                          <a to={link} className="nav-main-screen__link">
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </>
              )}
            </div>
          </div>
          <div className="main-screen__actions actions-main-screen">
            <div className="actions-main-screen__item">Каталог</div>
            <div className="actions-main-screen__item">
              Рассчитать стоимость
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
