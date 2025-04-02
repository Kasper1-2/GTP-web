import './Footer.css';
import sponsor1 from '../../assets/Drive_Club.png';
import sponsor2 from '../../assets/GULF.png';
import sponsor3 from '../../assets/LOGO_IMPERCAPA_FINAL.png';
import sponsor4 from '../../assets/Logo_Livery_Station_White.png';
import sponsor5 from '../../assets/Loltec.png';
import sponsor6 from '../../assets/SRF_Negativo.png';
import sponsor7 from '../../assets/Social_Human.png';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="sponsor-strip">
            <div className="sponsor-track">
              {/* Replace src paths with your sponsor logo paths */}
              <img src={sponsor1} alt="Drive Club" />
          <img src={sponsor2} alt="Gulf" />
          <img src={sponsor3} alt="Impercapa" />
          <img src={sponsor4} alt="Livery Station" />
          <img src={sponsor5} alt="Loltec" />
          <img src={sponsor6} alt="SRF" />
          <img src={sponsor7} alt="Social Human" />
              {/* Duplicate logos for seamless looping */}
              <img src={sponsor1} alt="Drive Club (duplicate)" />
          <img src={sponsor2} alt="Gulf (duplicate)" />
          <img src={sponsor3} alt="Impercapa (duplicate)" />
        </div>
      </div>

        <p className="footer-disclaimer">
          © {new Date().getFullYear()} Gran Turismo Panama. Built by Diego Cisneros.
        </p>
        </footer>
    );
};

export default Footer;
