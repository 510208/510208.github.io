import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// import { Home } from "./pages/Home";
// import { Friends } from "./pages/Friends";
// import { Projects } from "./pages/Projects";
import { ReactLenis } from "lenis/react";
import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";

const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);
const Friends = lazy(() =>
  import("./pages/Friends").then((module) => ({ default: module.Friends }))
);
const Projects = lazy(() =>
  import("./pages/Projects").then((module) => ({ default: module.Projects }))
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound }))
);

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setDisplayLocation(location);
          setTransitionStage("fadeIn");
        }
      }}
    >
      <Suspense fallback={<div>燒等一下下...</div>}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <>
      <ReactLenis root />
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
