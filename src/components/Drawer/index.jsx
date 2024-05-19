// import styles from "./Drawer.module.scss";
import { useContext, useState } from 'react'
import AppContext from '../../context'
import Info from '../Info'
import axios from 'axios'

const delay = ms => {
  new Promise(resolve => setTimeout(resolve, ms))
}

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = useContext(AppContext)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      // const { data } = await axios.post(`https://6637d3bb288fedf693817325.mockapi.io/orders/`, { items: cartItems })
      // setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(`https://6637d3bb288fedf693817325.mockapi.io/cart/` + item.id)
        await delay(1000)
      }
    } catch (err) {
      alert('Error when creating an order!')
      console.error(err)
    }
    setIsLoading(false)
  }

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

                <button className="green-button" onClick={onClickOrder} disabled={isLoading}>
                  <span>
                    Оформить заказ <img src="/img/icons/arrow.svg" alt="Arrow" />
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <Info
              title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
              description={
                isOrderComplete
                  ? 'Ваш заказ #18 скоро будет передан курьерской доставке'
                  : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
              }
              image={isOrderComplete ? '/img/completeOrder.png' : '/img/box.png'}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Drawer
