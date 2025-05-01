import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./component/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./component/ErrorPage";
import { CountryDetails } from "./component/CountryDetailsPage";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "", // ✅ Fix: Empty path for default child route
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
          path: "country/:id",
          element: <CountryDetails />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
