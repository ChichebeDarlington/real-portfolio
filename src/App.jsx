import { useState } from "react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./sections/Resume";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={` ${darkMode ? "dark" : "main"}`}>
      <BrowserRouter>
        {/* <Routes>
          <Route path="" element={<Resume />} />
        </Routes> */}
        <Section1 darkMode={darkMode} setDarkMode={setDarkMode} />
        <Section2 darkMode={darkMode} />
        <Section3 darkMode={darkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
