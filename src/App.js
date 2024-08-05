import Layout from "./layout";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/about us";
import ContactUs from "./pages/contact us";
import Service from "./pages/services";
import Courses from "./pages/courses";
import Javascript from "./pages/Javascript";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
           <Route path="/" exact element={<Homepage/>} />
           <Route path="/about_us" exact element={<AboutUs/>} />
           <Route path="/contact_us" exact element={<ContactUs/>} />
           <Route path="/courses" exact element={<Courses/>} />
           <Route path="/services" exact element={<Service/>} />
           <Route path="/javascript" exact element={<Javascript/>} />
           <Route path="/sign_in" exact element={<Signin/>} />
           <Route path="/sign_up" exact element={<Signup/>} />
        </Routes>
      </Layout >
    </div>
  );
} 

export default App;
