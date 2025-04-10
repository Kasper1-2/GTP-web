import '../sections/AboutSection.css';
import aboutBg from '../../assets/porscheabout.png';

const AboutSection = () => {
  return (
    <section
      className="about-section"
      id="about"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-container">
        <div className="about-marker-wrap">
          <div className="about-marker" />
          <div className="about-text">
            <h2>About Gran Turismo Panama</h2>
            <p>
              Gran Turismo Panamá is a competitive sim racing team based in Panama, founded in 2012.
              We compete in national and international leagues across multiple platforms,
              and aim to bring professional-level racing to the virtual world.
            </p>
            <p>
              We’re passionate about performance, precision, and creating unforgettable sim experiences —
              whether it's on the track or at live events with our professional-grade simulators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
