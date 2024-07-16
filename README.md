# TrueKart E-Commerce Platform

TrueKart is a robust and user-friendly e-commerce platform designed to deliver a seamless shopping experience for users while providing an efficient management system for vendors. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.
[Link to TrueKart]()

## Table of Contents

- [System Architecture](#system-architecture)
- [Front-end](#front-end)
- [Back-end](#back-end)
- [API Design](#api-design)
- [Deployment](#deployment)

---

## System Architecture

The TrueKart e-commerce platform follows a client-server architecture with the following main components:

- **Front-end**: Built with ReactJS, it communicates with the back end using RESTful API calls.
- **Back-end**: Developed with NodeJS and ExpressJS, it handles user authentication, product management, order processing, and more.
- **Database**: Utilizes MongoDB as a NoSQL database to store product details, user data, and order information.

---

## Front-end

The front end of TrueKart is built with ReactJS, offering a dynamic and responsive user interface for shoppers and vendors. Here are some key pages and functionalities:

**For Shoppers:**

- **Homepage**: Introduction to the platform with featured products.
- **Product List**: List of available products with descriptions and ratings.
- **Product Details**: Detailed view of each product with options to add to cart or wishlist.
- **Cart Checkout**: Complete product purchase using various payment methods.
- **Order History**: View past orders and their status.
- **User Profile**: Account information and order management.

**For Vendors:**

- **Dashboard**: Overview of vendor's products and sales.
- **Product Management**: Create, update, delete products.
- **Order Management**: View and manage orders received.
- **Profile Management**: View and edit account details.

Front-end tools and technologies include ReactJS, CSS, Tailwind CSS, Redux for state management, and VSCode for development. Additionally, npm packages are used to add extra functionality to the front end.

---

## Back-end

The back end of TrueKart is built with NodeJS and ExpressJS and uses MongoDB as its primary database. Key features and functionalities include:

- **User Authentication and Authorization**: Secure login, JWT token management, and forgot password functionality.
- **Product Management**: Vendors can create, update, delete products, and shoppers can view and rate them.
- **Order Processing**: Management of orders from creation to fulfillment.
- **Payment Integration**: Integration with payment gateways for seamless transactions.
- **Cloud-based Media Management**: Cloudinary for storing and managing product images and other media content.

**Frameworks, libraries, and tools used**: Node.js, MongoDB, Express.js, JWT for authentication and authorization, Bcrypt for password hashing, and Mongoose for database interaction.

### Data Models and Database Schema

- **User Schema**: Includes name, email, password, and order details.
- **Vendor Schema**: Includes name, email, password, and product details.
- **Product Schema**: Includes product name, description, price, vendor details, and media content.
- **Order Schema**: Includes product details, user details, order status, and payment information.

---

## API Design

TrueKart's API follows the REST architectural style, implemented using Node.js and Express.js. It uses JSON for data exchange and standard HTTP request methods. Sample API endpoints include:

- `POST /api/auth/signup`: Create a new user account.
- `POST /api/auth/login`: Log in and generate a JWT token.
- `POST /api/auth/forgot-password`: Send a password reset link.
- `GET /api/products`: Get a list of all available products.
- `GET /api/products/:id`: Get details of a specific product.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update an existing product.
- `DELETE /api/products/:id`: Delete a product.
- `POST /api/orders`: Create a new order.
- `GET /api/orders/:id`: Get details of a specific order.
- `PUT /api/orders/:id`: Update an existing order.
- `DELETE /api/orders/:id`: Delete an order.

Sample API requests and responses:
- `GET /api/products`: Get all products
- Response: A list of all products in the database
- `GET /api/products/:id`: Get a single product by ID
- Response: The product with the specified ID
- `POST /api/products`: Create a new product
- Request: The product details in the request body
- Response: The newly created product
- `PUT /api/products/:id`: Update an existing product by ID
- Request: The updated product details in the request body
- Response: The updated product
- `DELETE /api/products/:id`: Delete a product by ID
- Response: A success message indicating that the product has been deleted

---

## Deployment

TrueKart is deployed on various cloud-based services:

- Front-end: Vercel for static site hosting.
- Back-end: Render or Railway for Node.js and MongoDB hosting.
- Media Files: Cloudinary for media content storage.
- Database: MongoDB Atlas for database hosting.

This infrastructure ensures scalability, security, and reliability.

---

Thank you for using TrueKart!
