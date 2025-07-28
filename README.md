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

## Tech Stack 🛠 
#Frontend 

React.js

React Router

Tailwind CSS

html2canvas and jspdf (for export feature)

#Backend 

Express.js

MongoDB (Atlas)

Mongoose

Cloudinary (for image upload and storage)

multer (for handling file uploads)

📁 Folder Structure

```text
project-root/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── tailwind.config.js
│   └── package.json
├── README.md
└── package.json
```

⚙️ Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/property-listing-app.git
cd property-listing-app
2. Backend Setup
Navigate to backend folder
bash
Copy
Edit
cd backend
Install dependencies
bash
Copy
Edit
npm install
Create a .env file:
env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Run backend
bash
Copy
Edit
npm run dev
3. Frontend Setup
Navigate to frontend folder
bash
Copy
Edit
cd frontend
Install dependencies
bash
Copy
Edit
npm install
Run frontend
bash
Copy
Edit
npm run dev
🔄 API Endpoints
POST /api/properties
Add a new property with image

GET /api/properties
Get all properties

GET /api/properties/:id
Get a single property

DELETE /api/properties/:id
Delete a property

Ensure you are sending multipart/form-data for image uploads.

🧪 Sample JSON (property)
json
Copy
Edit
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
  "image": "image_file"
}
🧩 Possible Improvements
User authentication (JWT based login/signup)

Favorites/bookmarked properties

Admin dashboard for property approvals

Map integration for geolocation

Pagination and sorting

Unit and integration testing (Jest, React Testing Library)

🤝 Contributing
Fork the repo

Create your feature branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add your feature')

Push to the branch (git push origin feature/your-feature)

Open a pull request

