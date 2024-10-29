import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import formattedDate from "../../utils/formateData";
import { io } from "socket.io-client";
import {
  addNotification,
  getListNotification,
} from "../../redux/features/adminSlice";

const Notifications = () => {
  const dispatch = useDispatch();
  const { error, status, isLoading, ListNotification } = useSelector(
    (state) => state.admin
  );
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        await dispatch(getListNotification());
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchNotifications();
  }, [dispatch]);

  useEffect(() => {
    const socket = io("http://localhost:8080", {
      query: { role: "admin" },
    });

    socket.on("connect", () => {
      console.log(`Connected with ID: ${socket.id}`);
    });

    socket.on("newRestaurantNotification", (data) => {
      console.log("New Restaurant Notification:", data);
      dispatch(addNotification(data));
    });

    socket.on("disconnect", (reason) => {
      console.log(`Disconnected from server: ${reason}`);
    });

    return () => {
      socket.off("connect");
      socket.off("newRestaurantNotification");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, [dispatch]);

  if (loading) {
    return <div>Loading notifications...</div>; // Loading indicator
  }

  return (
    <section className="flex flex-col flex-1 p-4 w-full min-w-[300px] bg-gray-50 h-[80vh] overflow-auto">
      <h1 className="font-semibold mb-3">Notifications</h1>
      <ul aria-live="polite">
        {" "}
        {/* Accessibility for screen readers */}
        {ListNotification.length === 0 ? (
          <li>No notifications available.</li> // Message for no notifications
        ) : (
          ListNotification.map((item) => (
            <li key={item._id}>
              <article
                tabIndex={0}
                className="cursor-pointer border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-400 focus:outline-none focus:border-blue-500"
              >
                <span className="flex-none pt-1 pr-2">
                  <img
                    className="h-8 w-8 rounded-md"
                    src={item.managerId.imgProfile.url}
                    alt="User avatar"
                  />
                </span>
                <div className="flex-1">
                  <header className="mb-1">
                    <span className="font-semibold">{item.managerId.name}</span>
                  </header>
                  <p className="text-gray-600">
                    A new restaurant has been created with the name{" "}
                    <strong>{item.message}</strong>
                  </p>
                  <footer className="text-gray-500 mt-2 text-sm">
                    {formattedDate(item.createdAt)}
                  </footer>
                </div>
              </article>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default Notifications;
