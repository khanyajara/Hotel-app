import './App.css';
import Register from "./components/Register";
import Login from './components/login';
import ForgetPassword from './components/forgotpassword';
import HomePage from './components/home';
import RoomsPage from './components/RoomsPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register/>
        <Login/>
        <ForgetPassword/>
        <HomePage/>
        <RoomsPage/>
      </header>
    </div>
  );
}

export default App;
