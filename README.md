# 🚀 Dev Stack Project

**Dev Stack Builder** is a simple and interactive web application that helps developers explore different technologies and build their own development stack.

Users can explore various development technologies, view their details, add technologies to their personal stack, remove individual technologies, and clear the entire stack with ease.

---

## 📌 About The Project

Dev Stack Builder is a frontend web application built with React, TypeScript, Tailwind CSS, and DaisyUI.

The main goal of this project is to help developers explore different technologies and organize their preferred tools in one place.

This project also demonstrates important React concepts, including component-based architecture, props, state management, conditional rendering, list rendering, Promises, and Suspense.

## ✨ Features

- 🧑‍💻 **Explore Technologies:** Browse different development technologies.
- 📋 **Technology Details:** View technology names, descriptions, categories, ratings, and difficulty levels.
- ➕ **Build Your Stack:** Add technologies to your personal development stack.
- ❌ **Remove Technologies:** Remove individual technologies from your stack.
- 🗑️ **Remove All:** Clear all selected technologies at once.
- 🔔 **Toast Notifications:** Receive notifications when technologies are added or removed.
- ⚡ **Loading Skeleton:** Display a skeleton UI while technology data is loading.
- 🎨 **Modern UI:** Enjoy a clean interface built with Tailwind CSS and DaisyUI.
- 📱 **Responsive Design:** Access the application on different screen sizes.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building interactive user interfaces |
| TypeScript | Type safety and better code organization |
| Tailwind CSS | Utility-first styling |
| DaisyUI | UI components and styling utilities |
| React Toastify | Displaying toast notifications |
| JSON | Storing technology data |
| Vite | Development server and build tool |

## 📂 Project Structure

```text
dev-stack-project/
├── public/
│   ├── data.json
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── technologies/
│   │   │   ├── TechCard.tsx
│   │   │   └── Technologies.tsx
│   │   │
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Nav.tsx
│   │   └── TechnologySkeleton.tsx
│   │
│   ├── type.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🧩 Components Overview

| Component | Description |
|---|---|
| `Nav.tsx` | Displays the website navigation bar. |
| `Hero.tsx` | Displays the hero section and introductory content. |
| `Technologies.tsx` | Displays the available technologies. |
| `TechCard.tsx` | Displays individual technology information and actions. |
| `TechnologySkeleton.tsx` | Provides a skeleton loading interface. |
| `Footer.tsx` | Displays the website footer. |
| `App.tsx` | Manages the main application layout and functionality. |
| `type.ts` | Defines TypeScript interfaces and types. |
| `data.json` | Contains the technology data used by the application. |



## 📚 React Questions and Answers

### 1. What is JSX, and why is it used in React?

**Answer:**

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like markup inside JavaScript .

### 2. What is the difference between props and state?

**Answer:**

**Props** are used to pass data from a parent component to a child component. They are read-only from the receiving component's perspective.

**State** is data managed by a component that can change over time. When state changes, React can re-render the component to update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:**

The `useState` hook allows functional components to store and update state.

In this project, I used `useState` to manage the added technologies in the user's development stack.

It allows users to add and remove technologies while keeping the interface updated.

**Example:**

```tsx
const [stack, setStack] = useState<TechType[]>([]);
```

Here, `stack` stores the added technologies, while `setStack` updates the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:**

The `useEffect` hook is used to synchronize a component with external systems, such as APIs, subscriptions, or browser features.

In this project, I did not use `useEffect` to load the JSON data. Instead, I used a Promise-based approach with React's `use` API and `Suspense` to handle asynchronous data loading.

**Example:**

```tsx
<Suspense fallback={<TechnologySkeleton />}>
  <Technologies techPromise={techPromise} />
</Suspense>
```

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:**

React uses the `key` prop to identify individual items in a list.

Unique keys help React determine which items have been added, removed, or changed, allowing it to update the UI correctly.

### 6. What is conditional rendering? Show one place you used it.

**Answer:**

Conditional rendering means displaying different UI elements depending on a condition.

In this project, I used conditional rendering in the **Your Stack** section to display a message when the stack is empty.

**Example:**

```tsx
{stack.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-4 
                          text-center text-xs text-gray-400">
            Your stack is empty.
          </div>
        ) : (
          stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-2"
            >
              {/* Technology Icon */}
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
              />
    
              {/* Technology Details */}
              <div className="flex-1">
                <h3 className="text-xs font-semibold text-gray-900">
                  {technology.name}
                </h3>
          
                <p className="text-[9px] text-gray-400">
                  {technology.category}
                </p>
              </div>
          
              {/* Remove Button */}
              <button
                onClick={()=> handleRemoveOne(technology.id)}
                className="text-xl text-gray-400 hover:text-red-500 cursor-pointer"
                aria-label={`Remove ${technology.name}`}
              >
                <FiX />
              </button>
            </div>
          ))
          )}
```

When the stack is empty, the application displays an empty message. Otherwise, it displays the added technologies.

## 🎯 Learning Outcomes

Through this project, I practiced and improved my understanding of:

- Building reusable React components.
- Using TypeScript interfaces and types.
- Managing component state with `useState`.
- Passing data between components using props.
- Rendering lists using `.map()` and unique keys.
- Implementing conditional rendering.
- Working with Promises and asynchronous data.
- Using React's `use` API and `Suspense`.
- Styling interfaces using Tailwind CSS and DaisyUI.
- Displaying user feedback with React Toastify.
- Organizing a React project using reusable components.
