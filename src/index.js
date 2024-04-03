import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*import './reset.css';*/
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import Nahuatl from './routes/Nahuatl';
import Espanol from './routes/Espanol';
import Ingles from './routes/Ingles';
import Agradecimientos from './routes/Agradecimientos';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path:'/nahuatl' ,
    element: <Nahuatl />,
  },
  {
    path:'/espanol',
    element: <Espanol />,
  },
  {
    path:'/ingles',
    element: <Ingles />,
  },
  {
    path:'/agradecimientos',
    element: <Agradecimientos />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
