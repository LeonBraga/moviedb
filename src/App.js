import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyList from "./routes/myList";
import Profile from "./routes/profile";
import Search from "./routes/search";
import Home from "./routes/Home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "mylist",
        element: <MyList />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App" data-testid="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
