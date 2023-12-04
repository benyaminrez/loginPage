import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login";
import Register, { registerAction } from "./features/identity/components/register";
import IdentityLayout from "./layouts/identity-layout";
import MainLayout from "./layouts/main-layout";
import Orders from "./pages/Orders";
const router = createBrowserRouter([
   {
path: '/',
element: <MainLayout/>,
children: [{
    element: <Orders/>,
    index: true
}]
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
    }
]);

    export default router