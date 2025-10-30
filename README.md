## React Account Manager

This is a simple React-based Account Management App that allows users to register, log in, update their profile, and log out. all using browser localStorage. Built with React, React Router, and Bootstrap.
The project was built to demonstrate understanding of React fundamentals, state management, routing, and localStorage-based persistence.
---

## 🔴Live Demo
🔗 [View Live Project](https://flashtap-c7rm5ln1m-shubhams-projects-84579036.vercel.app/)

---

## Features
- **User Registration** – Create a new account with first name, last name, email, and password
- Login – Securely log in using registered credentials
- **Account Page** – View and edit your profile information
- **LocalStorage Integration** – Data is stored and managed directly in browser storage (no backend)
- **Bootstrap UI** – Clean and responsive design using the latest version of Bootstrap
- **Error Handling** – Alerts for invalid input, password mismatches, and login failures
- **Reusable Components** – Modular structure with shared input, button, and alert components
- **Routing** – Navigation handled with react-router-dom
---

---
## Technologies Used

| Technology | Purpose |
|----------|----------|
| React (v18) | Component-based UI |
| React Router DOM (v6) | Page navigation |
| Bootstrap 5 | Responsive styling |
| LocalStorage | Persistent data storage |
| JavaScript (ES6) | Application logic |

---

## How it works
#### 1. Register Page
 - User fills details and data saved in localStorage under "users" array.
#### 2. Login Page
 - Verifies credentials -> stores active user in "loggedInUser" → redirects to Account page.

#### 3. Account Page
 - Loads "loggedInUser" details on page.
 - User can update details -> updates both "users" and "loggedInUser" in storage.
#### 4. Logout
 - Logout removes "loggedInUser" and redirects to login.


---
## Setup

1. Clone the repository:
  ```bash
   git clone https://github.com/shubham-kumar012/react-account-manager.git
   cd react-account-manager
  ```

2. Install dependencies
```bash
   npm install
  ```

3. Start the development server
```bash
npm run dev
```
- The app will run locally at - http://localhost:5173 (if using Vite)
--- 


---



## Author🙋‍♂️
**Name:**  Shubham Kumar

**Email:** shubhampal7083@gmail.com

**Github:** [shubham-kumar012](https://github.com/shubham-kumar012)

**LinkedIn:** [Shubham Kumar](https://linkedin.com/in/shubham-kumar-111041267)


