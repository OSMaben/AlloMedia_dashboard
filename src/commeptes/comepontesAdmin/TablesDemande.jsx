import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  accepterResto,
  getRestoPending,
  refuseResto,
} from "../../redux/features/adminSlice";

const TablesDemande = () => {
  const dispatch = useDispatch();
  const { error, status, isLoading, resturs, restoCounter } = useSelector(
    (state) => state.admin
  );
  useEffect(() => {
    dispatch(getRestoPending());
  }, [restoCounter]);

  const acceptedResto = (id) => {
    dispatch(accepterResto({ id }));
  };

  const refuserResto = (id) => {
    dispatch(refuseResto({ id }));
  };

  return (
    <section aria-label="" className="flex flex-col border-l flex-1">
      <nav className="bg-gray-50 flex p-4 items-center">
        <section
          aria-labelledby="pending-restaurants-label"
          className="mr-4 focus:outline-none"
        >
          <label
            id="pending-restaurants-label"
            className="font-semibold block mb-1 text-sm"
          >
            Restaurants Awaiting Approval
          </label>
        </section>
        <div className="ml-auto w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search Restaurants..."
            className="border rounded-md px-3 py-2 leading-none w-full sm:w-auto"
          />
        </div>
      </nav>

      <header className="bg-gray-50 border-t flex items-center py-1 px-4">
        <div className="flex">
          <h2 id="content-caption" className="font-semibold">
            Tickets requiring your attention (6)
          </h2>
        </div>
      </header>

      <section className="flex-1  bg-gray-50 px-4 w-full">
        <table
          aria-describedby="info-popup"
          aria-label="restaurants management"
          className="border-t   overflow-x min-w-[600px] md:min-w-[800px] w-full"
        >
          <thead className="flex w-full flex-col">
            <tr className="border-b flex">
              <th className=" text-left py-3 px-2 w-full ">Restaurant Name</th>
              <th className=" text-left py-3 px-2 w-full ">Status</th>
              <th className=" text-left py-3 px-2 w-full ">Manager</th>
              <th className=" text-left py-3 px-2 w-full ">Cuisine</th>
              <th className=" text-left py-3 px-2 w-full ">Actions</th>
            </tr>
          </thead>
          <tbody className="flex w-full flex-col flex-1 min-h-0">
            {resturs?.map((item, index) => (
              <tr key={item._id} className="border-b flex">
                <td className="relative py-3 px-2 w-full sm:w-1/5">
                  <div className="relative group">
                    <span className="truncate flex items-center gap-1">
                      {/* {item.logo.url && (
                        <img
                          className="w-8 h-8 rounded-full"
                          src={item.logo.url}
                          alt="John Doe"
                        />
                      )} */}

                      {item.restoname}
                    </span>
                    <div className="absolute left-0 hidden group-hover:block bg-white border rounded shadow-md p-2 z-10">
                      A fine dining experience with gourmet cuisine and
                      exquisite service.
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2 w-full sm:w-1/5 truncate text-gray-600">
                  Pending
                </td>
                <td className="relative py-3 px-2 w-full sm:w-1/5 max-w-xs xl:max-w-lg">
                  <div className="relative group">
                    <span className="truncate">John Doe</span>
                    <div className="absolute left-0 hidden group-hover:block bg-white border rounded-lg shadow-md p-4 z-10 max-w-xs mx-auto">
                      <div className="flex flex-col gap-2 w-max">
                        <div className="flex gap-2 items-center">
                          <img
                            className="w-8 h-8 rounded"
                            src="https://via.placeholder.com/150"
                            alt="John Doe"
                          />
                          <h3 className="text-sm font-bold text-gray-600">
                            John Doe
                          </h3>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            <strong>Role:</strong> Manager
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Email:</strong> john@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2 w-full sm:w-1/5 truncate">Italian</td>
                <td className="py-3 px-2 w-full sm:w-1/5 truncate">
                  <button
                    className="text-green-500 hover:underline"
                    onClick={() => acceptedResto(item._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="text-red-500 hover:underline ml-2"
                    onClick={() => refuserResto(item._id)}
                  >
                    Refuse
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default TablesDemande;
