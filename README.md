# redis-news-caching-layer
# 📰 Redis News Caching Layer

A high-performance microservice-based news app that implements **Redis caching** to reduce API call latency and improve user experience. This project demonstrates the use of Redis as a caching layer for a Node.js backend serving news data to a Nuxt.js frontend.

## 🚀 Features

- 🔁 **Redis Caching** for external news API results
- ⚡ **Ultra-fast response time** for cached headlines
- 📱 **Frontend built with Nuxt.js**
- 📡 **Backend using Node.js and Express**
- 🔌 **Microservices architecture**
- 📊 **Real-time testing** of API call durations
- 🧪 **Toast notifications** and smooth UI interactions using Tailwind CSS + PrimeVue

## 📸 Screenshots

### 🔍 Search and News Display
![Search UI](/assets/screenshots/news-search-ui.png)

### 📰 Headline View with Redis Cache
![Headline Display](/assets/screenshots/headline-display.png)

### 💾 Redis Logs (Backend)
![Redis Cache Logs](/assets/screenshots/redis-logs.png)

> All screenshots are taken from actual usage with cropped highlights of key UI components.

## 🛠️ Installation

bash
# 1. Clone the repository
git clone https://github.com/Bully26/redis-news-caching-layer.git
cd redis-news-caching-layer

# 2. Start Redis (use Docker or install locally)
docker run --name redis -p 6379:6379 -d redis

# 3. Backend setup
cd backend
npm install
node index.js

# 4. Frontend setup
cd frontend
npm install
npm run dev

🧪 Usage Guide

    Click on category tabs (e.g., business, entertainment) to trigger cached or new API calls.

    Enter keywords in the search bar to fetch relevant news.

    Observe reduced API response time if data is cached.

📚 Tech Stack

    Frontend: Nuxt.js + Tailwind CSS + PrimeVue

    Backend: Node.js, Express

    Caching: Redis

    Hosting-ready with Docker support

🤝 Contributing

Contributions are welcome! Fork the repo and submit a pull request.
