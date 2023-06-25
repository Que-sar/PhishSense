import Navbar from "./components/navbar/Navbar";
import Routing from "./components/routing/Routing";
import usedRoutes from "./components/routing/Routes";
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
