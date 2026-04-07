# 🌸 Yoyo's Hair Journey

A full-stack MERN application for Yoyo's herbal hair care brand.

## Folder Structure

```
yoyos-hair-journey/
├── server/               # Express + MongoDB backend
│   ├── models/
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── products.js
│   │   └── orders.js
│   ├── index.js
│   ├── .env
│   └── package.json
└── client/               # React frontend
    └── src/
        ├── components/
        │   └── Navbar.js
        ├── pages/
        │   ├── Home.js
        │   ├── Products.js
        │   ├── HairTips.js
        │   ├── Order.js
        │   └── Admin.js
        ├── api.js
        ├── App.js
        ├── index.js
        └── index.css
```

## Setup & Run

### 1. Start MongoDB
Make sure MongoDB is running locally on port `27017`, or update `MONGO_URI` in `server/.env`.

### 2. Start the Backend
```bash
cd server
npm install
npm run dev
# Runs on http://localhost:5000
```

### 3. Start the Frontend
```bash
cd client
npm install
npm start
# Runs on http://localhost:3000
```

## API Endpoints

| Method | Endpoint    | Description        |
|--------|-------------|--------------------|
| GET    | /products   | List all products  |
| POST   | /products   | Add a product      |
| PUT    | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |
| GET    | /orders     | List all orders    |
| POST   | /orders     | Place an order     |


