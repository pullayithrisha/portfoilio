import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to a server or API)
        console.log('Form Submitted:', formData);
        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    };

    const sectionStyle = {
        backgroundColor: '#000',
        color: '#FFD700',
        padding: '50px 0',
    };

    const titleStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '40px',
        textAlign: 'center',
    };

    const formStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#333',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#222',
        color: '#fff',
    };

    const buttonStyle = {
        backgroundColor: 'rgb(65, 129, 77)',
        color: '#fff',
        padding: '10px 20px',
        fontWeight:'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        width: '100%',
    };

    return (
        <section id="contact" style={sectionStyle}>
            <div className="container">
                <h2 style={titleStyle}>Contact Me</h2>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        style={inputStyle}
                    ></textarea>
                    <button type="submit" style={buttonStyle}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
