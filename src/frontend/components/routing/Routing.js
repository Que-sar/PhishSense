import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Spinner from "../news/Spinner";

const Routing = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<Spinner />}>
              <route.component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default Routing;
