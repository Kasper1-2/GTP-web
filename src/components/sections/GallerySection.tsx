import { useState } from "react";
import "./GallerySection.css";

import img1 from "../../assets/Screenshot 2025-04-03 at 02.20.38.png";
import img2 from "../../assets/Screenshot 2025-04-03 at 02.21.01.png";
import img3 from "../../assets/Screenshot 2025-04-03 at 02.22.50.png";
import img4 from "../../assets/Screenshot 2025-04-03 at 02.23.01.png";
import img5 from "../../assets/Screenshot 2025-04-03 at 02.24.25.png";
import img6 from "../../assets/Screenshot_amr_v8_vantage_gt3_sprint_acc_actr_caffeinemachine_garage_19-2-125-18-41-30.png";
import img7 from "../../assets/Screenshot_amr_v8_vantage_gt3_sprint_acc_imola_20-2-125-14-35-54.png";
import img8 from "../../assets/Screenshot_mercedes_amg_gt4_imola_20-2-125-18-6-3.png";
import img9 from "../../assets/Screenshot_trr_gt3_bmw_m4_gt3_imola_20-2-125-17-32-56.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            ></button>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
