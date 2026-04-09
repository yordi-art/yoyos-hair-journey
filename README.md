# 🌸 Yoyo's Hair Journey

A polished full-stack MERN application for a herbal hair care brand, featuring product management, order tracking, and beauty tips.

Licensed under the MIT License.

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



### 2. Start the Frontend
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


