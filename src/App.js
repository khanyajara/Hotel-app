import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./components/Register";
import Login from './components/login';
import ForgetPassword from './components/forgotpassword';
import HomePage from './components/home';
import RoomsPage from './components/RoomsPage';
import ViewRoom from './components/ViewRoomsContent'
import BookingPage from './components/bookingsPage';
import Checkout from './components/checkout';
import Gallery from './components/gallery';
import Facilities from './components/Facilities';



function App() {
  return (
    
    <BrowserRouter> 
<Routes>


<Route path="/" element={<Register/>}/>
<Route path="*" element={<Login/>}/>
<Route path="^" element={<ForgetPassword/>}/>
<Route path="/home" element={<HomePage/>}/>
<Route path="Rooms" element={<RoomsPage/>}/>
<Route path="view" element={<ViewRoom/>}/>
<Route path="Booking" element={<BookingPage/>}/>
<Route path="pay" element={<Checkout/>}/>
<Route path="gallery" element={<Gallery/>}/>
<Route path="facilities" element={<Facilities/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
