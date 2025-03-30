import './App.css';
import Home from "./Components/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Components/DashBoard/Login";
import DashBoard from "./Components/DashBoard/DashBoard";

function App() {
  const appRouter=createBrowserRouter([
      {
          path:'/',
          element:<Home/>
      },
      {
          path:'/login',
          element:<Login/>,
      },
      {
          path:'/dashboard',
          element:<DashBoard/>
      }

  ])

    return (
    <div className="font-robotoMono relative min-h-screen">
      <div className="fixed inset-0 -z-10 bg-black">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/24/03/41/starry-sky-2675322_960_720.jpg"
          alt="bg"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
