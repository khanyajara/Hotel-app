import './App.css';
import Register from "./components/Register";
import Login from './components/login';
import ForgetPassword from './components/forgotpassword';
import HomePage from './components/home';
import RoomsPage from './components/RoomsPage';
import ViewRoom from './components/ViewRoomsContent'
import BookingPage from './components/bookingsPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register/>
        <Login/>
        <ForgetPassword/>
        <HomePage/>
        <RoomsPage/>
        <ViewRoom/>
        <BookingPage/>
      </header>
    </div>
  );
}

export default App;
