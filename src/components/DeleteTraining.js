// DeleteTraining.js
import React, { useState } from 'react';
import '../App.css';

const DeleteTraining = ({refreshData}) => {
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://6608ce75a2a5dd477b14c598.mockapi.io/FEBC/trainings/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Training deleted successfully!');
            } else {
                console.error('Failed to delete training');
            }
        } catch (error) {
            console.error('Error deleting training:', error);
        }
    };

    return (
        <div className="delete-training">
            <h2>Delete Training</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Training ID" /> <br></br>
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default DeleteTraining;
