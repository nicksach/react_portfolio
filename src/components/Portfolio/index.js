import './index.scss';
import Loader from 'react-loaders';
import ProjectItem from './projectItem';
import { projectList } from './projectList';

const Portfolio = () => {

    return (
        <>
        <div className='container portfolio-page'>
            <div className='text-zone'>
                <h1> Portfolio </h1>

                <p>
                Here are some of the projects that I've completed.
                </p>

            </div>

            <div className='projects'>
                <div className='projectList'>
                    {projectList.map((project, idx) => {
                        return (
                            <ProjectItem id={idx} name={project.name} image={project.image} />
                        );
                    })}
                </div>
            </div>

        </div>
        <Loader type='ball-clip-rotate-multiple' />
        </>
    );
}

export default Portfolio