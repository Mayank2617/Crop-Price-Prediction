# 🌾 Crop Price Prediction App

A full-stack web application that predicts crop prices based on environmental and geographical inputs. Built to help farmers, traders, and agricultural researchers make better decisions with data-driven insights.

# 🚀 Live Deployment  

👉 [Crop Price Prediction App](https://cpp-frontend-gamma.vercel.app/)

## 📊 Overview

- Trained on **85,000+ entries** from **6 years** of data, covering **200+ crops** across **30 Indian states**.
- Achieves **83% accuracy** using **XGBoost**, factoring in **weather and environmental conditions**.
- Includes a **Crop Advisory page** that provides **personalised, data-driven crop suggestions** based on region and season.

## 🚀 Features

- 🔐 User Authentication (JWT-based login and registration)
- 📈 Real-time crop price prediction
- 🌱 Personalized crop advisory based on input parameters
- 📦 API-based backend powered by a trained ML model
- 🎨 Modern, animated UI with responsive design

## 🧠 Technologies Used

- **Frontend:**
  - TypeScript
  - React.js
  - TailwindCSS
  - Vite

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT

- **Machine Learning:**
  - Python
  - scikit-learn
  - XGBoost

## 📁 Project Structure

```
Crop-Price-Prediction/
├── CPPFrontend/           # Frontend (React + Vite + TypeScript)
├── CPPBackendPlusModal    # Backend (Node.js + Express + MongoDB), Machine Learning models and scripts
```

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Mayank2617/Crop-Price-Prediction.git
cd Crop-Price-Prediction
```

### 2. Install Frontend Dependencies

```bash
cd CPPFrontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../Backend
npm install
```

### 4. Setup Environment Variables

Create a `.env` file in the `Backend` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Run the App

#### Backend:

```bash
cd Backend
npm run dev
```

#### Frontend:

```bash
cd CPPFrontend
npm run dev
```

## 📌 Usage

1. Register or login as a user.
2. Navigate to the **Crop Price Prediction** or **Crop Advisory** page.
3. Enter your region, crop, month, and environmental factors.
4. Click **Predict** to get price insights or recommendations.

## 📬 Contact

Made with ❤️ by [Mayank Sahu](https://github.com/Mayank2617)  
Feel free to open issues or contribute!

---
```
