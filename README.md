# Book Store - Full Stack MERN Project

Welcome to the Book Store project! This is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). The project aims to create an online bookstore where users can browse, search for, and purchase books from various retailers.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)


## Features

- User Authentication: Sign up, log in, and log out functionality.
- Retailer Dashboard: Retailers can list their books, update their profile, and view sales.
- User Dashboard: Users can browse books, add them to the cart, and make purchases.
- Book Listings: Display books with details such as title, author, price, and cover image.
- Shopping Cart: Users can add and remove books from their shopping cart.
- Wishlist: Users can save books to their wishlist for later purchase.
- Ratings and Reviews: Users can rate and review books.
- Search Functionality: Search for books by title, price, availability, or genre.
- Responsive Design: The application is responsive and works on various screen sizes.

## Technologies Used

- **Frontend**:
  - React: JavaScript library for building user interfaces.
  - Redux: State management library for React applications.
  - Axios: HTTP client for making API requests.
  - Tailwind CSS: CSS framework for styling.

- **Backend**:
  - Node.js: JavaScript runtime for server-side development.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing book and user data.
  - Mongoose: MongoDB object modeling for Node.js.
  - JSON Web Tokens (JWT): For user authentication.


## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/fuad-miftah/Book-Store.git
2. Navigate to the project directory:
   
   cd book-store
   
4. Install dependencies for the server and frontend:

    cd server
    npm install
    cd ../frontend
    npm install

5. Configure environment variables:

    Create a .env file in the server directory and add this
        DB_URL = 
        PORT = 5555
        JWT = 
6. Start the server and client:

    # In the server directory
    npm run dev

    # In the client directory
    npm start

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature-name.
3. Make your changes and commit them: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature-name.
5. Create a pull request with a description of your changes.
   
