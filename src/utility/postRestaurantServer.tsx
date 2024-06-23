import { Restaurant } from "../types/types"

export const postRestaurantServer = async (newName: string, newRating: number) => {
  const params = {
    name: newName,
    rating: newRating
  }

  const postOptions = {
    method: "POST",
    body: JSON.stringify(params as Restaurant),
    headers: {
      "Content-Type": "application/json"
    }
  }

  try {
    const response = await fetch("http://localhost:3000/", postOptions)
    const data = await response.json()
    console.log(data)
  }
  catch (error) {
    console.log(error)
  }

}