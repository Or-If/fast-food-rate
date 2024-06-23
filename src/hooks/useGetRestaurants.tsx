import { useState } from "react"
import { Restaurant } from "../types/types";


export const useGetRestaurants = () => {
  const [RestaurantData, setRestaurantData] = useState<Array<Restaurant>>()
  const api = "http://localhost:3000/";


  const getRestaurants = async () => {
    const response = await fetch(api)
    const data = await response.json() as Array<Restaurant>
    console.log(data)
    setRestaurantData(data)
  }

  return { RestaurantData, getRestaurants }
} 