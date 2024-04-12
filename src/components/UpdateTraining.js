import React, { useState } from 'react';
import '../App.css';

const UpdateTraining = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState(null); // State to track error

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://6608ce75a2a5dd477b14c598.mockapi.io/FEBC/trainings/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, date }),
            });
            if (response.ok) {
                console.log('Training updated successfully!');
            } else {
                setError('Failed to update training');
            }
        } catch (error) {
            setError('Error updating training:');
        }
    };

    return (
        <div className="update-training">
            <h2>Update Training</h2>
            {error && <div>Error: {error}</div>} {/* Display error message */}
            <form onSubmit={handleSubmit}>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Training ID" />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br></br>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateTraining;