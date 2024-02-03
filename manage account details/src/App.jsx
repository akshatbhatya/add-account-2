import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from "./Components/Login"
import AccountPage from "./Components/AccountPage"
function App() {

  let routerOfElement = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement:<>page not Found</>
    },
    {
      path: "/account",
      element: <AccountPage />,
      errorElement:<>page not Found</>
  }

    
])
  return (
    <>
    
    <RouterProvider router={routerOfElement}/>
  
    </>
  )
}

export default App
