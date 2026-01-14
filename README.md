# Stock Trading 

A full-stack stock market and financial news tracking application.

## Tech Stack
- Frontend: React, TypeScript, Vite
- Backend: Node.js, Express, TypeScript
- Database: MongoDB
- APIs: Yahoo Finance, NewsFilter
- Documentation: Swagger

Ahh okay — thanks for stopping me there 👍
You’re right, and good catch. Let’s **reset and do this cleanly**, *accurate to what you actually used*, not a dressed-up demo version.

Since you **used local MongoDB (not Atlas)**, here is a **corrected, minimal, honest GitHub setup section**. This is exactly what reviewers care about: *can I run it locally without guessing?*

---

# Get Started 🚀

## Prerequisites

* **Node.js** (v14.18 or higher)
* **MongoDB (local installation)**

  * Make sure the MongoDB service is running
* **Cloudflare Turnstile**

  * Required for authentication (free tier)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Intaza/Stock-Simulator.git
cd stotra
```

---

### 2. Install dependencies

Install NPM packages for both frontend and backend.

```bash
cd app
npm install
cd ../server
npm install
```

---

### 3. Environment Variables

Create a `.env` file inside the **`server`** directory and add the following:

```env
# Database
STOTRA_MONGODB_URI=mongodb://127.0.0.1:27017/stotra

# Auth
STOTRA_JWT_SECRET=<random string>
STOTRA_TURNSTILE_SECRET=<cloudflare turnstile secret>

# Optional (real-time data)
STOTRA_NEWSFILTER_API=<newsfilter api key>
STOTRA_ALPHAVANTAGE_API=<alphavantage api key>
```

> ⚠️ The `.env` file should **not** be committed to GitHub.

---

### 4. Run the application

Run frontend and backend in **separate terminals**.

#### Frontend

```bash
cd app
npm run dev
```

```
Local: http://localhost:5173/
```

#### Backend

```bash
cd server
npm run dev
```

```
Server running at http://localhost:3010
Swagger docs available at http://localhost:3010/api/docs
Connected to Database
```

---

## API Documentation 📄

Swagger UI:

```
http://localhost:3010/api/docs
```

---

## Technologies Used 💻

### Frontend

* React
* TypeScript
* Chakra UI
* Axios
* Highcharts

### Backend

* Node.js
* Express
* TypeScript
* MongoDB (local)
* Mongoose
* JWT
* Swagger

---

## Notes

* News and stock data depend on third-party APIs.
* Free APIs may introduce rate limits or downtime.
