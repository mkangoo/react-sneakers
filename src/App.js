import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Drawer from './components/Drawer'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

import './index.scss'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, itemsResponse] = await Promise.all([
          axios.get('https://6637d3bb288fedf693817325.mockapi.io/cart'),
          axios.get('https://6637d3bb288fedf693817325.mockapi.io/items'),
        ])
        setIsLoading(false)
        setCartItems(cartResponse.data)
        setItems(itemsResponse.data)
      } catch (err) {
        alert('Error when requesting data')
        console.error(err)
      }
    }
    fetchData()
  }, [])

  const onAddToCart = obj => {
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://6637d3bb288fedf693817325.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        axios.post('https://6637d3bb288fedf693817325.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
      }
    } catch (error) {}
  }

  const onRemoveItem = id => {
    try {
      axios.delete(`https://6637d3bb288fedf693817325.mockapi.io/cart/${id}`)
      setCartItems(prev => prev.filter(item => item.id !== id))
    } catch (err) {
      alert('Error when deleting from basket')
      console.error(err)
    }
  }
  const onAddToFavorite = async obj => {
    try {
      if (favorites.find(favoriteObj => favoriteObj.id === obj.id)) {
        // axios.delete(`https://6637d3bb288fedf693817325.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        // const { data } = await axios.get('https://6637d3bb288fedf693817325.mockapi.io/favorites')
        setFavorites(prev => [...prev, obj])
      }
    } catch (err) {
      alert('Не удалось добавить в избранное')
    }
  }

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value)
  }
  return (
    <div className="wrapper clear">
      <Header onClickCart={() => setCartOpened(true)} />
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} onRemove={onRemoveItem} items={cartItems} />}
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        />
        <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} />} />
      </Routes>
    </div>
  )
}

export default App
