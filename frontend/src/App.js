import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kid from "./pages/Kid";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import { Cartnum } from "./pages/Cartnum";

function App() {
  return (
    <BrowserRouter>
      <Cartnum>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/men"
            element={
              <Layout>
                <Men />
              </Layout>
            }
          ></Route>
          <Route
            path="/women"
            element={
              <Layout>
                <Women />
              </Layout>
            }
          ></Route>
          <Route
            path="/kid"
            element={
              <Layout>
                <Kid />
              </Layout>
            }
          ></Route>
          <Route
            path="/product/:category/:id"
            element={
              <Layout>
                <Item />
              </Layout>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          ></Route>
        </Routes>
      </Cartnum>
    </BrowserRouter>
  );
}

export default App;
