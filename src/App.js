import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'
import Brands from './Components/Brands/Brands'
import Cart from './pages/Cart/Cart'
// import Products from './pages/Products/Products'
import Categories from './Components/Categories/Categories'
import HomePage from './pages/HomePage/HomePage'
import Login from './pages/Login/Login'
import { CounterContextProvider } from './Context/CounterContex'
import Register from './pages/Register/Register'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import NotFound from './pages/NotFound/NotFound'
import { CartContextProvider } from './Context/CartContext'
import  { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Profile from './Components/Profile/Profile'
import OnlineForm from './Components/OnlineForm/OnlineForm'
import AllOrders from './pages/AllOrders/AllOrders'
import CategoryDetails from './pages/CategoryDetails/CategoryDetails'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/Store'

let routes= createBrowserRouter([
{path:'',element:<LayOut/>, children:[
  {index:'true' , element:<ProtectedRoute><HomePage/></ProtectedRoute>},
  {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
  {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
  // {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
  {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
  {path:'profile' , element:<ProtectedRoute><Profile/></ProtectedRoute>},
  {path:'onlineForm' , element:<ProtectedRoute><OnlineForm/></ProtectedRoute>},
  {path:'allorders' , element:<ProtectedRoute><AllOrders/></ProtectedRoute>},
  {path:'categoryDetails/:id' , element:<ProtectedRoute><CategoryDetails/></ProtectedRoute>},
  {path:'details/:id' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
  {path:'register' , element:<Register/>},
  {path:'login' , element:<Login/>},
  {path: '*', element:<NotFound/>}
]}

])

function App() {
  let query =new QueryClient()
  return (
    <Provider store={store}>
    <QueryClientProvider client={query}>
    <CartContextProvider>
    <UserContextProvider>
<CounterContextProvider>
      <RouterProvider router={routes} ></RouterProvider>
    </CounterContextProvider>
      <Toaster/>
    </UserContextProvider>
    <ReactQueryDevtools initialIsOpen={false}>

    </ReactQueryDevtools>
    </CartContextProvider>
    </QueryClientProvider>
    </Provider>
  )
}

export default App