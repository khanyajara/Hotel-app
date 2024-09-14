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



function App() {
  return (
    
    <BrowserRouter> 
<Routes>


<Route path="/" element={<Register/>}/>
<Route path="*" element={<Login/>}/>
<Route path="^" element={<ForgetPassword/>}/>
<Route path="Home" element={<HomePage/>}/>
<Route path="Rooms" element={<RoomsPage/>}/>
<Route path="view" element={<ViewRoom/>}/>
<Route path="Booking" element={<BookingPage/>}/>
<Route path="pay" element={<Checkout/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
