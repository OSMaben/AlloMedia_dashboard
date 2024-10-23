import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import {
  addNotification,
  getListNotification,
} from "../../redux/features/adminSlice";
const Notifications = () => {
  const dispatch = useDispatch();
  const { error, status, isLoading, resturs, restoCounter, ListNotification } =
    useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getListNotification());
  }, [dispatch]);
  console.log(ListNotification);

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
  }, []);

  return (
    <section className="flex flex-col flex-1 p-4 w-full min-w-[300px]  bg-gray-50 h-[80vh] overflow-auto">
      <h1 className="font-semibold mb-3">Notifications</h1>
      <ul>
        {ListNotification.map((item) => (
          <li key={item._id}>
            <article
              tabIndex={0}
              className="cursor-pointer border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-400 focus:outline-none focus:border-blue-500"
            >
              <span className="flex-none pt-1 pr-2">
                <img
                  className="h-8 w-8 rounded-md"
                  src="https://via.placeholder.com/150"
                  alt="User avatar"
                />
              </span>
              <div className="flex-1">
                <header className="mb-1">
                  <span className="font-semibold">John Doe</span> sent you a
                  message
                </header>
                <p className="text-gray-600">{item.message}</p>
                <footer className="text-gray-500 mt-2 text-sm">
                  Today at 10:15 AM
                </footer>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notifications;
