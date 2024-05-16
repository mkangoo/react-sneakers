import Card from '../components/Card'
import { Link } from 'react-router-dom'

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40">
        <Link to="/">
          <img className="cu-p mr-20" src="./img/icons/arrowFavorite.svg" alt="Arrow" />
        </Link>
        <h1>Мои закладки</h1>
      </div>

      {items.length > 0 ? (
        <div className=" d-flex flex-wrap ">
          {items.map(item => (
            <Card key={item.id} favorited={true} onFavorite={onAddToFavorite} {...item} />
          ))}
        </div>
      ) : (
        <div className="favorites">
          <img src="./img/smileFavorite.png" width={70} height={70} alt="Smile" />
          <div>
            <h3>Закладок нет</h3>
            <p>Вы ничего не добавили в закладки</p>
          </div>
          <Link to="/">
            <button className="green-button">Вернуться назад</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Favorites
