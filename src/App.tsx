import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from './components/Loading';

const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages"));
const NotFound = lazy(() => import("./pages/notFound"));
const CarDetail = lazy(() => import("./pages/_id"));

function App(): JSX.Element {
  return (
    <Suspense fallback={<Loading/>}>
      <Header/>
      <Router>
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<CarDetail/>} path="/:id"/>
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Router>
      <Footer/>
    </Suspense>
  );
}

export default App;
