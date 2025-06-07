// import { Route, Routes } from "react-router";
// import "./App.css";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Articles from "./pages/Articles.jsx";
// import Contact from "./pages/Contact.jsx";
// import Github from "./pages/Github.jsx";
// import Projects from "./pages/Projects.jsx";
// import Settings from "./pages/Settings.jsx";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/articles" element={<Articles />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/github" element={<Github />} />
//       <Route path="/projects" element={<Projects />} />
//       <Route path="/settings" element={<Settings />} />
//     </Routes>
//   );
// }

// export default App;

import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import Footer from "./components/Footer/Footer";
import data from "./data/data.json";
import Explorer from "./components/Explorer/Explorer";
import Content from "./components/Content/Content";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <TopBar />
        <LeftSideBar
          github={data.contact.github}
          linkedin={data.contact.linkedin}
          leetcode={data.contact.leetcode}
        />
        <Explorer />
        <Content />
        <Footer github={data.contact.github} />
      </AppProvider>
    </div>
  );
}
export default App;
