import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from "./utils/appStore"
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter=createBrowserRouter(
  [
      {
          path:"/",
          element:<Login/>
      },
      {
          path:"/browse",
          element:<App/>
      }
  ]
)
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
    </Provider>
    
  </React.StrictMode>
);

reportWebVitals();
