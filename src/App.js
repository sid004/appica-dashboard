import './App.css';
import Sidebar from './component/sidebar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './component/Dashboard';
import Order from './component/Orders';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Sidebar />
            <Dashboard/>
      </>
    },
    {
      path: "/order",
      element: <><Sidebar />
             <Order/> 
      </>
    }
  ])


  return (
    <div className='metrix-dashboard flex'>
      <RouterProvider router={router} />
      
      
    </div>

  );
}

export default App;
