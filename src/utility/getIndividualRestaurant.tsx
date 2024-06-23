
export const getIndividualRestaurant = async (restaurantToSearch: string) => {
  try {
    const response = await fetch(("http://localhost:3000/" + restaurantToSearch))
    const data = await response.json()
    console.log(data)
    return data;
  }
  catch (error) {
    console.log(error)
  }
}