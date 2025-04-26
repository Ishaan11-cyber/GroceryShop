# Green Cart - MERN E-commerce Application

A full-featured grocery e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js) with Stripe payment integration.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- User authentication and authorization
- Product browsing and searching
- Shopping cart functionality
- Order processing with Cash on Delivery option
- Secure payment integration with Stripe
- User profile and order history
- Admin dashboard for product and order management

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Processing**: Stripe
- **Image Storage**: Cloudinary
- **Deployment**: Vercel

## 🧰 Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB account
- Stripe account for payment processing
- Cloudinary account for image storage

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Green-Cart.git
   cd Green-Cart
   ```

2. Install dependencies for both client and server:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables as described in the section below.

## 🔐 Environment Variables

### Backend (.env in server directory)

Create a `.env` file in the server directory with the following variables:

```
# Server Configuration
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret

# Admin Credentials
SELLER_EMAIL=admin@example.com
SELLER_PASSWORD=your_secure_password

# Database
MONGODB_URI=your_mongodb_connection_string

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe Setup
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### Frontend (.env in client directory)

Create a `.env` file in the client directory with the following variables:

```
VITE_CURRENCY='$'
VITE_BACKEND_URL='http://localhost:4000'
```

## 🏃‍♂️ Running the Application

### Development Mode

1. Start the server:
   ```bash
   cd server
   nodemon server.js
   ```

2. In a separate terminal, start the client:
   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

   ```

## 🌐 Deployment

This application is configured for deployment on Vercel:

1. Deploy the backend as a Vercel serverless function
2. Deploy the frontend as a static site
3. Configure environment variables in the Vercel dashboard

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -am 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
