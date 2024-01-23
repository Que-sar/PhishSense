import { lazy } from "react";

const Home = lazy(() => import("../../pages/Home"));
const Mission = lazy(() => import("../../pages/Mission"));
const ContactUs = lazy(() => import("../../pages/ContactUs"));
const Solutions = lazy(() => import("../../pages/Solutions"));
const News = lazy(() => import("../../pages/News"));

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
