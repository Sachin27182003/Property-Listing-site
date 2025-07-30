# Property-Listing-site 🏢🏨
A  full-stack property listing platform where users can view, add, and manage real estate properties, including images and key details like location, price, area, and contacts info.
This project include an image upload feature using Cloudinary and a clean, responsive UI built with React and Tailwind CSS.
---

# Features 🚀
🏡 Add new property listings with image upload

🔍 Filter and search listings by location, type, etc.

📷 Upload property images (stored on Cloudinary)

📄 Property detail view with all relevant info

💬 Clean form validation and image preview before upload

🌐 Responsive and mobile-friendly UI

---

## 🛠️ Tech Stack

- **Frontend**: React (with TypeScript) + React Router + Tailwind CSS + html2canvas + jsPDF (for export/download feature)
- **Backend**: Express + MongoDB(Atlas) + Mongoose + Cloudinary (for image upload and storage) + multer (for handling file uploads)
---
## 🚀 Getting Started

📁 Folder Structure

```text
project-root/
├── backend/
│       ├──node_modules
│       ├── source/ 
│       │      ├── config/
│       │      │      ├── cloudinaryConfig.js
│       │      │      ├── dbConfig.js
│       │      │      └── serverConfig.js
│       │      ├── controllers/
│       │      │      └── propertyController.js
│       │      ├── Middleware/
│       │      │      └── multerMiddleware.js
│       │      ├── repositories/
│       │      │      └── propertyRepositories.js
│       │      ├── Routes/
│       │      │      └── router.js
│       │      ├── schema/
│       │      │      └── propertySchema.js
│       │      ├── services/
│       │      │      └── propertyService.js
│       │      ├── utils/
│       │      │      ├── appError.js
│       │      │      ├── BadRequestError.js
│       │      │      ├── internalServerError.js
│       │      │      ├── notFoundError.js
│       │      │      └── unAuthorisedError.js
│       │      └── index.js
│       ├── upload/
│       ├── .env
│       ├── .gitignore
│       ├── package-lock.json
│       ├── package.json 
├── frontend/
│   ├── node_modules
│   ├── public
│   │     ├── property.png
│   │     └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │      └── react.svg
│   │   ├── components/
│   │   │      ├── FilterBar.tsx
│   │   │      └── PropertyCard.tsx
│   │   ├── context/
│   │   │      ├── PropertyContext.ts
│   │   │      ├── PropertyProvider.ts
│   │   │      └── useProperties.ts
│   │   ├── pages/
│   │   │      ├── AddProperty.tsx
│   │   │      ├── Home.tsx
│   │   │      └── PropertyDetails.tsx
│   │   ├── types/
│   │   │      └── index.ts
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── .gitignore
│   ├── eslint.config.ts
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── README.md

```

## 📦 Installation

### 1️⃣ Clone the repository

```bash

✅ Prerequisites
Before you begin, make sure the following tools are installed on your system:

🔧 General Tools
Git
→ Download Git https://git-scm.com/downloads
→ Check: git --version

Node.js (v14 or newer) & npm
→ Download Node.js https://nodejs.org/en/download
→ Check: node -v, npm -v

🐍 Backend (Node) Specific

Make sure Ports 5173 and 5000 should be free

⚛️ Frontend (React + TypeScript) Specific
Internet connection to download npm packages

A modern browser (e.g., Chrome)

Now,
git clone https://github.com/Sachin27182003/Property-Listing-site.git
cd Property-Listing-site

▶️ Backend Setup (Node + Express – Windows/macOS/Linux)

cd property-listing-site-backend

Install dependencies
npm install

Create a .env file in the root of your backend directory and add:
PORT = 5000
DB_URL = 'your_mongodb_connection_string'
CLOUDINARY_CLOUD_NAME = your_cloud_name
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_API_SECRET = your_api_secret

Run the server
npm start
#Runs at: http://localhost:5000/

▶️ Start the Frontend (React + TypeScript) App

cd property-listing-site-frontend

# Install dependencies
npm install

# Start the server
npm run dev
#Runs at: http://localhost:5173/

```
---

🔄 API Endpoints
POST /api/properties
Add a new property with image

GET /api/properties
Get all properties

GET /api/properties/:id
Get a single property

Ensure you are sending multipart/form-data for image uploads.

```text
🧪 Sample JSON (property)
{
  "title": "3BHK Luxury Apartment",
  "description": "Spacious apartment with great view",
  "price": 9500000,
  "contact": "+91-9876543210",
  "location": "Delhi",
  "type": "Apartment",
  "bedrooms": 3,
  "bathrooms": 2,
  "area": 1450,
  "contact": "3265987463",
  "image": "image_file"
}
```

---

🙏 Thank You
Thank you for checking out the Property Listing Site!
We hope it helps you find, list, and manage real estate properties with ease and efficiency.

Feel free to fork, star ⭐, or contribute to make it even better!

--- 

This project is built with ❤️ to simplify property discovery and empower real estate experiences.
Happy coding and house hunting! 🏠🚀
---


