import React, { useState, useEffect } from 'react';
import '../App.css';

const ReadTraining = () => {
    const [trainings, setTrainings] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading state
    const [error, setError] = useState(null); // State to track error
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const fetchTrainings = async () => {
        try {
            const response = await fetch('https://6608ce75a2a5dd477b14c598.mockapi.io/FEBC/trainings');
            if (response.ok) {
                const data = await response.json();
                setTrainings(data);
            } else {
                setError('Failed to fetch trainings');
            }
        } catch (error) {
            setError('Error fetching trainings');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrainings();
    }, []);

    const handleRefresh = () => {
        setLoading(true);
        fetchTrainings(); // Call fetchTrainings to refresh the list
        setName(''); // Reset name input field
        setDate(''); // Reset date input field
    };

    if (loading) {
        return <div>Loading...</div>; // Display loading state
    }

    if (error) {
        return <div>Error: {error}</div>; // Display error message
    }

    return (
        <div className="read-training">
            <h2>Training List</h2>
            <button onClick={handleRefresh}>Refresh List</button> {/* Refresh button */}
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date of Training</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainings.map(training => (
                            <tr key={training.id}>
                                <td>{training.id}</td>
                                <td>{training.name}</td>
                                <td>{training.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReadTraining;

