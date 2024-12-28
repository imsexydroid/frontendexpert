import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import VideoPlayerPage from "./../src/VideoPlayerPage";
import htmlData from "../htmlcc.json";
import cssData from "../csscc.json";
import jsData from "../jscc.json";
import reactData from "../reactcc.json";
import webDevData from "../webdev.json";
import ComingSoon from "./ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/html" element={<VideoPlayerPage data={htmlData} />} />
        <Route path="/css" element={<VideoPlayerPage data={cssData} />} />
        <Route path="/js" element={<VideoPlayerPage data={jsData} />} />
        <Route path="/react" element={<VideoPlayerPage data={reactData} />} />
        <Route path="/web" element={<VideoPlayerPage data={webDevData} />} />
        <Route path="/question" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
