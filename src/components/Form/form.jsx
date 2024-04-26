import { useState } from 'react';
import "./styles.css";

import { validateEmail } from '../../utils/helpers';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [result, setResult] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending....");
        const formData = new FormData(e.target);

        formData.append("access_key", "d77ee9ce-1e30-427c-bb12-b023a0fca26b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }


        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        alert(`Hello ${name}`);

        setName('');
        setMessage('');
        setEmail('');
    };

    return (
        <div className="container text-center">
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    required
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="E-mail"
                    required
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <span>{result}</span>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
