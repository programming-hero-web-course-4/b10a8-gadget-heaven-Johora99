
# Gadget Heaven

Gadget Heaven Accessories is our ultimate destination for upgrading your tech experience. The platform features a wide range of modern tech accessories designed to enhance your devices, from Bluetooth headphones to phone cases, chargers, and more. With easy-to-navigate product listings, users can quickly find the latest and most innovative accessories for their gadgets. The platform allows users to view detailed product specifications, including features such as active noise cancellation, battery life, and more. Shopping is made simple with an intuitive cart system, product sorting, and an interactive checkout process.
# React Concepts Used

## 1. Components
- **Functional Components:** Most modern React code uses functional components, which are simpler and allow for hooks.

## 2. JSX (JavaScript XML)
- JSX allows you to write HTML-like syntax directly in JavaScript, which React transforms into `React.createElement()` calls.
- **Conditional Rendering:** Using `{ condition ? <Component /> : null }`.
- **Looping over data with `map()`** to render lists of components.

## 3. Props (Properties)
- Passing data from a parent component to a child component via props.
- **Destructuring props** for cleaner code.

## 4. State Management
- Using the `useState` hook to manage component state.
- Initializing state and updating it based on user actions or API responses.

## 5. Hooks
- `useState:` For managing component-level state.
- `useEffect:` For handling side effects like data fetching, DOM updates, and timers.
- `useContext:` For global state management across components using React Context API.

## 6. Event Handling
- Handling user interactions like button clicks and form submissions.
- Using event handler functions, often inline, or defined in the component.

## 7. Conditional Rendering
- Displaying different content based on conditions using ternary operators or `&&` conditions.
- Showing or hiding elements based on state values.

## 8. Lists and Keys
- Rendering lists using `Array.map()`.
- Adding unique `key` props to items in a list to ensure stable identity across renders.

## 9. Forms and Controlled Components
- Managing form data with controlled components (inputs with `value` and `onChange`).
- Handling form submission with `onSubmit` event.

## 10. React Router (for Routing)
- Setting up routes using `react-router-dom` to navigate between pages.
- Using `useNavigate` to programmatically navigate within the app.

## 11. Context API for Global State
- Creating a context with `React.createContext()`.
- Providing context at a higher level to share state across multiple components.

## 12. Ref (for Direct DOM Manipulation)
- Using `useRef` to access or manipulate DOM elements directly, such as focusing an input.

## 13. Component Lifecycle
- Managing component lifecycle behavior using hooks like `useEffect` for mounting, updating, and cleanup.
- Understanding dependency arrays to control when `useEffect` triggers.

## 14. Error Handling and Boundary
- Catching errors in components and using **Error Boundaries** to handle unexpected errors gracefully.

## 15. Custom Hooks
- Creating custom hooks for reusing logic across components (e.g., `useFetch`, `useLocalStorage`).

## 16. Conditional CSS Classes and Styling
- Dynamically applying classes based on state (e.g., `className={isActive ? 'active' : ''}`).
- Using inline styles and CSS frameworks like Tailwind CSS or Styled Components.

## Data Management

In **Gadget Heaven Accessories**, we manage data using a combination of **Local Storage** and **React Context API**. These two methods ensure that product data is retained across sessions and can be accessed and updated across multiple components.

### 1. Local Storage

**Local Storage** is used to persist product data across sessions. When a user adds products to their cart, their selections are stored in the browser’s local storage. This ensures that the user’s cart data is retained even when they refresh the page or navigate to other parts of the application.

#### Storing Data:
We store the data in **Local Storage** using `localStorage.setItem()`. The product data is converted into a JSON format using `JSON.stringify()` before saving.

### 2. React Context API

For **global state management** and sharing data across multiple components, we use the **React Context API**. It allows us to create a central store of data, making it accessible to all components without needing to pass props down through every level of the component tree.

#### Creating Context:
A **context** is created using `React.createContext()`. This provides a way to store and manage shared data across the entire component tree.

## Features

 **Dynamic Cart with Persistent Storage**
   - Users can add products to their cart, and the cart data is stored in local storage. This ensures cart persistence across sessions, even if users refresh or leave the page.

 **Global State Management with Context API**
   - Using the React Context API, the application efficiently shares data across multiple components. This eliminates the need for prop-drilling, making state management cleaner and more efficient.

 **Product Sorting and Filtering**
   - Users can sort products by attributes like price and category, making it easy to find specific items. Filter options help narrow down choices based on user preferences.

**Responsive and Modern UI**
   - Built with Tailwind CSS, the UI is optimized for all screen sizes, from mobile to desktop. The clean design enhances user experience and accessibility.

**Interactive Modal for Purchase Confirmation**
   - The modal provides a smooth user experience for checkout and confirmation, allowing users to review items before finalizing purchases.





## 🔗 Links
https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf?fbclid=IwY2xjawGYVZtleHRuA2FlbQIxMAABHZTT6fEJDGJtvNxBtaHZwjZWWalfntSrjRw8nHyIYNbU1llIfM1Gnl6J1A_aem_cx3Nhz2gfer1bcVxTEz2MA
## Live Links
https://gadget-heavenftj.netlify.app/

