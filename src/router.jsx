/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login";
import Register, { registerAction } from "./features/identity/components/register";
import IdentityLayout from "./layouts/identity-layout";
import MainLayout from "./layouts/main-layout";
import Orders, { ordersLoader } from "./pages/orders";
import ProductsCategories, { categoriesLoader } from "./pages/products-categories";
import OrderDetails, { orderDetailsLoader } from "./features/orders/components/order-details";
import { CategoryProvider } from "./features/categories/category-context";
import NotFound from "./pages/not-found";


const router = createBrowserRouter([
   {
path: '/',
element: <MainLayout/>,
errorElement: <NotFound/>,
children: [
    {
        element: <Orders/>,
        index: true,
    loader: ordersLoader
},
{
    path: 'courses/:id',
    element: <OrderDetails/>,
    loader: orderDetailsLoader
},
{
    path:"/products-categories",
    element:
    <CategoryProvider>
        <ProductsCategories/> 
    </CategoryProvider>,
    loader: categoriesLoader
},
]
   },
   {
        element: <IdentityLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>,
                action: loginAction,
                errorElement: <Login/>
            },
            {
                path: 'register',
                element: <Register/>,
                action: registerAction,
                errorElement: <Register/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);

    export default router