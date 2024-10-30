import './App.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Register from "./components/Register";
import Login from './components/login';
import ForgetPassword from './components/forgotpassword';
import HomePage from './components/home';
import RoomsPage from './components/RoomsPage';
import ViewRoom from './components/ViewRoomsContent';
import BookingPage from './components/bookingsPage';
import Checkout from './components/checkout';
import Gallery from './components/gallery';
import Facilities from './components/Facilities';
import Clients from "./components/clientsBookings";
import AddRoom from './components/AddRoom';
import { Audio } from 'react-loader-spinner'
import Direction from './components/direction';
import Reservation from './components/addReservation';
import Review from "./components/hotel-reviews"
import Profile from './components/userProfile';
import Terms from "./components/termsandconditions"
import PrivacyPolicy from './components/userpolicy';


const LoaderComponent = () => {
  return (
    <div className="loader">
      <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
    </div>
  );
};

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
  const [loader, setLoader] = useState(true);

 
  useEffect(() => {
    const fetchData = async () => {
     
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoader(false); 
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <PayPalScriptProvider options={initialOptions}>
        <Routes>
          {(() => {
            if (loader) {
              return <Route path="*" element={<LoaderComponent />} />;
            }

            return user && user.role === "admin" ? (
              <>
                <Route path="/home" element={<AddRoom />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/Reserve" element={<Reservation />} />
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
                <Route path="/how-to-get-there" element={<Direction />}/>
                <Route path="/Leave-review" element={<Review />} />
                <Route path="/user-info" element={<Profile />} />
                <Route path="/Terms" element={<Terms />} />
                <Route path="/policy" element={<PrivacyPolicy />} />
              </>
            );
          })()}
        </Routes>
      </PayPalScriptProvider>
    </BrowserRouter>
  );
}

export default App;
