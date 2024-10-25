import React from "react";

const Notifications = () => {
  return (
    <section className="flex flex-col flex-1 p-4 w-full min-w-[300px]  bg-gray-50 min-h-0 overflow-auto">
      <h1 className="font-semibold mb-3">Notifications</h1>
      <ul>
        <li>
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
              <p className="text-gray-600">
                "Hi, just wanted to follow up on the last project update..."
              </p>
              <footer className="text-gray-500 mt-2 text-sm">
                Today at 10:15 AM
              </footer>
            </div>
          </article>
        </li>

      </ul>
    </section>
  );
};

export default Notifications;
