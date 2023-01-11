import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';
import { Link } from "react-router-dom"


const Erreur = () => {
    return (
        <div>
            <Navbar />
            <div className="error">
                <h1 className="error-404">404</h1>
                <div className='error-text'><p>Page Not Found</p></div>
                <Link className='error-link' to= "/" >Home</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Erreur;