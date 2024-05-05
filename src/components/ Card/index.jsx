import { useEffect, useState } from "react";
import styles from "./Card.module.scss";

function Card({ title, price, imgUrl }) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    console.log("Pop");
  }, [isAdded]);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          className={styles.btnUncliked}
          src="/img/icons/heart-unliked.svg"
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imgUrl} alt="Sneakers" />
      <p>{title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={
            isAdded ? "./img/icons/btn-checked.svg" : "./img/icons/btn-plus.svg"
          }
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
