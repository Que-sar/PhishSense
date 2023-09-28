import { Routes, Route } from "react-router-dom";

const Routing = (props) => {
  const routes = props.routes;
  const routeMaps = routes.map((route) => (
    <Route key={route.path} path={route.path} element={<route.component />} />
  ));

  return <Routes>{routeMaps}</Routes>;
};

export default Routing;
