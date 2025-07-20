# Hosted link :https://idyllic-crepe-12721b.netlify.app/
# 📘 Angular User Directory Dashboard

A mini Angular 19 app that fetches and displays users from an API, supports searching, sorting, pagination, and lazy-loaded user details.

---

## 🚀 Live Features

- ✅ View users in a responsive table (mobile/desktop)
- ✅ Filter users by name or email
- ✅ Sort by name or company (asc/desc)
- ✅ Pagination
- ✅ Lazy-loaded User Detail route
- ✅ Responsive UI with mobile-optimized layout

---

## 🔧 Project Setup

Install Angular 19 CLI (if not already):

```bash
npm install -g @angular/cli@19
```

Create the app and install dependencies:

```bash
ng new user-directory-dashboard --routing --style=scss
cd user-directory-dashboard
npm install
```

---

## ▶️ Run the App

```bash
ng serve
```

App will run at `http://localhost:4200`

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── components/
│   │   ├── user-list/
│   │   │   ├── user-list.component.ts/html/scss
│   │   └── (UI Components)
│   ├── user-detail/
│   │   ├── user-detail.component.ts/html/scss
│   │   └── user-detail.module.ts  (Lazy-loaded)
│   ├── services/
│   │   └── user.service.ts
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   └── app.component.ts
```

---

## 🌐 API Used

Fetching users from:  
**`https://jsonplaceholder.typicode.com/users`**

---

## 🧠 Component Structure & Functionality

### 🔹 `UserListComponent`
- Fetches all users from API via `UserService`
- Supports:
  - Searching by name/email
  - Sorting by name or company
  - Pagination
  - Routing to user details

### 🔹 `UserDetailComponent`
- Lazy-loaded module
- Displays full user information fetched using route `id`

### 🔹 `UserService`
- `getUsers()` → Fetches all users
- `getUserById(id)` → Fetches a single user by ID
- Centralized HTTP error handling

---

## 📦 State Management

Uses **local component state** via `@Component` variables. No external state management library (like NgRx) is used, as the data flow is simple.

---

## ❗ HTTP Error Handling

HTTP calls use `catchError()` from RxJS in the service. Errors are logged in the console and handled gracefully to avoid breaking the app.

---

## 🧪 How to Improve Further

- Add Angular Material for enhanced UI
- Add unit & integration tests using Jasmine/Karma
- Use `NgRx` for complex state if scaling the app
- Improve accessibility (ARIA roles)
- Add server-side pagination support (if backend allows)

---

## 📝 Assumptions & Notes

- The app is fully client-side
- Data comes from a placeholder API and is not editable
- Designed to be simple, readable, and easy to extend
