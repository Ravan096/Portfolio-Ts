import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Suspense, lazy} from 'react';
import Loader from "./components/Loader"
import Header from "./components/Header"
import CustomCursor from "./components/Customcursor";
import {Toaster} from "react-hot-toast";

const Home= lazy(()=> import("./components/Home"))
const About= lazy(()=> import("./components/About"))
const Contact= lazy(()=> import("./components/Contact"))
const Footer= lazy(()=> import("./components/Footer"))
const PageNotFound= lazy(()=> import("./components/PageNotFound"))
const Pricing= lazy(()=> import("./components/Pricing"))
const Projects= lazy(()=> import("./components/Projects"))
const Cart= lazy(()=> import ("./components/Cart"))
const ProductDetail= lazy(()=> import ("./components/ProductDetail"))
const CartItem= lazy(()=> import ("./components/CartItem"));
const PaymentSystem= lazy(()=> import ("./components/PaymentSystem"));



function App() {

  return (
    <div>
    <Router>
      <Header/>
      <CustomCursor/>
      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },
    success: {
      duration: 3000,
    },
  }}
/>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/productdetails/:id" element={<ProductDetail/>}/> 
        <Route path="/cartitem" element={<CartItem/>}/> 
        <Route path="/payment" element={<PaymentSystem/>}/> 
      </Routes>
      <Footer/>
      </Suspense>
    </Router>
    </div>
  )
}

export default App
