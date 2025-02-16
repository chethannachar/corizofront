import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./delete.css";

function Delete() { 
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    const handleDelete = async (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        if (!name.trim()) {
            alert("Please enter a name to delete.");
            return;
        }

        setLoading(true); // Show loading state

        try {
            const response = await fetch("http://localhost:3000/delete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name })
            });

            const result = await response.json();
            alert(result.message); // Show success or error message

            setName(""); // Clear input after deleting
        } catch (error) {
            console.error("Error deleting row:", error);
            alert("Server error. Please try again.");
        } finally {
            setLoading(false); // Hide loading state
        }
    };

    return (
        <div>
            <h1>Delete</h1>
            <form onSubmit={handleDelete}>
                <input 
                    type="text" 
                    placeholder="Type Name  To Delete Entry" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Deleting..." : "Delete"}
                </button>
                <button onClick={()=>nav("/")}  >Home</button>

            </form>
        </div>
    );
}

export default Delete;
