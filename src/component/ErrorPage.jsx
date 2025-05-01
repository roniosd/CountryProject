import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "./Button";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen  text-white">
      <img
        className="size-79 object-cover mb-6 rounded-lg shadow-lg"
        src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
        alt="Error img"
      />
      <p className="text-3xl font-extrabold text-center text-white drop-shadow-md">{error.statusText}</p>
      <p className="text-lg font-medium text-center text-white opacity-80">{`There were ${error.data} issues encountered`}</p>

      <div className="flex gap-6 mt-8">
        <Button className="bg-indigo-700 hover:bg-indigo-600 text-white shadow-md" onClick={() => navigate("/")}>Go Back Home</Button>
        <Button className="bg-indigo-700 hover:bg-indigo-600 text-white shadow-md" onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    </div>
  );
};
