import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogins } from "./redux/features/authSlice";

// Importing components
import Login from "./pages/Login";
import Register from "./pages/regester";
import Header from "./commeptes/Header";

import Home from "./pages/home/Home";

import VerfieOtp from "./pages/VerfieOtp";
import ForgetPassword from "./pages/ForgetPassword";
import UpdatPassword from "./pages/UpdatePassword";
import Profile from "./pages/Profile";
import ProtectedRoute from "./gaurd/ProtectedRouteProfile";
import ProtectedRoutAuth from "./gaurd/ProtectedRoutAuth";
import PasswordForm from "./commeptes/PasswordForm";
import About from "./commeptes/About";
import Dashboards from "./pages/Dashboards";
import GestionairDashboard from "./pages/GestionairDashboard"
import ProtectedRouteAdmin from "./gaurd/ProtectedRouteAdmin";
import Notifications from "./commeptes/comepontesAdmin/Notifications";
// import TablesDemande from "./commeptes/comepontesAdmin/TablesDemande";
import ProtectedRouteGestionair from "./gaurd/ProtectedRouteGestionair"
import Mains from "./commeptes/comepontesAdmin/Mains";
import RegistrationForm from "./commeptes/comepontesAdmin/ContactForm";
import TablesResto from "./commeptes/comepontesAdmin/TablesResto";
import Search from "./pages/RestaurantSearch";
import Cart from "./pages/Cart";
import RestaurantDetails from "./pages/RestaurantDetails";
import Dashboard from "./admin/Dashboard";
import DashboardLivreur from "./livreur/dashbord";
import NotificationsLiv from "./commeptes/componentLivreur/Notification";
import MainsLiv from "./commeptes/componentLivreur/Mains";
import OrderDetail from "./commeptes/componentLivreur/CommanDetail";
import CommndPending from "./commeptes/componentLivreur/CommandPending";
import AcceptedCommandes from "./commeptes/componentLivreur/CommandeAccepted";
import LivreurStatistics from "./commeptes/componentLivreur/CommandeStatistic";
import ProfilePage from "./commeptes/componentLivreur/profile";
import Commandes from "./commeptes/componentLivreur/commandes";
import PageNotFound from "./pages/404"
import AdminProfile from "./commeptes/comepontesAdmin/AdminProfile";
import MainAdmin from "./commeptes/comepontesAdmin/MainAdmin";

function App() {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  if (token) {
    isLogin ? null : dispatch(isLogins(token));
  }

  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isManager = location.pathname.startsWith("/Manager");

  return (
    <>
      {!isDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRouteAdmin>
              <Dashboards />
            </ProtectedRouteAdmin>
          }
        >
         
          <Route index element={<MainAdmin />} />
          <Route path="form" element={<RegistrationForm />} />
          <Route path="restoActive" element={<TablesResto />} />
          <Route path="admin" element={<AdminProfile />} />
        </Route>
        <Route
          path="/Manager"
          element={
            <ProtectedRouteGestionair>
              <GestionairDashboard />
            </ProtectedRouteGestionair>
          }
        ></Route>

        <Route path="/search" element={<Search />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/admin" element={<AdminProfile />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRouteAdmin>
              <Dashboard />
            </ProtectedRouteAdmin>
          }
        >
          <Route index element={<MainAdmin />} />
          <Route path="form" element={<RegistrationForm />} />
          <Route path="restoActive" element={<TablesResto />} />
          <Route path="admin" element={<AdminProfile />} />
        </Route>

        <Route path="/dashboard/livreur" element={<DashboardLivreur />}>
          <Route index element={<MainsLiv />} />

          <Route path="order-detail/:id" element={<OrderDetail />} />
          <Route path="order-pending" element={<CommndPending />} />
          <Route path="commandes-accepted" element={<AcceptedCommandes />} />
          <Route path="statistique" element={<LivreurStatistics />} />
          <Route path="commandes" element={<Commandes />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

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

        <Route
          path="/updit-password"
          element={
            <ProtectedRoutAuth>
              <UpdatPassword />
            </ProtectedRoutAuth>
          }
        />
      </Routes>
    </>
  );
}

// Wrapped App component with BrowserRouter
export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
