import {Router, RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from "./Components/Login"
import AccountPage from "./Components/AccountPage"
function App() {

  let appRoute=createBrowserRouter([{
   path:"",
   element:<Login/>,
   errorElement:<>something went wrong</>,
   children:[
     {
       path:"/",
       element:<Login/>
     }
      
   ]
 }])
 return (

   <RouterProvider router={appRoute}/>
 )

  
  
}

export default App
