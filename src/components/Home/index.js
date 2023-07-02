import LogoTitle from '../../assets/images/logo-s.png'

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zome">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                Nick Satriano
                <br />
                Software Developer
                </h1>
                <h2></h2>
            </div>
        </div>
    );
}

export default Home