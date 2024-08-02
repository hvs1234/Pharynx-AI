import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LiveChat from "./Components/LiveChat/LiveChat";
import HistoryPart from "./Components/History/HistoryPart";
import AdsManager from "./Components/AdsManager/AdsManager";
import Flows from "./Components/Flows/Flows";
import Contact from "./Components/Contacts/Contact";
import WAPay from "./Components/WAPay/WAPay";
import Integrations from "./Components/Integrations/Integrations";
import Ecomm from "./Components/Ecomm/Ecomm";
import Campaigns from "./Components/Campaigns/Campaigns";
import Manage from "./Components/Manage/Manage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/livechat" element={<LiveChat />}></Route>
          <Route path="/history" element={<HistoryPart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/campaigns" element={<Campaigns />}></Route>
          <Route path="/adsmanager" element={<AdsManager />}></Route>
          <Route path="/flows" element={<Flows />}></Route>
          <Route path="/wapay" element={<WAPay />}></Route>
          <Route path="/manage" element={<Manage />}></Route>
          <Route path="/integrations" element={<Integrations />}></Route>
          <Route path="/ecomm" element={<Ecomm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
