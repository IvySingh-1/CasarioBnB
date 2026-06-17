# 🏡 CasarioBnB

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018.x-green.svg)](https://nodejs.org)
[![Express Version](https://img.shields.io/badge/express-v5.x-blue.svg)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/database-MongoDB%20Atlas-emerald.svg)](https://www.mongodb.com)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

> **CasarioBnB** is a full-featured, end-to-end full-stack web application that serves as a premium property renting platform (inspired by Airbnb/Wanderlust). Users can explore diverse accommodations around the globe, listing their own rentals, post ratings and reviews, and view precise locations of properties on fully interactive maps.

---

## ✨ Key Features

- **🔒 Secure User Auth & Management**: Complete sign-up, login, and session-based logout flow powered by Passport.js with hashed credentials.
- **🛠️ Complete Listing CRUD**: Authenticated users can list new properties, edit their listing details, upload images, or delete their posts.
- **📸 Cloud Storage for Assets**: Uploaded property pictures are processed via Multer and stored directly on Cloudinary, keeping server storage lightweight.
- **🗺️ Location Geocoding & Interactive Maps**: Integrated forward geocoding with Geoapify to convert listing addresses into coordinates, displayed dynamically using MapLibre GL markers.
- **💬 Interactive Review & Star Rating System**: Guests can rate stays (1 to 5 stars) using an interactive star utility, complete with review comments and author attribution.
- **🛡️ Robust Authorization & Validation**: Route authorization checks (preventing non-owners from editing listings/reviews) and server-side payload validation using Joi schemas.
- **⚡ Cascade Deletion**: Deleting a property listing instantly cleans up all related review records from the database.

---

## 🚀 Tech Stack

### Backend & Database

- **Node.js** with **Express.js** (v5.x framework)
- **MongoDB & Mongoose (ODM)** for schema control
- **Connect-Mongo** for persisting login sessions to the database

### Frontend

- **EJS (Embedded JavaScript)** with **EJS-Mate** for page templates & reusable partial blocks
- **Bootstrap 5** for layout responsiveness
- **FontAwesome** for icons & typography
- **MapLibre GL** for map plotting

### APIs & Integrations

- **Cloudinary v2** (media storage)
- **Geoapify** (Geocoding API & Map Style sheets)
- **Axios** (outbound API requests)

---

## 📂 Project Architecture

```text
CasarioBnB/
├── app.js                 # App configuration & Server initialization
├── cloudConfig.js         # Cloudinary configuration
├── middleware.js          # Route protection & authorization checks
├── schema.js              # Joi server-side validation schemas
├── controllers/           # MVC Controllers (business logic)
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/                # Database schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/                # Endpoint routing
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/                # Client static assets (CSS/JS)
├── views/                 # HTML UI layouts & templates
└── init/                  # Database seeding script
```

---

## 🛠️ Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (either running locally or a MongoDB Atlas account)

### Setup & Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/IvySingh-1/CasarioBnB.git
    cd CasarioBnB
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and specify the following keys:

    ```env
    # Database
    ATLASDB_URL="your-mongodb-connection-string"
    SECRET="your-session-secret"

    # Cloudinary Integration
    CLOUD_NAME="your-cloudinary-name"
    CLOUD_API_KEY="your-cloudinary-api-key"
    CLOUD_API_SECRET="your-cloudinary-api-secret"

    # Mapping Service Integration
    MAP_TOKEN="your-geoapify-api-token"
    ```

4.  **Seed the Database (Optional):**
    If you want to initialize the database with pre-populated listings:

    ```bash
    node init/index.js
    ```

5.  **Run the Server:**
    ```bash
    node app.js
    ```
    Your application will start and be accessible at [http://localhost:8080](http://localhost:8080).

---

---

<div align="center">

Thank you for exploring this project.

⭐ **If you found value in it, consider starring the repository.**

<br>

Developed by **Ivy Singh**

📧 [ivysingh99@gmail.com](mailto:ivysingh99@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/ivysingh99/)

</div>
