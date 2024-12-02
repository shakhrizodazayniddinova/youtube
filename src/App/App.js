import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../components/Template/Template";
import PlayVideos from "../components/Template/Main/PlayVideos/PlayVideos";
import Home from "../components/Template/Main/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template/>}>
          <Route index element={<Home/>}/>
          <Route path="/play" element={<PlayVideos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
