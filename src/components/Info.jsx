import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppContext from '../Context/AppContext'

const Info = ({ title, image, description }) => {
  const { cartOpened } = useContext(AppContext)
  const { setCartOpened } = useContext(AppContext)
  const location = useLocation()
  return (
    <>
      <div className="cartEmpty d-flex align-center text-center justify-center flex-column flex">
        <img className="mb-20" width={100} src={image} alt="Animation" />
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        {!cartOpened && location.pathname === '/favorites' ? (
          <Link to="/">
            <button className="green-button">
              <img src="/img/icons/arrow.svg" alt="Arrow" />
              <span>Вернуться назад</span>
            </button>
          </Link>
        ) : (
          <button className="green-button" onClick={() => setCartOpened(false)}>
            <img src="/img/icons/arrow.svg" alt="Arrow" />
            <span>Вернуться назад</span>
          </button>
        )}
      </div>
    </>
  )
}

export default Info
