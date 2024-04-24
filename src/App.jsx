import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import HomePage from "./Pages/HomePage";
import DriversPage from "./Pages/DriversPage";
import BusinessPage from "./Pages/BusinessPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="DriversPage" element={<DriversPage />} />
      <Route path="BusinessPage" element={<BusinessPage />} />
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
