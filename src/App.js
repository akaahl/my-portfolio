import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import MyWorks from "./pages/MyWorks";
import AboutMe from "./pages/AboutMe";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log("Built with grit and determination by a.k.afiq");
  }, []);

  return (
    <div className="App">
      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/my-works">
            <MyWorks />
          </Route>

          <Route path="/about-me">
            <AboutMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
