import {Link} from 'react-router-dom'
import '../style/navbar.css'

function NavBar(){
    return(
        <nav className='navbar'>
            <h1 className='logo'>To-Do App</h1>
            <ul className='navLinks'>
                <li> <Link to="/">List</Link> </li>
                <li> <Link to="/add">Add Task</Link> </li>
                
            </ul>
        </nav>
    )
}

export default NavBar