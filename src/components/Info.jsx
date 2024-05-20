import React, { useContext } from 'react'
import AppContext from '../context'

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext)
  return (
    <>
      <div className="cartEmpty d-flex align-center text-center justify-center flex-column flex">
        <img className="mb-20" width={100} src={image} alt="Animation" />
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>

        <button className="green-button" onClick={() => setCartOpened(false)}>
          <img src="/img/icons/arrow.svg" alt="Arrow" />
          <span>Вернуться назад</span>
        </button>
      </div>
    </>
  )
}

export default Info
