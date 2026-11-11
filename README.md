# Employee Management Dashboard (NexaHR)

A professional SaaS-style **Employee Management Dashboard** built with **React + Vite**, **Bootstrap 5** and **Bootstrap Icons**. The application demonstrates core React concepts required by the assignment: **list rendering with `map()`**, **unique keys**, **conditional rendering**, **boolean state**, and the **ternary operator**.

## Demo Login Credentials

| Field    | Value               |
| -------- | ------------------- |
| Email    | `admin@example.com` |
| Password | `admin123`          |

## Technologies Used

- **React 19** — UI library (functional components + hooks)
- **Vite 8** — Development server and build tool
- **Bootstrap 5** — Responsive grid, forms, buttons, badges, cards, utilities
- **Bootstrap Icons** — Icon set used across the UI
- **Custom CSS** — `index.css` (global styles) and `App.css` (component styles)
- **React Hooks** — `useState` for all state management

## Features

### Login Page

- Branded split-screen card (navy brand panel + white form panel)
- Email and password inputs with **form validation** (empty-field errors)
- **Show / hide password** toggle button
- **Remember me** checkbox (visual only)
- **Invalid credentials error message**
- Demo credentials hint box
- Successful login renders the dashboard **without a page reload**

### Dashboard (Home)

- **Top navbar** — brand, employee search, notification icon (visual only), admin profile, logout button
- **Navy sidebar** — Overview, Employees, Departments, Reports, Settings (with active-item highlighting)
- **Welcome heading** with time-based greeting and current date
- **Four statistics cards**, all dynamically derived from the employee data:
  - Total Employees
  - Active Employees
  - Departments
  - New Employees (joined with 1 year or less of experience)
- **Employee section** — search input, department filter, responsive card grid, status badges
- Live status summary chips in the welcome header (Active / On Leave counts)

### Employee List

- `employees.map()` renders every employee dynamically (no repeated JSX)
- Every card has a unique `key={employee.id}`
- **Search** filters by name, email or role
- **Department filter** (departments derived from the data)
- **Empty state** with a clear-filters action when nothing matches
- Each card shows name, email, age, city, role, department, experience and status

### Responsive Design

- Sticky navy sidebar on desktop; slide-in off-canvas sidebar with backdrop on tablet/mobile
- Bootstrap grid columns adapt across desktop, tablet and mobile breakpoints
- No horizontal overflow

## Project Structure

```
rect-2/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── Navbar.jsx        # Top navbar (search, notifications, profile, logout)
    │   ├── Sidebar.jsx      # Navy navigation sidebar
    │   ├── Login.jsx        # Login form with validation + demo credentials
    │   ├── Home.jsx         # Dashboard layout (stats + employee section)
    │   ├── EmployeeList.jsx # Search, department filter, grid, empty state
    │   ├── EmployeeCard.jsx # Single employee card
    │   └── StatsCard.jsx    # Single statistic card
    ├── data/
    │   └── employees.js     # 10 employee objects (sample data)
    ├── App.jsx              # Conditional rendering: Login vs Home
    ├── App.css              # Component/layout styles + media queries
    ├── index.css            # Global styles, theme variables, form styling
    └── main.jsx             # Entry point (imports Bootstrap CSS + Icons)
```

## Installation

1. Make sure **Node.js 18+** is installed.
2. Clone or download this project, then open a terminal in the project root.

```bash
npm install
```

This installs all dependencies, including `bootstrap` and `bootstrap-icons`.

## How to Run

```bash
npm run dev
```

Open the printed URL (default `http://localhost:5173`) in your browser and sign in with the demo credentials.

### Production Build

```bash
npm run build
npm run preview
```

## Core Concepts Explained

### List Rendering (`map()` and Unique Keys)

All employee UI is generated dynamically from the data array — there is no hand-written repeated JSX. This happens in `src/components/EmployeeList.jsx`:

```jsx
{filteredEmployees.map((employee) => (
  <div className="col-12 col-sm-6 col-xl-4" key={employee.id}>
    <EmployeeCard employee={employee} />
  </div>
))}
```

- `filteredEmployees` is produced with `Array.filter()`, combining the search query (name, email or role) and the department filter.
- `key={employee.id}` gives React a stable, unique identity for every rendered item, enabling efficient re-renders when the list changes.
- Sidebar navigation items and statistic cards are also rendered with `map()` + unique keys.

### Conditional Rendering (Boolean State + Ternary Operator)

The entire authentication flow lives in `src/App.jsx` using a single boolean state:

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false)

const handleLogin = () => setIsLoggedIn(true)
const handleLogout = () => setIsLoggedIn(false)

return (
  <div className="app">
    {isLoggedIn ? (
      <Home employees={employees} onLogout={handleLogout} />
    ) : (
      <Login onLogin={handleLogin} />
    )}
  </div>
)
```

- When `isLoggedIn` is `false`, the `Login` component is rendered.
- When the demo credentials are submitted, `setIsLoggedIn(true)` flips the boolean and the **ternary operator** swaps the UI to `Home` — **no browser reload** and no routing library.
- The logout button in the navbar calls `onLogout`, which sets the state back to `false` and returns to the login page.
- Callbacks are passed **down through props** (`onLogin`, `onLogout`), and employee data is passed from `App` → `Home` → `EmployeeList` / `StatsCard` → `EmployeeCard`.
- Additional conditional rendering is used for the login error alert, the password visibility toggle, the mobile sidebar backdrop, and the employee empty state.

## Component Overview

| Component         | Responsibility                                | Key props                                        |
| ----------------- | --------------------------------------------- | ------------------------------------------------ |
| `App`             | Auth boolean state + ternary switch           | —                                                |
| `Login`           | Form state, validation, demo credential check | `onLogin`                                        |
| `Home`            | Layout, statistics, shared search state       | `employees`, `onLogout`                          |
| `Navbar`          | Search, notifications, profile, logout        | `searchQuery`, `onSearchChange`, `onLogout`, ... |
| `Sidebar`         | Navigation with active item                  | `isOpen`, `onClose`                              |
| `StatsCard`       | One statistic card                            | `icon`, `label`, `value`, `variant`              |
| `EmployeeList`    | Filtering logic + grid + empty state          | `employees`, `searchQuery`, `onSearchChange`     |
| `EmployeeCard`    | One employee card                             | `employee`                                        |

## Screenshots

> Capture these screenshots into a `screenshots/` folder and update the links before submission.

| Screenshot | What to capture |
| ---------- | --------------- |
| ![Login page](screenshots/login.png) | Login page with demo credentials hint |
| ![Login validation](screenshots/login-validation.png) | Login form with empty-field validation errors |
| ![Login error](screenshots/login-error.png) | Login form with invalid credentials error |
| ![Dashboard](screenshots/dashboard.png) | Dashboard with navbar, sidebar, welcome header and stats cards |
| ![Employee list](screenshots/employees.png) | Employee card grid with status badges |
| ![Search filter](screenshots/search.png) | Search box filtering employees by name/email/role |
| ![Department filter](screenshots/department-filter.png) | Department filter applied (e.g. Engineering) |
| ![Empty state](screenshots/empty-state.png) | "No employees found" empty state |
| ![Mobile layout](screenshots/mobile.png) | Mobile view with hamburger menu / open sidebar |

## Notes

- No routing library is used on purpose — the assignment evaluates conditional rendering with boolean state and the ternary operator.
- All statistics are calculated from `src/data/employees.js`, never hard-coded.
- The notification bell, remember-me checkbox and forgot-password link are visual-only by assignment design.
