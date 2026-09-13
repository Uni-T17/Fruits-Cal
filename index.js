import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fruitAPI = "https://www.fruityvice.com/api/fruit";

const name = "Kit";

// Get all fruits
app.get("/", async (req, res) => {
  const fruitsResponse = await fetch(`${fruitAPI}/all`);
  const fruits = await fruitsResponse.json();
  res.render("index", { name, fruits });
});

// Get fruits cal by name
app.get("/fruits/:name", async (req, res) => {
  const fruitName = req.params.name;
  try {
    const response = await fetch(`${fruitAPI}/${fruitName}`);
    if (!response.ok) {
      throw new Error("Fruit not found");
    }
    const fruitData = await response.json();
    res.render("result", {
      name: fruitData.name,
      carbohydrates: fruitData.nutritions.carbohydrates,
      calories: fruitData.nutritions.calories,
      protein: fruitData.nutritions.protein,
      fat: fruitData.nutritions.fat,
      sugar: fruitData.nutritions.sugar,
    });
  } catch (error) {
    res.status(404).send("Fruit not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
