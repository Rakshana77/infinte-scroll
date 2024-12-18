# React + Vite
# Infinite Scroll with Rick and Morty Characters 🌌

This React application implements an infinite scroll feature to fetch and display characters from the [Rick and Morty API](https://rickandmortyapi.com/). As you scroll down the page, more character data is automatically loaded.

## Features ✨
- **Infinite Scroll**: Automatically loads more characters when you reach the bottom of the page.
- **Character Information**: Displays the character's name and image.
- **Loading Indicator**: Shows a "Loading..." message while fetching data.

## How It Works 🔍
1. **API Integration**: Fetches data from the Rick and Morty API using the `fetch` method.
2. **State Management**: 
   - `data`: Stores the list of characters.
   - `loading`: Tracks whether data is currently being fetched.
   - `page`: Tracks the current page for API requests.
3. **Scroll Detection**: Listens for the `scroll` event to detect when the user reaches the bottom of the page and fetches the next set of characters.

## Installation and Setup ⚙️
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/infinite-scroll-rick-morty.git
   cd infinite-scroll-rick-morty
Install dependencies:

npm install
Start the development server:

npm start
Open the app in your browser at http://localhost:3000.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
#   i n f i n t e - s c r o l l 
 
 
