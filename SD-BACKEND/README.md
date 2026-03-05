# MediSetu - Backend API ⚙️

This is the central Express/Node server that handles data persistence, authentication, and cloud processing for the MediSetu platform.

## 🛠️ Built With
*   **Node.js & Express.js** - Blazing-fast REST API routing.
*   **MongoDB & Mongoose** - Document-driven Non-SQL Database.
*   **JWT & Bcrypt** - Secure authentication/encryption mechanics.
*   **Cloudinary & Multer** - Handled real-time stream storage for images.

## 🔑 Environment Variables
You will need to create a `.env` file in this directory based on the following template before starting:

```env
PORT=3000
MONGODB_URI=your_mongodb_cluster_string
JWT_SECRET=your_super_secret_string
ADMIN_EMAIL=admin@medisetu.com
ADMIN_PASSWORD=your_admin_password

# Cloudinary Setup
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 🚀 Running the Server Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the hot-reload nodemon server:
   ```bash
   npm run server
   ```

## 🛡️ Middlewares & Protective Security
*   `middlewares/authuser.js`: Validates bearer tokens mapping patients dynamically.
*   `middlewares/authadmin.js`: Secures highly-sensitive administrative REST operations (like Adding Doctors).
*   `middlewares/Multer.js`: Buffers image memory off-disk straight into Cloudinary via *streamifier*.
