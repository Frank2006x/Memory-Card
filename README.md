# Pokémon Memory Match

**Pokémon Memory Match** is a fun and interactive memory game built with React and Vite. The goal of the game is to click on Pokémon images without clicking the same one twice. Test your memory and aim for the highest score!

---

## 🔥 Features

- **Dynamic Pokémon Cards** – Pokémon data is fetched from the [PokéAPI](https://pokeapi.co/) and displayed dynamically.
- **Score Tracking** – Tracks your current score and best score using local storage.
- **Game Over Popup** – Displays a popup when the game ends, allowing you to restart.
- **Smooth Animations** – Includes hover effects and animations for a polished user experience.

---

## 🛠️ Technologies Used

- **React** – For building the user interface.
- **Vite** – For fast development and build tooling.
- **CSS** – For styling and animations.
- **PokéAPI** – For fetching Pokémon data.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm 

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Memory-Card
   ```

2. Install dependencies:
   ```bash
   npm install
  
   ```

3. Start the development server:
   ```bash
   npm run dev

   ```

4. Open your browser and navigate to:  
   [http://localhost:5173](http://localhost:5173)

---

## 📦 Build for Production

To build the project for production, run:

```bash
npm run build
```

---

## 📁 Project Structure

```
Memory-Card/
├── public/             # Static assets
├── src/                # Source code
│   ├── components/     # React components
│   ├── service/        # Data fetching logic
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│   ├── index.css       # Global styles
├── .gitignore          # Git ignore file
├── package.json        # Project configuration
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

---

## 🎮 How to Play

- Click on any Pokémon card to earn points.
- Avoid clicking the same Pokémon twice, or the game will end.
- Try to beat your best score!

---

## 🙌 Credits

- Pokémon data provided by [PokéAPI](https://pokeapi.co/)
- Sprites sourced from the [Pokémon Sprites Repository](https://github.com/PokeAPI/sprites)

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.
