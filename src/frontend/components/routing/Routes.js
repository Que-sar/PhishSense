import { lazy } from "react";

const Home = lazy(() => import("../../pages/Home"));
const Mission = lazy(() => import("../../pages/Mission"));
const ContactUs = lazy(() => import("../../pages/ContactUs"));
const Solutions = lazy(() => import("../../pages/Solutions"));
const News = lazy(() => import("../../pages/News"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const Article = lazy(() => import("../news/Article"));
const PrivacyPolicy = lazy(() => import("../privacy/Policy"));

const usedRoutes = [
  {
    path: "/news/:articleId",
    name: "Article",
    reference: "article",
    component: Article,
  },
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
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    reference: "privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "*",
    name: "Not Found",
    reference: "not-found",
    component: NotFound,
  },
];

export default usedRoutes;
