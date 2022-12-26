import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { GlobalStyle } from "./global.styles";
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
