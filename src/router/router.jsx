import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";  
import Gallery from "../Page/gallery"; 

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,  
  },
   {
    path: "/gallery",
    element: <Gallery/>,  
  },

]);

export default router;  
