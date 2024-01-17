import Home from "../../pages/Home";
import About from "../../pages/About";
import ContactUs from "../../pages/ContactUs";
import Solutions from "../../pages/Solutions";
import News from "../../pages/News";

const usedRoutes = [
  {
    path: "/",
    name: "Home",
    reference: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "About us",
    reference: "about",
    component: About,
  },
  {
    path: "/solutions",
    name: "Solutions",
    reference: "solutions",
    component: Solutions,
  },
  {
    path: "/news",
    name: "News",
    reference: "news",
    component: News,
  },
  {
    path: "/contact-us",
    name: "Contact us",
    reference: "contact-us",
    component: ContactUs,
  },
];

export default usedRoutes;
