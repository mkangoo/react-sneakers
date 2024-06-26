import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Drawer from './components/Drawer'
import Header from './components/Header'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'
import Home from './pages/Home'

import AppContext from './Context/AppContext'

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
      } catch (error) {
        alert('Error when requesting data')
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const onAddToCart = async obj => {
    try {
      const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://6637d3bb288fedf693817325.mockapi.io/cart/${findItem.id}`)
      } else {
        setCartItems(prev => [...prev, obj])
        const { data } = await axios.post('https://6637d3bb288fedf693817325.mockapi.io/cart', obj)
        setCartItems(prev =>
          prev.map(item => {
            if (parent.id === data.parentId) {
              return {
                ...item,
                id: data.id,
              }
            }
            return item
          }),
        )
      }
    } catch (error) {
      alert('Error adding to cart')
      console.error(error)
    }
  }

  const onRemoveItem = id => {
    try {
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
      axios.delete(`https://6637d3bb288fedf693817325.mockapi.io/cart/${id}`)
    } catch (error) {
      alert('Error when deleting from basket')
      console.error(error)
    }
  }

  const onAddToFavorite = obj => {
    try {
      if (favorites.find(favoriteObj => favoriteObj.id === obj.id)) {
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        setFavorites(prev => [...prev, obj])
      }
    } catch (error) {
      alert('Failed to add to favorites')
      console.error(error)
    }
  }

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = id => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id))
  }

  const isFavoriteAdded = id => {
    return favorites.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        cartOpened,
        isItemAdded,
        onAddToCart,
        onAddToFavorite,
        isFavoriteAdded,
        setCartOpened,
        setCartItems,
      }}
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
