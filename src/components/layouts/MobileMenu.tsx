import { FC } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import './MobileMenu.css';

type MobileMenuProps = {
  onClose: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="mobile-menu">
      <button className="close-btn" onClick={onClose}>
        <FaTimes />
      </button>

      <section className="menu-section">
        <h2>About</h2>
        <p>
          Equipo de Sim Racing
          <br />
          Localizado en Panamá
          <br />
          Servicios de alquiler de simuladores
        </p>
      </section>

      <section className="menu-section">
        <h2>Contacto</h2>
        <p>
          Email: granturismopanama@gmail.com
          <br />
          Teléfono: 507 xxxx-xxxx
        </p>
      </section>

      <div className="social-icons">
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaDiscord /></a>
      </div>
    </div>
  );
};

export default MobileMenu;
