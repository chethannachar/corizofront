import "./in1.css";
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
function Home() {
    const nav=useNavigate();
    return (
    <div>
        <h1 className="h1">
        
          CRUD Application
        </h1>
        <div className="actions">
      <div className="action">
        <button className="b"onClick={()=>nav("/create")}>
          <FaPlus /> Create 
        </button >
        <p className="c1">Creates New Record</p>
      </div>
      <div className="action">
        <button className="b"onClick={()=>nav("/read")}>
          <FaEye /> Read
        </button>
        <p className="c2">View Records</p>
      </div>
      <div className="action">
        <button className="b"onClick={()=>nav("/update")}>
          <FaEdit /> Update
        </button>
        <p>Update Records</p>
      </div>
      <div className="action">
        <button className="b"onClick={()=>nav("/delete")}>
          <FaTrash /> Delete
        </button>
        <p>Delete Records</p>
      </div>
    </div>
    <p className="p1">Note:Select any one of the options to proceed </p>
    </div>
    );
  }
  export default Home;
  