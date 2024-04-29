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


app.post("/", (request, response) => {
  const data = JSON.parse(fs.readFileSync("src/server/restaurants.json", "utf-8")) as Array<Restaurant>;
  //console.log(response)
  //console.log(data)
  //console.log(request)
  console.log(request.params)
  //const newData = data.push()
})


app.listen(port);