# Modern E-commerce Store

This project is a modern e-commerce web application designed with a user-friendly interface and built using **React** with **TypeScript**. It includes features like product listing, cart functionality, and user authentication. The project uses **Tailwind CSS** for styling and **Vite** for building the application.

## Features

- **User Authentication**: Users can log in and manage their profiles.
- **Product Listing**: Display a variety of products with detailed information.
- **Shopping Cart**: Add products to the cart and manage quantities.
- **Responsive Design**: Fully responsive and mobile-friendly.
- **Optimized Performance**: Fast and optimized for modern web browsers.

## Technology Stack

- **Frontend**: 
  - [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/) for styling
- **Backend (API integration)**: 
  - Mock API provided via the `api.ts` file in the `lib` folder.
- **Build Tool**: 
  - [Vite](https://vitejs.dev/)
- **State Management**: 
  - [Redux Toolkit](https://redux-toolkit.js.org/)

## Project Structure

```plaintext
Modern-Ecommerce-store/
│
├── public/                         # Public files (index.html, etc.)
├── src/                            # Main application code
│   ├── components/                 # Reusable UI components
│   ├── pages/                      # Application pages (Home, Cart, Products, etc.)
│   ├── store/                      # Redux store and slices for state management
│   ├── lib/                        # Utility functions and API handlers
│   ├── App.tsx                     # Main app component
│   ├── index.css                   # Global styles
│   ├── main.tsx                    # Application entry point
│   └── vite-env.d.ts               # TypeScript configuration
│
├── .gitignore                      # Git ignore file
├── README.md                       # Project documentation (this file)
├── eslint.config.js                # ESLint configuration
├── index.html                      # Main HTML file
├── package.json                    # Project dependencies and scripts
├── tailwind.config.js              # Tailwind CSS configuration
├── vite.config.ts                  # Vite configuration file
└── tsconfig.json                   # TypeScript configuration
