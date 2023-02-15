import React from "react";
import styles from "./flower.module.css";

const FlowerCard = ({ id, name, img, scientific_name, about }) => {
  return (
    <li className={styles.card} key={id}>
      <img src={img} alt="" />
      <div>
        <h3>{name}</h3>
        <h5>{scientific_name}</h5>
      </div>

      <p>{about}</p>
    </li>
  );
};

export default FlowerCard;
