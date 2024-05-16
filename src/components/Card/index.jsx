import { useState } from 'react'
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader'

function Card({ title, price, imgUrl, id, onFavorite, onPlus, favorited = false, added = false, loading = false }) {
  const [isAdded, setIsAdded] = useState(added)
  const [isFavorites, setIsFavorites] = useState(favorited)

  const onClickPlus = () => {
    onPlus({ title, price, imgUrl, id })
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onFavorite({ title, price, imgUrl, id })
    setIsFavorites(!isFavorites)
  }
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader speed={2} width={155} height={255} viewBox="0 0 165 265" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="235" rx="8" ry="8" width="80" height="25" />
          <rect x="124" y="230" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              className={styles.btnUncliked}
              onClick={onClickFavorite}
              src={isFavorites ? '/img/icons/heart-liked.svg' : '/img/icons/heart-unliked.svg'}
              alt="Favorites"
            />
          </div>

          <img width="100%" height={135} src={imgUrl} alt="Sneakers" />
          <p>{title}</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>

            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isAdded ? './img/icons/btn-checked.svg' : './img/icons/btn-plus.svg'}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Card
