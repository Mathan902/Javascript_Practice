import {  Routes, Route } from "react-router-dom";
import Hello from "./Hello";
const Children = ()=>{
    return(
    <Routes>
        <Route path='/hello' element={<Hello/>}/>
    </Routes>
    );
}
export default Children;