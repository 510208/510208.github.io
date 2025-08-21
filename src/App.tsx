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
import { Equipments } from "./pages/Equipments";

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

const Loading = () => (
  <div className="flex items-center justify-center h-screen flex-col">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-neutral-500"></div>
    <div className="ml-4 text-lg mt-2">燒等一下下~~</div>
  </div>
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
      <Suspense fallback={<Loading />}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/blog-posts" element={<BlogPosts />} />

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
