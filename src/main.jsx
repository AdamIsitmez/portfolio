import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
