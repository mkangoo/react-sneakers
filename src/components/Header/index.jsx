import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context'
import style from './Header.module.scss'

function Header({ onClickCart }) {
  const { cartItems } = useContext(AppContext)

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="./">
        <div className="d-flex align-center	">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex align-center">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img src="/img/icons/cart.svg" alt="Cart" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img src="/img/icons/favorites-heart.svg" alt="Favorites" />
            <span>Закладки</span>
          </Link>
        </li>
        <li className="cu-p">
          <Link to="/orders">
            <img src="/img/icons/user.svg" alt="User" />
            <span>Профиль</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
