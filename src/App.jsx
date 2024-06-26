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
import BeingBuilt from "./Components/Features/BeingBuilt";
import PageNotFound from "./Components/Features/PageNotFound";
import BusinessPage from "./Pages/BusinessPage";
import Passing from "./Components/PassingPage/Passing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="DriversPage" element={<DriversPage />} />
      <Route path="BusinessPage" element={<BusinessPage />} />
      <Route path="PassingPage" element={<Passing />} />
      <Route path="*" element={<PageNotFound />} />
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
