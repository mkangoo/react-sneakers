import { useContext } from 'react'
import { Link } from 'react-router-dom'

import Card from '../components/Card'
import Info from '../components/Info'

import AppContext from '../context'

function Favorites() {
  const { favorites, onAddToCart, onAddToFavorite } = useContext(AppContext)
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40">
        <Link to="/">
          <img className="cu-p mr-20" src="./img/icons/arrowFavorite.svg" alt="Arrow" />
        </Link>
        <h1>Мои закладки</h1>
      </div>

      {favorites.length > 0 ? (
        <div className=" d-flex flex-wrap ">
          {favorites.map(item => (
            <Card key={item.id} favorited={true} onFavorite={onAddToFavorite} onPlus={onAddToCart} {...item} />
          ))}
        </div>
      ) : (
        <Info title="Закладок нет" description="Вы ничего не добавили в закладки" image="/img/smileFavorite.png" />
      )}
    </div>
  )
}

export default Favorites
