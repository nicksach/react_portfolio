import './index.scss';
import Loader from 'react-loaders';

const About = () => {
    return (
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                
                <h1>
                    About me
                </h1>

                <p>Paragraph 1

                </p>
                    
                <p>Paragraph 2

                </p>
                    
                <p>Paragraph 3

                </p>
                    
            </div>
        </div>
        <Loader type='pacman' />
    </>
    );
}

export default About