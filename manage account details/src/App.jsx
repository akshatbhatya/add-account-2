import AccountPage from "./Components/AccountPage"
import Login from "./Components/Login"
import Store from "./Components/Store/Store"
import { Provider } from "react-redux"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

function App() {


  let routerpage = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <>no Page Found </>
    },
    {
      path: "/account",
      element: <AccountPage />,
      errorElement: <>no Page Found </>
    }

  ])
  return (
    <Provider store={Store}>
      <RouterProvider router={routerpage} />
    </Provider>
  )


}

export default App
