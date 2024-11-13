import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import './join.css';

const Join = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        phone: '',
        university: '',
        specialty: '',
        level: '',
        matriculationNumber: '',
        socialMedia: '',
        experience: '',
        file: null,
    });

    const [popupActive, setPopupActive] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            file: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errorFields = {};

        if (!formData.firstName) errorFields.firstName = "First name is required!";
        if (!formData.lastName) errorFields.lastName = "Last name is required!";
        if (!formData.dob) errorFields.dob = "Date of birth is required!";
        if (!formData.email) errorFields.email = "Email is required!";
        if (!formData.phone) errorFields.phone = "Phone number is required!";
        if (!formData.university) errorFields.university = "University is required!";
        if (!formData.specialty) errorFields.specialty = "Specialty is required!";
        if (!formData.level) errorFields.level = "Academic level is required!";
        if (!formData.matriculationNumber) errorFields.matriculationNumber = "Matriculation number is required!";

        if (Object.keys(errorFields).length > 0) {
            setErrors(errorFields);
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "members"), formData);
            console.log("Document written with ID: ", docRef.id);
            setPopupMessage('Your application has been successfully submitted!');
            setPopupActive(true);
            setFormData({
                firstName: '',
                lastName: '',
                dob: '',
                email: '',
                phone: '',
                university: '',
                specialty: '',
                level: '',
                matriculationNumber: '',
                socialMedia: '',
                experience: '',
                file: null,
            });
            setErrors({});
        } catch (error) {
            console.error("Error adding document: ", error);
            setPopupMessage('An error occurred during submission. Please try again.');
            setPopupActive(true);
        }
    };

    const closePopup = () => {
        setPopupActive(false);
    };

    return (
        <div className="join-form">
            <h2>Join Varphi Club</h2>
            <form onSubmit={handleSubmit}>
                <div className="section">
                    <h3 className="personal">Personal Information</h3>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="date-input"
                    />
                    {errors.dob && <div className="error-message">{errors.dob}</div>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>

                <div className="section">
                    <h3 className="information">Academic Information</h3>
                    <input
                        type="text"
                        name="university"
                        placeholder="University"
                        value={formData.university}
                        onChange={handleChange}
                    />
                    {errors.university && <div className="error-message">{errors.university}</div>}
                    <input
                        type="text"
                        name="specialty"
                        placeholder="Specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                    />
                    {errors.specialty && <div className="error-message">{errors.specialty}</div>}
                    <input
                        type="text"
                        name="level"
                        placeholder="Academic Level"
                        value={formData.level}
                        onChange={handleChange}
                    />
                    {errors.level && <div className="error-message">{errors.level}</div>}
                    <input
                        type="text"
                        name="matriculationNumber"
                        placeholder="Matriculation Number"
                        value={formData.matriculationNumber}
                        onChange={handleChange}
                    />
                    {errors.matriculationNumber && <div className="error-message">{errors.matriculationNumber}</div>}
                </div>

                <div className="section">
                    <h3 className="social">Social Media</h3>
                    <input
                        type="text"
                        name="socialMedia"
                        placeholder="Add your social media accounts"
                        value={formData.socialMedia}
                        onChange={handleChange}
                    />
                </div>

                <div className="section">
                    <h3 className="experience">Experience</h3>
                    <textarea
                        name="experience"
                        placeholder="Tell us about your previous experiences"
                        value={formData.experience}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>

            <div className={`popup-message ${popupActive ? 'active' : ''}`}>
                <div className="popup-message-content">
                    <h3>{popupMessage}</h3>
                    <button className="close-btn" onClick={closePopup}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Join;
