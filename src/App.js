import Navbar from "./frontend/components/navbar/Navbar";
import Routing from "./frontend/components/routing/Routing";
import usedRoutes from "./frontend/components/routing/Routes";
import "./App.css";

function App() {
  return (
    <>
      <Navbar routes={usedRoutes} />
      <Routing routes={usedRoutes} />
    </>
  );
}

export default App;
