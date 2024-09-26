import React, { useState } from 'react';
import "./clientsbooking.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRooms } from '../redux/dbSlice'; // Import the addRooms action
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBookOpen } from '@fortawesome/free-solid-svg-icons';

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

        await dispatch(addRooms(newRoom)); // Dispatch the addRooms action

        // Reset form fields
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

    return (
        <div className="container">
            <div className="container-1">
                <div className="navvy">
                    <div onClick={goToClients}className="navvy">
                        <FontAwesomeIcon icon={faClipboardList} size="3x" />
                        <h2>Client Booking List</h2>
                    </div>
                    <div onClick={goToHome}className="navvy">
                        <FontAwesomeIcon icon={faBookOpen} size="3x" />
                        <h2>Add Room</h2>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="add-container">
                    <h2>Add New Room</h2>

                    <label>
                        Title:
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </label>

                    <label>
                        Descriptions:
                        <textarea value={descriptions} onChange={(e) => setDescriptions(e.target.value)} required />
                    </label>
                      <br/>
                      <br/>
                      <br/>
                    <label>
                        Room Image URL:
                        <input type="text" value={roomImage} onChange={(e) => setRoomImage(e.target.value)} required />
                    </label>

                    <label>
                        Beds:
                        <input type="number" value={beds} onChange={(e) => setBeds(Number(e.target.value))} min="1" required />
                    </label>

                    <label>
                        Guests:
                        <input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} min="1" required />
                    </label>

                    <label>
                        Price:
                        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} min="0" required />
                    </label>

                    <label>
                        Room Type:
                        <input type="text" value={roomType} onChange={(e) => setRoomType(e.target.value)} required />
                    </label>

                    <label>
                        Visitors:
                        <input type="number" value={visitors} onChange={(e) => setVisitors(Number(e.target.value))} min="1" required />
                    </label>

                    <button type="submit">Add Room</button>
                </form>
            </div>
        </div>
    );
};

export default AddRoom;
