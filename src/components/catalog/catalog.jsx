import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./catalog.scss";
import { getCarsBrands } from "../../store/cars";
import SelectField from "../common/form/selectField.jsx";

const Catalog = () => {
  const [country, setCountry] = useState("kr");
  const [data, setData] = useState({
    brand: "",
    model: "",
    year: "",
    priceFrom: "",
    priceTo: "",
  });

  const countryEnum = [
    {
      label: "Киргизия",
      value: "kg",
    },
    {
      label: "Корея",
      value: "kr",
    },
  ];

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleCountryChange = (currentCountry) => {
    if (currentCountry !== country) {
      setCountry((prevState) => (prevState === "kg" ? "kr" : "kg"));
    }
  };

  const cars = useSelector(getCarsBrands());

  const models = (car) => {
    const modelsArray = cars[car];

    return modelsArray.map((model) => ({
      label: model.text,
      value: model.slug,
    }));
  };

  const brands = Object.keys(cars).map((car) => ({
    label: car,
    value: car,
  }));

  return (
    <div className={`catalog _${country}`}>
      <div className="catalog__container _container">
        <div className="catalog__title _title">Выберите авто</div>
        <div className="catalog__body">
          <div className="catalog__country country-catalog">
            {countryEnum.map(({ value, label }) => (
              <div
                onClick={() => handleCountryChange(value)}
                className={`country-catalog__item ${
                  value === country ? "_active" : ""
                }`}
              >
                {label}
              </div>
            ))}
          </div>
          <form className="catalog__filter">
            <SelectField
              label="Марка"
              onChange={handleChange}
              options={brands}
              name="brand"
              // value={data.brand}
              placeholder="Выберите марку"
              // error={errors.brand}
            />
            {data.brand && (
              <SelectField
                label="Модель"
                onChange={handleChange}
                options={models(data.brand)}
                name="model"
                // value={data.model}
                placeholder="Выберите модель"
                // error={errors.brand}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
