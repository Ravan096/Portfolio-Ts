import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Suspense, lazy} from 'react';
import Loader from "./components/Loader"
import Header from "./components/Header"
const Home= lazy(()=> import("./components/Home"))
const About= lazy(()=> import("./components/About"))
const Contact= lazy(()=> import("./components/Contact"))
const Footer= lazy(()=> import("./components/Footer"))



function App() {
  

  return (
    <Router>
      <Header/>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Suspense>
    </Router>
  )
}

export default App
