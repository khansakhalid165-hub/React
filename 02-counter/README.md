
## 📌 What is `useState`?
### Definition (Interview Answer)
`useState` is a built-in React Hook that allows a functional component to store state (data) and update the UI whenever that state changes.
### Simple Explanation
Think of `useState` as **React's memory**.
- A normal JavaScript variable stores a value.
- A state variable stores a value **and tells React to update the UI when the value changes.**

const [count, setCount] = useState(0);
### `useState(0)`
- `useState` is a React Hook.
- `0` is the **initial value**.
- React stores this value internally.
### Why do we use `[]`?
Because `useState()` returns an **array**.
Internally, React returns something similar to:
```javascript
[0, updateFunction]
We use **array destructuring**:
```javascript
const [count, setCount] = useState(0);
```
Which means:
```text
count = Current State Value
setCount = Function to Update the State
## 📌 What is `count`?
`count` is the **current state value**.
Example:
```jsx
const [count, setCount] = useState(0);
<h1>{count}</h1>
```
Output:
```text
0
## 📌 What is `setCount`?
`setCount` is a **function provided by React**.
- You do **not** create it.
- React creates it for you.
Its job is to:
- Update the state.
- Tell React the state has changed.
- Trigger a re-render.
## 📌 Why can't we use a normal variable?
let count = 0;
count++;
The variable changes, but React **doesn't know** it changed.
Result:❌ UI does NOT update.
Instead:
```jsx
setCount(count + 1);
React knows:
```text
State Changed
↓
Re-render Component
↓
Update UI
## 📌 What happens when we call `setCount()`?
Suppose:
```jsx
const [count, setCount] = useState(5);
Now we call:
setCount(6);
React performs these steps:
```text
Store New Value
↓
Mark Component for Re-render
↓
Run Component Again
↓
Create New Virtual DOM
↓
Compare with Old Virtual DOM
↓
Update Only Changed Parts
↓
UI Updates
## 📌 Why not use

```jsx
count++;
```

or

```jsx
count = 10;
```

Because React does **not** watch normal variables.
Only `setCount()` tells React:
> "The state changed. Please update the UI."
## 📌 Functional Update
setCount(prev => prev + 1);
### Is `prev` a built-in variable?
❌ No.
It is simply the parameter name of a callback function.
These are all correct:
```jsx
setCount(prev => prev + 1);
setCount(previousCount => previousCount + 1);
setCount(x => x + 1);
### Then who gives the value to `prev`?

**React does.**

Suppose:

```text
count = 5
When you write:
setCount(prev => prev + 1);
React internally does something similar to:
```javascript
const currentState = 5;
const newState = updateFunction(currentState);
```
Flow:
```text
prev = 5
↓
return 6
↓
React stores 6
↓
Re-render
↓
UI shows 6
```
## 📌 Why use

```jsx
setCount(prev => prev + 1);
```
instead of

```jsx
setCount(count + 1);
```
Because it is safer when the new value depends on the previous value.
Example:
```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```
## 📌 How does React know to update the UI?
### Normal Variable

```text
Value Changes
↓
React Doesn't Know
↓
No Re-render
↓
UI Doesn't Change
```
### State Variable
```text
setCount()
↓
React Knows State Changed
↓
Re-render Component
↓
Create New Virtual DOM
↓
Compare Old & New Virtual DOM
↓
Update Real DOM
↓
UI Changes
```
---
## 📌 Common Interview Questions
### 1. What is `useState`?
**Answer**
`useState` is a React Hook that allows functional components to store state and re-render the UI whenever the state changes.
### 2. Why can't we use a normal variable?

**Answer**

A normal JavaScript variable stores data, but React does not track changes to it. `useState` provides a setter function that updates the state and notifies React to re-render the component.

### 3. What does `useState` return?

**Answer**

`useState` returns an array containing:
- Current state value
- Setter function

### 4. Is `setCount` a function?

**Answer**

Yes. It is a function created by React that updates the state and tells React to re-render the component.

### 5. Is `prev` a built-in variable?

**Answer**

No. It is simply a parameter name chosen by the developer. React automatically passes the latest state value to that parameter.

### 6. Why do we write

```jsx
setCount(prev => prev + 1);
```

**Answer**

Because the new state depends on the previous state. React automatically passes the latest state value (`prev`) to the callback function.

---
# ⭐ Golden Rule
> A normal JavaScript variable can store data, but it cannot notify React when the value changes.
>
> `useState` stores the data **and** provides a setter function (`setCount`) that updates the state and tells React to re-render the component so the UI always stays in sync with the latest state.