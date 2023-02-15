import React from "react";
import FlowerCard from "../Components/LessonCard/FlowerCard";
import flowers from "../helper/data";
import "./Flowers.css";

const Flowers = () => {
  return (
    <div className="main">
      <h2>ALL ABOUT FLOWERS</h2>
      <ol className="cards">
        {flowers.map(({ id, name, scientific_name, about, img }) => (
          <FlowerCard
            id={id}
            name={name}
            scientific_name={scientific_name}
            about={about}
            img={img}
          />
        ))}
      </ol>
    </div>
  );
};

export default Flowers;
