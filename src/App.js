import "./index.scss";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2 className="cart-close">
            Корзина{" "}
            <img
              width={32}
              height={32}
              src="/img/icons/btn-remove.svg"
              alt="Remove"
            />
          </h2>

          <div className="items">
            <div className="cart-item">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cart-item__img "
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 р. </b>
              </div>
              <img
                className="remove-btn"
                width={32}
                height={32}
                src="/img/icons/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cart-item">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cart-item__img "
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 р. </b>
              </div>
              <img
                className="remove-btn"
                width={32}
                height={32}
                src="/img/icons/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cart-item">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cart-item__img "
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 р. </b>
              </div>
              <img
                className="remove-btn"
                width={32}
                height={32}
                src="/img/icons/btn-remove.svg"
                alt="Remove"
              />
            </div>
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

      {/* HEADER */}
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center	">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/icons/cart.svg" alt="" />
            <span>1205 р.</span>
          </li>
          <li>
            <img src="/img/icons/user.svg" alt="" />
            <span>Профиль</span>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/icons/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="card-favorite">
              <img src="/img/icons/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="/img/icons/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="/img/icons/plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>{" "}
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.png" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="/img/icons/plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/5.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="/img/icons/plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
