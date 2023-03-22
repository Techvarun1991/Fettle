import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigationbar } from "./components/Navigationbar";
import { Login } from "./components/Login";
import { Articles } from "./components/Articles";
import { Product, Products } from "./components/Product";
import { Article1 } from "./components/Article1";
import { Article2 } from "./components/Article2";
import { Article3 } from "./components/Article3";
import { Article4 } from "./components/Article4";
import { Article5 } from "./components/Article5";
import { Article6 } from "./components/Article6";
import { Homepage } from "./components/Homepage";
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { Carreer } from "./components/Carreer";
import { ContactUs } from "./components/ContactUs"
import { Subscription } from "./components/Subscription";
import { Profile } from "./components/Profile";


function App() {
  return (
    <>

      <BrowserRouter>
        <Navigationbar></Navigationbar>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/carreer" element={<Carreer></Carreer>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/Subscription" element={<Subscription></Subscription>}></Route>
          <Route path="/articles" element={<Articles></Articles>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/cart/checkout" element={<Checkout></Checkout>}></Route>
          <Route path='/articles/phinnaturalmineralwater' element={<Article1></Article1>}></Route>
          <Route path='/articles/hydrationtips' element={<Article2></Article2>}></Route>
          <Route path='/articles/5reasons' element={<Article3></Article3>}></Route>
          <Route path='/articles/hydrationandmentalhealth' element={<Article4></Article4>}></Route>
          <Route path='/articles/benefitsinmonsoon' element={<Article5></Article5>}></Route>
          <Route path='/articles/waterbornediseases' element={<Article6></Article6>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </>
  );
}

export default App;
