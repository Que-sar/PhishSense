/*
import React from "react";
import { Routes, Route } from "react-router-dom";

const Routing = (props) => {
  const routes = props.routes;
  const routeMaps = routes.map((route) => (
    <Route key={route.path} path={route.path} element={<route.component />} />
  ));

  return <Routes>{routeMaps}</Routes>;
};

export default Routing;
    */
import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

const Routing = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <route.component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default Routing;
