import { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthLayout from "./Layouts/AuthLayout";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import BasicLayout from "./Layouts/MainLayout";
import UserProfile from "./components/UserProfile ";
import UsersPage from "./pages/Users";

function App() {
  const [user, setUser] = useState({
    id: "12345",
    firstName: "User",
    lastName: "Userenko",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    isMale: true,
    email: "userUserenko@example.com",
    password: "supersecurepassword123",
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<UserProfile user={user} />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          {/* '/auth/login */}
          <Route path="login" element={<LoginPage />} />
          {/* '/auth/registration */}
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
