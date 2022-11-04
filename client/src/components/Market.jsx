import { useEffect, useState } from 'react'
import { marketCoinsAPI } from '../utils/constant'

const TableItem = ({ item }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const displayPercent = (percent) => `${percent.toFixed(2)}%`
  return (
    <tr className="white-glassmorphism text-lg text-yellow-400">
      <th scope="row" className="py-4 px-6 font-medium">
        {item?.name} - {item?.symbol.toUpperCase()}
      </th>
      <img src={item.image} alt="logo" width={25} />
      <td className="py-4 px-6">{formatter.format(item?.current_price)}</td>
      <td className="py-4 px-6">{formatter.format(item?.market_cap)}</td>
      <td className="py-4 px-6">
        {displayPercent(item?.price_change_percentage_24h)}
      </td>
      <td className="py-4 px-6">{formatter.format(item?.high_24h)}</td>
      <td className="py-4 px-6">{formatter.format(item?.low_24h)}</td>
    </tr>
  )
}

const Market = () => {
  const [coinData, setCoinData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(marketCoinsAPI)
      const responseJson = await response.json()

      setCoinData(responseJson)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div class=" w-screen h-screen gradient-bg-welcome">
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr className="eth-card .white-glassmorphism">
              <th scope="col" class="py-3 px-6 rounded-l-lg">
                Name
              </th>
              <th scope="col" class="py-3 px-6"></th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
              <th scope="col" class="py-3 px-6">
                Market Cap
              </th>
              <th scope="col" class="py-3 px-6">
                Change Percentage 24h
              </th>
              <th scope="col" class="py-3 px-6">
                High 24h
              </th>
              <th scope="col" class="py-3 px-6 rounded-r-lg">
                Low 24h
              </th>
            </tr>
          </thead>
          <tbody>
            {coinData.map((item) => (
              <TableItem item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Market
