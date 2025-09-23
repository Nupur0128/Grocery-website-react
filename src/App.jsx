// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bakrey from './bakrey'
import IconHandler from './IconHandler'
import Deals from './deals'
import Footer from './footer'
import Fruits from './fruits'
import Header from './header'
import MyOrder from './myOrder'
import Navbar from "./navbar";
import Vegetables from "./vegetables";
import Meat from "./meat";
import Tea from "./tea";
import Coffee from "./coffee";
import Wine from "./wine";
import Kitchen from "./home-kitchen";
import CleaningSuppies from "./cleaningSupplies";
import PersonalHygiene from "./personalHygiene";
import Babies from "./babies";
import LoginSignup from "./Login";
import AboutUs from "./aboutUs";
import CustomerSupport from "./customerSupport";
import Location from "./location";

function App() {
  return (
    <div>

      <Header />
      <Navbar />
      {/* <Fruits/> */}
      {/* <Vegetables/> */}
      {/* <Bakrey/> */}
      {/* <Tea/> */}
      {/* <Coffee/> */}
      {/* <Wine/> */}
      {/* <Kitchen/> */}
      {/* <CleaningSuppies/> */}
      {/* <PersonalHygiene/> */}

      <Routes>
        <Route path="/" element={<MyOrder />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/Food/Fruits" element={<Fruits />} />
        <Route path="/Food/Vegetable" element={<Vegetables />} />
        <Route path="/Food/Meat-poultry" element={<Meat />} />
        <Route path="/Food/Bakrey" element={<Bakrey />} />
        <Route path="/Beverages/Tea" element={<Tea />} />
        <Route path="/Beverages/Coffee" element={<Coffee />} />
        <Route path="/Beverages/Wine" element={<Wine />} />
        <Route path="/Household/Home-Kitchen" element={<Kitchen />} />
        <Route path="/Household/Cleaning-Supplies" element={<CleaningSuppies />} />
        <Route path="/Personal-care/personal-Hygiene" element={<PersonalHygiene />} />
        <Route path="/Personal-care/Babies"  element={<Babies/>} />
        <Route path="/cart" element={<IconHandler />} />
        <Route path="/Login-SignUp" element={<LoginSignup/>}/>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/customerSupport" element={<CustomerSupport/>}/>
        <Route path="/location" element={<Location/>} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
