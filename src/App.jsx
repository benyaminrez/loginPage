import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom'
import router from './router'
//import "/css/styles.css"
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import  "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
function App() {


  return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  )
}

export default App
