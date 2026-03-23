🚀 Job Portal Web Application

A full-stack job portal application built using **React, Node.js, Express, and PostgreSQL**, where users can apply for jobs and recruiters (admins) can manage job postings and applications.

---

## 🌟 Features

### 👤 User Side

* View available job listings
* Apply for jobs
* View applied jobs in **My Applications**
* Track application status (Applied / Selected / Rejected)

### 🧑‍💼 Admin Side

* Add new job postings
* View all applications
* Accept or Reject candidates
* Manage job workflow

### 🔐 Authentication

* Login system with role-based access

  * Admin → Admin Dashboard
  * User → Job List & Applications

---

## 🛠️ Tech Stack

### Frontend

* React.js
* CSS (Custom Styling)

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

---

## 📂 Project Structure

```
Full Stack Project/
│
├── backend/
│   ├── server.js
│   └── database config
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── JobList.js
│   │   ├── Dashboard.js
│   │   ├── AdminDashboard.js
│   │   └── Login.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/SohilJain897/Job-portal-project.git
cd Job-portal-project
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
node server.js
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

### 4️⃣ Database Setup (PostgreSQL)

Create tables:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password TEXT,
  role TEXT
);

CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  company TEXT,
  role TEXT,
  description TEXT
);

CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  user_id INT,
  job_id INT,
  status TEXT DEFAULT 'Applied'
);
```

---

## 🔥 Key Learning Highlights

* Built a **full-stack MERN-style project (with PostgreSQL)**
* Implemented **REST APIs**
* Designed **role-based authentication**
* Managed **state + backend synchronization**
* Created **admin workflow system**
* Applied **clean UI/UX principles**

---

## 📌 Future Improvements

* JWT Authentication
* File upload (resume)
* Company logos & job detail page
* Search & filter jobs
* Deployment (Vercel + Render)

---

## 👨‍💻 Author

**Sohil Jain**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it motivates me to build more!
