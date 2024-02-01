import '../App.css'
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/" >
                    <h1> Exams </h1>
                </Link>
            </div>
            <Link to="/" >
                <h1 className='left-wards'> Reports </h1>
            </Link>
        </header>
    )
}

export default NavBar;
