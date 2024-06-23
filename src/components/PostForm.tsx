import { useState } from "react"
import { postRestaurantServer } from "../utility/postRestaurantServer";

export const PostForm = () => {
  const [newRestaurant, setNewRestaurant] = useState("");
  const [rating, setRating] = useState(0)

  const buttonOnClick = () => {
    if(rating >= 1 && rating <= 5 && newRestaurant.length != 0) {
      console.log("fired", newRestaurant, rating);
      postRestaurantServer(newRestaurant, rating);
      setRating(0)
      setNewRestaurant("")
    } else {
      console.log("Please enter both a valid rating 1-5 and a restaurant")
    }
  }

  return ( 
    <>
      please enter a new restaurant : {newRestaurant}
      <br></br>
      <input value={newRestaurant} className="restaurantInput" onChange={(e) => {
        setNewRestaurant(e.target.value)
      }} name="newRestaurant"></input>
      <br></br>
      please add a rating as well : {rating}
      <br></br>
      <input value={rating} type="number" min="1" max="5" onChange={e => {
        setRating(Number(e.target.value))
      }}></input>
      <button onClick={buttonOnClick}></button>
    </>
  )

}