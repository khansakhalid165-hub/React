# 🔐 Password Generator

A modern and responsive Password Generator built with **React**, **Vite**, and **Tailwind CSS**. It generates strong random passwords with customizable options such as password length, numbers, and special characters. Users can also copy the generated password to the clipboard with a single click.

---

## 🚀 Features

- 🔑 Generate secure random passwords
- 📏 Adjustable password length (6–100 characters)
- 🔢 Include or exclude numbers
- 🔣 Include or exclude special characters
- 📋 One-click copy to clipboard
- ⚡ Fast performance with React Hooks
- 🎨 Responsive UI using Tailwind CSS

---

## 🛠️ Built With

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

---

## 📂 Project Structure

```
password-generator/
│── public/
│── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│── package.json
│── vite.config.js
│── README.md
```

---

## 📸 Preview

<img width="800" alt="Password Generator Preview" src="https://via.placeholder.com/800x400?text=Password+Generator+Preview">

> Replace the placeholder image with a screenshot of your project.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/password-generator.git
```

Navigate into the project folder:

```bash
cd password-generator
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🧠 React Concepts Used

This project demonstrates the use of:

- **useState** – Manage password, length, and checkbox states.
- **useEffect** – Automatically generate a new password when options change.
- **useCallback** – Memoize functions to prevent unnecessary recreations.
- **useRef** – Access the input field and select text before copying.

---

## 📖 How It Works

1. Select the desired password length.
2. Enable or disable numbers.
3. Enable or disable special characters.
4. A new password is generated automatically.
5. Click the **Copy** button to copy it to your clipboard.

---

## 💡 Future Improvements

- Password strength indicator
- Uppercase/lowercase toggle
- Exclude similar characters (O, 0, I, l)
- Password history
- Dark/Light mode
- Pronounceable password generation

---

## 👨‍💻 Author

**Khansa Khalid**

Learning React by building projects and exploring modern web development.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!