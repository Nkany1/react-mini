import Navbar from "./components/navbar/Navbar";
import { BrowserRouter , Route , Routes  } from "react-router-dom"
import Home from "./components/Home/Home";
import Products from "./components/products/Products";
import Feedback from "./components/feedback/Feedback";
  
const App = () => {
  return(
       
  <BrowserRouter>
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product" element={<Products />}/>
      <Route path="/feedback" element={<Feedback />}/>
    </Routes>
  </div>
  </BrowserRouter>  


  )
  
};

export default App;