# Fruits-Cal 🍉

A simple Express + EJS web app that lists fruits and their nutrition facts, powered by the [Fruityvice API](https://www.fruityvice.com/).

## Features

- Browse a grid of all available fruits
- Click into a fruit to see its calories, carbs, protein, fat, and sugar
- Clean, responsive UI styled with plain CSS

## Tech Stack

- [Express](https://expressjs.com/) 5
- [EJS](https://ejs.co/) templating
- [Fruityvice API](https://www.fruityvice.com/) for fruit and nutrition data

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)

### Installation

```bash
npm install
```

### Running the app

```bash
npm start
```

For development with auto-reload on file changes:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
.
├── index.js              # Express server and routes
├── views/
│   ├── index.ejs         # Fruit list page
│   └── result.ejs        # Fruit detail page
└── public/
    └── styles/
        └── main.css      # App styling
```

## Routes

| Method | Path            | Description                          |
| ------ | --------------- | ------------------------------------ |
| GET    | `/`             | Displays the list of all fruits      |
| GET    | `/fruits/:name` | Displays nutrition facts for a fruit |
