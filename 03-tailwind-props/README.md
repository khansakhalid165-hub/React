# Chapter 2 – Components & Props

## 📌 What is a Component?
### Definition
A **Component** is a reusable piece of UI. It is simply a JavaScript function that returns JSX.

### Simple Explanation
Think of a component as a **template**. Write it once, use it many times.

Example:

```jsx
function Button() {
    return <button>Click Me</button>;
}
```

Usage:

```jsx
<Button />
<Button />
<Button />
```

Instead of writing the same button three times, we create one component and reuse it.

---

## 📌 Why do we use Components?
, Reusability (Write Once, Use Many Times)
, Clean and Organized Code
, Easy Maintenance
, Better Readability
, Faster Development
, Each component has its own responsibility

---

## 📌 What are Props?

### Definition

Props (Properties) are used to pass data from a **Parent Component** to a **Child Component**.

### Simple Explanation

A component is like an empty form.

Props fill that form with different data.

Example:

```jsx
function Student(props){
    return <h1>{props.name}</h1>;
}
```

Usage:

```jsx
<Student name="Ali"/>
<Student name="Ahmed"/>
<Student name="Sara"/>
```

Output:

```text
Ali
Ahmed
Sara
```

Notice that we wrote the component only once but displayed different data using props.

---

## 📌 Are Components and Props the same?

❌ No.

Component = A reusable UI block.

Props = Data sent to that component.

Think like this:

```text
Component = Mobile Phone

Props = SIM Card + Contacts + Photos
```

Without props, every phone looks the same.

With props, every phone contains different information.

---

## 📌 Why do we use Props?

Without props:

```jsx
function Card(){
    return <h1>Khansa</h1>;
}
```

Need three cards?

```jsx
<Card/>
<Card/>
<Card/>
```

Output:

```text
Khansa
Khansa
Khansa
```

Not useful.

With props:

```jsx
function Card(props){
    return <h1>{props.name}</h1>;
}
```

Usage:

```jsx
<Card name="Khansa"/>
<Card name="Ali"/>
<Card name="Sara"/>
```

Output:

```text
Khansa
Ali
Sara
```

One component.

Different data.

---

## 📌 How Props Work?

```text
Parent Component
↓
Passes Data
↓
Child Component Receives Props
↓
Displays Data
```

---

## 📌 Syntax

Parent:

```jsx
<Card name="Khansa" age={22}/>
```

Child:

```jsx
function Card(props){
    return(
        <>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </>
    )
}
```

---

## 📌 Destructuring Props

Instead of writing:

```jsx
props.name
props.age
```

Write:

```jsx
function Card({name,age}){
    return(
        <>
            <h1>{name}</h1>
            <p>{age}</p>
        </>
    )
}
```

This is cleaner and more readable.

---

## 📌 Props are Read Only

Props should NEVER be changed inside the child component.

❌ Wrong

```jsx
props.name="Ali";
```

✅ Correct

Props should only be received and displayed.

If data needs to change, use **State**.

---

## 📌 Props vs State

| Props | State |
|-------|--------|
| Passed from Parent | Managed inside Component |
| Read Only | Can Change |
| Used to Send Data | Used to Store Changing Data |
| Parent Controls It | Component Controls It |

---

## 📌 Real World Example

Instagram Post

Post Component

```jsx
<Post
    username="Khansa"
    likes={120}
    caption="Learning React"
/>

<Post
    username="Ali"
    likes={90}
    caption="Hello React"
/>
```

Only one component.

Different posts using different props.

---

## 📌 Common Interview Questions

### What is a Component?

A reusable piece of UI written as a JavaScript function that returns JSX.

### What are Props?

Props are read-only data passed from a parent component to a child component.

### Why do we use Props?

To reuse the same component with different data.

### Can we modify Props?

No.

Props are immutable (read-only).

### Difference between Props and State?

Props are received from the parent, while state belongs to the component and can change.

---

## 📌 Quick Revision

```text
Component
↓
Reusable UI

↓

Props
↓
Pass Data

↓

Parent
↓

Child

↓

Display Data

↓

Reusable Application
```

---

# ⭐ Golden Rule

A Component creates the UI. Props provide different data to that UI. Components are reusable because of Props.

---

# Chapter 3 – Tailwind CSS

## 📌 What is Tailwind CSS?

Tailwind CSS is a **Utility-First CSS Framework** that lets you style your application using predefined classes directly inside JSX or HTML.

---

## 📌 Why Tailwind instead of CSS?

Normal CSS

```css
.card{
    background:white;
    padding:20px;
    border-radius:10px;
}
```

HTML

```html
<div class="card"></div>
```

Need another style?

Create another CSS class.

Large projects end up with hundreds of CSS classes.

---

Tailwind

```jsx
<div className="bg-white p-5 rounded-lg"></div>
```

No extra CSS file needed.

Everything is written where you use it.

---

## 📌 Why is Tailwind Better?

, Faster Development
, No Need to Create CSS Files
, Utility Classes are Reusable
, Less CSS to Maintain
, Consistent Design
, Responsive Classes Built-in
, Easy Dark Mode Support
, Smaller Final CSS (Unused classes are removed)

---

## 📌 When Should We Use Tailwind?

✅ React Projects

✅ Next.js Projects

✅ Dashboards

✅ Portfolio Websites

✅ Landing Pages

✅ Admin Panels

---

## 📌 When CSS is Better?

, Very complex animations
, Custom designs
, Small projects
, Existing CSS projects
, Learning CSS fundamentals

---

## 📌 Tailwind Example

Instead of

```css
.button{
    background:blue;
    color:white;
    padding:12px;
    border-radius:8px;
}
```

HTML

```html
<button class="button">
Click
</button>
```

Use Tailwind

```jsx
<button className="bg-blue-500 text-white p-3 rounded-lg">
Click
</button>
```

Same result.

Less code.

---

## 📌 Common Interview Questions

### What is Tailwind CSS?

A Utility-First CSS framework used for rapidly building modern user interfaces.

### Why use Tailwind?

It speeds up development, reduces CSS files, improves consistency, and provides responsive utility classes.

### Tailwind vs CSS?

CSS gives complete freedom but requires writing custom styles.

Tailwind provides ready-made utility classes, making development faster and code easier to maintain.

---

## 📌 Quick Revision

```text
Tailwind
↓
Utility Classes
↓
No CSS File
↓
Fast Development
↓
Reusable Styling
↓
Responsive Design
```

---

# ⭐ Golden Rule

CSS teaches you **how styling works**. Tailwind helps you **build modern UIs faster** using predefined utility classes.