// import styles from "./Drawer.module.scss";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="cart-close">
          <h2>
            Корзина
            <img onClick={onClose} width={32} height={32} src="/img/icons/btn-remove.svg" alt="Close" />
          </h2>
          {items.length > 0 ? (
            <div className="wrapperCart">
              <div className="items">
                {items.map(item => (
                  <div key={item.id} className="cart-item">
                    <div style={{ backgroundImage: `url(${item.imgUrl})` }} className="cart-item__img "></div>
                    <div className="mr-20">
                      <p className="mb-5">{item.title}</p>
                      <b>{item.price} руб. </b>
                    </div>
                    <img
                      className="remove-btn"
                      width={32}
                      height={32}
                      src="/img/icons/btn-remove.svg"
                      alt="Remove"
                      onClick={() => onRemove(item.id)}
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
          ) : (
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className="mb-20" width={120} height={120} src="/img/box.png" alt="Box" />
              <h2>Корзина пустая</h2>
              <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button className="green-button" onClick={onClose}>
                <img src="/img/icons/arrow.svg" alt="Arrow" />
                <span>Вернуться назад</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Drawer
