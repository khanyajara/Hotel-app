import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
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
import Clients from "./components/clientsBookings"
import AddRoom from './components/AddRoom';



function App() {
  const initialOptions = {
    "client-id": "AfIAqx5qwADS2y3HBA3G9jY9LTQxgY71yk1o5OT6ca0OwgiOfGQ2hUnNVYNRVYUDF3MgjtvljjF2m_iN",
    "enable-funding": "venmo",
    
    "buyer-country": "",
    currency: "USD",
    "data-page-type": "product-details",
    components: "buttons",
    "data-sdk-integration-source": "developer-studio",
};

const user = useSelector(state => state.auth.user);


return (
  <BrowserRouter>
  <PayPalScriptProvider options={initialOptions}>
    <Routes>
      {user && user.role === "admin" ? (
        <>
          <Route path="/home" element={<AddRoom />} />
          <Route path="/clients" element={<Clients />} />
        
        </>
      ) : (
        <>
          <Route path="/" element={<Register />} />
          <Route path="*" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/view" element={<ViewRoom />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/pay" element={<Checkout />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/facilities" element={<Facilities />} />
          
        </>
      )}
    </Routes>
  </PayPalScriptProvider>
</BrowserRouter>

  );
}

export default App;
