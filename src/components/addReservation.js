import React, { useState } from 'react';
import "./addroom.css";
import { logout } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRooms } from '../redux/dbSlice'; // Import the addRooms action
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBookOpen, faSignOut } from '@fortawesome/free-solid-svg-icons';

const AddRoom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [descriptions, setDescriptions] = useState('');
    const [roomImage, setRoomImage] = useState('');
    const [beds, setBeds] = useState(1);
    const [guests, setGuests] = useState(1);
    const [price, setPrice] = useState(0);
    const [roomType, setRoomType] = useState('');
    const [visitors, setVisitors] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRoom = {
            title,
            descriptions,
            roomImage,
            beds,
            guests,
            price,
            roomType,
            visitors,
        };

        await dispatch(addRooms(newRoom)); 

        
        setTitle('');
        setDescriptions('');
        setRoomImage('');
        setBeds(1);
        setGuests(1);
        setPrice(0);
        setRoomType('');
        setVisitors(1);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const goToClients = () => {
        navigate('/clients');
    };

    const goToHome = () => {
        navigate('/home');
    };

    const reserveRoom = ()=>{
        navigate('/Reserve')
    }

    const Logout = () => {
        dispatch(logout());
        navigate('*'); 
      };

    return (
        <div className="container">
            <div className="container-1">
                <div className="container-123">
                    <div className="navBar">
                        <div  className="navvy-">
                            <div onClick={goToClients}className="navvy-1">
                                <FontAwesomeIcon icon={faClipboardList} size="2x" />
                                Client Booking List
                            </div>
                            <div onClick={goToHome}className="navvy-1">
                                <FontAwesomeIcon icon={faBookOpen} size="2x" />
                                Add Room
                            </div>
                            <div onClick={reserveRoom}className="navvy-1">
                                <FontAwesomeIcon icon={faBookOpen} size="2x" />
                                Add Reservation
                            </div>
                            <div onClick={Logout}className="navvy-1">
                                <FontAwesomeIcon icon={faSignOut} size="2x" />
                                Admin logout
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="add-container">
                    <h2>Book Room for Client</h2>

                    <label>
                        Client-Name
                        <input type="text"
                         value={title}
                          onChange={(e) => setTitle(e.target.value)} 
                          required
                          className='input-tag'
                           />
                    </label>

                    <label>
                        Email
                        <textarea
                        type="text" 
                        value={descriptions}
                         onChange={(e) => setDescriptions(e.target.value)} 
                         required 
                         className='input-tag'
                         />
                    </label>
                      <br/>
                      <br/>
                      <br/>
                    <label>
                        PhoneNumber
                        <input type="text"
                         value={roomImage} 
                         onChange={(e) => setRoomImage(e.target.value)} 
                         required 
                         className='input-tag'
                         />
                    </label>

                    <label>
                        Beds:
                        <input type="number" 
                        value={beds} 
                        onChange={(e) => setBeds(Number(e.target.value))} 
                        min="1" required
                        className='input-tag'
                         />
                    </label>

                    <label>
                        Guests:
                        <input type="number"
                         value={guests} 
                         onChange={(e) => setGuests(Number(e.target.value))}
                          min="1"
                           required
                           className='input-tag'
                           />
                    </label>

                    <label>
                        Price:
                        <input type="number"
                         value={price} 
                         onChange={(e) => setPrice(Number(e.target.value))} 
                         min="0"
                          required 
                          className='input-tag'
                          />
                    </label>

                    <label>
                        Room Type:
                        <input type="text" 
                         value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                           required 
                           className='input-tag'
                           />
                    </label>

                    <label>
                        Visitors:
                        <input type="number"
                        value={visitors}
                         onChange={(e) => setVisitors(Number(e.target.value))} 
                         min="1" 
                         required 
                         className='input-tag'
                         />
                    </label>

                    <button type="submit">Add Room</button>
                </form>
            </div>
        </div>
    );
};

export default AddRoom;
