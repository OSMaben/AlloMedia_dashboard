import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import adminSlice from "../features/adminSlice";
import ordersSlice from "../features/ManagerSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    manager: ordersSlice
  },
});

export default store;
