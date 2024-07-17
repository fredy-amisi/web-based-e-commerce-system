import React, { useState } from "react";
import axios from "axios";
import Scrollbutton from "../Components/Scrollbutton";
import "../Css/signup.css";

const Signup = () => {
    const [inputs, setInputs] = useState({});
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const submissionData = { ...inputs, password };

        try {
            const { data } = await axios.post('http://localhost/sydney/user/save', submissionData);

            if (data.success) {
                alert("Record created successfully!");
                window.location.href = "/Login";
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Error creating record: " + error.message);
        }
    };

    return (
        <div>
            <div className="signin-container">
                <form onSubmit={handleSubmit}>
                    <h2>Create account</h2>
                    <div className="overral-divs">
                        <div className="div1">
                            <div>
                                <input
                                    type="name"
                                    name="name"
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="username"
                                    name="username"
                                    onChange={handleChange}
                                    placeholder="Your Username"
                                    required
                                />
                            </div>
                        </div>
                        <div className="div2">
                            <div>
                                <select className="select" name="role" onChange={handleChange} required>
                                    <option value="">Select Your Role</option>
                                    <option value="customer">Customer</option>
                                    <option value="farmer">Farmer</option>
                                    <option value="admin">Admin</option>
                                </select>
                                <input
                                    type="tel"
                                    name="phonenumber"
                                    onChange={handleChange}
                                    placeholder="Your Phone Number"
                                    required
                                />
                            </div>
                            <div>
                                <div style={styles.container}>
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={styles.input}
                                        placeholder="Enter your password"
                                        name="password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        style={styles.toggleButton}
                                    >
                                        {isPasswordVisible ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                        <input type="submit" name="submit" value="Register" />
                    </div>
                    <div className="div-p">
                        <p>Already have an account? <a href="/Login"><span>Log In</span></a></p>
                    </div>
                </form>
            </div>
            <Scrollbutton />
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '20px',
        borderRadius: '5px',
        fontSize: '15px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        marginBottom: '4%',
    },
    toggleButton: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '15px',
        color: '#007BFF',
        padding: '20px',
    },
};

export default Signup;
