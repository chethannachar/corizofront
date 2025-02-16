import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./read.css";
function Read() {
   const [data, setData] = useState([]); // Store fetched data as an array
   const [error, setError] = useState("");
   const nav=useNavigate();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch("http://localhost:3000/read");
            const result = await response.json();

            if (result.success) {
               setData(result.data);
            } else {
               setError("You Have Not Entered Data Still.");
            }
         } catch (error) {
            console.error(error);
            setError("Failed to fetch data.");
         }
      };

      fetchData();
   }, []); // Runs only once when component mounts

   return (
      <div>
      <div className="read-container">
         <h1>Read</h1>
         {error && <p className="error">{error}</p>}
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Address</th>

               </tr>
            </thead>
            <tbody>
               {data.map((item, index) => (
                  <tr key={index}>
                     <td>{item.name}</td>
                     <td>{item.state}</td>
                     <td>{item.city}</td>
                     <td>{item.address}</td>
                  </tr>
               ))}
            </tbody>
         </table>
         </div>
         <button onClick={()=>nav("/")}className="b1">Home</button>
         <p>Note:The data above showcased is fetched from database</p>
      </div>
   );
}

export default Read;
