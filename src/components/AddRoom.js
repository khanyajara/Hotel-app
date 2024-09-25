import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRoom } from './path/to/your/roomSlice';

const AddRoom = () => {
    const dispatch = useDispatch();

    
    const [title, setTitle] = useState('');
    const [descriptions, setDescriptions] = useState('');
    const [roomImage, setRoomImage] = useState('');
    const [beds, setBeds] = useState(1);
    const [guests, setGuests] = useState(1);
    const [price, setPrice] = useState(0);
    const [roomType, setRoomType] = useState('');
    const [visitors, setVisitors] = useState(1);

    const handleSubmit = (e) => {
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

        
        dispatch(addRoom(newRoom));

     
        setTitle('');
        setDescriptions('');
        setRoomImage('');
        setBeds(1);
        setGuests(1);
        setPrice(0);
        setRoomType('');
        setVisitors(1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Room</h2>

            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>

            <label>
                Descriptions:
                <textarea value={descriptions} onChange={(e) => setDescriptions(e.target.value)} required />
            </label>

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
    );
};

export default AddRoom;
