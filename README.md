# 🎫 Customer Support — Ticket System

A modern, responsive customer support ticket management system built with **React.js**, featuring real-time ticket tracking, priority management, status workflow, and toast notifications.

---

## 🚀 Live Link & Repository

- **Live Link:** [https://restart-assignment-02.vercel.app/](https://restart-assignment-02.vercel.app/)
- **GitHub Repository:** [https://github.com/ammarbinanwarfuad/RESTART_ASSIGNMENT_02](https://github.com/ammarbinanwarfuad/RESTART_ASSIGNMENT_02)

---

## 🛠️ Tech Stack

- **HTML**
- **CSS / Tailwind CSS**
- **JavaScript**
- **React.js**
- **React Router DOM**
- **React Toastify**
- **Vite**

---

## ✨ Features

- 📋 View all customer support tickets in a **2-column card grid**
- ➕ Create new tickets using the **New Ticket** modal
- 🔄 Click a ticket card to move it to **In-Progress** (Task Status panel)
- ✅ Click **Complete** to resolve a ticket and move it to the **Resolved List**
- 📊 **Banner** shows live In-Progress and Resolved counts
- 🔔 **React-Toastify** notifications replace all browser alerts
- 💾 **LocalStorage** persistence across page refreshes
- 📱 Fully **responsive** for mobile, tablet, and desktop

---

## 📂 Project Structure

```
RESTART_ASSIGNMENT_02/
├── public/
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewTicketModal.jsx
│   │   ├── ResolvedList.jsx
│   │   ├── TaskStatus.jsx
│   │   └── TicketCard.jsx
│   ├── data/
│   │   └── tickets.json
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── FAQ.jsx
│   │   ├── Blog.jsx
│   │   ├── Changelog.jsx
│   │   ├── Contact.jsx
│   │   └── Download.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## ⚙️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## ❓ React Concept Questions & Answers

### 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript code. It was introduced by the React team to make building UI components more intuitive.

```jsx
const element = <h1>Hello, World!</h1>;
```

JSX is **not valid JavaScript** on its own — a tool like Babel compiles it into `React.createElement()` calls under the hood:

```js
const element = React.createElement('h1', null, 'Hello, World!');
```

**Why it is used:**
- Makes UI code easier to read and write by combining markup and logic in one place
- Provides a familiar HTML-like syntax for describing what the UI should look like
- Enables full JavaScript power (expressions, conditions, loops) inside the markup using `{}`
- Catches errors at compile time rather than runtime, making debugging easier

---

### 2. What is the difference between State and Props?

Both state and props are plain JavaScript objects used to control data in a component, but they serve different purposes.

| Feature | State | Props |
|---|---|---|
| **Owned by** | The component itself | The parent component |
| **Mutable?** | Yes — updated with `setState` / `useState` | No — read-only inside the receiving component |
| **Purpose** | Manages internal, dynamic data | Passes data/functions from parent to child |
| **Triggers re-render?** | Yes, on every update | Yes, when the parent re-renders with new values |

**State example:**
```jsx
const [count, setCount] = useState(0);
// count is private to this component and can change
```

**Props example:**
```jsx
// Parent passes data
<TicketCard ticket={ticketData} onAddToProgress={handleAdd} />

// Child receives and uses it (read-only)
const TicketCard = ({ ticket, onAddToProgress }) => { ... }
```

In short: **props flow down** from parent to child, while **state lives inside** the component that owns it.

---

### 3. What is the useState hook, and how does it work?

`useState` is a built-in React hook that lets functional components hold and manage their own **local state**.

**Syntax:**
```js
const [stateValue, setterFunction] = useState(initialValue);
```

- `stateValue` — the current value of the state
- `setterFunction` — the function you call to update the state
- `initialValue` — the value state starts with (runs only on the first render)

**How it works:**
1. On the first render, React creates a state variable and sets it to `initialValue`.
2. When you call the setter function with a new value, React schedules a re-render.
3. On the next render, `stateValue` holds the updated value.

**Example from this project:**
```jsx
const [inProgressTasks, setInProgressTasks] = useState([]);

// Adding a task to in-progress
setInProgressTasks([...inProgressTasks, newTask]);
```

**Key rules:**
- Only call `useState` at the top level of a component (not inside loops or conditions)
- State updates are **asynchronous** — the new value is available on the next render
- When the new state depends on the previous state, use the functional form: `setState(prev => prev + 1)`

---

### 4. How can you share state between components in React?

React data flows **one-way (top-down)**, so sharing state requires intentional patterns:

#### Option 1 — Lift State Up (most common for related components)
Move the shared state to the **closest common parent** and pass it down via props:

```jsx
// App.jsx owns the state
const [tickets, setTickets] = useState([]);

// Passes state and updater to children
<Home tickets={tickets} onAddToProgress={handleAdd} />
<Banner inProgressCount={inProgressTasks.length} />
```

This is exactly the pattern used in this project — `App.jsx` holds all state and distributes it to `Home`, `Banner`, `TaskStatus`, and `ResolvedList` via props.

#### Option 2 — Context API (for deeply nested components)
When prop-drilling becomes too deep, React's `Context` lets you broadcast state globally:

```jsx
const TicketContext = createContext();

// Wrap the tree
<TicketContext.Provider value={{ tickets, setTickets }}>
  <App />
</TicketContext.Provider>

// Consume anywhere in the tree
const { tickets } = useContext(TicketContext);
```

#### Option 3 — External State Management (Redux, Zustand, etc.)
For very large applications, libraries like **Redux Toolkit** or **Zustand** provide a global store outside the component tree.

---

### 5. How is event handling done in React?

React uses **SyntheticEvents** — a cross-browser wrapper around the browser's native events. The syntax is similar to HTML but uses **camelCase** event names and passes a **function reference**, not a string.

**HTML (old way):**
```html
<button onclick="handleClick()">Click me</button>
```

**React (correct way):**
```jsx
<button onClick={handleClick}>Click me</button>
```

**Inline arrow function** (useful when you need to pass arguments):
```jsx
<button onClick={() => handleDelete(ticket.id)}>Delete</button>
```

**Handling form events:**
```jsx
const handleChange = (e) => {
  setName(e.target.value); // e is the SyntheticEvent
};

<input type="text" onChange={handleChange} value={name} />
```

**Preventing default behaviour:**
```jsx
const handleSubmit = (e) => {
  e.preventDefault(); // stops the page from refreshing
  // form logic here
};

<form onSubmit={handleSubmit}>...</form>
```

**Examples from this project:**
- `onClick` on `TicketCard` → adds ticket to in-progress
- `onClick` on the Complete button in `TaskStatus` → resolves a task
- `onSubmit` on the form in `NewTicketModal` → creates a new ticket

---

## 📝 License

MIT
