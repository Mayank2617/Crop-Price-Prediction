# 🌾 Crop Price Prediction App

A full-stack web application that predicts crop prices using a Machine Learning model based on multiple environmental and agricultural parameters. This platform is designed to assist farmers, traders, and policymakers in making informed decisions with accurate and data-driven insights.

---

## 📌 Project Overview

This project combines the power of the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with a custom-trained **AI/ML model** to deliver real-time crop price predictions. The application allows users to register, log in, input relevant data, and receive predicted prices of crops through an intuitive and responsive user interface.

---

## ✨ Key Features

### 🔐 Authentication & Security
- User Registration and Login
- JWT-based authentication
- Protected routes for authorized access

### 📊 Prediction Functionality
- Predict crop prices based on:
  - Crop name
  - State
  - Month & Year
  - Humidity
  - Rainfall
  - Minimum and Maximum Temperature
- Uses a trained Machine Learning model to return results in real-time

### 💡 AI/ML Model Features
- Built with Python (scikit-learn, pandas, numpy)
- Trained on historical crop price and weather data
- Linear Regression model used for initial prototype
- Plans for advanced models like Random Forest or XGBoost
- Model integrated with backend for seamless prediction workflow

### 🧠 Insights & Usability
- Clean and responsive UI with React + TailwindCSS
- Simple input form with validations
- Smooth UX powered by React Hook Form
- (Coming Soon) Data visualizations for predicted vs actual trends

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- TailwindCSS
- React Hook Form
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- dotenv, bcrypt, cors

### Machine Learning
- Python
- scikit-learn
- pandas, numpy
- Jupyter Notebook or Flask API (for separate ML service)

---

## 📂 Folder Structure

```
CROPPRICEPREDICTION/
├── CPPFrontend/          # Frontend (React + Vite)
│   ├── pages/            # Pages like Register, Login, PredictCropPrice
│   └── ...               # TailwindCSS, assets, components
├── CPPBackend/           # Backend (Node + Express)
│   ├── models/           # Mongoose schemas
│   ├── routes/           # Route files (auth, protected)
│   ├── controllers/      # Logic for APIs
│   ├── middleware/       # JWT Auth Middleware
│   └── server.js         # Entry point for backend
├── MLModel/              # Python notebook and training scripts
│   └── crop_price_model.ipynb
└── README.md             # Project documentation
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend root (`CPPBackend`) with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/CROPPRICEPREDICTION.git
cd CROPPRICEPREDICTION
```

### 2. Setup Backend

```bash
cd CPPBackend
npm install
npm run dev
```

### 3. Setup Frontend

```bash
cd ../CPPFrontend
npm install
npm run dev
```

### 4. (Optional) Setup ML Model

```bash
cd ../MLModel
# Open Jupyter Notebook and run crop_price_model.ipynb
# OR start Flask server if you're serving model separately
```

---

## 🧪 Sample Inputs

| Field           | Example                 |
|----------------|--------------------------|
| Crop           | Wheat, Rice             |
| State          | Madhya Pradesh          |
| Month & Year   | April 2025              |
| Humidity       | 60                      |
| Rainfall       | 120                     |
| Min Temp       | 18                      |
| Max Temp       | 30                      |

---

## 📈 Future Enhancements

- 🌎 Geo-location based crop suggestions
- 📬 Email/SMS alerts for prediction updates
- 📉 Visual analytics (charts, graphs)
- 🤖 Model upgrade to ensemble or deep learning
- 🌐 Multilingual support
- 🏷️ Admin dashboard for model retraining and dataset updates

---

## 🤝 Contributing

We welcome contributions! If you have suggestions or ideas to improve the project, feel free to fork the repo, raise an issue, or open a pull request.

---

## 📃 License

This project is licensed under the MIT License.

---

## 📬 Contact

**Developer:** Mayank Sahu  
**LinkedIn:** [https://www.linkedin.com/in/mayanksahu](https://www.linkedin.com/in/mayanksahu)  
**GitHub Repo:** [https://github.com/your-username/CROPPRICEPREDICTION](https://github.com/your-username/CROPPRICEPREDICTION)

---
