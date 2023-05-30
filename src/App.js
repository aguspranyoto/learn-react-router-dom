import "./App.css";

// component
import BottomFooter from "./components/BottomFooterComponent";
import NavHeader from "./components/NavHeaderComponent";
import SideLeft from "./components/SideLeftComponent";
import SideRight from "./components/SideRightComponent";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

// library
import { Route, Routes } from "react-router-dom";

function App() {
  document.body.classList.add("bg-body");

  const baseUrl = process.env.REACT_APP_BASEURL;
  return (
    <div className="body">
      <div className="container">
        <div className="header">
          <div className="container__header">
            <NavHeader />
            {/* ini component side-left */}
          </div>
        </div>
        <div className="side-left">
          <div className="container__side-left">
            <SideLeft />
            {/* ini component side-left */}
          </div>
        </div>
        <div className="content">
          <div className="container__content">
            <Routes>
              <Route path={`${baseUrl}/`} element={<Home />} />
              <Route path={`${baseUrl}/about`} element={<About />} />
              <Route path={`${baseUrl}/contact`} element={<Contact />} />
              <Route path={`${baseUrl}/portfolio`} element={<Portfolio />} />
            </Routes>
          </div>
        </div>
        <div className="side-right">
          <div className="container__side-right">
            <SideRight />
          </div>
        </div>
        <div className="footer">
          <div className="container__footer">
            <BottomFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
