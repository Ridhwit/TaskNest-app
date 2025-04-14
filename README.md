# 📋 TaskNest

**TaskNest** is an **offline-first task management application** built using **Flutter** for the frontend and **Node.js** for the backend. It provides users with a seamless experience for managing their daily tasks, whether online or offline. The app intelligently syncs data with a remote database once connectivity is restored, ensuring no task is ever lost.

---

## 🚀 Overview

TaskNest allows users to:

- **Register & Log in** securely  
- Remain **logged in even after closing the app**  
- **Create, view, and manage tasks**  
- Access tasks organized **by date**  
- Perform all operations **offline**, with **auto-sync** when reconnected  

Built to be responsive, efficient, and user-friendly, TaskFlow ensures productivity is never compromised — regardless of network conditions.

---
##Demo
![Task App Auth](https://github.com/user-attachments/assets/92e28392-b18d-4c80-a17e-1ece728c3bf1)

![Task App working](https://github.com/user-attachments/assets/9f6358a9-eba4-41ae-9aff-6bb38f0e123a)


---
## 🎯 Business Objectives

- 📶 Provide a **reliable offline experience** for users  
- 🔒 Ensure **user session persistence** across app restarts  
- ⏱️ Optimize **task management for time efficiency**  
- 🔁 Enable **real-time synchronization** without user intervention  
- 📈 Target users who need **productivity tools in low or intermittent network zones**  
- 🛠️ Offer a scalable architecture for future enhancements (e.g., teams, notifications)  

---

## ✨ Features

- ✅ Sign up and login  
- ✅ Persistent login state (even after app restarts)  
- ✅ Create, update, and delete tasks  
- ✅ Organize tasks by **date**  
- ✅ Full functionality **offline**  
- ✅ **Automatic sync** of offline changes once reconnected  
- ✅ Friendly and minimalistic UI  

---

## 🛠 Technologies Used

### 👨‍💻 Frontend (Flutter)
- **Flutter SDK**
- Dart programming language
- Shared Preferences for local session storage
- Provider/Bloc (state management as per implementation)

### 🌐 Backend (Node.js)
- **Node.js** with **Express.js**
- MongoDB (NoSQL database)
- Mongoose for schema handling
- JSON Web Token (JWT) for authentication

---

## 📦 Packages & Dependencies

### 🐦 Flutter Packages
- `http`: for RESTful API requests  
- `shared_preferences`: to persist login state  
- `connectivity_plus: ^6.1.0`: to monitor internet connectivity  
- `uuid: ^4.5.1`: for generating unique task IDs  
- `flex_color_picker: ^3.6.0`: for customizable color selection (for tasks/themes)  
- `provider` or `flutter_bloc`: for state management  
- `sqflite` or `hive`: for local storage  
- `intl`: for date formatting  
- `flutter_bloc`: for efficient and scalable state management  

### ⚙️ Node.js Packages
- `express`  
- `mongoose`  
- `jsonwebtoken`  
- `cors`  
- `dotenv`  
- `bcryptjs` (for password hashing)  
- `nodemon` (dev environment)  

---

## 🔧 Possible Improvements

- 📱 Add **push notifications** for upcoming tasks  
- 🔔 Implement **reminder alerts** for due tasks  
- 🗂️ Add **categories/labels/tags** for tasks  
- 👥 Multi-user or team collaboration features  
- 📆 Calendar integration for a richer UI  
- 🌙 Dark mode support  
- 📊 Dashboard with productivity analytics  
- 🧪 Add more test coverage (unit, integration)  

---
