import "./App.css";
import Login from "./pages/login";
import Register from "./pages/regester";
import Header from "./commeptes/Header";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
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
import Dashboard from "./admin/Dashboard";
import Notifications from "./commeptes/comepontesAdmin/Notifications";
import TablesDemande from "./commeptes/comepontesAdmin/TablesDemande";
import Mains from "./commeptes/comepontesAdmin/Mains";
import RegistrationForm from "./commeptes/comepontesAdmin/ContactForm";
import TablesResto from "./commeptes/comepontesAdmin/TablesResto";
import ProtectedRouteAdmin from "./gaurd/ProtectedRouteAdmin";
import Dashboards from "./pages/Dashboards";

//livreur
import DashboardLivreur from "./livreur/dashbord";
import NotificationsLiv from "./commeptes/componentLivreur/Notification";
import MainsLiv from "./commeptes/componentLivreur/Mains";
import OrderDetail from "./commeptes/componentLivreur/CommanDetail";
import CommndPending from "./commeptes/componentLivreur/CommandPending";
import AcceptedCommandes from "./commeptes/componentLivreur/CommandeAccepted";
import LivreurStatistics from "./commeptes/componentLivreur/CommandeStatistic";
import ProfilePage from './commeptes/componentLivreur/profile';
import Commandes from "./commeptes/componentLivreur/commandes";





function App() {
  const { error, status, isLogin } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  if (token) {
    isLogin ? null : dispatch(isLogins(token));
  }

  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dashboards />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRouteAdmin>
              <Dashboard />
            </ProtectedRouteAdmin>
          }
        />


        <Route path="/dashboard" element={<ProtectedRouteAdmin><Dashboard /></ProtectedRouteAdmin>}>

          <Route path="notifications" element={<Notifications />} />
          <Route index element={<Mains />} />
          <Route path="form" element={<RegistrationForm />} />
          <Route path="restoActive" element={<TablesResto />} />

        </Route>

        <Route path="/dashboard/livreur" element={<DashboardLivreur />}>
          <Route index element={<MainsLiv />} />

          <Route path="order-detail/:id" element={<OrderDetail />} />
          <Route path="order-pending" element={<CommndPending  />} />
          <Route path="commandes-accepted" element={<AcceptedCommandes />} />
          <Route path="statistique" element={<LivreurStatistics />} />
          <Route path="commandes" element={<Commandes />} />
          <Route path="profile" element={<  ProfilePage />} />
        </Route>


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

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
