# 🛍️ Product List with Cart

A responsive e-commerce product list page with a functional cart — built as part of the [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

---

## 📦 Features

- ✅ Dynamic product rendering from `data.json`
- 🛒 Fully functional shopping cart
  - Add to cart
  - Cart item counter
  - Cart details dropdown
- 💻 Responsive layout across devices
- 🎨 Pixel-perfect styling based on the provided design
- ⚡ Built using modern front-end best practices

---

## 🧪 Tech Stack

| Tech      | Purpose                       |
|-----------|-------------------------------|
| HTML/CSS  | Structure & Styling           |
| JavaScript / React | Logic & UI Interactions        |
| Tailwind CSS (Optional) | Utility-first CSS framework  |
| Vite / CRA | Fast development environment  |

> If using Vanilla JS, remove React and Tailwind from the list above.

---

## 📁 Folder Structure

```bash
product-list-cart/
├── public/
│   └── data.json          # Product data
├── src/
│   ├── components/        # Reusable UI components
│   ├── assets/            # Images, icons, etc.
│   ├── App.jsx / index.js # App entry points
│   └── styles/            # CSS or Tailwind configs
└── README.md


Product Data Format (from data.json)
[
  {
    "id": 1,
    "name": "Product Name",
    "price": 49.99,
    "image": "./images/product1.jpg"
  }
]
