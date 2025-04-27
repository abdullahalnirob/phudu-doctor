import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import App from "../App";
import Doctor from "../components/Doctor/Doctor";
import Contact from "../components/Pages/About/Contact";
import Blogs from "../components/Pages/Blogs/Blogs";
import MyBooking from "../components/Pages/MyBooking/MyBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/doctor/:id",
        loader: () => fetch("/doctorData.json"),
        element: <Doctor />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/my-booking",
        loader: () => fetch("/doctorData.json"),
        element: <MyBooking />,
      },
    ],
  },
]);
