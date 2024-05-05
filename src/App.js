import Layout from "./layout";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/about us";
import ContactUs from "./pages/contact us";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
           <Route path="/" exact element={<Homepage/>} />
           <Route path="/about_us" exact element={<AboutUs/>} />
           <Route path="/contact_us" exact element={<ContactUs/>} />
        </Routes>
 
      </Layout >
    </div>
  );
} 

export default App;
