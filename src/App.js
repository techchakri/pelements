import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Body from "./components/main/Body";
import Login from "./components/auth/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "",
          element: <Body />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
