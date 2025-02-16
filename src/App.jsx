import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delet";
import Proceed from "./proceed";
function App(){
  return(<div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/read" element={<Read/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
        <Route path="/delete" element={<Delete/>}></Route>
        <Route path="/proceed" element={<Proceed/>}></Route>

      </Routes>
    </Router>
  </div>);
}
export default App;