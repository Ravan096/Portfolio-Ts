import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Suspense, lazy} from 'react';
import Loader from "./components/Loader"
import Header from "./components/Header"
import CustomCursor from "./components/Customcursor";
import Home1 from "./components/Home1";
const Home= lazy(()=> import("./components/Home"))
const About= lazy(()=> import("./components/About"))
const Contact= lazy(()=> import("./components/Contact"))
const Footer= lazy(()=> import("./components/Footer"))
const PageNotFound= lazy(()=> import("./components/PageNotFound"))



function App() {
  

  return (
    <div style={{cursor:"none"}}>
    <Router>
      <Header/>
      <CustomCursor/>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/homeone" element={<Home1/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      </Suspense>
    </Router>
    </div>
  )
}

export default App
