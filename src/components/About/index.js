import './index.scss';
import Loader from 'react-loaders';
import Pdf from '../../assets/documents/Resume.pdf';
import Portrait from '../../assets/images/portrait.png';

const About = () => {
    return (
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                
                <h1>
                    About me
                </h1>
                    
                <p>
                I am a software developer with professional experience in front-end development. 
                I am actively seeking new opportunities, and I am most interested in applying my skills to roles related to software development, data science, and innovative problem solving. 
                I have educational/project experience in building web apps and performing data analysis and modeling with Pandas, Seaborn, Sci-Kit Learn, TensorFlow, and Keras.
                </p>
                    
                <p>
                Take a look at my resume&nbsp;
                    <a target='_blank' rel='noreferrer' href={Pdf}>here</a>
                , or check out some of my repositories on&nbsp;
                    <a target='_blank' rel='noreferrer' href="https://github.com/nicksach">Git</a>.
                </p>
                    
            </div>

            <div className='img-wrap'>
                <img src={Portrait} alt="portrait" />
            </div>
        </div>
        <Loader type='ball-clip-rotate-multiple' />
    </>
    );
}

export default About