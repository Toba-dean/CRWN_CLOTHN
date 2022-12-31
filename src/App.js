import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

import { Header } from "./components";
import { GlobalStyle } from "./global.styles";
import { CheckOutPage, HomePage, ShopPage, SignInAndSignOutPage } from "./pages";
import { useAuthListener } from "./hooks/useAuthListener";

function App() {

  const CURRENT_USER = useAuthListener();

  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="/login" element={
            CURRENT_USER ?
              <Navigate to="/" /> :
              <SignInAndSignOutPage />
          } />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
