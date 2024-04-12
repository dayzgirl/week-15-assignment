// CreateTraining.js
import React, { useState } from 'react';
import '../App.css'

const CreateTraining = () => { // Receive refreshData function as props
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://6608ce75a2a5dd477b14c598.mockapi.io/FEBC/trainings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, date }),
            });
            if (response.ok) {
                console.log('Training created successfully!');
            } else {
                console.error('Failed to create training');
            }
        } catch (error) {
            console.error('Error creating training:', error);
        }
    };

    return (
        <div className="create-training">
            <h2>Create Training</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br></br>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateTraining;
