// import styles from "./Drawer.module.scss";

function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="cart-close">
          <h2>
            Корзина{" "}
            <img
              onClick={onClose}
              width={32}
              height={32}
              src="/img/icons/btn-remove.svg"
              alt="Close"
            />
          </h2>
        </div>

        <div className="items">
          {items.map((items) => (
            <div className="cart-item">
              <div
                style={{ backgroundImage: `url(${items.imgUrl})` }}
                className="cart-item__img "
              ></div>
              <div className="mr-20">
                <p className="mb-5">{items.title}</p>
                <b>{items.price} руб. </b>
              </div>
              <img
                className="remove-btn"
                width={32}
                height={32}
                src="/img/icons/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>
        <div className="cart-totalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 р.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1072 р.</b>
            </li>
          </ul>

          <button className="green-button">
            <span>
              Оформить заказ <img src="/img/icons/arrow.svg" alt="Arrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
