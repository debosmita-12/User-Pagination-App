# User Pagination App

A modern and responsive **React + Vite** web application that fetches user data from the **Random User API** and displays it using **client-side pagination**. The application is built with reusable React components, a custom data-fetching hook, and a clean user interface.

---

##  Overview

This project was developed as part of the **SRM University-AP Mid Semester Full Stack Development assignment**. It demonstrates the implementation of API integration, reusable custom hooks, React state management, and client-side pagination using modern React practices.

---

##  Features

-  Fetches **100 users** from the Random User API
-  Displays **10 users per page**
-  Loading indicator while fetching data
-  Displays:
  - Profile Picture
  - Full Name
  - Email Address
  - Country
-  Previous Page Navigation
-  Next Page Navigation
-  Direct Page Number Navigation
-  Active Page Highlighting
-  Fully Responsive Design
-  Reusable Custom Hook (`useFetch`)
-  Built using React Functional Components & Hooks

---

##  Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend Library |
| Vite | Build Tool |
| JavaScript (ES6+) | Programming Language |
| CSS3 | Styling |
| Random User API | User Data |
| React Hooks | State & Lifecycle Management |

---

##  Project Structure

```
pagination-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Pagination.jsx
│   │   └── UserCard.jsx
│   │
│   ├── hooks/
│   │   └── useFetch.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

##  Installation

### Clone the Repository

```bash
git clone https://github.com/debosmita-12/User-Pagination-App.git
```

### Navigate to the Project

```bash
cd User-Pagination-App
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

##  API Used

This project uses the **Random User API**.

```
https://randomuser.me/api/?results=100
```

---

##  Learning Outcomes

This project helped reinforce:

- React Functional Components
- React Hooks (`useState`, `useEffect`)
- Custom Hooks
- REST API Integration
- Client-Side Pagination
- State Management
- Component Reusability
- Responsive UI Design
- Clean Project Structure

---

##  Assignment Requirements Covered

- ✔ Fetch user data from API
- ✔ Loading State
- ✔ Display 10 Users Per Page
- ✔ Previous / Next Navigation
- ✔ Page Number Navigation
- ✔ Active Page Highlighting
- ✔ Custom Hook (`useFetch`)
- ✔ Responsive Layout
- ✔ React Hooks
- ✔ Clean Component Structure

---

##  Future Improvements

-  Search Users
-  Dark Mode
-  Users Per Page Selector
-  Sorting Users
-  Favorite Users
-  User Details Modal
-  Theme Switcher
-  Framer Motion Animations

---

##  Author

**Debosmita Mukhopadhyay**

- GitHub: https://github.com/debosmita-12
- LinkedIn: www.linkedin.com/in/debosmita-mukhopadhyay-3b508a324

---


##  License

This project is created for educational purposes as part of the **SRM University-AP Full Stack Development**.
