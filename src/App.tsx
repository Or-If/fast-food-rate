import { useEffect, useState } from 'react'
import './App.css'
import { useGetRestaurants } from './hooks/useGetRestaurants';
import { PostForm } from './components/PostForm';

function App() {
  const {getRestaurants, RestaurantData} = useGetRestaurants();

  useEffect(() => {
    getRestaurants()
  }, [])
  
  const wowRestaurant = RestaurantData?.map((r) => {
    return <p>{r.name} : {r.rating}</p>
  })

  return (
    <>
      {wowRestaurant}
      <br></br>
      <PostForm></PostForm>
    </>
  )
}

export default App
