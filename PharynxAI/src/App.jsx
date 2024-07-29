import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LiveChat from "./Components/LiveChat/LiveChat";
import HistoryPart from "./Components/History/HistoryPart";
import AdsManager from "./Components/AdsManager/AdsManager";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/livechat" element={<LiveChat />}></Route>
          <Route path="/history" element={<HistoryPart />}></Route>
          <Route path="/adsmanager" element={<AdsManager />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
