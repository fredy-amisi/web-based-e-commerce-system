import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Uploadcourse.css';

const UploadCourse = () => {
    const [courseData, setCourseData] = useState({
        course_name: '',
        course_code: '',
        description: '',
        teacher_id: '',
    });
    const [courseImage, setCourseImage] = useState(null);
    const [courses, setCourses] = useState([]);

    // Fetch courses on component mount
    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost/bridge/getcourses.php');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    const handleImageChange = (e) => {
        setCourseImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('course_name', courseData.course_name);
        formData.append('course_code', courseData.course_code);
        formData.append('description', courseData.description);
        formData.append('teacher_id', courseData.teacher_id);       
        formData.append('course_image', courseImage);

        try {
            const response = await axios.post('http://localhost/bridge/uploadcourse.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert(response.data.message);
            if (response.data.success) {
                setCourseData({ course_name: '', course_code: '', description: '', teacher_id: '' });
                setCourseImage(null);
                fetchCourses(); // Fetch courses again to update the list
            }
        } catch (error) {
            alert('Error creating course: ' + error.message);
        }
    };

    const handleEditCourse = async (courseId) => {
        // Fetch the course details by courseId and populate the form for editing
        const selectedCourse = courses.find(course => course.id === courseId);
        if (selectedCourse) {
            setCourseData({
                course_name: selectedCourse.course_name,
                course_code: selectedCourse.course_code,
                description: selectedCourse.description,
                teacher_id: selectedCourse.teacher_id,
            });
            // You might also want to set the course image, if needed
        }
    };

    const handleDeleteCourse = async (courseId) => {
        try {
            const response = await axios.post('http://localhost/bridge/deletecourse.php', { id: courseId });
            alert(response.data.message);
            if (response.data.success) {
                fetchCourses(); // Fetch courses again to update the list
            }
        } catch (error) {
            alert('Error deleting course: ' + error.message);
        }
    };

    return (
        <div className="submit-container">
            <h2>Upload New Course</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="course_name"
                    placeholder="Course Name"
                    value={courseData.course_name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="course_code"
                    placeholder="Course Code"
                    value={courseData.course_code}
                    onChange={handleInputChange}
                    required
                />
                <textarea 
                    className="textarea"
                    name="description"
                    placeholder="Course Description"
                    value={courseData.description}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <input
                    type="text"
                    name="teacher_id"
                    placeholder="Teacher ID"
                    value={courseData.teacher_id}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="file"
                    name="course_image"
                    onChange={handleImageChange}
                    required
                />
                <button className="submit" type="submit">Upload Course</button>
            </form>

            {/* Display courses for editing and deleting */}
            <div className="course-list">
                {courses.map((course) => (
                    <div key={course.id} className="course-item">
                        <div>
                            <h3>{course.course_name}</h3>
                            <p>{course.description}</p>
                        </div>
                        <div>
                            <button className="edit-btn" onClick={() => handleEditCourse(course.id)}>Edit</button>
                            <button className="delete-btn" onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadCourse;
