import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import './dashboard.css';

const Dashboard = () => {
    return (
        <div>
            
            <div className="NavBar">
                <div>
                    <FontAwesomeIcon icon={faClipboardList} size="3x" />
                    <h2>Client Booking List</h2>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBookOpen} size="3x" />
                    <h2>Add Room</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
