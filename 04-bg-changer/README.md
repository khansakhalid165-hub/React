# React Notes - Why React Instead of JavaScript?

## Why do we use React?

A website can be built using only HTML, CSS, and JavaScript.

So why React?

As applications become larger, managing the UI with plain JavaScript becomes difficult.

---

## JavaScript Approach

In JavaScript, if we want to change something on the page, we have to find the element and update it manually.

Example:

```javascript
const button = document.getElementById("red");

button.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});
```

Here we manually:

- Find the button.
- Add an event listener.
- Find the body.
- Change its background color.

For small projects, this is fine.

For large projects with hundreds of elements, this becomes difficult to manage.

---

## React Approach

In React, we don't directly manipulate the DOM.

Instead, we change the **state**.

React automatically updates the UI.

Example:

```jsx
const [color, setColor] = useState("olive");

<button onClick={() => setColor("red")}>
    Red
</button>
```

When `setColor("red")` is called:

1. The state changes.
2. React re-renders the component.
3. The UI updates automatically.

---

# Understanding useState

```jsx
const [color, setColor] = useState("olive");
```

React returns two things:

### color

Stores the current value.

Initially:

```text
color = "olive"
```

### setColor

A function used to update `color`.

Example:

```jsx
setColor("green");
```

Now React changes

```text
color = "green"
```

and updates the screen.

---

# Why use setColor()?

Instead of writing

```javascript
document.body.style.backgroundColor = "red";
```

we write

```jsx
setColor("red");
```

React updates the UI automatically.

---

# Understanding the Background

```jsx
<div
    style={{
        backgroundColor: color
    }}
>
```

Notice we are using

```jsx
backgroundColor: color
```

NOT

```jsx
backgroundColor: "red"
```

Why?

Because `color` changes.

Initially

```text
color = olive
```

React renders

```text
backgroundColor = olive
```

After clicking Green

```jsx
setColor("green");
```

Now

```text
color = green
```

React automatically changes

```text
backgroundColor = green
```

---

# Understanding the Button

Example:

```jsx
<button
    onClick={() => setColor("red")}
    style={{ backgroundColor: "red" }}
>
    Red
</button>
```

There are two different things happening.

## 1. Button Style

```jsx
style={{ backgroundColor: "red" }}
```

This only changes the button's own color.

Without it, the button would look like a normal button.

---

## 2. onClick

```jsx
onClick={() => setColor("red")}
```

This changes the React state.

It does **not** color the button.

It changes the page background because the outer `<div>` uses:

```jsx
backgroundColor: color
```

---

# Flow of the Program

Initial State

```text
color = olive
```

↓

Background becomes olive.

↓

User clicks Red button.

↓

```jsx
setColor("red");
```

↓

React updates

```text
color = red
```

↓

Component re-renders.

↓

Background becomes red.

---

# Why React is Better?

### JavaScript

- Manual DOM manipulation
- Lots of `getElementById()`
- Lots of `querySelector()`
- Hard to manage large projects
- Easy to forget updating some elements

---

### React

- Uses state
- UI updates automatically
- Reusable components
- Easier to maintain
- Better for large applications

---

# React Philosophy

React follows this idea:

> **UI = Function of State**

If the state changes,

React automatically updates the UI.

You focus on **what** the UI should look like, and React handles **how** to update the page.

---

# Key Takeaways

- `useState()` stores data.
- `setState()` (like `setColor`) updates the data.
- Updating state causes React to re-render the component.
- Never manually manipulate the DOM when using React.
- React keeps the UI in sync with the state automatically.
