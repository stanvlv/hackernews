import './App.css';
import data from './hackernews.json'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import New from "./Components/New"
import Past from "./Components/Past"
import Comments from "./Components/Comments"
import Ask from "./Components/Ask"


function App() {
  let activeClassName = "activeNav";
  return (
    <div className="App">

<Navbar bg="primary" variant="dark">
     <Container>
       
       <nav className="me-auto" >
         <NavLink className="navbar-brand" to="">Hacker News</NavLink>
         <NavLink className={({ isActive }) => (isActive ? activeClassName : "nav")} to="/new" >new </NavLink>| 
         <NavLink className={({ isActive }) => (isActive ? activeClassName : "nav")} to="/past" >past  </NavLink>|
         <NavLink className={({ isActive }) => (isActive ? activeClassName : "nav")} to="/comments" >comments  </NavLink>|
         <NavLink className={({ isActive }) => (isActive ? activeClassName : "nav")} to="/ask" >ask </NavLink>
        
       </nav>
     </Container>

     </Navbar>
        <Routes>
            <Route path="" element={<Main/>} />
            <Route path="/new" element={<New/>} />
            <Route path="/past" element={<Past />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/ask" element={<Ask />} />
        </Routes>

    
      
    </div>
  );
}

export default App;
