import { NavLink } from "react-router-dom";

export const Loader = () => {
  return (
    <li className="bg-white">
        <div className="animate-pulse">
          <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>
          <div className="p-4">
            <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded mb-1 w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded mb-1 w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded mb-5 w-1/3"></div>
            <NavLink to="#" ariaLabel="Loading more information">
              <button className="w-full h-10 bg-gray-300 rounded flex items-center justify-center">
                <span className="sr-only">Loading...</span>
              </button>
            </NavLink>
          </div>
        </div>
      </li>
  );
};
