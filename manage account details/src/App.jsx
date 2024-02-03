import AccountPage from "./Components/AccountPage"
import Login from "./Components/Login"
import Store from "./Components/Store/Store"
import { Provider } from "react-redux"

import { Link, RouterProvider, createBrowserRouter } from "react-router-dom"

function App() {


  let routerpage = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <div className="mt-48 flex items-center gap-3 flex-col">
        <h2 className=" text-red-600">something Went Wrong</h2>
        <Link to={"/"}><button className="text-center bg-green-500 text-white px-3">Home</button></Link>
      </div>
    },
    {
      path: "/account",
      element: <AccountPage />,
      errorElement: <div className="mt-48 flex items-center gap-3 flex-col">
        <h2 className=" text-red-600">something Went Wrong</h2>
        <Link to={"/"}><button className="text-center bg-green-500 text-white px-3">Home</button></Link>
      </div>
    }

  ])
  return (
    <Provider store={Store}>
      <RouterProvider router={routerpage} />
    </Provider>
  )


}

export default App
