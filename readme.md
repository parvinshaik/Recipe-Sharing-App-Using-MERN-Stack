# 🥘 Recipe Sharing App (MERN Stack)

A full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack that allows users to share, search, favorite, and manage their own recipes.

---

## 🔧 Features

- 👤 **User Registration & Login**
  - Register with name, email, and password.
  - Secure login with email and password.

- 🍽️ **Recipes**
  - View all shared recipes.
  - Each recipe includes: Title, Ingredients, Instructions, and Image.

- ➕ **Add Recipe**
  - Users can add a new recipe with the required details.
  - After submission, options appear:
    - 🗑️ Delete Recipe
    - ❤️ Add to Favourites
    - ➕ Add More Recipes

- 🔍 **Search Recipes**
  - Real-time search beside the recipe list.

- 🌟 **Favourites**
  - Add any recipe to your favourites directly from the recipe card.
  - View all your favorite recipes in the "Favourites" section.
  - Remove recipes from favourites anytime.


- 🚪 **Logout**
  - Logout functionality for secure session management.

---

## 🛠️ Tech Stack

**Frontend:**
- ReactJS
- CSS (for styling)
- React Router DOM
- Toast notifications (React Toastify)

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt (for password hashing)
- JSON Web Token (JWT) for authentication

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/recipe-sharing-app.git
cd recipe-sharing-app

### Create .env File in /backend
PORT=2000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

### Install Dependencies
Backend
cd server
npm install
node index.js

Frontend
cd client
npm install
npm start

📂 Folder Structure

recipe-sharing-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.js
│
├── .gitignore
└── README.md
