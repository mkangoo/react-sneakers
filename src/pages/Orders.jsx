import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import Card from '../components/Card'

import AppContext from '../context'

function Orders() {
  const { onAddToFavorite, onAddToCart } = useContext(AppContext)
  // const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   ;(async () => {
  //     try {
  //       const { data } = await axios.get('https://6637d3bb288fedf693817325.mockapi.io/orders')
  //       setOrders(data.reduce((prev, obj) => [...prev, ...obj], []))
  //       setIsLoading(false)
  //     } catch (err) {
  //       alert('Error when requesting orders')
  //       console.error(err)
  //     }
  //   })()
  // }, [])
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40">
        <Link to="/">
          <img className="cu-p mr-20" src="./img/icons/arrowFavorite.svg" alt="Arrow" />
        </Link>
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {/* {(isLoading ? [...Array(12)] : orders).map((item, index) => (
        <Card key={index} onFavorite={obj => onAddToFavorite(obj)} onPlus={obj => onAddToCart(obj)} loading={isLoading} {...item} />
      ))} */}
        {(isLoading ? [...Array(8)] : []).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Orders
