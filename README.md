# 🗳️ Election Education Assistant

An interactive, gamified web application that educates users about the **Indian election system** — including timelines, processes, constitutional frameworks, and civic responsibilities. Built with React + Vite and deployed on Google Cloud Run.

---

## 🌐 Live Demo

https://election-education-assistant-463667389889.asia-south1.run.app/)

---

## ✨ Features

- 🧠 **AI-Powered Chat** — Ask any question about Indian elections and get instant, informative answers
- 📅 **Election Timeline** — Visual, interactive timeline of the Indian electoral process from announcement to result
- 🎯 **Quiz / Flashcards** — Gamified learning with multiple-choice questions and flashcard-style civic facts
- 🏛️ **Constitutional Context** — Covers ECI, Model Code of Conduct, EVMs, NOTA, and more
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast & Modern UI** — Built with React 19, smooth animations, and a premium dark-mode design

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 19 + Vite 8 |
| Routing | React Router DOM v7 |
| Icons | Lucide React |
| Styling | Vanilla CSS (custom design system) |
| Build Tool | Vite |
| Containerization | Docker + Nginx |
| Deployment | Google Cloud Run |

---

## 📁 Project Structure

```
elec/
├── public/
│   ├── favicon.svg          # App favicon
│   └── icons.svg            # SVG icon assets
├── src/
│   ├── assets/              # Static images and SVGs
│   ├── components/
│   │   ├── Chat.jsx         # AI chat interface component
│   │   ├── Quiz.jsx         # Quiz / flashcard component
│   │   └── Timeline.jsx     # Election timeline component
│   ├── App.jsx              # Root app component with routing
│   ├── App.css              # App-level styles
│   ├── index.css            # Global design system & CSS variables
│   └── main.jsx             # React entry point
├── Dockerfile               # Multi-stage Docker build (Node → Nginx)
├── nginx.conf               # Nginx config for SPA routing
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher
- [Docker](https://www.docker.com/) (for containerized deployment)

### 1. Clone the Repository

```bash
git clone https://github.com/Yaswanth-Vissamsetty/election-education-assistant.git
cd election-education-assistant
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## 🐳 Docker

### Build the Docker Image

```bash
docker build -t election-assistant .
```

### Run the Container Locally

```bash
docker run -p 8080:8080 election-assistant
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## ☁️ Deploying to Google Cloud Run

### Prerequisites

- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed
- A Google Cloud project (Project ID: `prompt2-495011`)
- Docker installed and running

### Step-by-Step Deployment

#### 1. Authenticate with Google Cloud

```bash
gcloud auth login
gcloud config set project prompt2-495011
```

#### 2. Enable Required APIs

```bash
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

#### 3. Build & Push Image to Google Container Registry

```bash
gcloud builds submit --tag gcr.io/prompt2-495011/election-assistant
```

#### 4. Deploy to Cloud Run

```bash
gcloud run deploy election-assistant \
  --image gcr.io/prompt2-495011/election-assistant \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

#### 5. Get the Service URL

```bash
gcloud run services describe election-assistant \
  --platform managed \
  --region us-central1 \
  --format 'value(status.url)'
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🇮🇳 About Indian Elections

This app covers key aspects of the Indian electoral system including:

- **Election Commission of India (ECI)** — The independent body that oversees free and fair elections
- **Lok Sabha Elections** — General elections held every 5 years for the lower house of Parliament
- **Model Code of Conduct** — Guidelines that govern political parties and candidates during elections
- **Electronic Voting Machines (EVMs)** — Used across India since 1998 for secure, tamper-proof voting
- **NOTA** — "None Of The Above" option available to voters since 2013
- **Voter ID (EPIC)** — Electoral Photo Identity Card issued by ECI
- **Delimitation** — Periodic redrawing of constituency boundaries based on census data

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add: your feature description"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Yaswanth Vissamsetty**  
GitHub: [@Yaswanth-Vissamsetty](https://github.com/Yaswanth-Vissamsetty)

---

> *"An informed voter is the foundation of a strong democracy."* 🇮🇳
