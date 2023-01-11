import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar-fixed'>
            <nav className='navbar-items'>
                <h1 className='navbar-logo'>RECIPES</h1> 
                <ul className='navbar-list'>
                    <NavLink to="/" end className={({isActive}) => isActive ? "nav-links actif" : "nav-links" }><li>HOME</li></NavLink>
                    <NavLink to="/liked" className={({isActive}) => isActive ? "nav-links actif" : "nav-links" }><li>LIKED</li></NavLink>
                </ul> 
                <div className='navbar-sm'>   
                    <a  href='https://www.facebook.com/' target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f social"></i></a>
                    <a  href='https://www.instagram.com/' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram social"></i></a>
                    <a  href='https://www.twitter.com/' target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter social"></i></a>
                </div>
            </nav>
           
        </div>
    );
};

export default Navbar;