import express from "express"
import fs from "fs"
import cors from "cors"
import { Restaurant } from "../types/types";

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json())

app.get("/", (request, response) => {
  const data = JSON.parse(fs.readFileSync("src/server/restaurants.json", "utf-8")) as Array<Restaurant>;
  response.send(data);
})

app.get("/:name", (request, response) => {
  const data = JSON.parse(fs.readFileSync("src/server/restaurants.json", "utf-8")) as Array<Restaurant>;
  const userData = request.params.name;
  const filteredData = data.filter((restaurant) => {
    return userData === restaurant.name
  })
  response.send(filteredData)
})


app.post("/", (request, response) => {
  const data = JSON.parse(fs.readFileSync("src/server/restaurants.json", "utf-8")) as Array<Restaurant>;
  const newRestaurant = request.body as Restaurant
  data.push(newRestaurant)
  fs.writeFileSync("src/server/restaurants.json", JSON.stringify(data));
  response.send(newRestaurant)
})


app.listen(port);