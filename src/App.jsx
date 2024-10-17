import "./App.css";
import Login from "./pages/login";
import Register from "./pages/regester";
import Header from "./commeptes/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VerfieOtp from "./pages/VerfieOtp";
import ForgetPassword from "./pages/ForgetPassword";
import UpdatPassword from "./pages/UpdatePassword";
import { useDispatch, useSelector } from "react-redux";
import { isLogins } from "./redux/features/authSlice";
import Profile from "./pages/Profile";
import ProtectedRoute from "./gaurd/ProtectedRouteProfile";
import ProtectedRoutAuth from "./gaurd/ProtectedRoutAuth";
import PasswordForm from "./commeptes/PasswordForm";
import About from "./commeptes/About";
import Search from "./pages/Search";

function App() {
  const { error, status, isLogin } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  console.log(token);

  if (token) {
    isLogin ? null : dispatch(isLogins(token));
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>


          <Route     
            path="/signin"
            element={
              <ProtectedRoutAuth>
                <Login />
              </ProtectedRoutAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoutAuth>
                <Register />
              </ProtectedRoutAuth>
            }
          />
          <Route
            path="/verfei"
            element={
              <ProtectedRoutAuth>
                <VerfieOtp />
              </ProtectedRoutAuth>
            }
          />
          <Route
            path="/forget-password"
            element={
              <ProtectedRoutAuth>
                <ForgetPassword />
              </ProtectedRoutAuth>
            }
          />

          <Route
            path="/updit-password"
            element={
              <ProtectedRoutAuth>
                <UpdatPassword />
              </ProtectedRoutAuth>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="modifier-password"
              element={
                <ProtectedRoute>
                  <PasswordForm />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
