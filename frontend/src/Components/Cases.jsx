import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast for notifications

const Students = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newStudent, setNewStudent] = useState({
        rollno: '',
        name: '',
        education: '',
        mobile: '',
        email: '',
        admissionDate: '',
    });
    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState('');

    const studentsPerPage = 10;
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = data.slice(indexOfFirstStudent, indexOfLastStudent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/form/getStudent`, { withCredentials: true });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchStudents();
    }, []);

    const handleAddStudent = async () => {
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/form/student`, newStudent, { withCredentials: true });

            // After adding the student, refetch data
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/form/getStudent`, { withCredentials: true });
            setData(response.data);

            setNewStudent({
                rollno: '',
                name: '',
                education: '',
                mobile: '',
                email: '',
                admissionDate: '',
            });
            setShowForm(false);
            setError('');
        } catch (error) {
            console.error("Error adding student:", error);
            setError('Failed to add student. Please try again.');
        }
    };

    const handleDeleteStudent = (rollno) => {
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/form/deleteStudent`, {
            data: { rollno }
        })
        .then(response => {
            // Remove the deleted student from the list
            setData(data.filter(student => student.rollno !== rollno));
            toast.success("Student deleted successfully");
        })
        .catch(error => {
            console.error("Error deleting student:", error);
            toast.error("Error deleting student");
        });
    };

    return (
        <div className='bg-white'>
            <div className="text-center mx-auto pl-40 pt-8 bg-white">
                <h1 className='inline-block text-blue-500 text-3xl md:text-7xl'>Students</h1>
            </div>
            <div className="flex justify-center items-center min-h-screen bg-white">
                <div className="container mx-auto p-10" style={{ marginLeft: '320px' }}>
                    <div className="mb-4">
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="bg-cyan-500 text-white px-4 py-2 rounded"
                        >
                            {showForm ? 'Close Form' : 'Add Student'}
                        </button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {showForm && (
                        <div className="mb-4">
                            <input
                                type="text"
                                name="rollno"
                                placeholder="Roll No."
                                value={newStudent.rollno}
                                onChange={handleInputChange}
                                className="mr-2 p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={newStudent.name}
                                onChange={handleInputChange}
                                className="mr-2 p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="education"
                                placeholder="Education"
                                value={newStudent.education}
                                onChange={handleInputChange}
                                className="mr-2 p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Mobile"
                                value={newStudent.mobile}
                                onChange={handleInputChange}
                                className="mr-2 p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={newStudent.email}
                                onChange={handleInputChange}
                                className="mr-2 p-2 border rounded"
                            />
                            <input
                                type="date"
                                name="admissionDate"
                                placeholder="Admission Date"
                                value={newStudent.admissionDate}
                                onChange={handleInputChange}
                                className="mr-2 p-2 border rounded"
                            />
                            <button
                                onClick={handleAddStudent}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Add
                            </button>
                        </div>
                    )}
                    <div className="overflow-x-auto rounded-xl shadow-lg border">
                        <table className="min-w-full bg-slate-950 rounded-xl text-center">
                            <thead className="bg-slate-950">
                                <tr className='text-cyan-500 text-lg'>
                                    <th className="px-6 py-4">Roll No.</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Education</th>
                                    <th className="px-6 py-4">Mobile</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Admission Date</th>
                                    <th className="px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentStudents.map((student, index) => (
                                    <tr key={index} className="border-b text-white">
                                        <td className="px-6 py-4">{student.rollno}</td>
                                        <td className="px-6 py-4">{student.name}</td>
                                        <td className="px-6 py-4">{student.education}</td>
                                        <td className="px-6 py-4">{student.mobile}</td>
                                        <td className="px-6 py-4">{student.email}</td>
                                        <td className="px-6 py-4">{student.admissionDate}</td>
                                        <td className="px-6 py-4 flex justify-center space-x-2">
                                            {/* <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
                                                <i className="fas fa-edit"></i>
                                            </button> */}
                                            <button 
                                                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700" 
                                                onClick={() => handleDeleteStudent(student.rollno)}
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between text-black items-center mt-4">
                        <span>Showing {indexOfFirstStudent + 1} to {indexOfLastStudent} of {data.length} entries</span>
                        <div className="flex space-x-2">
                            {[...Array(Math.ceil(data.length / studentsPerPage)).keys()].map(number => (
                                <button
                                    key={number + 1}
                                    onClick={() => paginate(number + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-cyan-500 text-black' : 'bg-cyan-300 text-black'}`}
                                >
                                    {number + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Students;
