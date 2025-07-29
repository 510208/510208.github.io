import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Friends } from "./pages/Friends";
import { Projects } from "./pages/Projects";
import { ReactLenis } from "lenis/react";
import { useState, useEffect } from "react";

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
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
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
