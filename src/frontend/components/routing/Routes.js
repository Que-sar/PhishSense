import Home from "../../pages/Home";
import Mission from "../../pages/Mission";
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
    path: "/mission",
    name: "Mission",
    reference: "mission",
    component: Mission,
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
    name: "Contact Us",
    reference: "contact-us",
    component: ContactUs,
  },
];

export default usedRoutes;
