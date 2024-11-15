import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Cart from './util/pages/Cart';
import Login from './util/pages/Login';
import ContactUs from './util/pages/ContactUs';
const Body = React.lazy(() => import('./component/Body'));

const root = ReactDOM.createRoot(document.getElementById('root'));
   
  const routers=createBrowserRouter([
        {
          path:'/',
          element:<App/>,
          children:[
            {
              path:'/cart',
              element:<Cart/>
            },
            {
              path:'/',
              element: <Suspense fallback={<h1>Loading...</h1>} ><Body/></Suspense> 
            },
            {
              path:'/login',
              element:<Login/>
            },
            {
              path:'/contact',
              element:<ContactUs/>
            }
          ]
        }
      ])

root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
