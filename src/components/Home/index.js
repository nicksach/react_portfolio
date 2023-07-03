import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />
                I'm Nick Satriano.
                </h1>
                <h2>Software Developer / Python Enthusiast</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home