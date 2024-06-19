import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import MintNft from "./pages/MintNft";
import MyNft from "./pages/MyNft";
import SaleNft from "./pages/SaleNft";
import Bias from "./pages/Bias";
import WhiteList from "./pages/WhiteList";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bias" element={<Bias />} />
          <Route path="/mint-nft" element={<MintNft />} />
          <Route path="/my-nft" element={<MyNft />} />
          <Route path="/sale-nft" element={<SaleNft />} />
          <Route path="/wl" element={<WhiteList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
