import { useState } from "react";
import { Suspense, lazy } from "react";

const Section1 = lazy(() => import("./sections/Section1"));

const Section2 = lazy(() => import("./sections/Section2"));

const Section3 = lazy(() => import("./sections/Section3"));
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./sections/Resume";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={` ${darkMode ? "dark" : "main"}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Suspense fallback={<span>Loading...</span>}>
          <Section1 darkMode={darkMode} setDarkMode={setDarkMode} />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          <Section2 darkMode={darkMode} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Section3 darkMode={darkMode} />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
