import { lazy } from "react";

const NotFoundComponent = lazy(() => import("../components/NotFound"));

const NotFound = () => {
  return (
    <NotFoundComponent/>
  );
};

export default NotFound;
