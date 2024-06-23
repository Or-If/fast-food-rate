import { useEffect, useState } from "react";
import { Restaurant } from "../types/types";
import { getIndividualRestaurant } from "../utility/getIndividualRestaurant";

export const SearchForm = () => {
  const [restaurantToSearch, setRestaurantToSearch] = useState("");
  const [restaurantData, setRestaurantData] = useState<Restaurant[]>();

  const buttonOnClick = async () => {
    const newData = await getIndividualRestaurant(restaurantToSearch)
    setRestaurantData(newData)
    console.log(restaurantData)
  }
  
  return ( 
    <>
      please enter a restaurant to search for : {restaurantToSearch}
      <br></br>
      <input value={restaurantToSearch} className="restaurantInput" onChange={(e) => {setRestaurantToSearch(e.target.value)}} name="newRestaurant"></input>
      <button onClick={buttonOnClick}></button>
      <hr></hr>
      {restaurantData?.map(r => {return <div key={r.name}>
        <p>{r.name}</p>
        <p>{r?.rating}</p>
      </div>})}
    </>
  )
}