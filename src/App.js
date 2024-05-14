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

  useEffect(() => {
    axios.get('https://6637d3bb288fedf693817325.mockapi.io/items').then(res => {
      setItems(res.data)
    })
    axios.get('https://6637d3bb288fedf693817325.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = obj => {
    axios.post('https://6637d3bb288fedf693817325.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = id => {
    axios.delete(`https://6637d3bb288fedf693817325.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }
  const onAddToFavorite = obj => {
    // axios.get('https://6637d3bb288fedf693817325.mockapi.io/favorites').then(res => {
    setFavorites(prev => [...prev, obj])
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
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
    </div>
  )
}

export default App
