# 🍔 Foodie Express - React Restaurant App

Welcome to Foodie Express, a dynamic food ordering web application built with React. This project demonstrates a modern front-end stack, including React Hooks, Redux for state management, and React Router for navigation. It's designed to showcase best practices in React development, such as custom hooks, component composition, and a focus on user experience.

[**Live Demo (Link)**](https://namaste-react-2025.vercel.app/)
Please enable cors extension as this app uses api that is not public.

## ✨ Key Features

  * **Dynamic Restaurant Fetching:** Loads a list of restaurants from a live API on page load.
  * **Shimmer UI Loading:** Displays a clean, modern skeleton loader (shimmer effect) while data is being fetched, improving perceived performance.
  * **Live Search & Filtering:**
      * Instantly search for restaurants by name.
      * Filter restaurants to show only "Top Rated Restaurants" (4.5+ stars).
  * **Redux-Powered Cart:**
      * A centralized cart managed by Redux Toolkit.
      * Add, increment, decrement, and clear items from the cart.
      * The header dynamically shows the correct item count.
  * **Dynamic Routing:**
      * Uses `react-router-dom` to create dynamic routes for each restaurant.
      * Viewing a restaurant's menu navigates to a unique URL (e.g., `/restaurant/123`).
  * **Collapsible Accordion Menu:**
      * Restaurant menus are organized into collapsible accordion categories for a clean UI.
      * Supports nested categories (e.g., "Recommended" -\> "Pizzas").
  * **Online/Offline Status:**
      * A custom `useOnlineStatus` hook detects if the user is online or offline.
      * The UI displays the user's connection status and can prevent network requests when offline.
  * **Accessible Search:** The search bar uses an `sr-only` label for screen reader accessibility.

-----

## 🛠️ Tech Stack & Core Concepts

This project was built using the following technologies and development patterns:

  * **React:** Core UI library (using hooks like `useState`, `useEffect`, `useRef`, `useParams`).
  * **React Router (v6):** For all client-side routing and navigation (`<Link>`, `<Outlet>`, `useParams`).
  * **Redux Toolkit:** For global state management, specifically for the shopping cart.
  * **Custom React Hooks:** Logic is abstracted into reusable custom hooks (`useOnlineStatus`, and a planned `useRestaurantMenu`).
  * **Class Components:** Includes class components (`AboutUs`) to demonstrate knowledge of component lifecycles (`componentDidMount`) and state management with `this.setState`.
  * **Higher-Order Components (HOC):** Includes an example of the HOC pattern (`withLabel`) to add functionality to components.
  * **Modern CSS:** Styled with pure CSS, using Flexbox, gradients, transitions, and media queries for responsiveness.
  * **Data Fetching:** Uses the browser `fetch` API for asynchronous operations.

-----

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

  * Node.js (v16 or later)
  * npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mukul-bhatt/Namaste-react-2025.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

    *(You will need `react`, `react-dom`, `react-router-dom`, `@reduxjs/toolkit`, `react-redux`)*

3.  **Run the development server:**

    ```bash
    npm start
    ```

4.  Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) (or your bundler's default port) to view it in the browser.

-----

## 🧠 Learning & Future Improvements

This project was a fantastic learning experience. Here are some key takeaways and areas for future development:

### What I Learned

  * **Global vs. Local State:** The difference between using `useState` for component-level state (like accordions) and Redux for global state (like the cart).
  * **Custom Hooks:** How to extract complex logic (like checking online status) into a clean, reusable hook is a powerful pattern.
  * **Component Lifecycles:** Building both functional components (with `useEffect`) and class components (with `componentDidMount`) provided a deep understanding of component lifecycles.
  * **Single Responsibility:** Refactoring the `AddToCartButton` into its own component with its own Redux logic made the `MenuCard` component much cleaner.
  * **Conditional Rendering:** Using conditional rendering to show a Shimmer UI vs. the actual data is crucial for a good user experience.
