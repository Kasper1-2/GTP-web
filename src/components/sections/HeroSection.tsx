import './HeroSection.css';
import bgImage from '../../assets/porschehero.png';

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
            <h1 className="hero-title">Gran Turismo Panama Gulf Oil Sim Racing</h1>
            <p>
                Official performance team for Assetto Corsa Panama
            </p>
        </div>
        </section>
    );
};

export default HeroSection;