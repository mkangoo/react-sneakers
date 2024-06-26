import Card from '../components/Card'

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart, isLoading }) {
  const renderItems = () => {
    const filteredItem = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (isLoading ? [...Array(12)] : filteredItem).map((item, index) => (
      <Card key={index} onFavorite={obj => onAddToFavorite(obj)} onPlus={obj => onAddToCart(obj)} loading={isLoading} {...item} />
    ))
  }

  return (
    <div className="content p-40">
      <div className="slider slider-wrapper">
        <div className="slider-content">
          <div className="slider-content__info">
            <img src="./img/adidas.png" width={100} height={40} alt="Adidas" />
            <span>Stan Smith,</span>
            <h3>Forever!</h3>
            <button className="green-button ">Купить</button>
          </div>
        </div>
        <div className="slider-frog__img">
          <img src="./img/frog.png" width={642} height={300} alt="Frog" />
        </div>
      </div>
      
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/icons/search.svg" alt="Search" />
          {searchValue && (
            <img
              className="clear"
              onClick={() => setSearchValue('')}
              width={20}
              height={20}
              src="/img/icons/btn-remove.svg"
              alt="Clear input"
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} maxLength={15} type="text" placeholder="Поиск ..." />
        </div>
      </div>

      <div className="d-flex flex-wrap ">{renderItems()}</div>
    </div>
  )
}

export default Home
