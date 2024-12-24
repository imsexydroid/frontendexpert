import "./App.css";
import CSSVideoPlayer from "./CSSVideoPlayer";
import HTMLVideoPlayer from "./HTMLVideoPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JSVideoPlayer from "./JSVideoPlayer";
import ReactVideoPlayer from "./ReactVideoPlayer";
import WebDevVideoPlayer from "./WebDevVideoPlayer";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/html" element={<HTMLVideoPlayer />} />
          <Route path="/css" element={<CSSVideoPlayer />} />
          <Route path="/js" element={<JSVideoPlayer />} />
          <Route path="/react" element={<ReactVideoPlayer />} />
          <Route path="/web" element={<WebDevVideoPlayer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
