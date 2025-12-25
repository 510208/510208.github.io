import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { Equipments } from "./pages/Equipments";
import { About } from "./pages/About";

const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);
const Friends = lazy(() =>
  import("./pages/Friends").then((module) => ({ default: module.Friends }))
);
const Projects = lazy(() =>
  import("./pages/Projects").then((module) => ({ default: module.Projects }))
);
const BlogPosts = lazy(() =>
  import("./pages/BlogPosts").then((module) => ({ default: module.BlogPosts }))
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound }))
);
const DashBoard = lazy(() =>
  import("./pages/DashBoard").then((module) => ({ default: module.DashBoard }))
);
const Loading = lazy(() =>
  import("./components/section/loading").then((module) => ({
    default: module.default,
  }))
);

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setShowLoading(true); // 每次切換都先顯示 loading
    const timer = setTimeout(() => setShowLoading(false));
    return () => clearTimeout(timer);
  }, [location]);

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
      {showLoading ? (
        <Suspense fallback={null}>
          <Loading />
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/equipments" element={<Equipments />} />
            <Route path="/blog-posts" element={<BlogPosts />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
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
