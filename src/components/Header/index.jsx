import { Link } from 'react-router-dom'
import style from './Header.module.scss'

function Header({ onClickCart }) {
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
          <span>1205 р.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="./favorites">
            <img src="/img/icons/favorites-heart.svg" alt="Favorites" />
            <span>Закладки</span>
          </Link>
        </li>
        <li className="cu-p">
          <img src="/img/icons/user.svg" alt="User" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  )
}

export default Header
