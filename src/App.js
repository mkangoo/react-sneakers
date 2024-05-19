import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Drawer from './components/Drawer'
import Header from './components/Header'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'
import Home from './pages/Home'

import AppContext from './context'

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

  const onAddToCart = async obj => {
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        await axios.delete(`https://6637d3bb288fedf693817325.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        await axios.post('https://6637d3bb288fedf693817325.mockapi.io/cart', obj)
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
  const onAddToFavorite = obj => {
    try {
      if (favorites.find(favoriteObj => favoriteObj.id === obj.id)) {
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        setFavorites(prev => [...prev, obj])
      }
    } catch (err) {
      alert('Failed to add to favorites')
    }
  }

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value)
  }
  //TODO: refactor function
  const isItemAdded = id => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  const isFavoriteAdded = id => {
    return favorites.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{ items, cartItems, favorites, isItemAdded, onAddToCart, onAddToFavorite, isFavoriteAdded, setCartOpened, setCartItems }}
    >
      <div className="wrapper clear">
        <Header onClickCart={() => setCartOpened(true)} />
        <Drawer onClose={() => setCartOpened(false)} onRemove={onRemoveItem} items={cartItems} opened={cartOpened} />
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
          <Route path="/favorites" exact element={<Favorites onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} />} />
          <Route path="/orders" exact element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
