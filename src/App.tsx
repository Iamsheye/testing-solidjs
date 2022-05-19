import { Component, lazy } from "solid-js";
import { NavLink, Route, Router, Routes } from "solid-app-router";

const Home = lazy(() => import("./pages/Home"));
const Time = lazy(() => import("./pages/Time"));

const App: Component = () => {
  return (
    <Router>
      <section class="underline flex justify-center gap-12 text-lg">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/time">Time</NavLink>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time" element={<Time />} />
      </Routes>
    </Router>
  );
};

export default App;
