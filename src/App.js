import Navbar from "./frontend/components/navbar/Navbar";
import Routing from "./frontend/components/routing/Routing";
import usedRoutes from "./frontend/components/routing/Routes";
import useScrollToTop from "./frontend/components/routing/ScrollToTop"; // Update this path
import Footer from "./frontend/components/footer/Footer";
import "./App.css";

function App() {
  useScrollToTop();
  return (
    <>
      <Navbar routes={usedRoutes} />
      <Routing routes={usedRoutes} />
      <Footer routes={usedRoutes} />
    </>
  );
}

export default App;
