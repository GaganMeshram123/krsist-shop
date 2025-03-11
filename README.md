# Customized T-shirt Platform

This is a full-stack project for a **Customized T-shirt Platform** where users can browse, customize, and order T-shirts. The platform allows users to choose T-shirt sizes, colors, and add custom designs before placing an order.

### Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js with Express
- **Database (Optional):** MongoDB (for storing products and orders)
- **Deployment:** You can deploy the frontend on platforms like **Vercel** or **Netlify**, and the backend on **Heroku** or **Render**.

---

## Features

- **Product Selection:** Users can choose from various T-shirt types and sizes.
- **Customization:** Users can upload images or add text to design their T-shirt.
- **Preview:** Users can view the customized T-shirt before placing the order.
- **Order Submission:** Users can finalize the order by providing necessary details like T-shirt size, color, and quantity.

---

## Project Structure

### Frontend (React.js)

client/ │ ├── public/ │ ├── index.html │ └── assets/ (images, fonts, etc.) │ ├── src/ │ ├── components/ │ │ ├── Navbar.js │ │ ├── ProductCard.js │ │ └── TShirtDesign.js │ ├── pages/ │ │ ├── HomePage.js │ │ ├── ProductPage.js │ │ └── CheckoutPage.js │ ├── services/ │ │ └── api.js (Axios calls) │ ├── App.js │ ├── index.js │ └── styles/ │ ├── global.css │ └── components/ │ └── Navbar.css

shell
 

### Backend (Node.js)

server/ │ ├── controllers/ │ ├── productController.js │ └── orderController.js │ ├── models/ │ ├── Product.js │ └── Order.js │ ├── routes/ │ ├── productRoutes.js │ └── orderRoutes.js │ ├── config/ │ ├── db.js │ └── server.js │ ├── server.js ├── .gitignore └── package.json

yaml
 
---

## Installation

### Frontend (React.js)

1. Navigate to the `client/` directory.
 
3. Install dependencies:
 
   npm install
Start the React development server:
 
npm start

Backend (Node.js)

Navigate to the server/ directory.

Install dependencies:
npm install
Start the Node.js server:
bash
Copy code
npm start![image](https://github.com/user-attachments/assets/b3e5f9d7-91f6-4a3f-83d7-9ae6c293caa9)![image](https://github.com/user-attachments/assets/d0514155-ca77-4122-aecb-2aa53d5aa1e2)
![image](https://github.com/user-attachments/assets/65f6d472-d539-455e-ad8f-46877c03af16)![image](https://github.com/user-attachments/assets/96a0060d-f3df-45b5-9a90-74d71944efa2)

![image](https://github.com/user-attachments/assets/806a9b51-9cd8-44b8-8f74-298d754c2da9)![image](https://github.com/user-attachments/assets/d2c6ba6f-dea8-44ab-87aa-aafd2009ff4a)
![image](https://github.com/user-attachments/assets/5cb2e691-9a46-4b8d-a083-13f03ca9c6ba)



