import { Link } from 'react-router-dom';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />
                I'm Nick Satriano.
                </h1>
                <h2>Recent College Graduate / Software Developer / Python Enthusiast</h2>
                <Link to="/react_portfolio/about" className='flat-button'>ABOUT ME</Link>
                <Link to="/react_portfolio/portfolio" className='flat-button'>PORTFOLIO</Link>
            </div>
        </div>
        <Loader type='ball-clip-rotate-multiple'/>
        </>
    );
}

export default Home