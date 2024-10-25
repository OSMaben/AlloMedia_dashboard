import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const employees = [
  {
    name: "Alice Smith",
    email: "alice.smith@liverr.com",
    phone: "+1 234 567 891",
    status: "Active",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@liverr.com",
    phone: "+1 234 567 892",
    status: "Inactive",
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@liverr.com",
    phone: "+1 234 567 893",
    status: "Active",
  },
  {
    name: "Diana Prince",
    email: "diana.prince@liverr.com",
    phone: "+1 234 567 894",
    status: "Inactive",
  },
];

const EmployeeTable = () => {
  return (
    <div className="bg-white border overflow-x-auto border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      {/* Search bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Levreur Information
        </h2>
        <input
          type="text"
          placeholder="Search Manager..."
          className="py-2 px-2 bg-gray-50 outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
        />
      </div>

      {/* Table for displaying manager information */}
      <table className="w-full min-w-[540px] overflow-x-auto">
        <thead>
          <tr>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
              Manager Name
            </th>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default  uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Email
            </th>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default  uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Phone Number
            </th>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default  uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 hover:text-gray-700 duration-300 transition-all cursor-default "
            >
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt="manager photo"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    {employee.name}
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50 ">
                <span className="text-[13px] font-medium text-gray-400 hover:text-gray-700 duration-300 transition-all cursor-default ">
                  {employee.email}
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400 hover:text-gray-700 duration-300 transition-all cursor-default">
                  {employee.phone}
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-flex items-center">
                  {employee.status === "Active" ? (
                    <FaCheckCircle className="text-emerald-500 mr-1" />
                  ) : (
                    <FaTimesCircle className="text-red-500 mr-1" />
                  )}
                  <span
                    className={`font-medium text-[12px] ${
                      employee.status === "Active"
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {employee.status}
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
