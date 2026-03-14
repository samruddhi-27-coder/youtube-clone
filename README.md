
⸻

📺 YouTube Clone (Full Stack Video Platform)

A full-stack YouTube-style video sharing platform built using modern web technologies.
This project replicates many core features of the real YouTube including video upload, streaming, likes, comments, watch pages, and a responsive UI.

The goal of this project is to demonstrate full-stack development skills including:
	•	Frontend UI development
	•	Backend API development
	•	Database integration
	•	Video file handling
	•	REST API design
	•	Full-stack architecture

⸻

🌍 Live Architecture

Frontend (React + Vite)
        │
        │ REST API
        ▼
Backend (Node.js + Express)
        │
        │ Database queries
        ▼
MongoDB Database
        │
        │ Video storage
        ▼
Uploads Folder


⸻

🧠 Key Features

🎥 Video Upload

Users can upload videos with:
	•	title
	•	description
	•	category
	•	thumbnail
	•	video file

The backend stores:
	•	metadata in MongoDB
	•	video files in server storage

⸻

▶ Video Streaming

Videos are streamed using the HTML5 video player.

Features:
	•	play / pause
	•	seek bar
	•	volume control
	•	fullscreen

⸻

📺 Watch Page

Each video has a dedicated watch page similar to YouTube.

Includes:
	•	video player
	•	title
	•	description
	•	view count
	•	like & dislike buttons
	•	comments section
	•	recommended videos

⸻

👍 Like / Dislike System

Users can interact with videos using:
	•	👍 Like
	•	👎 Dislike

Likes and dislikes are stored in MongoDB.

⸻

💬 Comments System

Users can post comments under each video.

Features:
	•	add comment
	•	view all comments
	•	stored in database
	•	linked to video ID

⸻

🔎 Search System

Search bar allows users to find videos using keywords.

⸻

🧭 Navigation

Navigation system includes:
	•	Home page
	•	Trending
	•	Subscriptions
	•	Music
	•	Gaming

⸻

🧱 Tech Stack

Frontend
	•	React
	•	Vite
	•	JavaScript (ES6)
	•	CSS
	•	Tailwind CSS
	•	React Router

Frontend responsibilities:
	•	UI rendering
	•	routing
	•	video display
	•	user interaction

⸻

Backend
	•	Node.js
	•	Express.js
	•	REST APIs
	•	Multer (file uploads)

Backend responsibilities:
	•	API handling
	•	video uploads
	•	database queries
	•	video metadata management

⸻

Database
	•	MongoDB
	•	Mongoose ORM

Stores:
	•	videos
	•	users
	•	comments
	•	likes
	•	dislikes

⸻

📁 Project Structure

youtube-clone
│
├── youtube-clone-backend
│
│   ├── models
│   │     Video.js
│   │     User.js
│   │     Comment.js
│   │
│   ├── routes
│   │     video.js
│   │     auth.js
│   │     playlist.js
│   │
│   ├── uploads
│   │     videos
│   │     thumbnails
│   │
│   ├── server.js
│   └── package.json
│
│
├── youtube-clone-frontend
│
│   ├── src
│   │
│   │   ├── components
│   │   │     Navbar.jsx
│   │   │     Sidebar.jsx
│   │   │     VideoCard.jsx
│   │   │
│   │   ├── pages
│   │   │     Home.jsx
│   │   │     Watch.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── public
│   └── package.json
│
└── README.md


⸻

⚙ Installation Guide

Clone the repository:

git clone https://github.com/YOUR_USERNAME/youtube-clone.git

Navigate to the project folder:

cd youtube-clone


⸻

🖥 Backend Setup

Navigate to backend folder:

cd youtube-clone-backend

Install dependencies:

npm install

Start backend server:

node server.js

Server will run on:

http://localhost:5002


⸻

🖥 Frontend Setup

Navigate to frontend folder:

cd youtube-clone-frontend

Install dependencies:

npm install

Run development server:

npm run dev

Open in browser:

http://localhost:5173


⸻

📡 API Endpoints

Upload Video

POST /api/video/upload


⸻

Get All Videos

GET /api/video


⸻

Get Single Video

GET /api/video/:id


⸻

Add Comment

POST /api/video/comment


⸻

Get Comments

GET /api/video/comments/:videoId


⸻

Like Video

PUT /api/video/like/:id


⸻

Dislike Video

PUT /api/video/dislike/:id


⸻

📸 UI Pages

Home Page

Displays:
	•	video grid
	•	thumbnails
	•	titles
	•	views

⸻

Watch Page

Displays:
	•	video player
	•	title
	•	description
	•	comments
	•	recommended videos

⸻

🗃 Database Schema

Video Schema

title
description
category
videoUrl
thumbnail
views
likes
dislikes
createdAt


⸻

Comment Schema

videoId
text
createdAt


⸻

🚀 Future Improvements

Planned features:
	•	user authentication
	•	channel pages
	•	subscriptions
	•	notifications
	•	playlists
	•	video recommendations
	•	video analytics
	•	live streaming

⸻

🧑‍💻 Author

Samruddhi Bhaskar Mohite
Third Year Engineering Student

⸻

⭐ Acknowledgment

This project is inspired by the design and functionality of YouTube and built as a learning project for full-stack development.

⸻

📜 License

This project is for educational purposes only.

⸻

ook extremely professional to recruiters.
