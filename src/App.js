import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { GlobalStyle } from "./global.styles";
import { HomePage, ShopPage } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
