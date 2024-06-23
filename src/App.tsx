import { useEffect, useState } from 'react'
import './App.css'
import { useGetRestaurants } from './hooks/useGetRestaurants';
import { PostForm } from './components/PostForm';
import { SearchForm } from './components/SearchForm';

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
      <hr></hr>
      <PostForm></PostForm>
      <hr></hr>
      <SearchForm></SearchForm>
    </>
  )
}

export default App
