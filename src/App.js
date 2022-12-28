import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
