# React Hooks Overview

React hooks allow you to use state and other React features without writing a class. Below is a brief overview of every core hook available in React.

---

### 1. `useState`
This hook allows you to add state to a functional component. It returns a stateful value and a function to update it.

---

### 2. `useEffect`
This hook performs side effects in function components. It can be used for tasks like data fetching, setting up subscriptions, or manually changing the DOM.

---

### 3. `useContext`
This hook lets you subscribe to React context without introducing wrapper components. It allows access to a global state provided by a `Context.Provider`.

---

### 4. `useReducer`
An alternative to `useState` for more complex state logic. It accepts a reducer function and returns the current state paired with a dispatch function.

---

### 5. `useCallback`
This hook returns a memoized version of a callback function that only changes if one of the dependencies has changed, helping to optimize performance.

---

### 6. `useMemo`
This hook returns a memoized value, recomputing the result only when one of the dependencies has changed. Useful for optimizing performance by preventing expensive calculations on every render.

---

### 7. `useRef`
This hook returns a mutable object whose `.current` property can be used to hold a value across renders without causing a re-render.

---
