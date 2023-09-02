import React from "react";
import axios from "axios";
import carsBrands from "../initialData/carsBrands.json";
import carsModels from "../initialData/carsModels.js";

const Way = () => {
  const carsBrandsName = Object.keys(carsBrands);

  const newArray = {};
  carsModels.forEach((car) => {
    if (car.slug === carsBrandsName.find((b) => b === car.slug)) {
      const arr = [];
      for (const brand of carsBrands[car.slug]) {
        for (const { id, slug } of car.models) {
          if (brand.value === String(id)) {
            arr.push({ ...brand, slug: slug });
          }
        }
      }
      newArray[car.slug] = arr;
    }
  });

  const requers = async () => {
    const { data } = await axios.get("http://localhost:8000/api/cars");
    console.log(JSON.stringify(data));
  };
  const hanldeClick = () => {
    requers();
  };
  return (
    <div onClick={hanldeClick} className="way">
      CLICK!
    </div>
  );
};

export default Way;
