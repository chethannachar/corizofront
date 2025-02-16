import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./in2.css";
function Create() {
    const nav = useNavigate();
    const [name, setName] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false);

    // Validation functions
    const validateText = (input) => /^[A-Za-z\s]+$/.test(input);  // Allows only letters & spaces
    const validateText2 = (input) => /^[A-Za-z0-9\s\W]+$/.test(input); // Allows numbers & symbols

    const handle = async (e) => {
        e.preventDefault();

        // Store entered values in an array
        const values = [name, state, city, address];

        // Check for duplicate values
        const uniqueValues = new Set(values);
        if (uniqueValues.size !== values.length) {
            setError("Fields must have unique values!");
            return;
        }

        // Validate inputs
        if (!name || !state || !city || !address) {
            setError("All fields are required!");
            return;
        }
        if (!validateText(name)) {
            setError("Name should contain only letters and spaces!");
            return;
        }
        if (!validateText(state)) {
            setError("State should contain only letters and spaces!");
            return;
        }
        if (!validateText(city)) {
            setError("City should contain only letters and spaces!");
            return;
        }
        if (!validateText2(address)) {
            setError("Address should contain only letters, numbers, and symbols!");
            return;
        }

        setError(""); // Clear any previous error
        setLoading(true); // Show loading state

        try {
            const response = await fetch("http://localhost:3000/create", {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify({ name, state, city, address }),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Data inserted successfully!"); // ✅ Show alert message
                setName("");
                setState("");
                setCity("");
                setAddress("");
            } else {
                setError(result.message || "Error inserting data");
            }
        } catch (error) {
            console.log(error);
            setError("Server error. Please try again later.");
        } finally {
            setLoading(false); // Hide loading state
        }
    };

    return (
        <div >
            <h1 className="h1">Create</h1>

            <div className="unique">

                <form onSubmit={handle}  >
                    <input 
                        type="text" 
                        placeholder="Enter Your Name" 
                        onChange={(e) => setName(e.target.value)} 
                        spellCheck="false"
                        value={name} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Enter Your State" 
                        onChange={(e) => setState(e.target.value)} 
                        spellCheck="false"
                        value={state}  
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Enter Your City" 
                        onChange={(e) => setCity(e.target.value)} 
                        spellCheck="false"
                        value={city} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Enter Your Address" 
                        onChange={(e) => setAddress(e.target.value)}
                        spellCheck="false" 
                        value={address} 
                        required 
                    />

                    {error && <p className="error-message">{error}</p>}

                    <button className="button"type="submit" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    <h3>To Redirect To Home Page:</h3>
                    <button onClick={()=>nav("/")}className="b1">Home</button>
                    
                </form>
            </div>
            <p className="p">Note:Enter the data and click the button to store data into database</p>
        </div>
    );
}

export default Create;

