import React from "react";
import step1 from "../../assets/icons/steps/01.svg";
import step2 from "../../assets/icons/steps/02.svg";
import step3 from "../../assets/icons/steps/03.png";
// import step4 from "../../assets/icons/steps/04.svg";
// import step5 from "../../assets/icons/steps/05.svg";
import "./steps.scss";

import axios from "axios";

const Steps = () => {
  const handleClick = async () => {
    const { data } = await axios.get("http://localhost:8000/api/cars");
    console.log("data", data);
  };

  return (
    <div className="steps">
      <div className="steps__container _container">
        <div onClick={handleClick} className="steps__title _title">
          Как мы работаем?
        </div>

        <div className="steps__body">
          <div className="steps__row">
            <div className="steps__column">
              <div className="steps__item item-steps">
                <div className="item-steps__counter">1</div>
                <div className="item-steps__img">
                  <img src={step1} alt="" />
                </div>
                <div className="item-steps__body">
                  <div className="item-steps__title">Заказываете в 3 клика</div>
                  <div className="item-steps__text">
                    Вы оформляете заказ через личный кабинет, оплачиваете любым
                    удобным способом
                  </div>
                </div>
              </div>
            </div>
            <div className="steps__column">
              <div className="steps__item item-steps">
                <div className="item-steps__img">
                  <img src={step2} alt="" />
                </div>
                <div className="item-steps__body">
                  <div className="item-steps__title">Отгружаем за 1 день</div>
                  <div className="item-steps__text">
                    Если товар в наличии, то отгружаем Вам в течение 1 дня после
                    оплаты.
                  </div>
                </div>
              </div>
            </div>
            <div className="steps__column">
              <div className="steps__item item-steps">
                <div className="item-steps__img">
                  <img src={step3} alt="" />
                </div>
                <div className="item-steps__body">
                  <div className="item-steps__title">
                    Предпродажная проверка
                  </div>
                  <div className="item-steps__text">
                    Проверяем товар в Вашем присутствии или онлайн по видеосвязи
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="steps__row">
            <div className="steps__column">
              <div className="steps__item item-steps">
                <div className="item-steps__img">
                  <img src={step3} alt="" />
                </div>
                <div className="item-steps__body">
                  <div className="item-steps__title">
                    Предпродажная проверка
                  </div>
                  <div className="item-steps__text">
                    Проверяем товар в Вашем присутствии или онлайн по видеосвязи
                  </div>
                </div>
              </div>
            </div>
            <div className="steps__column">
              <div className="steps__item item-steps">
                <div className="item-steps__img">
                  <img src={step3} alt="" />
                </div>
                <div className="item-steps__body">
                  <div className="item-steps__title">
                    Предпродажная проверка
                  </div>
                  <div className="item-steps__text">
                    Проверяем товар в Вашем присутствии или онлайн по видеосвязи
                  </div>
                </div>
              </div>
            </div>
            <div className="steps__column">
              <div className="steps__item item-steps">
                <div className="item-steps__img">
                  <img src={step3} alt="" />
                </div>
                <div className="item-steps__body">
                  <div className="item-steps__title">
                    Предпродажная проверка
                  </div>
                  <div className="item-steps__text">
                    Проверяем товар в Вашем присутствии или онлайн по видеосвязи
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
