import Navbar from "./frontend/components/navbar/Navbar";
import Routing from "./frontend/components/routing/Routing";
import usedRoutes from "./frontend/components/routing/Routes";
import useScrollToTop from "./frontend/components/routing/ScrollToTop";
import Footer from "./frontend/components/footer/Footer";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

function App() {
  useScrollToTop();
  return (
    <HelmetProvider>
      <Navbar routes={usedRoutes} />
      <Routing routes={usedRoutes} />
      <Footer routes={usedRoutes} />
    </HelmetProvider>
  );
}

export default App;
