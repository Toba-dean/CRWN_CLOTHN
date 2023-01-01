import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

import { Header } from "./components";
import { GlobalStyle } from "./global.styles";
import { CheckOutPage, HomePage, ShopPage, SignInAndSignOutPage } from "./pages";
import { useAuthListener } from "./hooks/useAuthListener";
// import { selectCollectionPreview } from "./redux/slices/shop/shopSlice";
// import { addCollectionsAndDocuments } from "./firebase/firebase";

function App() {

  const CURRENT_USER = useAuthListener();
  // const collectionData = useSelector(selectCollectionPreview)

  // console.log(collectionData);

  // useEffect(() => {
  //   const collectionToAdd = collectionData.map(({ title, items }) => ({ title, items }))
  //   addCollectionsAndDocuments('collections', collectionToAdd)
  // }, [])
  

  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="login" element={
            CURRENT_USER ?
              <Navigate to="/" /> :
              <SignInAndSignOutPage />
          } />
          <Route path="checkout" element={<CheckOutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
