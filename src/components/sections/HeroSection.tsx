import './HeroSection.css';
import bgImage from '../../assets/porsche-911-gt3-cup-2021-1-1607848157.png';

const HeroSection = () => {
    return (
        <section 
        className="hero"
        id="home"
        style={{
            backgroundImage: `url(${bgImage})`,
        }}
        >

        <div className="hero-overlay" />
        <div className="hero-content">
            <h1 className="hero-title">Gran Turismo Panama Gulf Sim Racing</h1>
            <p>
                Official performance team for Assetto Corsa Panama
            </p>
        </div>
        </section>
    );
};

export default HeroSection;