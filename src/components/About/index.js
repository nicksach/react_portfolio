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
                I am a programmer with internship experience in Front-End development - though my true passion is for data. 
                I have been programming since my senior year of high school, and I'm proficient in Python, R, HTML, CSS, Java, C, and Javascript. 
                I recently graduated from Bucknell University, earning a Bachelor of Science degree in Computer Science.
                </p>
                    
                <p>
                I am actively seeking Python development opportunities, and I am most interested in applying my skills to data-oriented challenges. 
                I have educational experience performing data analysis and modeling with Pandas, Seaborn, Sci-Kit Learn, TensorFlow, and Keras.
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